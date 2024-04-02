import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayListBodyComponent } from './play-list-body.component';
import { OrderListPipe } from '@shared/pipes/order-list.pipe';

describe('PlayListBodyComponent', () => {
  let component: PlayListBodyComponent;
  let fixture: ComponentFixture<PlayListBodyComponent>;
  //TODO: error-> Error: NG0302: The pipe 'orderList' could not be found in the 'PlayListBodyComponent' component. Verify that it is declared or imported in this module.
  beforeEach(async () => {
    //importar el pipe creado
    await TestBed.configureTestingModule({
      declarations: [PlayListBodyComponent,
        OrderListPipe]
    })
      .compileComponents();

    fixture = TestBed.createComponent(PlayListBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
