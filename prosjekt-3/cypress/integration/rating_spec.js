describe("User rating", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("mocks a user rating", () => {
    cy.get(
      ":nth-child(1) > :nth-child(1) > .MuiButtonBase-root > .MuiButton-label"
    ).trigger("click");
    cy.get(".MuiBox-root").should("contain", "Rating");
    cy.get('[for="simple-controlled-3"]').trigger("click");
  });
});
