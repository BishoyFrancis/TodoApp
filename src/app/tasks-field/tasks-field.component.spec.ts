import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TasksFieldComponent } from './tasks-field.component';

describe('TasksFieldComponent', () => {
  let component: TasksFieldComponent;
  let fixture: ComponentFixture<TasksFieldComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TasksFieldComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TasksFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
