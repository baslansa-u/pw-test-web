import { test, expect } from '@playwright/test';
import { DemoqaPages } from '../../../pages/demoqa/demoqa-pages';
import * as data from './data/this.json';

test.use({ baseURL: 'https://demoqa.com' });

test.describe('[@Feature-Elements] Verify DemoQA Elements test scenarios', () => {
    test('[@P1 @Smoke] Verify Text Box form submission displays correct output', async ({ page }) => {
        const pages = DemoqaPages(page);

        await pages.textBoxPage.gotoTextBoxPage();
        await pages.textBoxPage.fillTextBoxForm(
            data.textBox.fullName,
            data.textBox.email,
            data.textBox.currentAddress,
            data.textBox.permanentAddress,
        );

        await expect(pages.textBoxPage.outputName).toContainText(data.textBox.fullName);
        await expect(pages.textBoxPage.outputEmail).toContainText(data.textBox.email);
        await expect(pages.textBoxPage.outputCurrentAddress).toContainText(data.textBox.currentAddress);
        await expect(pages.textBoxPage.outputPermanentAddress).toContainText(data.textBox.permanentAddress);
    });

    test('[@P1 @Smoke] Verify Radio Button selection displays correct text', async ({ page }) => {
        const pages = DemoqaPages(page);

        await pages.radioButtonPage.gotoRadioButtonPage();

        await pages.radioButtonPage.yesRadioLabel.click();
        await expect(pages.radioButtonPage.selectedText).toHaveText(data.radioButton.yes);

        await pages.radioButtonPage.impressiveRadioLabel.click();
        await expect(pages.radioButtonPage.selectedText).toHaveText(data.radioButton.impressive);

        await expect(pages.radioButtonPage.noRadioInput).toBeDisabled();
    });

    test('[@P1 @Smoke] Verify Buttons page handles all click types correctly', async ({ page }) => {
        const pages = DemoqaPages(page);

        await pages.buttonsPage.gotoButtonsPage();

        await pages.buttonsPage.doubleClick();
        await expect(pages.buttonsPage.doubleClickMessage).toHaveText(data.buttons.messages.doubleClick);

        await pages.buttonsPage.rightClick();
        await expect(pages.buttonsPage.rightClickMessage).toHaveText(data.buttons.messages.rightClick);

        await pages.buttonsPage.dynamicClick();
        await expect(pages.buttonsPage.dynamicClickMessage).toHaveText(data.buttons.messages.dynamicClick);
    });
});
