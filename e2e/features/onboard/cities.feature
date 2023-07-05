Feature: First Test

  Scenario: I run my first Detox test
    Given I start Detox

    @regression @android
    Scenario: I Access cities page
      Given I tap on the 'cities' Home section
      Then The cities page is correctly displayed