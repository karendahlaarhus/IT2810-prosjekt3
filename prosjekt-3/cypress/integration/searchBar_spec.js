/*  Test for the SeachBar component */

const { isContext } = require("vm");

beforeEach(() => {
  cy.visit("/");
});

describe("Search in search field", () => {
  context("User searching", () => {
    it("renders the frontpage", () => {
      cy.visit("/");
    });

    it("search field available", () => {
      //cy.get('input[name=search for recipes]').type('pie')
      cy.get("#searchBar");
    });

    it("searches for a recipe", () => {
      cy.get("#outlined-basic").type("pie").wait(1000);
      cy.get(
        ":nth-child(1) > :nth-child(1) > .MuiButtonBase-root > .MuiButton-label"
      ).trigger("click");
      cy.get('[style="display: flex;"] > .MuiTypography-root').should(
        "contain",
        "Pie"
      );
    });
  });
  context("User searching and filtering", () => {
    it("searches and sets tags", () => {
      cy.get("#outlined-basic").type("pie");
      cy.get(
        "#dessert > .MuiButtonBase-root > .MuiIconButton-label > .PrivateSwitchBase-input-8"
      )
        .trigger("click")
        .wait(1500);
      cy.get(
        ":nth-child(2) > :nth-child(1) > .MuiButtonBase-root > .MuiButton-label"
      ).trigger("click");
      cy.get('[style="display: flex;"] > .MuiTypography-root').should(
        "contain",
        "Pie"
      );
      cy.get(".MuiDialogContent-root > :nth-child(4)").contains("dessert");
    });
  });
});
