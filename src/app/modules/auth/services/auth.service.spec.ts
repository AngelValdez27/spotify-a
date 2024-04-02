import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing'
import { AuthService } from './auth.service';
import * as mockRaw from '../../../data/user.json'
import { of } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';

describe('AuthService', () => {
  let service: AuthService;
  let mockUser: any = (mockRaw as any).default
  let httpClientSpy: { post: jasmine.Spy }
  let cookie

  beforeEach(() => {
    cookie = jasmine.createSpyObj('CookieService', ['get', 'check', 'set', 'delete']);
    cookie.check.and.returnValue(true);

    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        { provide: CookieService, useValue: cookie }
      ]
    });
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['post'])
    service = new AuthService(httpClientSpy as any, cookie as any);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  //TODO: prueba de sendCredenctiasl
  it('Debe retornar data con token', (/* done: DoneFn */) => {
    //arrage
    const user: any = mockUser.userOk
    const mckResponse = {
      data: {},
      tokenSession: "0x0x0"
    }
    httpClientSpy.post.and.returnValue(
      of(mckResponse)
    )//TODO: respuesta de la API, ya es observable

    //act
    service.sendCredentials(user.email, user.password)
      .subscribe(r => {
        const getProperties = Object.keys(r)
        expect(getProperties).toContain('data')
        expect(getProperties).toContain('tokenSession')
        /* done() */
        console.log("r de la API en test", r);

      })
  });

});
