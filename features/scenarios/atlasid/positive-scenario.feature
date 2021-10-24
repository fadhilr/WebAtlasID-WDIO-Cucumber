@test
Feature: scenario positive for add quote
    As a user i want to add quote based on colour and verify it

    # Background: 
    #     Given user is on atlas id tech web playground
    
    Scenario Outline: Add quote for all colour and ensure card added
        Given user is on atlas id tech web playground
        When user add <quote> and <colour>
        And click button submit
        Then user can see card with label <quote> and <colour>
        Examples:
            | quote         | colour  |
            | White quote   | White   |
            | Yellow quote  | Yellow  |
            | Cyan quote    | Cyan    |
            | Magenta quote | Magenta |
            | Blue quote    | Blue    |
    Scenario: Add quote for all colour and delete it
        Given user is on atlas id tech web playground
        When user add all quote with colour to card
        And user delete all card
        Then ensure all card has been deleted






