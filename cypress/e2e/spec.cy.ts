describe("Pages", () => {
  it("homepage", () => {
    cy.visit("http://localhost:4321");
    cy.contains("Technical Leader");
  });

  it("blog archive", () => {
    cy.visit("http://localhost:4321/blog");
    cy.contains("Blog archive");
  });

  it("blog post", () => {
    cy.on("uncaught:exception", () => false);

    cy.visit("http://localhost:4321/blog/technical-leadership");
    cy.contains("Technical Leadership");
  });

  it("CV", () => {
    cy.visit("http://localhost:4321/cv");
    cy.contains("Professional Employment");
  });
});
