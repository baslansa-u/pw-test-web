import { BasePage } from '../base-page';

export class WebTablesPage extends BasePage {
    addButton = this.page.locator('#addNewRecordButton');
    searchBox = this.page.locator('#searchBox');

    firstNameInput = this.page.locator('#firstName');
    lastNameInput = this.page.locator('#lastName');
    ageInput = this.page.locator('#age');
    emailInput = this.page.locator('#userEmail');
    salaryInput = this.page.locator('#salary');
    departmentInput = this.page.locator('#department');
    submitButton = this.page.locator('#submit');

    tableBody = this.page.locator('tbody');

    async gotoWebTablesPage() {
        await this.page.goto('/webtables');
    }

    async addRecord(firstName: string, lastName: string, age: string, email: string, salary: string, department: string) {
        await this.addButton.click();
        await this.firstNameInput.waitFor({ state: 'visible' });
        await this.firstNameInput.fill(firstName);
        await this.lastNameInput.fill(lastName);
        await this.ageInput.fill(age);
        await this.emailInput.fill(email);
        await this.salaryInput.fill(salary);
        await this.departmentInput.fill(department);
        await this.submitButton.click();
        await this.page.locator('.modal-body').waitFor({ state: 'hidden' });
    }

    getRowByEmail(email: string) {
        return this.page.locator(`tr:has-text("${email}")`);
    }

    async deleteRowByEmail(email: string) {
        await this.getRowByEmail(email).locator('[title="Delete"]').click();
    }

    async searchFor(keyword: string) {
        await this.searchBox.fill(keyword);
    }
}
