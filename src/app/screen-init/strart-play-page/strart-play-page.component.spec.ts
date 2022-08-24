import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StrartPlayPageComponent } from './strart-play-page.component';

describe('StrartPlayPageComponent', () => {
  let component: StrartPlayPageComponent;
  let fixture: ComponentFixture<StrartPlayPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StrartPlayPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StrartPlayPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
