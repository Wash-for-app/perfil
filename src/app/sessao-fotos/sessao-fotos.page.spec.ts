import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SessaoFotosPage } from './sessao-fotos.page';

describe('SessaoFotosPage', () => {
  let component: SessaoFotosPage;
  let fixture: ComponentFixture<SessaoFotosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SessaoFotosPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SessaoFotosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
