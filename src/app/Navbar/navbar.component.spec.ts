import { TestBed } from '@angular/core/testing';
import { NavbarComponent } from './navbar.component';

describe('NavbarComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        NavbarComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(NavbarComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'AngularProject'`, () => {
    const fixture = TestBed.createComponent(NavbarComponent);
    const app = fixture.componentInstance;
    expect(app).toEqual('AngularProject');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(NavbarComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.content span')?.textContent).toContain('AngularProject app is running!');
  });
});
