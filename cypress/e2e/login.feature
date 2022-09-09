Feature: Login feature

  # This feature is required for a user to log in.
  Scenario: Successfully logged in
    Given An user opens the login page
    When An user enter the username "standard_user"
    And An user enter the password "secret_sauce"
    And An user clicks on the login button
    Then An user will be logged in

  Scenario: Failed to login
    Given An user opens the login page
    When An user enter the username "unexisted_username"
    And An user enter the password "some_password"
    And An user clicks on the login button
    Then An user will be receiving a failed message