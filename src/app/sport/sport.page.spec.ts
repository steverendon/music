import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SportPage } from './sport.page';

describe('SportPage', () => {
  let component: SportPage;
  let fixture: ComponentFixture<SportPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SportPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SportPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
