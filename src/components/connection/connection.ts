import {Component, Input} from '@angular/core';

/**
 * Generated class for the ConnectionComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'connection',
  templateUrl: 'connection.html'
})
export class ConnectionComponent {

  @Input() details: boolean;

  text: string;

  connection: any;

  constructor() {
    console.log('Hello ConnectionComponent Component');
    this.text = 'Hello World';
  }

  getMyTime(number: number){
    let timeStamp = new Date();
    timeStamp.setTime(number * 1000);
    let myTime = timeStamp.toLocaleTimeString();
    return myTime;
  }
  getTravelTime(number: number){
    let timeStamp = new Date();
    let myTime: string;
    timeStamp.setTime((number - 3600) * 1000);
    // let myTime = timeStamp.toLocaleTimeString();
    if(timeStamp.getHours() > 0){
      myTime = timeStamp.getHours().toString() + " Stunden";
    }
    if(timeStamp.getMinutes() > 0){
      if(timeStamp.getHours() > 0) {
        myTime += " und " + timeStamp.getMinutes().toString() + " Minuten";
      } else {
        myTime = timeStamp.getMinutes().toString() + " Minuten";
      }
    }
    return myTime;
  }

  getMyDate(number: number){
    let timeStamp = new Date();
    timeStamp.setTime(number * 1000);
    let myTime = timeStamp.toLocaleString();
    return myTime;
  }


  ngOnInit(): void {
    this.connection = {
      "geocoded_waypoints": [
        {
          "geocoder_status": "OK",
          "place_id": "ChIJre0z7dbruEcRkqhVgLtzwcY",
          "types": [
            "premise"
          ]
        },
        {
          "geocoder_status": "OK",
          "place_id": "EjhCcmF1YmFjaHN0cmHDn2UgNDEsIDYwMzExIEZyYW5rZnVydCBhbSBNYWluLCBEZXV0c2NobGFuZA",
          "types": [
            "street_address"
          ]
        }
      ],
      "routes": [
        {
          "bounds": {
            "northeast": {
              "lat": 51.527587,
              "lng": 8.682125299999999
            },
            "southwest": {
              "lat": 50.0269229,
              "lng": 6.772749
            }
          },
          "copyrights": "Map data ©2018 GeoBasis-DE/BKG (©2009), Google",
          "legs": [
            {
              "arrival_time": {
                "text": "6:30pm",
                "time_zone": "Europe/Berlin",
                "value": 1526056226
              },
              "departure_time": {
                "text": "3:00pm",
                "time_zone": "Europe/Berlin",
                "value": 1526043619
              },
              "distance": {
                "text": "262 km",
                "value": 262310
              },
              "duration": {
                "text": "3 hours 30 mins",
                "value": 12607
              },
              "end_address": "Braubachstraße 41, 60311 Frankfurt am Main, Germany",
              "end_location": {
                "lat": 50.11092499999999,
                "lng": 8.682125299999999
              },
              "start_address": "Lützowstraße 5, 46236 Bottrop, Germany",
              "start_location": {
                "lat": 51.527587,
                "lng": 6.9264931
              },
              "steps": [
                {
                  "distance": {
                    "text": "0.8 km",
                    "value": 765
                  },
                  "duration": {
                    "text": "10 mins",
                    "value": 607
                  },
                  "end_location": {
                    "lat": 51.522631,
                    "lng": 6.92673
                  },
                  "html_instructions": "Walk to ZOB Berliner Platz",
                  "polyline": {
                    "points": "m~nyHqygi@b@e@LMh@o@lBoC?AfAcBT]NWDFFFJOFEJKJKFGDCFADAJ?H?L?d@GRGPEHCh@WRQfAgAJQTUPOJKJILGDCt@_@PxA`@fDD\\T|BDZDb@DZ@LFdAF`@@h@dAE"
                  },
                  "start_location": {
                    "lat": 51.527587,
                    "lng": 6.9264931
                  },
                  "steps": [
                    {
                      "distance": {
                        "text": "0.2 km",
                        "value": 222
                      },
                      "duration": {
                        "text": "3 mins",
                        "value": 175
                      },
                      "end_location": {
                        "lat": 51.5260252,
                        "lng": 6.928491699999999
                      },
                      "html_instructions": "Head <b>southeast</b> on <b>Hans-Sachs-Straße</b> toward <b>Lützowstraße</b>",
                      "polyline": {
                        "points": "m~nyHqygi@b@e@LMh@o@lBoC?AfAcBT]NW"
                      },
                      "start_location": {
                        "lat": 51.527587,
                        "lng": 6.9264931
                      },
                      "travel_mode": "WALKING"
                    },
                    {
                      "distance": {
                        "text": "9 m",
                        "value": 9
                      },
                      "duration": {
                        "text": "1 min",
                        "value": 12
                      },
                      "end_location": {
                        "lat": 51.5259638,
                        "lng": 6.928411
                      },
                      "html_instructions": "Turn <b>right</b> onto <b>Gladbecker Str.</b>",
                      "maneuver": "turn-right",
                      "polyline": {
                        "points": "utnyHafhi@DFFF"
                      },
                      "start_location": {
                        "lat": 51.5260252,
                        "lng": 6.928491699999999
                      },
                      "travel_mode": "WALKING"
                    },
                    {
                      "distance": {
                        "text": "0.3 km",
                        "value": 294
                      },
                      "duration": {
                        "text": "4 mins",
                        "value": 226
                      },
                      "end_location": {
                        "lat": 51.5235692,
                        "lng": 6.930030400000001
                      },
                      "html_instructions": "Turn <b>left</b> onto <b>Friedrich-Ebert-Straße</b>",
                      "maneuver": "turn-left",
                      "polyline": {
                        "points": "gtnyHqehi@JOFEJKJKFGDCFADAJ?H?L?d@GRGPEHCh@WRQfAgAJQTUPOJKJILGDCt@_@"
                      },
                      "start_location": {
                        "lat": 51.5259638,
                        "lng": 6.928411
                      },
                      "travel_mode": "WALKING"
                    },
                    {
                      "distance": {
                        "text": "0.2 km",
                        "value": 240
                      },
                      "duration": {
                        "text": "3 mins",
                        "value": 194
                      },
                      "end_location": {
                        "lat": 51.522631,
                        "lng": 6.92673
                      },
                      "html_instructions": "Turn <b>right</b> onto <b>Horster Str.</b><div style=\"font-size:0.9em\">Destination will be on the left</div>",
                      "maneuver": "turn-right",
                      "polyline": {
                        "points": "ienyHuohi@PxA`@fDD\\T|BDZDb@DZ@LFdAF`@@h@dAE"
                      },
                      "start_location": {
                        "lat": 51.5235692,
                        "lng": 6.930030400000001
                      },
                      "travel_mode": "WALKING"
                    }
                  ],
                  "travel_mode": "WALKING"
                },
                {
                  "distance": {
                    "text": "8.6 km",
                    "value": 8559
                  },
                  "duration": {
                    "text": "22 mins",
                    "value": 1320
                  },
                  "end_location": {
                    "lat": 51.473643,
                    "lng": 6.853993
                  },
                  "html_instructions": "Bus towards Bero-Zentrum",
                  "polyline": {
                    "points": "m_nyHa{gi@hEv\\jGhWxC~d@|ZrT~e@~^f^jr@dTv}@tCh\\e@`~@dcA_Tf]~E`Ttn@hk@vcA"
                  },
                  "start_location": {
                    "lat": 51.522631,
                    "lng": 6.92673
                  },
                  "transit_details": {
                    "arrival_stop": {
                      "location": {
                        "lat": 51.473643,
                        "lng": 6.853993
                      },
                      "name": "Hbf"
                    },
                    "arrival_time": {
                      "text": "3:32pm",
                      "time_zone": "Europe/Berlin",
                      "value": 1526045520
                    },
                    "departure_stop": {
                      "location": {
                        "lat": 51.522631,
                        "lng": 6.92673
                      },
                      "name": "ZOB Berliner Platz"
                    },
                    "departure_time": {
                      "text": "3:10pm",
                      "time_zone": "Europe/Berlin",
                      "value": 1526044200
                    },
                    "headsign": "Bero-Zentrum",
                    "line": {
                      "agencies": [
                        {
                          "name": "Vestische Straßenbahnen GmbH",
                          "phone": "011 49 2366 1860",
                          "url": "http://www.vestische.de/"
                        }
                      ],
                      "color": "#03a9f4",
                      "name": "Gelsenkirchen Buer Rathaus - Oberhausen Bero-Zentrum",
                      "short_name": "SB91",
                      "text_color": "#ffffff",
                      "vehicle": {
                        "icon": "//maps.gstatic.com/mapfiles/transit/iw2/6/bus2.png",
                        "name": "Bus",
                        "type": "BUS"
                      }
                    },
                    "num_stops": 13
                  },
                  "travel_mode": "TRANSIT"
                },
                {
                  "distance": {
                    "text": "68 m",
                    "value": 68
                  },
                  "duration": {
                    "text": "1 min",
                    "value": 48
                  },
                  "end_location": {
                    "lat": 51.47461999999999,
                    "lng": 6.8521157
                  },
                  "html_instructions": "Walk to Oberhausen Hbf",
                  "polyline": {
                    "points": "gmdyHmtyh@?AHHt@dAO^EFCJiFrF"
                  },
                  "start_location": {
                    "lat": 51.473643,
                    "lng": 6.853993
                  },
                  "steps": [
                    {
                      "distance": {
                        "text": "45 m",
                        "value": 45
                      },
                      "duration": {
                        "text": "1 min",
                        "value": 32
                      },
                      "end_location": {
                        "lat": 51.4733201,
                        "lng": 6.853601899999999
                      },
                      "html_instructions": "Head <b>southwest</b> on <b>Schwartzstraße</b>/<b>Willy-Brandt-Platz</b> toward <b>Poststraße</b>",
                      "polyline": {
                        "points": "gmdyHmtyh@?AHHt@dA"
                      },
                      "start_location": {
                        "lat": 51.473643,
                        "lng": 6.853993
                      },
                      "travel_mode": "WALKING"
                    },
                    {
                      "distance": {
                        "text": "23 m",
                        "value": 23
                      },
                      "duration": {
                        "text": "1 min",
                        "value": 16
                      },
                      "end_location": {
                        "lat": 51.47461999999999,
                        "lng": 6.8521157
                      },
                      "html_instructions": "Turn <b>right</b> onto <b>Poststraße</b>",
                      "maneuver": "turn-right",
                      "polyline": {
                        "points": "gkdyH_ryh@O^EFCJiFrF"
                      },
                      "start_location": {
                        "lat": 51.4733201,
                        "lng": 6.853601899999999
                      },
                      "travel_mode": "WALKING"
                    }
                  ],
                  "travel_mode": "WALKING"
                },
                {
                  "distance": {
                    "text": "7.5 km",
                    "value": 7462
                  },
                  "duration": {
                    "text": "7 mins",
                    "value": 420
                  },
                  "end_location": {
                    "lat": 51.4296058,
                    "lng": 6.7770943
                  },
                  "html_instructions": "Train towards Düsseldorf Hbf",
                  "polyline": {
                    "points": "ksdyHwhyh@L_@\\^jApAhAzAxAnBh@p@RVdB|BX^t@~@bE|Ep@x@|CtDn@r@d@j@`@f@b@f@l@r@fBlBnCpCd@f@d@f@jApA`B~AhBfB|@|@`@b@`@`@dBdB`EfExBjCpBdCdBrBpAbBvAdB`CrCfAlAx@bAvAzA|AfBPRLNLLd@j@p@t@xAdBbApAbB`CpApBd@x@j@bArAjClAjCHRBHDFXr@dAnCv@|BxAzEfAdEHZBF@HDPdA~D`BrGjArEh@xBhBhHBFBHLh@`@vA^pA\\`ARl@Tl@x@nBZr@Xl@HNHNFLRXx@zA`DjFNVLTp@fAl@fA^p@HNZn@Zn@Zp@L\\DHRd@Rf@Rf@Pf@DLXz@BDBLPj@HVDN?BNl@Lb@@BFXLb@R~@BHBJ@F`@rBLr@Jl@TlAF`@@HFTFRJp@^vB@DJp@\\bCDZ@F`@|Cl@bGTzBPnBXhC@FFp@Hj@Fn@PnAFj@v@lFDVBNBJNx@@JBHBLBLBLH\\J^H^H\\T|@Vz@Tz@J\\Vz@Xz@Vx@f@vAXx@|@dCBFJXN^?@bEhL@@?@DJDL@@?BdGrPDLDJL^xF|ODNFP@BbFnNz@`CXv@Pd@Rd@Rd@Rb@Tb@BF\\n@JRLPd@v@d@t@X`@X`@Z`@Z^d@h@NNj@n@\\\\^Z\\\\NJ\\X\\VLHNJl@`@r@b@VPhAZt@\\pAh@hAf@`Cv@zFlB@?"
                  },
                  "start_location": {
                    "lat": 51.47461999999999,
                    "lng": 6.8521157
                  },
                  "transit_details": {
                    "arrival_stop": {
                      "location": {
                        "lat": 51.4296058,
                        "lng": 6.7770943
                      },
                      "name": "Duisburg Hbf"
                    },
                    "arrival_time": {
                      "text": "3:50pm",
                      "time_zone": "Europe/Berlin",
                      "value": 1526046600
                    },
                    "departure_stop": {
                      "location": {
                        "lat": 51.47461999999999,
                        "lng": 6.8521157
                      },
                      "name": "Oberhausen Hbf"
                    },
                    "departure_time": {
                      "text": "3:43pm",
                      "time_zone": "Europe/Berlin",
                      "value": 1526046180
                    },
                    "headsign": "Düsseldorf Hbf",
                    "line": {
                      "agencies": [
                        {
                          "name": "eurobahn",
                          "url": "http://twn.keolis.de/"
                        }
                      ],
                      "short_name": "RE3",
                      "vehicle": {
                        "icon": "//maps.gstatic.com/mapfiles/transit/iw2/6/rail2.png",
                        "name": "Train",
                        "type": "HEAVY_RAIL"
                      }
                    },
                    "num_stops": 1
                  },
                  "travel_mode": "TRANSIT"
                },
                {
                  "distance": {
                    "text": "84 m",
                    "value": 84
                  },
                  "duration": {
                    "text": "1 min",
                    "value": 78
                  },
                  "end_location": {
                    "lat": 51.429785,
                    "lng": 6.775903
                  },
                  "html_instructions": "Walk to Duisburg Hbf",
                  "polyline": {
                    "points": "az{xHysjh@a@lF"
                  },
                  "start_location": {
                    "lat": 51.4296058,
                    "lng": 6.7770943
                  },
                  "steps": [
                    {
                      "distance": {
                        "text": "84 m",
                        "value": 84
                      },
                      "duration": {
                        "text": "1 min",
                        "value": 78
                      },
                      "end_location": {
                        "lat": 51.429785,
                        "lng": 6.775903
                      },
                      "polyline": {
                        "points": "az{xHysjh@a@lF"
                      },
                      "start_location": {
                        "lat": 51.4296058,
                        "lng": 6.7770943
                      },
                      "travel_mode": "WALKING"
                    }
                  ],
                  "travel_mode": "WALKING"
                },
                {
                  "distance": {
                    "text": "63.6 km",
                    "value": 63624
                  },
                  "duration": {
                    "text": "52 mins",
                    "value": 3120
                  },
                  "end_location": {
                    "lat": 50.94303,
                    "lng": 6.958729
                  },
                  "html_instructions": "Long distance train towards Stuttgart Hbf",
                  "polyline": {
                    "points": "c{{xHkljh@Di@DBD@B?p@Nh@LRD@?^DVDt@Hb@FNBb@FNBd@DdAHB?zALrBJ^@N?PB|AJtBNzAJ@?fCL|@D`@@dCBhB@fBEj@AZAr@CxAEx@EL?RAj@?h@CR?\\AT?`@@x@BX?R@B?NB^FB?j@JD@t@NH@VFLDFBb@Ph@TfAd@`@L~@d@x@VXHFDBBHDJF?@n@GTCDBLFzAt@vC`B?@@?LHNHfAd@VL^NXJTFp@Rr@RVFNBTDf@Fb@FVBL@J@L?P@P@L?H?f@B^?F?`@?`@Ab@ANA^C|@ERA^Cp@IlAMpI{@bAILADA|BSHAZCZANAJA`Ks@nAKjCOvGe@NALAH?jKy@tGg@nHg@nJq@lHg@bMo@@?B?@?HAL?B?DAfJk@pG[bCMJ?fBKdAE|G]B?BAJ?LALANAB?HAzBOv@GfAC^C|@E`AGf@EjAIxAK~AM~AKfE]r@Gn@Ex@Gn@E`@Cj@Er@Gp@Ez@G|@Gx@Ev@Gh@Cb@DrBOB?r@GdAGpAInBOfCQvBOF?PAFAf@Cb@C`AIXA`AGj@Ct@EXAt@C\\CZAj@Cb@Ad@ALAt@Ax@Cr@Af@AnAChAC|@AbAEd@Af@Aj@Cx@CB?FAP?b@CpAGbCMTCbAGj@Cp@Ep@GxAIp@GF?zBOPAnBOd@Ed@EPCzLu@pYkBpGc@D?^CJAF?JAF?pHg@dQiAzDQfIi@`CO|Gc@dCQbQgAdV{Ab@EB?jBMTA|QqAvCUdFUtIm@fTuA~AIbFW^CZCvPiAlJo@rKq@pBOnBMnBQtAMjD]lBS@?RC~@KvAOzMmAtFa@pJg@|GYvIW~DOvACvAGdBGjBKzAIhBMjEY|N_A|N_ArFe@lBO`BOhBMbCMjBM|OeAbDUf@E~BSrBQ|AOlBSjBQdBQjBQzAOdAKzAMhBOhBOjBKhBKfBIjBG`ACdAA`DKpEOH@lYeBxHi@v@EpE[^C\\E^GHALCNCL?DCxB]hASn@KbEu@hHuAVGZEdB]bASlDq@vEy@~@Q|Dw@~@Q|@O~@M|@M|@I~@IvCS`Ku@lCSVCLALAXC|BSbCSx@ID?^E^G^GHAxBa@lAWzFoAdE_A|Cq@jHiBj@O`@KhEmALCFCFAJEHCv@U|Aa@d@MpA[n@O`@Il@Mn@KlAOf@GLAn@Gn@Cn@Cl@Cn@AfACdAAb@?dA?L?`@@`A@`ABbDJP?B?@?F@B?@?@?V@f@@h@?t@?t@?r@Ab@Ab@Cr@ET?VA|BEl@Cl@CdAEbAIp@Ep@Ip@GHADAv@Mx@Mv@Ov@Ov@Qb@KjCo@rA[x@QfBe@vAc@l@Sl@SfA]d@Q^MLCLGFALEJCNELCLALCLALAL?LAZ?P?v@Db@FTBTFRDTHTHf@XRLd@\\JJLLTRj@j@`@`@t@p@tAtAv@t@PPXVZVRNHFVNnAt@RNTNRNRPRPHHNPXZ^d@hChDJJdAvA`FpGjBxBt@~@\\^~@|@b@ZB@f@\\v@b@RF@@f@PNDNDrAVbAHzA@~CBJ?J?x@GN?`@@b@?f@AHAF?JAXCXEPCTGTGj@MZODALGNI@AbAy@p@s@Z[p@aAb@s@N[JUj@oAd@wA@Ed@cB@EPy@Ly@BODYD[D[D[B[B_@Dk@Dm@@_@Bw@BeA?MFuCNqH@G?E?M?M?AN{GHaF^iRd@mR?M@U?O?K@I?O@YDiBR}INmGBsAFyBHwD@a@By@Bq@Bs@?KDiAFiABc@Dw@Dw@Fu@BQFy@J{@Hy@BQJu@Hs@Ju@Ls@Js@RgA\\kBNs@Jc@Pu@Rs@Ja@V}@X}@V{@HSTq@Vs@Vq@FOZs@Xs@Zq@HOhAcCpBcETe@bAwBhA{Bn@qApEkJ^w@d@_ARa@d@_AFOHOFMxPu]h@iA`AsBfA{BBEJQHQDKtDwH|L_WHSJQjGmMpGwMBGFKLWfE{IJQ?CHMJULWN]@CjCoFLY\\o@\\o@l@gA^m@DKv@qAVc@p@gABGj@y@h@{@`AwAz@mAn@}@JOl@u@|@iAl@u@p@{@d@i@X[LMlAqAbA_AfYuWFEPSNMDEXWrAgArCgCf@c@jL{JtBiB~AyAj@i@BCfC_CnIgIdLkLXYJKJKJItF{FjCiCHIPOLODEnGsGvFsFdAgA\\YdEcE`MuLjBkB@A^_@X[RSFGDEFGhAkAhCmCnI{IfIoIPQDGPQBCTUtAuAfDeDVWPSXYJKRQNQPOTWXW~^{^LMNOPQHIpTqTtEwE~@_Aj@i@b@e@dAeA`AaAt@u@`@a@Z[bAaAdAeA~@_Aj@k@fAeAh@g@BC|@{@zP}PHGHI|B}BpAqAtBuBnAoAbAcAxAyAhCiCn@q@PQ`A_AlImIxA{Aj@k@d@e@nAmAf@i@fBgBrEqEtEsElGmGr`@u`@zA{AfGcGrCqCrBwBdEgEjEiEfLiLhLgLdDkDxC{CbJuIvA{ApKmKd@c@d@c@f@a@x@q@RQn@g@ZURObAs@tAaAh@]b@[b@Yp@a@x@c@d@WpBgAJGlCyAfCoAp@]xAu@hCoAz@c@fJ{ErGeD|BkAVMRM`MqGr@a@~@e@vBgAJGd@UZOb@UJGz@c@@A|BkAzJgFpd@gVNIf@Wf@WpE_CrDmBtDkBfDeBxBiA|FyCtE_CzFyC`FgCVM~BsAtBiA\\QHGf@WDC`Ag@XYbBaA|AaAt@i@bBmAVUXU^]bAaAl@k@d@e@d@g@X[V[V[b@i@l@{@JMl@}@b@o@`@o@\\i@Zi@Zk@HM\\q@Rc@PYVg@l@kAr@}A~GmPhAsCxHeRxAqDRe@Tk@Tm@lGqPBEHU@C`@cABI@CtBmFh@sAh@qAx@mBv@cBVk@d@cAf@aARa@j@eA`@s@^q@PYzBiDBGNSHMJMHK\\a@h@m@^a@`AgAb@e@XW\\]l@i@n@k@^Y@Ab@]TQ`@Y~@m@ZSXO`@UXO\\ODCFEHGHCPIn@[TK`@Or@WhA_@^Mp@S^Kp@QB?r@OhAUPE`BU@?LAHANCHAhC_@~@OF?JCLC`G{@nSyChB[LCHAJCLALCDAz@O`Dg@hCi@b@GNALCNCLCJARG@?FC\\GhB]|@OTC`@IPCZEv@Mb@G|@Q|Ds@JCNCbAONC^ELCBA|Ca@rBYdGeAxB_@lAS`AOxBYj@Ih@KHAFALAzCe@JAJAXGjE{@tFy@fGaAdAQNEPClCe@nEw@`Dk@`IoAzEu@|B_@tB[LCLEb@GpGcAtCc@lIqAbAOjAQRCRE@?xCg@tCc@pCc@lDk@dDi@~Dm@|B_@`Ca@jCa@tCc@xCe@xCe@dDi@rDk@|F_AdEo@pEs@`Dg@xCe@zCg@zCe@lCc@|Cg@jCa@`Dg@vCc@B?n@IvAQtBUlBQzAQfAQn@Q`@Ih@Mf@Ol@Sr@[n@[b@Wn@a@^WJGTSzBuB\\a@^e@dAuAl@{@`AwAdBcCj@y@bB_CTUV[FGT[V_@T[Ze@V_@Zc@RW\\g@T]X_@Va@RYT[DELQNWTYPYPW@ATYPYRYRWVa@T[T[\\g@RWV[RYTWRYV[^c@\\_@^c@hAmAt@y@XYb@e@l@k@\\]^]Z[\\[^]l@k@BCLKLMNMf@e@\\[`@_@XUXW^_@h@c@h@g@VWb@_@ZYZYZYTQPQVS|@s@RMXSVSLIHG^W@?n@e@d@YTOPMXQRKNIVMZM\\Mb@Ob@MZITGFAZKfD}@ZGn@QVIREVGJAFAVE\\CRAPAR?N@N?b@B^DXFNBXHRDLFPFNFPHZPPJTPNJHHNL^\\t@x@HJPRHJHHNN^\\PNRR^VPJl@^XNXLPHNHNHfAj@v@^d@T\\RZNVNVNRL`@XTNTNRPNL\\XZZd@d@f@h@ZZ\\^d@b@d@d@`@^NJB@HJVPZV|@p@p@b@vBvA~AdA|@l@`An@f@\\b@ZLJ`@XRNNJHH\\Zj@h@b@d@Z\\VVRRNPTXLNLNJJ\\h@RZPXJRFLHPHNFPHRHTFRHRFRFTDTFTBRDRDRBTBRDT@RBTBT@RBR@RDh@D~@F|@@RBf@F|@HnAFt@Dx@PzBDj@?JBXF`APfBDZ@H@PDPBRF`@H`@Nr@^bBPz@DNFXJh@TbA`@fBPv@Jb@V~@Nf@Tn@LZVl@Th@j@bAVb@TZNRV\\X\\LLHHBBb@`@PPf@^jCrBxAhAPLXRPNNLtHfGvDtCtBtBXXHHHHJJLNNNNLBBvA|AnAdAZZVXV\\TXVZTZRZT\\R\\RZNVNVLVN\\Vh@Xl@Vj@Rf@Tn@Tp@Nb@Pj@Pl@Nh@Lb@VjANt@Nt@Lv@Lx@NfATbB@@Hp@r@xFr@xFDZBTB\\Fn@F~@BZ@P@R@P@T?P@P?~A?r@?`@Af@EbAEx@SdEa@vHWjFIpAGdAAZCZChAA`AC|@?JChAAbAEvC?l@?vACnA?DAl@?X?@AxACb@Cd@?t@?l@?ZAZ?vB?zDArI?|B?pDAzB?R?ZA^?\\AF?FEh@CVAHAJCJGb@I`@CNK`@Qh@K\\Sb@Yf@OTU\\WZOPKLIHEDA@ABy@x@w@z@l@jB"
                  },
                  "start_location": {
                    "lat": 51.429785,
                    "lng": 6.775903
                  },
                  "transit_details": {
                    "arrival_stop": {
                      "location": {
                        "lat": 50.94303,
                        "lng": 6.958729
                      },
                      "name": "Cologne Central Station"
                    },
                    "arrival_time": {
                      "text": "4:50pm",
                      "time_zone": "Europe/Berlin",
                      "value": 1526050200
                    },
                    "departure_stop": {
                      "location": {
                        "lat": 51.429785,
                        "lng": 6.775903
                      },
                      "name": "Duisburg Hbf"
                    },
                    "departure_time": {
                      "text": "3:58pm",
                      "time_zone": "Europe/Berlin",
                      "value": 1526047080
                    },
                    "headsign": "Stuttgart Hbf",
                    "line": {
                      "agencies": [
                        {
                          "name": "Deutsche Bahn AG",
                          "url": "http://www.bahn.com/en/view/index.shtml"
                        }
                      ],
                      "short_name": "IC",
                      "vehicle": {
                        "icon": "//maps.gstatic.com/mapfiles/transit/iw2/6/rail2.png",
                        "name": "Long distance train"
                      }
                    },
                    "num_stops": 2
                  },
                  "travel_mode": "TRANSIT"
                },
                {
                  "distance": {
                    "text": "1 m",
                    "value": 0
                  },
                  "duration": {
                    "text": "1 min",
                    "value": 0
                  },
                  "end_location": {
                    "lat": 50.94303,
                    "lng": 6.958729
                  },
                  "html_instructions": "Walk to Cologne Central Station",
                  "polyline": {
                    "points": "}x|uHacni@"
                  },
                  "start_location": {
                    "lat": 50.94303,
                    "lng": 6.958729
                  },
                  "steps": [
                    {
                      "distance": {
                        "text": "1 m",
                        "value": 0
                      },
                      "duration": {
                        "text": "1 min",
                        "value": 0
                      },
                      "end_location": {
                        "lat": 50.94303,
                        "lng": 6.958729
                      },
                      "polyline": {
                        "points": "}x|uHacni@"
                      },
                      "start_location": {
                        "lat": 50.94303,
                        "lng": 6.958729
                      },
                      "travel_mode": "WALKING"
                    }
                  ],
                  "travel_mode": "WALKING"
                },
                {
                  "distance": {
                    "text": "168 km",
                    "value": 168242
                  },
                  "duration": {
                    "text": "54 mins",
                    "value": 3240
                  },
                  "end_location": {
                    "lat": 50.05316699999999,
                    "lng": 8.570185
                  },
                  "html_instructions": "High speed train towards Basel SBB",
                  "polyline": {
                    "points": "}x|uHacni@?Ap@s@|@cAHKPUFKNQDIBCT_@JSJONYL[FQHWH[Ji@Jq@Dq@D_A@Q@a@@MDk@@W@Q@S?Q?Q?M?G?S?E?aB?iI@kJ?{G@y@?iA?m@Ao@?QAu@AS?CAgA?EBoAFcA?W@e@DaABu@Dg@FoAFqABe@FcABe@JiBB]Ba@HcBXsFFmAJwAJeAL}ANqBJqAHoA@K@O?I@M@YBUNcC\\iGXuDh@sHZgF@M@GHwA?IBU?E?GBQBe@@SFeA@IFs@Fs@Da@Da@Fa@F_@Fa@Jo@DOJi@Li@Li@BMTw@Le@Tq@Ja@~B_IfCgIJ[DK@CDOFSh@eB`A_Dd@uAhDkKPk@BGBMHUBInAeEvB}G@E`@kAPc@J]L[p@eBd@oA`CqGXy@dAeDDMxJa\\xBqHz@oCd@{AHWZyAl@oBpA_EHSFSb@qAN_@L_@jA{CHSHSdB}DJS`@}@`AqBh@iAdAwBl@oA|@kBnAkCn@oA@Cl@kAn@qAt@}AR_@n@mA\\q@f@kA@En@oATc@Xg@t@}At@{Av@aB^u@\\q@Zm@xBgExBcE`LaTZk@Ta@LQFKLUJQJOBGBCXg@r@yANSHOXm@hAuBtB}D^q@l@kAvCuF\\o@~F}KpI{Oj@kAfC_FhBqCbBgCrB_DzAsC\\e@|AqB^e@NQLQLQRUX_@~F_HlHgHv@s@dDoCTQXUdBwAXSlBsAlCcB|CgB`DeBxC{AnBeAfBkApBiAvCyAhDaBdCqAZOVONGxBgApBw@hIyChB}@bEmBdCsA~Aw@~@c@p@]rHqDzAw@VK@AhIaENIzBkApBoAtAw@TMRMDADCRKXMlDcBpCqAh@Y~Aw@d@Ud@Ud@U^Sd@S^Qb@S`@Q^QPIRIZM\\OZOJGVKd@Sj@Y^Q^Q^S\\QZOXM\\Q\\QZO\\Q`@S\\Q^Q`@S\\QXO`@S`@S\\Q`@Sb@S`@SXOZO\\Q\\Q\\OZQ^Q\\QTMXM\\Qb@Ud@U\\Qb@S`@S\\Q\\Q\\QVMTK\\SZM\\SXMb@U\\OZQXMZO\\Q`@S^S\\QZO^Q`@S`@Sb@U`@Qb@U^SZOb@Sd@Wb@Sb@Uh@Wn@[f@WJGPIPIPIh@Yn@[b@Uh@Wh@Wd@Wb@S`@S`@Sh@Wh@Wj@[n@[l@Yh@Wj@Yj@[n@Yl@[n@[n@[j@Yj@Yh@Wv@_@l@[ZUv@e@HEh@]HEd@Ud@Ud@WlHoDb@Sd@Q\\Mj@UPGrAo@nCsAh@YPM@?TMTO^Ud@YPMf@[\\W^Y^YXUROTQRQRQh@e@f@e@f@g@l@m@TWVWl@o@LOn@u@DEx@aAn@y@FItAeBrAgBrBmCt@aA~EsG\\c@h@q@tFkH\\e@`HcJJQpFaHpBiCV]rAeBv@eAdAuAHMJOLOJQJMJMr@_AdG}H`JqLfB}BzJsM~OaThUcZtFmHLSNQhAeB^k@b@s@\\g@P[z@uAl@aAnAsBLSPWjBgD|A}Ch@eAx@mB`CmGfCgIn@{BtCiLLg@Je@`DcOfDkOjIw_@|BoK^kADOrAgGh@_Cr@cD~AmHfCeLlB}ILk@BI`AqEpCkMrCgMlA}Fx@sDXwAX{Av@oD~@cE`AqE`AkEj@kCb@qB^kAJi@Li@BKx@yDj@oCr@aDx@uDv@mDfA}Ez@yD`AkEbAyEj@gCBMDOp@}Cz@{DhAaFZaBzAiHToAJc@BKp@mCXqAJc@FY@Gj@}B@CFY@GDOLq@\\wAh@mCh@}Bz@{D~@mEd@yBr@{Cx@sDx@{DlAoFr@_Dp@gD~@cEtAmG`@oBb@mBb@eBv@kCZaAt@sBHWdA_Ct@yBdA_CbAuBlAcCrAaChByChAeBtBaDPU~AuBfBiCb@q@`@m@Zi@JQJSFGvBkD~AiC?ApAqBz@wAdBqC~@wA~@sA^s@BC^i@HEDIDErA{BxBkDDGNYtA{BVa@hAiBhCeEdBqCl@aALQ`@o@r@gARYV_@vAsBBEjA}APWNSb@i@r@{@X[X]X[X]X[b@e@Z[|A}APQFEHIx@u@tA{@hA_AhA}@l@c@`@YTOJG~EuCpAo@TKx@a@RIXM\\Od@QLEHEd@QJELE`@O~@YFAVKlA[`E_AtCg@DA^G^GtHeA`@GfAQnGeAB?bB]j@MxA[vA[vA_@vA_@j@Oj@Ob@MnBk@t@Sr@Ut@Ur@Ut@UhBm@hBo@r@Wt@Yv@Yv@[t@[t@[v@[t@[t@]t@]v@_@hAi@n@]bB{@FEBA^M@?BCbB{@dAk@@ArDsB`B}@zEoC|HiErBiAlIwEb@WJGFE~EoCnAs@tC_B|GwDZQrF}CnAs@pAq@RMxAw@zAw@XOXM|C{ApAi@BAx@]dAa@rBu@l@ULE|@YDC`AY`AW`AWbAW`ASlAW`Cg@r@MHCb@It@KrASfCWpAOt@Gb@ChAIfAGhAEfAEd@AhAAjAAnBApB?rD?hC@N?tCB~EDbJHdJJvDBF?J?B?lBBf@?hBAhBAfAAfACfAEfAEH?~@EhAEhAE`AG`AIzFo@`MsCRGRGjBk@fA]|@[jAc@LEjAe@v@]x@]x@_@x@_@v@a@x@c@x@a@n@_@bAk@bAk@`Ao@`@W`@W`@W^Y`Aq@ZUt@k@t@m@~@w@j@c@|@w@|@w@|@w@|@{@|@y@BEp@q@p@s@p@s@n@u@n@u@p@u@z@cAx@eAx@eAZa@Zc@\\c@Zc@j@{@t@iAJMl@_Az@wAl@aA~@_B`AaB^o@`AeBXk@~@aBx@_B@E|@aBTa@R_@DKTc@dBgDJUDGLYbAmBj@gAz@aBz@aB|@_B|@_B|@_Bt@qAd@u@n@eAn@aA`AyADEFKJOn@}@^g@|@kAZe@VYn@{@nA}Ab@g@j@s@l@q@bAiAdAiAb@e@lAmAlAmAfBeBlAmAxGsG\\]~CyC~@}@pAoA@Ah@i@fEeEb@a@h@i@X]h@o@\\_@`CgCTUpCgCtQuPlCsC|EsFbAiA`EwEp@_AbCiDhA_Bz@uA|@uADIl@aAp@gAj@aAj@cAj@aAj@cAh@cA\\o@z@eBNYn@wAp@uAVk@BIDKx@kBfB_Ej@qAJYn@{AbAqCL]DOt@{Bd@qA@GDKj@iBZeAHYh@iBPo@Ty@Ps@b@eBb@eBn@iC\\wANq@H_@hAmE`A{DRw@BIv@cDFWDQtAoFp@oCFSl@cCV_A|@oDn@aCBK^wALc@^uAb@_BHW`@sA`@sANi@f@}Ah@}ARo@FQf@{Ah@}Ah@{ATk@Tm@Tm@Tk@j@wAlAyCn@yA^{@b@aAHOhB{DfA{B\\m@r@sAFMt@sAFGZm@BEPWJS`GgJLOBEJMrAmB~@oAh@u@TYZa@v@cAv@aAx@_Av@_A\\]z@_Az@_A|@}@z@{@|@{@v@u@pAkArAkAv@s@r@k@lBaBp@k@z@u@JIxCgCbByA^[vAmAFE|@y@jAeAjAeAhAgAXW`@a@~@_A~@_A^a@PQb@c@v@}@f@k@x@aADGTWp@y@n@y@~@mA|@mA|@oAr@aA|@sADGn@aAf@w@x@sALSFKhAqBn@kAp@sAr@sAr@qAp@wAn@uAj@qAlEyJrD{ILUVm@`@_APa@Vm@Xs@Rc@JWh@yA~@iC|@iCj@yAhAcD^iANm@LY|@mCJc@^uAPi@`@qA|AaFh@iBj@qBJc@hBwGh@iBzEiQt@sCJYD_@~@mDJYdAwDx@cDdA{DFUTy@t@mC~@mDv@qCt@mCLe@lAiE`B_G~@uDr@oCJ]Nk@FUtAeFNq@Ts@BMFU|@cDdBuGhBeH|AoFlBiHrBoH|AqF`BiG`B}FxAiFTy@FWTw@|@mDbBaGfAgEj@}BNk@DMT}@fAsELi@BIf@{B`AkEhAyFr@kDr@}DN{@xAuHhB{IRgAl@_Dt@eEBKr@qDjAeGfAcGz@kERgAf@yBd@aCt@qDtAmHp@aDTiATiAReATeARy@Pw@VgAVeAh@uBh@{BpAkFjAgEpBkGrAgE^mAbBiEBG`CaG|AuDj@oApAmC\\o@t@cBP[NS\\g@dAaBxBkDzBiDrB_DvBaDtAkBr@gAj@s@bB_Ct@aAr@}@j@w@BEzBeCHIdAeAtC{CtGyGj@m@bDoDhBsB`BkBnCcDX[pCwDzCgEnB{CLSnBmD|AkCP_@nDkGdCqErAkCLWVe@h@eAtCqFrCsFnA}BZk@hBgDtEsIjCcFhBoD|EiJvCsFFO~I{PbDmG`BcDP_@d@{@zB_FxAaD~AwDBC`BaEnBmFnAiDrA_E`BuFvA}E~@qDt@kDLk@Je@P{@XkAVsA^cBJg@z@uEVwAl@sD`@wC`@sCdAsHhA}I@UN{AD]ReBNmANkA@EbAuHHm@D[d@qDvAqKx@cGFa@J_Al@_Fp@uFb@aEbAaJp@qFd@aEh@yDJw@XkClBmNbAyGf@_DP{@Jm@l@gD`BiItAaGz@mDfAcErBoHbAgDz@kCx@eC\\aApCcIzAuDn@aBhF_N~BoG|AkElCsHRm@Vs@`@kAZ{@|@eC|@{BbA_DZaA\\gALc@`A_Dh@eBh@iBf@kB?ARy@VaAl@_CXmArAaGfA_GdAcGX}Af@kDHi@r@gFj@mE`AqIn@{G`@wEb@cGXgFZiHPkFP}EPkFN_ENsERyDRiEXwEV}CTcD`@qE`@aEZyC`@uD^sCZcCPsAXaBVcB\\qBXcBTqAToAXiBh@kC`@wB`@mBFYR{@@E\\wAz@aDr@mCn@_Cl@sBj@mBd@}Al@gBt@wBp@mBh@{ABKj@cB`BeEzBkFv@cBh@gAz@gB\\q@f@}@P]P_@\\o@pEcIJSLQR]nAmB`AyAnAaBrAkBdB{BjC_Dr@}@v@y@vA}AfBgB|D{DhCcCvAuAjBgBrN}MRONOdC_CDEpDiDxA_BhAmAtA_BbCsC|@cAhAuAt@eAf@q@BGFGvBwC|@oA`BgCxAgCrBkDfCwEbCaFxA}CPa@zBiFrAkDr@kBjByF`@gAtAoEtBmHjBwGJc@XcAt@gD`@kB`@kBh@oC`@uBp@yDj@{D|@{FnAsINmAv@}G`AqJb@qFRqCFyA\\yIV{JJiGHgCNiIBuFBmJAcE?sGAsFCyDCeCKuLCuCAy@AkA?e@?w@CwGCuDAeFUaf@?w@?m@?q@AsDEuJAyDA{EAiF?oE@oE@cC@_D?Y@iCDyCFeD@a@P{FLkELkDDsAZgGVyEZaF`AsK`@sDBWZkCTeBJo@Fi@`@}Ct@kFj@oDl@cEl@mDj@}CZ}AVmAj@mCr@_Dn@oC^uADQFQBK\\qAJ_@DU~@eD`C_I~@oC`AuCbAuCdAoC|A_E`BeEfBcEBEtBwE|C}GlBiEP]|DeJPe@Xo@xAcDdA_CLYN]~LsXp@}ALYxByEBElBaExB}EfA}Bv@cBzAiDHOHSLWzC}GFWjCuFfD_HjCyFdCqE~BmEl@eAz@wApBiDjB{CvAwBdBiCtB_DhBsCnAwBn@wAfCsDdD{FlC{EfBgDx@_BjB_ExD}I`@_ArBeFvAsDl@}Af@mArC}GzCeH`B{DxBoEjBwD|BgElBcDhAkBLShEqGJO|ByC\\e@nDkE~CoDtDuDlCgCXWrCaCnCuB~@q@pA_AlD{B`B_A`B_AbCqAtCoAlAi@vAm@`@O^OfC}@pFgBjA]z@YZKVGvDmAnAa@ZKVIn@UzFsBZMr@YdAc@zAo@zBeArBgAlAs@PMf@c@lCiBxCqB~BeB~BaB|BsBrBgBdCeC|BcCxBcCdBqBvAeBjBcCrC_ExB_DlBgDrBoDlBoDnB{DhBwDpAwCrAiDnBaFvA}DhBoFxAmEbBgGvAmFnAiFl@eC^_B~AcIz@cFv@oFz@wFp@_F~@wHp@aG`@_D^oE^aGb@mGXkGVsHNyGHqEBeA@yB?QDyMDmX@wBBaK?[?M?a@?Q?a@?gA@eGH_Z?{B@eDB_[?iC?yABmD@kI?_B?oBAiF?I?YBoH@aKBmHFqGDsGLoETwIT{I`@yHZwF^wF`@sFf@gFl@_Gf@sEp@gF^uCrAyI|A}I`BuI|AkHr@cDR{@dB{GdBkGpAgEDK@CBIDQZcA^kAtAgEnBsFvA}DfBwEfBiE|BeFdB{D|@gBf@{@Zm@Zm@LU|BeE~C{F`CcElCyEhAgBbAgBz@yAvAcCx@wAbAgBbDwFpBoDbFyIdFgJvEaJbD}GzAiD|AwDhBoEfBwE~@wCn@iBjAkD~A_FtBqHpBsHhCaLbBuIb@uBZgBHa@Le@TaATaAN{@l@}DJw@ZsBTaBn@yEPmA\\wC`@iE\\oDv@oJb@cHTyDDe@P{Bb@yHXoGPeE@UBe@DaCFaC@k@HeEB{AHuGBwAD{EHiGJoGHgGHqHHoGDwFBkCBwBDsB?s@FeFHeF`@i[LmJXcUXuV@u@@_ANsKL_HDsBHqD?K@[LiELgDJqCBq@FqABWD}@~@kNbCeWxAmLjBcM~BgMjAyFNu@jNum@^aBT}@jCcMvA}HxAgLHu@Fc@jBqOpBeTr@wLDo@Ds@HmAb@eLXwLXcPFgPAkA@mD?yD?gD@aG?U?U?UAk@?oG?wC?_H?wH?cJ?qI@qJ@}J@iJ@aK?kI?c@?cB@{C@kB?Q@q@?o@?{E@eJD_KBkFF}F@g@@[LoIVwIL_CZgGHeBx@sK`@qFdBkQnAoJr@wEbA{FxEaUpBoHhEqNbEgMtDgJnGoMtC{FvFwI~BgDt@cAvAiBt@aA\\c@b@i@Z_@`@e@HMBCBCpA}AHGJMJMFIX[Z_@^e@`@c@dAmANOPUJMbBoBbDyDbF_GZ]X]jByBlBwBnA{AhCyCjC{C~ImKrBaC`CqCdAoA@?hFeGdHkIdB{Bd@k@hAyA|DuFpB}CbDoFfAmBTc@`AgBbC{ElB_EnAsChAoCjBmExBcGbCgHfAoDTw@JY`Xg~@pJu\\pAyEzByIz@iDJi@H]bAeF|@mEdLis@pBsMdAgHXeBjAsHF_@TkAfByJ`BuIr@qDDQx@qDp@uCdBuGlEaOv@}BHQHQDQ~CsIvGqO|@oBdBqDb@y@dDmG`@u@Ta@lD_H`Rm]lAcCfHqMzK{ShGcNhBmEtDuJpEgNNa@L_@dKc]~IgZXaAvHeWPo@Po@fDwKfBkF~DuKlD}I|@qBzA{CvAwCt@}AtCsFbDyFnDsF`AyAfAcBV[DGXa@lAaBzAaBnEkFbH}GrEgEvAmAxDaDxDkCjh@k^rVuPtFkDx@e@d@Yj@]`B_AjJwEdNmFbBq@bDeAdFmAvA_@rCu@TG\\I`C_@DAbFw@rGw@`Iu@`[oAN?^AVAxZsATApEQ`ESlDKhGq@hGq@lEs@|MoCnGuArCo@FCHAlLmCvGyAtHmAlH_AbBGHA\\CjAGr@I`BMlIUrEGxFXN@`@@`@@ZBZBnBLr@F|@JL?J?TBR@R@hLx@V@V?zIl@|BLpAHxFN`BBP@R@xDBtGQdAEBAzL_ArDg@nHiAf@K~Bg@tGwAxA_@jCm@rCq@jGsA`AUTG`@IzGeBpBi@fLmC~Dy@zD{@nH}ADAx@WvL_C~B]h@INC|@O`BSREh@ChGm@bAIpBKjAA`G@fCAd@DhA?rC@x[h@tCAfH?`DQvF_@xEi@~Ey@`Ey@rFkA`FyA`GaCrGqCn@QfFqCrDsCbF_DlEkDbKeJTUVS`DmCfAcAjY{UbJ{HxAoA~DiDnAgAdByAxGyF`ZeWjCuCd@i@X[fB{AhAgAr@_Av@eAbAmAlF_Hh@{@f@{@jNsTfDsGng@ucAJUzB{DZi@v@{A|@aB^o@bDqF~@_BpBeDBEFI@CHIFGLORWLQrCqEfAsAhBeCJOn@u@X]XYX_@hAkADC`@c@DINQn@y@LSDEFIz@gAz@iARQZYf@e@TU|@aAl@o@@@X_@ZYHIXWFGr@w@fDoDzDeEpAsAjByBFKHKnEoFlD{EdBiCxBaDLSLQhDyFvJgQBEhC}EjEuHdFwInBcDNWHKFKbBkC|AaCzCqELQJQhE_GNQLSLOjBaC\\e@v@{@vCqD|AgBLKLMp@s@pAwAzAiBjCoCvCgDjBeBtAkAtBmBrE}DNMLKHG~f@u_@f\\eVjHeGjSgOtNkIfDaBrHsDrMeEnFkBzC}@vBo@fCk@`Cg@lJiA`B]|Ce@|Da@fa@uEbEg@fDk@f@KbI_B~Bo@lKeDXKf@QjAc@b@QTK|@]z@_@n@Y`CeAl@Yj@Y|@c@@AhCsAh@[vAw@|A_AxBuAvBwAnA{@XSBA?APUxEuDzBeBvD{CdDeDjD}ChCsCbDwDjGuIvGsI?E?A?A@ADIzAuBpAmBlAgBjCmDfA}AfA{AlAaB~AyBdB}B`BwB~AmBvAcB~AiB|AeBvA}AvC}C`EiEbAeArAyApAyAxA}AdBmBfBoBdBsB`BsBdBuBbBwBnBcCh@s@lF{HbJqNV_@HM`@s@x@wABG\\i@\\g@vBsDjEiITe@vA}CRa@P_@zC}F@AbEeIDGTc@hSs`@|AyChDaHzBwEvByETg@tAiDj@{AdBmEpCyHJ]rAcE`BoF~AsFpB{HtAaGdA}EjBiJ@KHa@Ha@Lw@zHmd@BMBMTqAnF{[Jo@Lq@dHya@hKun@BIBOFc@BIDQ~CiS@GDSp@{Fz@iGlBqO`@eDD]Jw@Jw@@IJ}@`@eDDYLaALkAV{BRgBR}APcBVsBJs@l@qFJy@Da@Ho@lAiKr@sF@IP_BDWr@eHP{AXcCXaCdBcOD_@D]Da@BY@GDa@@O@GBYB[B[B[Fk@@KPcCLyBLuBH{BFiBFkCBgA@oA@uA@iA?oA?sBAyACwBI{CE}AIwBIiBIsAKwAKcBSaCWkCMkAOeAMiAOcAOeASqAYiB[cBUoAc@uBe@{B[yASaA}@gE[wA_AkE}AeHiBqIoA}Fe@sB_DuNK]eCmJoAkE}AmF}AgFmJs[{@uCoEoOmFsQSm@an@gqB{D}MmB_Iw@eEaAgFwAoIsAoJiAqI_AgHcAaIiBwNeAoIaBqMM}@[kCy@iGiFge@[L"
                  },
                  "start_location": {
                    "lat": 50.94303,
                    "lng": 6.958729
                  },
                  "transit_details": {
                    "arrival_stop": {
                      "location": {
                        "lat": 50.05316699999999,
                        "lng": 8.570185
                      },
                      "name": "Frankfurt(M) Flughafen Fernbf"
                    },
                    "arrival_time": {
                      "text": "5:49pm",
                      "time_zone": "Europe/Berlin",
                      "value": 1526053740
                    },
                    "departure_stop": {
                      "location": {
                        "lat": 50.94303,
                        "lng": 6.958729
                      },
                      "name": "Cologne Central Station"
                    },
                    "departure_time": {
                      "text": "4:55pm",
                      "time_zone": "Europe/Berlin",
                      "value": 1526050500
                    },
                    "headsign": "Basel SBB",
                    "line": {
                      "agencies": [
                        {
                          "name": "Deutsche Bahn AG",
                          "url": "http://www.bahn.com/en/view/index.shtml"
                        }
                      ],
                      "short_name": "ICE",
                      "vehicle": {
                        "icon": "//maps.gstatic.com/mapfiles/transit/iw2/6/rail2.png",
                        "name": "High speed train",
                        "type": "HIGH_SPEED_TRAIN"
                      }
                    },
                    "num_stops": 2
                  },
                  "travel_mode": "TRANSIT"
                },
                {
                  "distance": {
                    "text": "30 m",
                    "value": 30
                  },
                  "duration": {
                    "text": "1 min",
                    "value": 20
                  },
                  "end_location": {
                    "lat": 50.051219,
                    "lng": 8.571251
                  },
                  "html_instructions": "Walk to Frankfurt(M) Flughafen Regionalbf",
                  "polyline": {
                    "points": "i_opHszhs@hLsDE]Kq@Ql@"
                  },
                  "start_location": {
                    "lat": 50.05316699999999,
                    "lng": 8.570185
                  },
                  "steps": [
                    {
                      "distance": {
                        "text": "30 m",
                        "value": 30
                      },
                      "duration": {
                        "text": "1 min",
                        "value": 20
                      },
                      "end_location": {
                        "lat": 50.051219,
                        "lng": 8.571251
                      },
                      "html_instructions": "Head <b>east</b><div style=\"font-size:0.9em\">Destination will be on the left</div>",
                      "polyline": {
                        "points": "i_opHszhs@hLsDE]Kq@Ql@"
                      },
                      "start_location": {
                        "lat": 50.05316699999999,
                        "lng": 8.570185
                      },
                      "travel_mode": "WALKING"
                    }
                  ],
                  "travel_mode": "WALKING"
                },
                {
                  "distance": {
                    "text": "11.3 km",
                    "value": 11308
                  },
                  "duration": {
                    "text": "13 mins",
                    "value": 780
                  },
                  "end_location": {
                    "lat": 50.10652899999999,
                    "lng": 8.6621618
                  },
                  "html_instructions": "Commuter train towards Frankfurt(Main)Hbf",
                  "polyline": {
                    "points": "csnpHiais@NGuAaKgCiQy@wEkAgG]sAm@mBk@iBuA{DaAaCaCyDi@q@gAmAcBaB{A{AeAo@qAw@mAu@qAw@mAw@qAw@kC_B_Ak@aAm@gAw@eAy@sAmAsAqA}@aA}@gAo@y@i@w@}@sA{@wAk@gAk@gAe@cAe@eAM[OYc@gAg@uAg@yAg@_Bc@_BEMEOESESUeAQaAQcAOaAMaAK{@KaAIaAKwAIyAG}AGyAIcCEyAE{AAqAEsCAaCAeCAiGAyEAwD?[?]CoFA{FA{GAgB?mBCeIA_HAsGAqFCoD?sBIqG?mCA}DCsEA_AAo@Am@Cm@Ag@EaAOiDm@sMCg@Cg@Ee@OuBMwAOuAK{@WkBM{@Mw@Mu@_@oBk@sCk@sCEWYuAQw@e@eCKi@_@mBMs@Qs@Mi@U}@S_AMo@[}AQ_AQw@Os@Sw@Qs@Sm@Sk@Ui@Wm@Yk@[i@U]U[[a@]_@]]][a@Y_@W]Sa@Sc@Q_@M_@Ia@Ie@Ga@Cg@Aa@?]@m@De@Fg@Je@L[Ja@PYN_@ROHMJq@b@s@d@w@h@kAx@sA~@wAbAu@h@iAv@{@n@aAr@m@d@q@h@iA|@iCnBkAv@OLgAx@_@VsA|@cHnEyEdDoA|@YT[ReAv@sBzAgE~CmA~@{@l@GDEBC@ID[Nm@ZYNg@Rg@TmCnAuAl@o@XWJUJg@Vi@Tk@R]L_@Jk@J[F_@DS@]B]?Y?O?QAQASCi@Ge@K_@K]Ka@Og@U_@S_@W]WQOOM]]]_@[_@W_@Ya@_@o@[m@Yq@Ug@[y@_AoCIUgBiGkBqGyAaF_CeIgBiGY}@[gA_@oA_BcFuB}GgCqIqAmEaAcDqB_Hk@qBg@cBy@uCe@gBg@gB_@wAkJa_@EQMa@k@uBwEoNiAyDlAmA"
                  },
                  "start_location": {
                    "lat": 50.051219,
                    "lng": 8.571251
                  },
                  "transit_details": {
                    "arrival_stop": {
                      "location": {
                        "lat": 50.10652899999999,
                        "lng": 8.6621618
                      },
                      "name": "Frankfurt Central Station"
                    },
                    "arrival_time": {
                      "text": "6:15pm",
                      "time_zone": "Europe/Berlin",
                      "value": 1526055300
                    },
                    "departure_stop": {
                      "location": {
                        "lat": 50.051219,
                        "lng": 8.571251
                      },
                      "name": "Frankfurt(M) Flughafen Regionalbf"
                    },
                    "departure_time": {
                      "text": "6:02pm",
                      "time_zone": "Europe/Berlin",
                      "value": 1526054520
                    },
                    "headsign": "Frankfurt(Main)Hbf",
                    "line": {
                      "agencies": [
                        {
                          "name": "DB Regio AG Mitte Region Hessen",
                          "url": "http://www.dbregio.de/db_regio/view/index.shtml"
                        }
                      ],
                      "short_name": "S8",
                      "vehicle": {
                        "icon": "//maps.gstatic.com/mapfiles/transit/iw2/6/rail2.png",
                        "local_icon": "//maps.gstatic.com/mapfiles/transit/iw2/6/de-sbahn.png",
                        "name": "Commuter train",
                        "type": "COMMUTER_TRAIN"
                      }
                    },
                    "num_stops": 3
                  },
                  "travel_mode": "TRANSIT"
                },
                {
                  "distance": {
                    "text": "0.2 km",
                    "value": 171
                  },
                  "duration": {
                    "text": "2 mins",
                    "value": 145
                  },
                  "end_location": {
                    "lat": 50.10740699999999,
                    "lng": 8.664137
                  },
                  "html_instructions": "Walk to Frankfurt Central Station",
                  "polyline": {
                    "points": "ylypHoyzs@oDkK"
                  },
                  "start_location": {
                    "lat": 50.10652899999999,
                    "lng": 8.6621618
                  },
                  "steps": [
                    {
                      "distance": {
                        "text": "0.2 km",
                        "value": 171
                      },
                      "duration": {
                        "text": "2 mins",
                        "value": 145
                      },
                      "end_location": {
                        "lat": 50.10740699999999,
                        "lng": 8.664137
                      },
                      "polyline": {
                        "points": "ylypHoyzs@oDkK"
                      },
                      "start_location": {
                        "lat": 50.10652899999999,
                        "lng": 8.6621618
                      },
                      "travel_mode": "WALKING"
                    }
                  ],
                  "travel_mode": "WALKING"
                },
                {
                  "distance": {
                    "text": "1.6 km",
                    "value": 1565
                  },
                  "duration": {
                    "text": "3 mins",
                    "value": 180
                  },
                  "end_location": {
                    "lat": 50.113926,
                    "lng": 8.678946999999999
                  },
                  "html_instructions": "Commuter train towards Frankfurt(Main)Süd",
                  "polyline": {
                    "points": "irypH{e{s@k@v@CIO]AEAAiAkBuAsAuA}@o@k@qBiAiHgC_Ae@oA{@oAgAiAuAcAwAgAcBIM_AaB}@_Bi@yAe@kB_@}BQ{BCwBBsABk@BSLcBhBcONuB^gJA?"
                  },
                  "start_location": {
                    "lat": 50.10740699999999,
                    "lng": 8.664137
                  },
                  "transit_details": {
                    "arrival_stop": {
                      "location": {
                        "lat": 50.113926,
                        "lng": 8.678946999999999
                      },
                      "name": "Frankfurt(M)Hauptwache"
                    },
                    "arrival_time": {
                      "text": "6:25pm",
                      "time_zone": "Europe/Berlin",
                      "value": 1526055900
                    },
                    "departure_stop": {
                      "location": {
                        "lat": 50.10740699999999,
                        "lng": 8.664137
                      },
                      "name": "Frankfurt Central Station"
                    },
                    "departure_time": {
                      "text": "6:22pm",
                      "time_zone": "Europe/Berlin",
                      "value": 1526055720
                    },
                    "headsign": "Frankfurt(Main)Süd",
                    "line": {
                      "agencies": [
                        {
                          "name": "DB Regio AG Mitte Region Hessen",
                          "url": "http://www.dbregio.de/db_regio/view/index.shtml"
                        }
                      ],
                      "short_name": "S5",
                      "vehicle": {
                        "icon": "//maps.gstatic.com/mapfiles/transit/iw2/6/rail2.png",
                        "local_icon": "//maps.gstatic.com/mapfiles/transit/iw2/6/de-sbahn.png",
                        "name": "Commuter train",
                        "type": "COMMUTER_TRAIN"
                      }
                    },
                    "num_stops": 2
                  },
                  "travel_mode": "TRANSIT"
                },
                {
                  "distance": {
                    "text": "0.4 km",
                    "value": 432
                  },
                  "duration": {
                    "text": "5 mins",
                    "value": 325
                  },
                  "end_location": {
                    "lat": 50.11092499999999,
                    "lng": 8.682125299999999
                  },
                  "html_instructions": "Walk to Braubachstraße 41, 60311 Frankfurt am Main, Germany",
                  "polyline": {
                    "points": "a{zpHmb~s@hAsD^V`@UJGH`@`@[fAu@`Aa@IaAEo@Cc@E_@AGACAECGDAdCo@LGtCiADAEY"
                  },
                  "start_location": {
                    "lat": 50.113926,
                    "lng": 8.678946999999999
                  },
                  "steps": [
                    {
                      "distance": {
                        "text": "20 m",
                        "value": 20
                      },
                      "duration": {
                        "text": "1 min",
                        "value": 12
                      },
                      "end_location": {
                        "lat": 50.113395,
                        "lng": 8.679729
                      },
                      "html_instructions": "Head <b>southwest</b>",
                      "polyline": {
                        "points": "a{zpHmb~s@hAsD^V"
                      },
                      "start_location": {
                        "lat": 50.113926,
                        "lng": 8.678946999999999
                      },
                      "travel_mode": "WALKING"
                    },
                    {
                      "distance": {
                        "text": "40 m",
                        "value": 40
                      },
                      "duration": {
                        "text": "1 min",
                        "value": 27
                      },
                      "end_location": {
                        "lat": 50.11312059999999,
                        "lng": 8.6797115
                      },
                      "html_instructions": "Turn <b>left</b> toward <b>Friedrich-Stoltze-Platz</b>",
                      "maneuver": "turn-left",
                      "polyline": {
                        "points": "wwzpHig~s@`@UJGH`@"
                      },
                      "start_location": {
                        "lat": 50.113395,
                        "lng": 8.679729
                      },
                      "travel_mode": "WALKING"
                    },
                    {
                      "distance": {
                        "text": "66 m",
                        "value": 66
                      },
                      "duration": {
                        "text": "1 min",
                        "value": 46
                      },
                      "end_location": {
                        "lat": 50.1125891,
                        "lng": 8.680115199999999
                      },
                      "html_instructions": "Turn <b>left</b> onto <b>Friedrich-Stoltze-Platz</b>",
                      "maneuver": "turn-left",
                      "polyline": {
                        "points": "_vzpHeg~s@`@[fAu@"
                      },
                      "start_location": {
                        "lat": 50.11312059999999,
                        "lng": 8.6797115
                      },
                      "travel_mode": "WALKING"
                    },
                    {
                      "distance": {
                        "text": "39 m",
                        "value": 39
                      },
                      "duration": {
                        "text": "1 min",
                        "value": 29
                      },
                      "end_location": {
                        "lat": 50.1122569,
                        "lng": 8.6802864
                      },
                      "html_instructions": "Continue onto <b>Sandgasse</b>",
                      "polyline": {
                        "points": "urzpHwi~s@`Aa@"
                      },
                      "start_location": {
                        "lat": 50.1125891,
                        "lng": 8.680115199999999
                      },
                      "travel_mode": "WALKING"
                    },
                    {
                      "distance": {
                        "text": "78 m",
                        "value": 78
                      },
                      "duration": {
                        "text": "1 min",
                        "value": 54
                      },
                      "end_location": {
                        "lat": 50.11244319999999,
                        "lng": 8.6813255
                      },
                      "html_instructions": "Turn <b>left</b> onto <b>Neue Kräme</b>",
                      "maneuver": "turn-left",
                      "polyline": {
                        "points": "spzpHyj~s@IaAEo@Cc@E_@AGACAECG"
                      },
                      "start_location": {
                        "lat": 50.1122569,
                        "lng": 8.6802864
                      },
                      "travel_mode": "WALKING"
                    },
                    {
                      "distance": {
                        "text": "0.2 km",
                        "value": 179
                      },
                      "duration": {
                        "text": "3 mins",
                        "value": 150
                      },
                      "end_location": {
                        "lat": 50.11089459999999,
                        "lng": 8.681998399999999
                      },
                      "html_instructions": "Turn <b>right</b> to stay on <b>Neue Kräme</b>",
                      "maneuver": "turn-right",
                      "polyline": {
                        "points": "wqzpHiq~s@DAdCo@LGtCiADA"
                      },
                      "start_location": {
                        "lat": 50.11244319999999,
                        "lng": 8.6813255
                      },
                      "travel_mode": "WALKING"
                    },
                    {
                      "distance": {
                        "text": "10 m",
                        "value": 10
                      },
                      "duration": {
                        "text": "1 min",
                        "value": 7
                      },
                      "end_location": {
                        "lat": 50.11092499999999,
                        "lng": 8.682125299999999
                      },
                      "html_instructions": "Turn <b>left</b> onto <b>Braubachstraße</b>",
                      "maneuver": "turn-left",
                      "polyline": {
                        "points": "ahzpHou~s@EY"
                      },
                      "start_location": {
                        "lat": 50.11089459999999,
                        "lng": 8.681998399999999
                      },
                      "travel_mode": "WALKING"
                    }
                  ],
                  "travel_mode": "WALKING"
                }
              ],
              "traffic_speed_entry": [],
              "via_waypoint": []
            }
          ],
          "overview_polyline": {
            "points": "m~nyHqygi@lUmSpG|QtM`u@xC~d@|ZrT~e@~^f^jr@zX`{Ae@`~@dcA_Tf]~E`Ttn@hk@tcA~@nAcGfH`ElDbQnTda@fc@ph@dm@~Zzl@zQxr@bQl\\vLta@jL`|@va@~lAxQrb@xMnLzSpHbBlFxQ|Atp@bAh]rMjg@Et~BkOlpBiLjyR}mAf~AoTzdA}Tfj@Ohn@}LpJ`AxNnMhZ`]bVlGzKgAdL_RvEwyAdHikApu@ebB~}@{iBj~Ao}AbgEsgEvrCorC~rAwqAza@uUffD}dB|k@kg@ny@aoBt\\i\\jgBy[zaGq_Abc@yHhXe[pSsYh^a^t]eQtIQnI|FhZvSfa@f\\fGhWpJzo@ti@th@fMbPnHbWbE|^uBbk@k@heA}D~LaDjDpEmAxCoMPyh@vDi_AhGk{@|_@coA`x@qzBxm@_lA~p@imArf@ii@rvB{fAbfAih@`eAeh@ll@e[xcAyoAhoBooChsA{}Frc@aqBlSo_Ad\\__A|q@_fAfk@gq@nS_Knk@oKl{@iZbfBw_Af\\mIfk@kB`z@Vzm@mKrs@eg@lg@wx@xr@iaAvh@kh@jx@q`Av`@efAx^mtAhi@mbAb|@my@rr@_mAheBweG`m@wrCjVibAh`@yv@rj@qp@pl@q}@j~@afBp`@siA`a@yxCd\\yaBtf@_tAtRyx@hNknBjLahAfPwp@v[ys@`h@im@hp@qq@li@yhAbYw}AjCu|BhAe}DhOckA~T}v@btAe{Crt@ooAnr@_|Azu@yw@bo@{Vpj@qYl\\c\\b\\_j@lVus@~M_u@hHy~@l@}`AZopBlDqsBn]cqBv\\mz@r{@o|AjVum@~R}x@fMyhAhDskAtDq|CrHq_Bb]_fB`RszAtBg`BJ_{BnEmjBlHok@xUk|@vc@cx@dK{Lht@{z@tw@oiAdbAieDbm@maDt`A_pBzp@qdBdd@ixAzn@wfAxeBopAfi@{UpZoGnlAwGdqBcZrk@Dxs@dD|lAsQpjAeVdiBkDxr@kXx{@is@juAkqApsAgeCz`@qf@ld@mi@fv@opAb]gb@lYoXz`CsbBpt@{QzfAmOne@mRtt@wm@vi@mu@br@}v@lm@k_Axw@a`Bvf@wsBtq@upEdQq_BFqs@cIen@sl@i`CqiAsyDkRktAeEe\\eGyd@bLqEcBmKkH}b@iQq\\_UaOk\\m`@mIc[qCuxCqC_v@iJug@gIuYqNoI}PrFaa@vYe}@|g@iM_CcOwZuf@kbBqVc}@BgG{EsIWo@qY}QwMcSaAuUnH{c@tDqAYuDdH}C?["
          },
          "summary": "",
          "warnings": [
            "Walking directions are in beta.    Use caution – This route may be missing sidewalks or pedestrian paths."
          ],
          "waypoint_order": []
        }
      ],
      "status": "OK"
    };
  }

}
