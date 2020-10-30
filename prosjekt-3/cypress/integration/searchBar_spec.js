/*  Test for the SeachBar component */

beforeEach(() => {
  cy.visit("/");
});

describe("Home Page", () => {
  it("renders the frontpage", () => {
    cy.visit("/");
  });

  it("search field available", () => {
    //cy.get('input[name=search for recipes]').type('pie')
    cy.get("#searchBar");
  });

  it("user can search in searchfield"),
    () => {
      cy.pause();
      cy.get("#outlined-basic")
        .type("pie")
        .should(($TextField) => {
          expect($TextField).to.have.length(3);
        });
    };
});
