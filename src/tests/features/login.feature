Feature: Login

  Scenario: User logs in successfully
    Given Juan is on the login page
    When he logs in with valid credentials
    Then he should see the dashboard