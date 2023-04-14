Feature: Home Page
	Scenario: User can visit home page
		Given I am on the home page
		Then I verify that user is navigated to home page

	Scenario Outline: User can search by keyword
		Given I am on the home page
		Then I verify that user is navigated to home page
		When I click search btn
		When I enter search input with value "<search>"
		Then I see search result

		Examples: 
			| search   |
			| selector | 

	