import {
  beforeEachProviders,
  describe,
  expect,
  it,
  inject
} from '@angular/core/testing';
import { EmployeesDashboardAppComponent } from '../app/employees-dashboard.component';

beforeEachProviders(() => [EmployeesDashboardAppComponent]);

describe('App: EmployeesDashboard', () => {
  it('should create the app',
      inject([EmployeesDashboardAppComponent], (app: EmployeesDashboardAppComponent) => {
    expect(app).toBeTruthy();
  }));

  it('should have as title \'employees-dashboard works!\'',
      inject([EmployeesDashboardAppComponent], (app: EmployeesDashboardAppComponent) => {
    expect(app.title).toEqual('employees-dashboard works!');
  }));
});
