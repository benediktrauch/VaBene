import {Injectable} from '@angular/core';
import {Texture} from 'three';

/**
 *
 * Generated class for the DynamicTextureProvider provider.
 *
 * Tis Provider is capable of providing custom textures for AR-objects.
 * Those textures include Text, with line break,
 * Displaying images or clearing with a specified color.
 *
 * The function are mainly from: https://github.com/jeromeetienne/threex.dynamictexture
 *
 * These functions are modified by me:
 * drawTextCooked() --> adding automated linebreak,
 * drawImage() --> actually draw image to canvas.
 */
@Injectable()
export class DynamicTextureProvider {

  canvas: any;
  context: any;
  texture: any;

  constructor() {
    /**
     * public width: number, public height: number
     * create a dynamic texture with a underlying canvas
     *
     * @param {Number} width  width of the canvas
     * @param {Number} height height of the canvas
     */
    let canvas = document.createElement('canvas');
    canvas.width = 512;
    canvas.height = 256 ;
    this.canvas = canvas;

    this.context = canvas.getContext('2d');

    this.texture = new Texture(canvas);

  }


  /**
   * clear the canvas
   *
   * @param  {String*}          fillStyle - the fillStyle to clear with, if not provided, fallback on .clearRect
   * @return {DynamicTexture}   the object itself, for chained texture
   */
  clear(fillStyle) {
    // depends on fillStyle
    if (fillStyle !== undefined) {
      this.context.fillStyle = fillStyle
      this.context.fillRect(0, 0, this.canvas.width, this.canvas.height)
    } else {
      this.context.clearRect(0, 0, this.canvas.width, this.canvas.height)
    }
    // make the texture as .needsUpdate
    this.texture.needsUpdate = true;
    // for chained API
    return this;
  }

  /**
   * draw text
   *
   * @param  {String}       text  - the text to display
   * @param  {Number|undefined}  x  - if provided, it is the x where to draw, if not, the text is centered
   * @param  {Number}       y  - the y where to draw the text
   * @param  {String*}      fillStyle - the fillStyle to clear with, if not provided, fallback on .clearRect
   * @param  {String*}      contextFont - the font to use
   * @return {DynamicTexture}  - the object itself, for chained texture
   */
  drawText(text, x, y, fillStyle, contextFont?) {
    // set font if needed
    if (contextFont !== undefined) this.context.font = contextFont;
    // if x isnt provided
    if (x === undefined || x === null) {
      let textSize = this.context.measureText(text);
      x = (this.canvas.width - textSize.width);
    }
    // actually draw the text
    this.context.fillStyle = fillStyle;
    this.context.fillText(text, x, y);
    // make the texture as .needsUpdate
    this.texture.needsUpdate = true;
    // for chained API
    return this;
  };


  /**
   * draw text with proper line break
   *
   * @param  [
   *         {String}    text  - the text to display
   *         {Number*}  margin  - margin to the edges
   *         {Number*}  lineHeight  - height of Line
   *         {String*}  align - align of text ( center, left, right )
   *         {String*}  fillStyle - the fillStyle to color the leters
   *         {String*}  font - the font to use ( (0.1*512)+"px Arial" ) default Skranji
   *         ]
   * @return {DynamicTexture}  - the object itself, for chained texture
   */
  //19:13 Uhr, Hohenschönhausen, Zingster Str.;19:13 Uhr, Ringbahn S41 ⟳;19:15 Uhr, Ringbahn S42 ⟲;19:15 Uhr, Falkenberg;19:15 Uhr, S Hackescher Markt;19:17 Uhr, S Birkenwerder;19:18 Uhr, Ringbahn S41 ⟳;19:19 Uhr, Hohenschönhausen, Zingster Str.;19:19 Uhr, Ringbahn S42 ⟲;19:19 Uhr, S Hackescher Markt;19:21 Uhr, S Grünau;19:22 Uhr, Falkenberg;19:23 Uhr, Ringbahn S41 ⟳;19:24 Uhr, S Hackescher Markt;

  drawTextCooked(options) {
    let context = this.context;
    let canvas = this.canvas;
    options = options || {};
    let text = options.text;
    console.log(text);
    let params = {
      margin: options.margin !== undefined ? options.margin : 0.05,
      lineHeight: options.lineHeight !== undefined ? options.lineHeight : 0.1,
      align: options.align !== undefined ? options.align : 'center',
      fillStyle: options.fillStyle !== undefined ? options.fillStyle : 'black',
      font: options.font !== undefined ? options.font : (0.1 * 512) + "px Skranji",
    };
    // sanity check
    console.assert(typeof(text) === 'string');

    context.save();

    context.fillStyle = params.fillStyle;
    context.font = params.font;

    let y = (params.lineHeight + params.margin) * canvas.height;
    while (text.length > 0) {
      // compute the text for specifically this line
      //let maxText = computeMaxTextLength(text);
      let maxText = text.substring(0, text.indexOf(';'));

      console.log(maxText);

      // update the remaining text
      //text = text.substr(maxText.length);
      text = text.substr(text.indexOf(';')+1);
      console.log(text);


      // compute x based on params.align
      let textSize = context.measureText(maxText);
      let x;
      if (params.align === 'left') {
        x = params.margin * canvas.width
      } else if (params.align === 'right') {
        x = (1 - params.margin) * canvas.width - textSize.width
      } else if (params.align === 'center') {
        x = (canvas.width - textSize.width) / 2;
      } else console.assert(false);

      // actually draw the text at the proper position
      this.context.fillText(maxText, x, y);


      // goto the next line
      y += params.lineHeight * canvas.height
    }
    context.restore();

    // make the texture as .needsUpdate
    this.texture.needsUpdate = true;
    // for chained API
    return this;

    function computeMaxTextLength(text) {
      let maxText = '';
      let maxWidth = (1 - params.margin * 2) * canvas.width;
      while (maxText.length !== text.length) {
        let textSize = context.measureText(maxText);
        if (textSize.width > maxWidth) break;
        maxText += text.substr(maxText.length, 1)
      }
      console.log(maxText);
      // Code um Zeilenumbruch zu gewährleisten!
      let fitText = '';
      if (context.measureText(maxText).width > maxWidth) {
        while (fitText.length !== maxText.lastIndexOf("⇒ ")) {
          fitText += maxText.substr(fitText.length, 1);
        }
        console.log(fitText);
        return fitText
      }

      //return text.substring(0, text.indexOf('⇒'));


      return maxText
    }
  }

  /**
   * execute the drawImage on the internal context
   * @param {String}  source - image source
   */
  drawImage(source) {
    // call the drawImage
    let img = new Image();
    img.src = source; // 'assets/imgs/Blume_ (1).JPG'

    img.onload = () => {
      this.context.drawImage(img, 0, 0, 600, 600);
    };
    //this.context.drawImage.apply(this.context, arguments);
    // make the texture as .needsUpdate
    this.texture.needsUpdate = true;
    // for chained API
    return this;
  }
}
