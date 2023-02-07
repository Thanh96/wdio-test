Feature: Home Page
	Scenario: User can visit home page
		Given I am on the home page
		Then I verify that user is navigated to home page

	@focus
	Scenario: User can search by keyword
		Given I am on the home page
		Then I verify that user is navigated to home page
		When I click search btn
		When I enter search input with value 'selector'
		Then I see search result