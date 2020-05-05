import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ListeprojectPage } from './listeproject.page';

describe('ListeprojectPage', () => {
  let component: ListeprojectPage;
  let fixture: ComponentFixture<ListeprojectPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListeprojectPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ListeprojectPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
