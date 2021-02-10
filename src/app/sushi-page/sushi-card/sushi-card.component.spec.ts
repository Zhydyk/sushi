import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SushiCardComponent } from './sushi-card.component';

describe('SushiCardComponent', () => {
  let component: SushiCardComponent;
  let fixture: ComponentFixture<SushiCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SushiCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SushiCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
