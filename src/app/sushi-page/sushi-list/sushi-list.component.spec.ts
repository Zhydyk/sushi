import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SushiListComponent } from './sushi-list.component';

describe('SushiListComponent', () => {
  let component: SushiListComponent;
  let fixture: ComponentFixture<SushiListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SushiListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SushiListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
