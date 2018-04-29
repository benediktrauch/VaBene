import { NgModule } from '@angular/core';
import { NavigationComponent } from './navigation/navigation';
import { SearchComponent } from './search/search';
import { IonicPageModule } from "ionic-angular";

@NgModule({
	declarations: [
	  NavigationComponent,
    SearchComponent],

	imports: [
    IonicPageModule.forChild(SearchComponent),
    IonicPageModule.forChild(NavigationComponent)
  ],
	exports: [
	  NavigationComponent,
    SearchComponent]
})
export class ComponentsModule {}
