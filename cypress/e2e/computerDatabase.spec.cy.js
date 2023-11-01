/// <reference types="cypress"/>
import ComputerPage from "../pages/computerDetailsPage.po";
import MainPage from "../pages/mainPage.po";
describe("Add New Computer Test", () => {
  beforeEach(function () {
    cy.visit("/computers");

    cy.fixture("products").then((data) => {
      this.data = data;
    });
  });

  it("Should search for a computer by name", function () {
    MainPage.searchForComputer(this.data.product);
    cy.verifyURLContains(this.data.product);
    MainPage.verifyResultsShouldContain(this.data.product);
  });

  it("Should successfully add a new computer", function () {
    MainPage.clickAddComputer();
    ComputerPage.fillComputerForm(
      this.data.computername,
      this.data.introduced,
      this.data.discontinued,
      this.data.company
    );
    ComputerPage.clickCreateComputer();
    MainPage.verifyAlertMessage(
      `Done !  Computer ${this.data.computername} has been created`
    );
  });

  it("Should edit a computer", function () {
    MainPage.searchForComputer(this.data.computername);
    cy.contains(this.data.computername).click();
    ComputerPage.fillComputerForm(
      this.data.updatedComputerName,
      this.data.introduced,
      this.data.discontinued,
      this.data.company
    );
    ComputerPage.clickSaveComputer();
    MainPage.verifyAlertMessage(
      `Done !  Computer ${this.data.updatedComputerName} has been updated`
    );
  });

  it("Should delete a computer", function () {
    MainPage.searchForComputer(this.data.deletedComputerName);
    cy.contains(this.data.deletedComputerName).click();
    ComputerPage.clickDeleteComputer();
    MainPage.verifyAlertMessage(
      `Done !  Computer ${this.data.deletedComputerName} has been deleted`
    );
  });
});
