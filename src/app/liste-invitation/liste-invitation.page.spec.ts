import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ListeInvitationPage } from './liste-invitation.page';

describe('ListeInvitationPage', () => {
  let component: ListeInvitationPage;
  let fixture: ComponentFixture<ListeInvitationPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListeInvitationPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ListeInvitationPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
