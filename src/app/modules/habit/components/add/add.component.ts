import { Component } from '@angular/core';

@Component({
  selector: 'habit-add',
  templateUrl: './add.component.html',
})
export class HabitAddComponent {
  currentValue: string = ''
  valuesList: string[] = [];

  onAdd(){
    this.valuesList.push(this.currentValue);
    this.currentValue = '';
  }

}
