# Playwright Automation Tests — POM with TypeScript

![CI](https://github.com/wkbaslan/pw-test-web/actions/workflows/playwright.yml/badge.svg)

Automated end-to-end test framework built with **Playwright** and **TypeScript**, using the **Page Object Model (POM)** design pattern. Covers two demo applications across multiple feature areas.

---

## Sites Under Test

| Site | Description |
|------|-------------|
| [SauceDemo](https://www.saucedemo.com) | Demo e-commerce store |
| [DemoQA](https://demoqa.com) | UI component practice site |

---

## Project Structure

```
src/
├── pages/
│   ├── base-page.ts          # Base class for all page objects
│   ├── login-page.ts
│   ├── inventory-page.ts
│   ├── cart-page.ts
│   └── demoqa/
│       ├── text-box-page.ts
│       ├── radio-button-page.ts
│       ├── buttons-page.ts
│       ├── web-tables-page.ts
│       ├── practice-form-page.ts
│       └── demoqa-pages.ts
│
└── tests/
    ├── login/                # SauceDemo — Login feature
    ├── shopping/             # SauceDemo — Shopping & checkout
    └── demoqa/
        ├── elements/         # Text Box, Radio Button, Buttons
        ├── web-tables/       # Add, Search, Delete records
        └── practice-form/    # Complex form submission
```

---

## Test Coverage

| Feature | Tag | Tests |
|---------|-----|-------|
| Login | `@Feature-Login` | Valid login + logout, Invalid credentials |
| Shopping | `@Feature-Shopping` | Complete order, Incomplete checkout |
| Elements | `@Feature-Elements` | Text Box, Radio Button, Click types |
| Web Tables | `@Feature-WebTables` | Add record, Search, Delete record |
| Practice Form | `@Feature-PracticeForm` | Form submission & modal verification |

**Total: 11 tests** across 5 features

---

## Tech Stack

- [Playwright](https://playwright.dev) v1.61
- TypeScript
- Page Object Model (POM)
- Data-driven testing (JSON test data)
- GitHub Actions CI

---

## Setup

Requires Node.js 18+

```bash
npm install
npx playwright install chromium
```

---

## Running Tests

```bash
# Run all tests
npm run test

# Run specific site
npm run test -- --grep "@Feature-Login"
npm run test -- --grep "@Feature-WebTables"

# Run by priority tag
npm run test -- --grep "@Smoke"
npm run test -- --grep "@Regression"

# Run in headed mode (see the browser)
npm run test -- --headed

# Run with HTML report
npm run test -- --reporter=html
```

---

## CI / GitHub Actions

Tests run automatically on every push and pull request to `main`.

The HTML report is uploaded as an artifact after each run and kept for 30 days.
View results under the **Actions** tab on GitHub.
