import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {IonicModule} from "@ionic/angular";
import {FormsModule} from "@angular/forms";

import {HabitAddComponent} from "./components";
const COMPONENTS = [HabitAddComponent]

@NgModule({
  declarations: [...COMPONENTS],
  exports: [...COMPONENTS],
  imports: [
    CommonModule,
    IonicModule,
    FormsModule
  ]
})
export class HabitModule { }
