import { Component } from '@angular/core';
import {DatabaseService} from "../../../../common/services/database/database.service";

@Component({
  selector: 'habit-add',
  templateUrl: './add.component.html',
})
export class HabitAddComponent {
  constructor(private db: DatabaseService) {
    this.db.createTables();
  }
  currentValue: string = ''
  valuesList: string[] = [];


  onAdd(){
    this.valuesList.push(this.currentValue);
    this.currentValue = '';
  }

}
