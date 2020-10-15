Feature: Google IO feature

  Scenario: As a user, I want to view the schedule and agenda

    Given I open the app to see welcome screen
    When I goto view the schedule of event
    Then Schedule page is displayed
    When I goto view the agenda of event
    Then Agenda page is displayed
