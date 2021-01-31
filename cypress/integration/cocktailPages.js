describe("cocktailPages", () => {
  it("Renders HP", () => {
    cy.visit("http://localhost:3000");
    cy.contains("Projet EEMI");
  });

  it("click on menu and render list cocktails", () => {
    cy.get(`nav a:nth-child(2)`).contains("Liste").click();
    cy.url().should("include", "/posts/list");
  });

  it("Render 25 cards", () => {
    cy.visit("http://localhost:3000/posts/list");
    cy.contains("A1");
    cy.get(".card").should("have.length", 25);
  });

  it("render one card", () => {
    cy.get(".card-group .col-sm-4:first-child").click();
    cy.get("#cocktailName").then(() => {
      cy.url().should("include", "/posts/list/17222");
    });
  });

  it("Render good informations", () => {
    cy.visit("http://localhost:3000/posts/list/17222");
    cy.contains("A1");
    cy.contains("Type de verre");
    cy.contains("Cocktail glass");
    cy.contains("Ingrédients et mesure");
  });
});
