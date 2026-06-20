import { BasePage } from '../base-page';

export class ButtonsPage extends BasePage {
    doubleClickButton = this.page.locator('#doubleClickBtn');
    rightClickButton = this.page.locator('#rightClickBtn');
    clickMeButton = this.page.getByRole('button', { name: 'Click Me', exact: true });

    doubleClickMessage = this.page.locator('#doubleClickMessage');
    rightClickMessage = this.page.locator('#rightClickMessage');
    dynamicClickMessage = this.page.locator('#dynamicClickMessage');

    async gotoButtonsPage() {
        await this.page.goto('/buttons');
    }

    async doubleClick() {
        await this.doubleClickButton.dblclick();
    }

    async rightClick() {
        await this.rightClickButton.click({ button: 'right' });
    }

    async dynamicClick() {
        await this.clickMeButton.click();
    }
}
