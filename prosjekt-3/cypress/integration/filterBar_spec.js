/*  Tests for the FilterBar component */

describe("Select tags", () => {
  context("verify that the tags exists", () => {
    beforeEach(() => {
      cy.visit("/");
    });

    it("checks if the tags are present", () => {
      /* Checks the values within the filter div
       *  <div className="filter-tags">
       * */
      cy.get(".filter-tags")
        .children()
        .should("contain", "Main")
        .and("contain", "Dessert")
        .and("contain", "Snack")
        .and("contain", "Soup")
        .and("contain", "Vegetarian");
    });
  });

  context("single value", () => {
    beforeEach(() => {
      cy.visit("/");
    });
    it("checks and uncheks a tag", () => {
      // set using value
      // <div className="filter-tags">
      cy.get(
        "#dessert > .MuiButtonBase-root > .MuiIconButton-label > .PrivateSwitchBase-input-8"
      ).check();
      cy.get(
        "#dessert > .MuiButtonBase-root > .MuiIconButton-label > .PrivateSwitchBase-input-8"
      ).uncheck();
    });
    it("sets a tag and checks that the first recipe is updated", () => {
      cy.get(
        "#soup > .MuiButtonBase-root > .MuiIconButton-label > .PrivateSwitchBase-input-8"
      ).check();

      cy.get(
        ":nth-child(1) > :nth-child(1) > .MuiButtonBase-root > .MuiButton-label"
      ).contains('"Vegetarian Chili"');
    });

    it("sets a tag an verifies that the recipe's tag matches", () => {
      cy.get(
        "#soup > .MuiButtonBase-root > .MuiIconButton-label > .PrivateSwitchBase-input-8"
      ).check();
      cy.get(
        ":nth-child(1) > :nth-child(1) > .MuiButtonBase-root > .MuiButton-label"
      ).trigger("click");
      cy.get(".MuiDialogContent-root > :nth-child(4)").contains("soup");
    });
  });

  context("multiple values", () => {
    beforeEach(() => {
      cy.visit("/");
    });
    it("sets multiple tags", () => {
      cy.get(
        "#main > .MuiButtonBase-root > .MuiIconButton-label > .PrivateSwitchBase-input-8"
      ).check();

      cy.get(
        "#vegetarian > .MuiButtonBase-root > .MuiIconButton-label > .PrivateSwitchBase-input-8"
      ).check();

      /* cy.get(".filter-tags")
        .invoke("val")
        .should("deep.equal", ["main", "vegetarian"]); */

      //remove the focus from the checkbox
      //cy.get("samme id her").blur();
    });
  });
});
