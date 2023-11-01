class ComputerPage {
  get nameField() {
    return cy.get("#name");
  }

  get introducedField() {
    return cy.get("#introduced");
  }

  get discontinuedField() {
    return cy.get("#discontinued");
  }

  get companyDropdown() {
    return cy.get("#company");
  }

  get createThisComputerButton() {
    return cy.get('input[type="submit"]');
  }

  get saveButton() {
    return cy.get('[value="Save this computer"]');
  }

  get deleteThisComputerButton() {
    return cy.get('[value="Delete this computer"]');
  }

  fillComputerForm(name, introduced, discontinued, company) {
    if (name) this.nameField.clear().type(name);
    if (introduced) this.introducedField.clear().type(introduced);
    if (discontinued) this.discontinuedField.clear().type(discontinued);
    if (company) this.companyDropdown.select(company);
  }

  clickCreateComputer() {
    this.createThisComputerButton.click();
  }

  clickSaveComputer() {
    this.saveButton.click();
  }

  clickDeleteComputer() {
    this.deleteThisComputerButton.click({force: true});
  }
}

export default new ComputerPage();
