import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { AuthPageComponent } from './auth-page.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';


describe('AuthPageComponent', () => {
  let component: AuthPageComponent;
  let fixture: ComponentFixture<AuthPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ],
      declarations: [AuthPageComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(AuthPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  //TODO: 1er enunciado que debe asegurar lo siguiente
  //TODO: Debe asegurar que el form sea inválido cuando el form sea erróneo

  //TODO: patron AAA

  it('should be return a invalid form', () => {
    //TODO: Arrange
    const mockCredentials = {
      email: "x0x0x0x0x0",
      password: "12312312312313"
    }

    const emailForm: any = component.loginForm.get('email')
    const passwordForm: any = component.loginForm.get('password')
    //TODO: Act

    emailForm.setValue(mockCredentials.email)
    passwordForm.setValue(mockCredentials.password)
    //TODO: Assert
    //se espera que sea igual a invalido el formulario
    expect(component.loginForm.invalid).toEqual(true);
  });

  it('should be return a valid form', () => {
    //TODO: Arrange
    const mockCredentials = {
      email: "test@test.com",
      password: "12345678"
    }

    const emailForm: any = component.loginForm.get('email')
    const passwordForm: any = component.loginForm.get('password')
    //TODO: Act

    emailForm.setValue(mockCredentials.email)
    passwordForm.setValue(mockCredentials.password)
    //TODO: Assert
    //se espera que sea igual a invalido el formulario
    expect(component.loginForm.invalid).toEqual(false);
  });

  it('button should has "Iniciar sesión" word', () => {
    const elementRef = fixture.debugElement.query(By.css('.form-action button'))
    const getInnerText = elementRef.nativeElement.innerText

    expect(getInnerText).toEqual('Iniciar sesión')
  })
});
