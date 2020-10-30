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
    });

    it("sets back to asc sorting", () => {
      //<option value="name asc">Alphabet - A-Z</option>
      cy.get("#sortBar").select("Alphabet - A-Z");

      //Confirm the selected value
      cy.get("#sortBar").should("have.value", "name asc");
    });
  });
});
