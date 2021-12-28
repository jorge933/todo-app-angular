import { ComponentFixture, TestBed } from '@angular/core/testing';
import { instance, mock } from 'ts-mockito'

import { TasksComponent } from './tasks.component';

describe('TasksComponent', () => {
  let component: TasksComponent;

  beforeEach(async () => {
    const componentMock = mock(TasksComponent);
    component = instance(componentMock);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
