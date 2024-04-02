import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing'
import { TrackService } from './track.service';
//TODO: prueba (ERROR) -> NullInjectorError: R3InjectorError(DynamicTestModule)[TrackService -> HttpClient -> HttpClient]: 
//TODO:          NullInjectorError: No provider for HttpClient!
describe('TrackService', () => {
  let service: TrackService;

  //TODO: injectar el modulo de httptestingmodule proporcionado por angular
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ]
    });
    service = TestBed.inject(TrackService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
