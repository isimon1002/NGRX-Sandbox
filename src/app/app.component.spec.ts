import { StoreModule } from '@ngrx/store';
import { FormsModule } from '@angular/forms';
import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { appReducer } from './store/app.reducer';

describe('AppComponent', () => {
  let fixture;
  let component;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        FormsModule,
        StoreModule.forRoot({ app: appReducer})
      ],
      declarations: [
        AppComponent
      ],
    }).compileComponents().then( () => {
      fixture = TestBed.createComponent(AppComponent);
      component = fixture.componentInstance;
    });


  }));

  it('should create the app', () => {
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'NGRX'`, () => {
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('NGRX');
  });

  it('should render title in a h1 tag', () => {
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome!');
  });

  it('button should call onSubmit when clicked', async () => {
    spyOn(component, 'onSubmit');
    const button = fixture.debugElement.nativeElement.querySelector('button');
    button.click();
    fixture.whenStable().then( () => {
      expect(component.onSubmit).toHaveBeenCalled();
    });
  });
});
