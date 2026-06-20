import { Page } from '@playwright/test';
import { TextBoxPage } from './text-box-page';
import { RadioButtonPage } from './radio-button-page';
import { ButtonsPage } from './buttons-page';
import { WebTablesPage } from './web-tables-page';
import { PracticeFormPage } from './practice-form-page';

export const DemoqaPages = (page: Page) => {
    return {
        textBoxPage: new TextBoxPage(page),
        radioButtonPage: new RadioButtonPage(page),
        buttonsPage: new ButtonsPage(page),
        webTablesPage: new WebTablesPage(page),
        practiceFormPage: new PracticeFormPage(page),
    };
};
