describe("simplePages", () => {
  it("Renders HP", () => {
    cy.visit("http://localhost:3000");
    cy.contains("Projet EEMI");
  });

  it("Renders Mentions Legales", () => {
    cy.get(`footer a`).click();
    cy.url().should("include", "/mentions");
  });

  it("when visit mentions good elems", () => {
    cy.visit("http://localhost:3000/mentions");
    cy.contains("Copyright 2021 Lucille VAN LAER and Pauline FERAUT");
  });

  it("Renders Contact", () => {
    cy.get(`nav a:last-child`).click();
    cy.url().should("include", "/contact");
  });

  it("when visit contact good elems", () => {
    cy.visit("http://localhost:3000/contact");
    cy.contains("Contact");
    cy.get("#form");
  });

  it("Renders HP again", () => {
    cy.get(`nav a:first-child`).contains("Accueil").click();
    cy.url().should("include", "/");
  });

  it("Renders HP", () => {
    cy.visit("http://localhost:3000");
    cy.contains("Projet EEMI");
  });
});
