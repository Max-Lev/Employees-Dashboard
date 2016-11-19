export class EmployeesDashboardPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('employees-dashboard-app h1')).getText();
  }
}
