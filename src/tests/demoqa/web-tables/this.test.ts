import { test, expect } from '@playwright/test';
import { DemoqaPages } from '../../../pages/demoqa/demoqa-pages';
import * as data from './data/this.json';

test.use({ baseURL: 'https://demoqa.com' });

test.describe('[@Feature-WebTables] Verify Web Tables test scenarios', () => {
    test('[@P1 @Smoke] Verify user can add a new record and it appears in the table', async ({ page }) => {
        const pages = DemoqaPages(page);
        const { firstName, lastName, age, email, salary, department } = data.newRecord;

        await pages.webTablesPage.gotoWebTablesPage();
        await pages.webTablesPage.addRecord(firstName, lastName, age, email, salary, department);

        await expect(pages.webTablesPage.tableBody).toContainText(email);
        await expect(pages.webTablesPage.tableBody).toContainText(firstName);
        await expect(pages.webTablesPage.tableBody).toContainText(department);
    });

    test('[@P1 @Regression] Verify search filters table to show only matching records', async ({ page }) => {
        const pages = DemoqaPages(page);
        const { firstName, lastName, age, email, salary, department } = data.searchRecord;

        await pages.webTablesPage.gotoWebTablesPage();
        await pages.webTablesPage.addRecord(firstName, lastName, age, email, salary, department);
        await pages.webTablesPage.searchFor(firstName);

        await expect(pages.webTablesPage.tableBody).toContainText(email);
        await expect(pages.webTablesPage.tableBody).toContainText(firstName);
    });

    test('[@P1 @Regression] Verify user can delete a record and it no longer appears in the table', async ({ page }) => {
        const pages = DemoqaPages(page);
        const { firstName, lastName, age, email, salary, department } = data.deleteRecord;

        await pages.webTablesPage.gotoWebTablesPage();
        await pages.webTablesPage.addRecord(firstName, lastName, age, email, salary, department);
        await expect(pages.webTablesPage.tableBody).toContainText(email);

        await pages.webTablesPage.deleteRowByEmail(email);
        await expect(pages.webTablesPage.tableBody).not.toContainText(email);
    });
});
