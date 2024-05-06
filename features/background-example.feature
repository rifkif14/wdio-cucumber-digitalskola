Feature: Background example

    Background: 
        Given user is on sauce-demo page
        When user login using username "standard_user" and password "secret_sauce"

    @Scenario-tag
    Scenario Outline: As a user, I can check cart
        Then user should redirect to homepage
        When user click cart button
        Then user should see empty cart

    @Scenario-tag2
    Scenario Outline: As a user, I can buy products
        Then user should redirect to homepage
        And user add "products" to cart
        When user click cart button
        Then user should see "products" on cart page

    Examples:
      | products |
      | Sauce Labs Backpack |
