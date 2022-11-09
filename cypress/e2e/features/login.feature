Feature: login
  Scenario: Successfully login
    Given the user is on the login page
    When he enter his credentials
      | userName | password   |
      | lucho    | Password1* |
    Then he should be successfully logged in