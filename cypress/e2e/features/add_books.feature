Feature: add books to my collection

    Background: Login
        Given the user is on the login page
        When he enter his credentials
            | userName | password   |
            | lucho    | Password1* |

    Scenario: Successfully add books to my collection
        Given the user is on book store page
        When he adds a book to his collection
        Then he should see that book in his collection