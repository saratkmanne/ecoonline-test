class MainPage {
  get searchBox() {
    return cy.get("#searchbox");
  }

  get searchSubmitButton() {
    return cy.get("#searchsubmit");
  }

  get searchResults() {
    return cy.get("table tbody tr td a");
  }

  get addComputer() {
    return cy.get('[id="add"]');
  }
  get alertMessage() {
    return cy.get(".alert-message");
  }

  searchForComputer(computerName) {
    this.searchBox.clear();
    this.searchBox.type(computerName);
    this.searchSubmitButton.click();
  }

  verifyResultsShouldContain(expectedResults) {
    this.searchResults.each(($el) => {
      const name = $el.text();
      expect(name).to.include(expectedResults);
    });
  }

  clickAddComputer() {
    this.addComputer.click();
  }

  verifyAlertMessage(expected) {
    this.alertMessage.should("contain.text", expected);
  }
}

export default new MainPage();
