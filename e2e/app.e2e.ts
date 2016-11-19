import { EmployeesDashboardPage } from './app.po';

describe('employees-dashboard App', function() {
  let page: EmployeesDashboardPage;

  beforeEach(() => {
    page = new EmployeesDashboardPage();
  })

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('employees-dashboard works!');
  });
});
