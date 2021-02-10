import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SushiFormComponent } from './sushi-form.component';

describe('SushiFormComponent', () => {
  let component: SushiFormComponent;
  let fixture: ComponentFixture<SushiFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SushiFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SushiFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
