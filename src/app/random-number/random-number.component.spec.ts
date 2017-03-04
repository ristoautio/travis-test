import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RandomNumberComponent } from './random-number.component';

describe('RandomNumberComponent', () => {
  let component: RandomNumberComponent;
  let fixture: ComponentFixture<RandomNumberComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RandomNumberComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RandomNumberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render title in a h1 tag', async(() => {
    const randomNumberComponent = TestBed.createComponent(RandomNumberComponent);
    randomNumberComponent.detectChanges();
    const compiled = randomNumberComponent.debugElement.nativeElement;
    expect(compiled.querySelector('.random-number').textContent).toBeGreaterThanOrEqual(0);
    expect(compiled.querySelector('.random-number').textContent).toBeLessThanOrEqual(10);
  }));

});
