import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SushiHeaderComponent } from './sushi-header.component';

describe('SushiHeaderComponent', () => {
  let component: SushiHeaderComponent;
  let fixture: ComponentFixture<SushiHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SushiHeaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SushiHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
