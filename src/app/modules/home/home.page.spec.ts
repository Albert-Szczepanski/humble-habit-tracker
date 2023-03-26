import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HomePage } from './home.page';
import {HomePageModule} from "./home.module";
import {CommonModule} from "@angular/common";
import {FormsModule} from "@angular/forms";
import {IonicModule} from "@ionic/angular";
import {HomePageRoutingModule} from "./home-routing.module";
import {HabitModule} from "../habit/habit.module";

describe('HomePage', () => {
  let component: HomePage;
  let fixture: ComponentFixture<HomePage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        HomePageRoutingModule,
        HabitModule
      ],
      declarations: [HomePage]
    }).compileComponents();

    fixture = TestBed.createComponent(HomePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
