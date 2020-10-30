/* Test for the SortBar component */

describe("HTML select element", () => {
  context("single sort value", () => {
    beforeEach(() => {
      cy.visit("/");
    });
    it("sets desc sorting", () => {
      // set using value
      // <select id="sortBar">
      // <option value="name desc">Alphabet - Z-A</option>
      cy.get("#sortBar").select("Alphabet - Z-A");

      //Confirm the selected value
      cy.get("#sortBar").should("have.value", "name desc");
      cy.get(
        ":nth-child(3) > :nth-child(1) > .MuiButtonBase-root > .MuiButton-label"
      ).should("have.text", "White sangria");
    });

    it("sets to desc sorting, then back to asc sorting", () => {
      //<option value="name asc">Alphabet - A-Z</option>
      cy.get("#sortBar").select("Alphabet - Z-A");

      //Confirm the selected value
      cy.get("#sortBar").should("have.value", "name desc");
      cy.get(
        ":nth-child(3) > :nth-child(1) > .MuiButtonBase-root > .MuiButton-label"
      ).trigger("click");
      cy.get('[style="display: flex;"] > .MuiTypography-root').should(
        "have.text",
        "White sangria"
      );
      cy.get(
        '[style="display: flex;"] > .MuiButtonBase-root > .MuiButton-label'
      ).trigger("click");

      cy.get("#sortBar").select("Alphabet - A-Z");
      cy.get(
        ":nth-child(3) > :nth-child(1) > .MuiButtonBase-root > .MuiButton-label"
      ).trigger("click");
      cy.get('[style="display: flex;"] > .MuiTypography-root').should(
        "have.text",
        "Aged Eggnog"
      );
    });
  });
});
