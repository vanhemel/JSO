import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroListTomComponent } from './hero-list-tom.component';

describe('HeroListTomComponent', () => {
  let component: HeroListTomComponent;
  let fixture: ComponentFixture<HeroListTomComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeroListTomComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroListTomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
