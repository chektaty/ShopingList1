import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ListeDetailPage } from './liste-detail.page';

describe('ListeDetailPage', () => {
  let component: ListeDetailPage;
  let fixture: ComponentFixture<ListeDetailPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListeDetailPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ListeDetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
