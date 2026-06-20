import { BasePage } from '../base-page';

export class RadioButtonPage extends BasePage {
    yesRadioLabel = this.page.locator('label[for="yesRadio"]');
    impressiveRadioLabel = this.page.locator('label[for="impressiveRadio"]');
    noRadioInput = this.page.locator('#noRadio');
    selectedText = this.page.locator('.text-success');

    async gotoRadioButtonPage() {
        await this.page.goto('/radio-button');
    }
}
