import { test, expect } from '@playwright/test';
import { DemoqaPages } from '../../../pages/demoqa/demoqa-pages';
import * as data from './data/this.json';

test.use({ baseURL: 'https://demoqa.com' });

test.describe('[@Feature-PracticeForm] Verify Practice Form test scenarios', () => {
    test('[@P1 @Smoke] Verify form submission shows correct data in confirmation modal', async ({ page }) => {
        const pages = DemoqaPages(page);

        await pages.practiceFormPage.gotoPracticeFormPage();
        await pages.practiceFormPage.fillAndSubmitForm(
            data.firstName,
            data.lastName,
            data.email,
            data.mobile,
            data.subject,
            data.address,
        );

        await expect(pages.practiceFormPage.modalTitle).toHaveText(data.expectedModal.title);
        await expect(pages.practiceFormPage.modalTable).toContainText(data.expectedModal.studentName);
        await expect(pages.practiceFormPage.modalTable).toContainText(data.email);
        await expect(pages.practiceFormPage.modalTable).toContainText(data.expectedModal.gender);
        await expect(pages.practiceFormPage.modalTable).toContainText(data.mobile);
        await expect(pages.practiceFormPage.modalTable).toContainText(data.expectedModal.hobby);

        await page.keyboard.press('Escape');
        await expect(pages.practiceFormPage.modalTitle).not.toBeVisible();
    });
});
