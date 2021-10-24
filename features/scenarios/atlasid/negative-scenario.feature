@delete
Feature: Submit without input

    Submit without input

    Scenario: Add quote without inputing quote and colour
        Given user is on atlas id tech web playground
        When click button submit
        Then ensure no card added

    Scenario: Add card quote more than 10
        Given user is on atlas id tech web playground
        When user add card more than 10
        Then user should see pop up message cannot make more card
        #case ketika menambahkan 11 case, maka tidak dapat di add