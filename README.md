# Cypress + Cucumber

My developer experience via Cypress + Cucumber. This repository aimed to do just
a shallow test-cases to be familiar with Cucumber. The workshop is mostly based
on
[AUTOMATE your TESTS NOW with CYPRESS + CUCUMBER | Cypress Tutorial For Beginners](https://www.youtube.com/watch?v=4KPBMXUSWJc&ab_channel=JoanMedia)
with modern setups including Typescript and
[@badeball/cypress-cucumber-preprocessor](@badeball/cypress-cucumber-preprocessor).

## Getting started

The following commands is basically invoke `cypress open`. This will open a
cypress UI.

```sh
npm test
```

Alternatively, Cpypress can run using electron browser, which mean we can run
the tests on terminal.

```sh
npx cypress run
```

> The `cypress run` will by default record video for each spec. We can turn it
> on/off by setting `video` within the configuration.

## Limitations

Cypress can do really great works within javascript's ecosystem. But it automates
the browser with its own architecture. There are specific limitations mentioned
by [the official documentation](https://docs.cypress.io/guides/references/trade-offs#Permanent-trade-offs-1).

- Lack of support for multi-tabs
- Doesn't provide support for Safari, IE, Edge, and etc at the moment
- [Difficulty working with iframes](https://www.cypress.io/blog/2020/02/12/working-with-iframes-in-cypress/)

But, there is the most popular alternative to Cypress, which is [Selenium](https://www.selenium.dev/documentation/overview/).
