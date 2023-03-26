import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import {HabitAddComponent} from './add.component';
import {IonicModule} from "@ionic/angular";

describe('HabitAddComponent', () => {
  let component: HabitAddComponent;
  let fixture: ComponentFixture<HabitAddComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ HabitAddComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(HabitAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
