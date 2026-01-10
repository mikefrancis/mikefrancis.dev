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

describe("Security Headers", () => {
  it("should have all required security headers", () => {
    cy.request("http://localhost:4321").then((response) => {
      // Content Security Policy
      expect(response.headers).to.have.property("content-security-policy");
      expect(response.headers["content-security-policy"]).to.include(
        "default-src 'self'"
      );

      // Referrer Policy
      expect(response.headers).to.have.property("referrer-policy");
      expect(response.headers["referrer-policy"]).to.equal(
        "strict-origin-when-cross-origin"
      );

      // X-Frame-Options
      expect(response.headers).to.have.property("x-frame-options");
      expect(response.headers["x-frame-options"]).to.equal("DENY");

      // X-Content-Type-Options
      expect(response.headers).to.have.property("x-content-type-options");
      expect(response.headers["x-content-type-options"]).to.equal("nosniff");

      // X-DNS-Prefetch-Control
      expect(response.headers).to.have.property("x-dns-prefetch-control");
      expect(response.headers["x-dns-prefetch-control"]).to.equal("on");

      // Strict-Transport-Security
      expect(response.headers).to.have.property("strict-transport-security");
      expect(response.headers["strict-transport-security"]).to.equal(
        "max-age=31536000; includeSubDomains; preload"
      );

      // Permissions-Policy
      expect(response.headers).to.have.property("permissions-policy");
      expect(response.headers["permissions-policy"]).to.equal(
        "camera=(), microphone=(), geolocation=()"
      );
    });
  });
});
