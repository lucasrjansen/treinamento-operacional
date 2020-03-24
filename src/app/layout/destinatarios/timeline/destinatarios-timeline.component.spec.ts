import { async, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { DestinatariosTimeLineComponent } from './destinatarios-timeline.component';
import { DestinatariosTimeLineModule } from './destinatarios-timeline.module';

describe('DestinatariosTimeLineComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ DestinatariosTimeLineModule, RouterTestingModule ],
    })
    .compileComponents();
  }));

  it('should create', () => {
    const fixture = TestBed.createComponent(DestinatariosTimeLineComponent);
    const component = fixture.componentInstance;
    expect(component).toBeTruthy();
  });
});
