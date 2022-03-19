context('Simulation', () => {
  beforeEach(function () {
    cy.viewport(1440, 900);
    cy.visit('http://localhost:3000');
  });

  it('Try to get more users', () => {
    cy.contains('Load more').click();
    cy.get('tbody').children().should('have.length', 73);
    cy.contains('Load more').click();

    cy.get('tbody').children().should('have.length', 107);
  });

  it('Try to search a valid user', () => {
    cy.get('input').type('Ian Gardner').should('have.value', 'Ian Gardner');
    cy.get('tbody').children().should('have.length', 1).contains('Ian Gardner');
  });

  it('Try to search a invalid user', () => {
    cy.get('input').type('Abc').should('have.value', 'Abc');
    cy.get('tbody').children().should('have.length', 0);
  });

  it('Try to open user information', () => {
    cy.contains('Harry Bailey').siblings().contains('View').click();
    cy.contains('harry.bailey@example.com');
    cy.contains('male');
    cy.contains('(314)-242-2678');
    cy.contains('US');
    cy.contains('Fairview St, 938, Kent - Minnesota, 16934');
    cy.contains('http://localhost:3000/profile/1/672-18-5465');
  });

  it('Try to open user information by URL', () => {
    cy.visit('http://localhost:3000/profile/1/672-18-5465');
    cy.contains('harry.bailey@example.com');
    cy.contains('male');
    cy.contains('(314)-242-2678');
    cy.contains('US');
    cy.contains('Fairview St, 938, Kent - Minnesota, 16934');
    cy.contains('http://localhost:3000/profile/1/672-18-5465');
  });

  it('Try to close user information', () => {
    cy.contains('Harry Bailey').siblings().contains('View').click();
    cy.contains('Close').click();
    cy.contains('harry.bailey@example.com').should('not.exist');
    cy.contains('(314)-242-2678').should('not.exist');
    cy.contains('US').should('not.exist');
    cy.contains('Fairview St, 938, Kent - Minnesota, 16934').should(
      'not.exist'
    );
    cy.contains('http://localhost:3000/profile/1/672-18-5465').should(
      'not.exist'
    );
  });
});
