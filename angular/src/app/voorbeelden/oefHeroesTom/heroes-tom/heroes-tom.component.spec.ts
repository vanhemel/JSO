import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroesTomComponent } from './heroes-tom.component';

describe('HeroesTomComponent', () => {
  let component: HeroesTomComponent;
  let fixture: ComponentFixture<HeroesTomComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeroesTomComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroesTomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
