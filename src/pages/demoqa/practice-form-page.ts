import { BasePage } from '../base-page';

export class PracticeFormPage extends BasePage {
    firstNameInput = this.page.locator('#firstName');
    lastNameInput = this.page.locator('#lastName');
    emailInput = this.page.locator('#userEmail');
    maleRadioLabel = this.page.locator('label[for="gender-radio-1"]');
    mobileInput = this.page.locator('#userNumber');
    subjectsInput = this.page.locator('#subjectsInput');
    sportsHobbyLabel = this.page.locator('label[for="hobbies-checkbox-1"]');
    currentAddressInput = this.page.locator('#currentAddress');
    submitButton = this.page.locator('#submit');

    modalTitle = this.page.locator('#example-modal-sizes-title-lg');
    modalTable = this.page.locator('.table-responsive');
    closeModalButton = this.page.locator('#closeLargeModal');

    async gotoPracticeFormPage() {
        await this.page.goto('/automation-practice-form');
    }

    async fillAndSubmitForm(firstName: string, lastName: string, email: string, mobile: string, subject: string, address: string) {
        await this.firstNameInput.fill(firstName);
        await this.lastNameInput.fill(lastName);
        await this.emailInput.fill(email);
        await this.maleRadioLabel.click();
        await this.mobileInput.fill(mobile);
        await this.subjectsInput.type(subject);
        await this.page.locator('.subjects-auto-complete__option').first().click();
        await this.sportsHobbyLabel.click();
        await this.currentAddressInput.fill(address);
        await this.submitButton.scrollIntoViewIfNeeded();
        await this.submitButton.click();
    }
}
