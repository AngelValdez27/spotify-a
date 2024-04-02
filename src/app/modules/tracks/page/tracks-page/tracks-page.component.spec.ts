import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TracksPageComponent } from './tracks-page.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('TracksPageComponent', () => {
  let component: TracksPageComponent;
  let fixture: ComponentFixture<TracksPageComponent>;

  beforeEach(async () => {
    //TODO: Las pruebas son independeientes, aunque httpclient module no se use en el TS se hace un instaciamiento de http por cada modulo, por eso la adicion en este spec.ts
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [TracksPageComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(TracksPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
