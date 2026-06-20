import { BasePage } from '../base-page';

export class TextBoxPage extends BasePage {
    fullNameInput = this.page.locator('#userName');
    emailInput = this.page.locator('#userEmail');
    currentAddressInput = this.page.locator('#currentAddress');
    permanentAddressInput = this.page.locator('#permanentAddress');
    submitButton = this.page.locator('#submit');

    outputName = this.page.locator('#output #name');
    outputEmail = this.page.locator('#output #email');
    outputCurrentAddress = this.page.locator('#output #currentAddress');
    outputPermanentAddress = this.page.locator('#output #permanentAddress');

    async gotoTextBoxPage() {
        await this.page.goto('/text-box');
    }

    async fillTextBoxForm(fullName: string, email: string, currentAddress: string, permanentAddress: string) {
        await this.fullNameInput.fill(fullName);
        await this.emailInput.fill(email);
        await this.currentAddressInput.fill(currentAddress);
        await this.permanentAddressInput.fill(permanentAddress);
        await this.submitButton.scrollIntoViewIfNeeded();
        await this.submitButton.click();
    }
}
