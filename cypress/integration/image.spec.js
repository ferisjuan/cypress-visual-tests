describe('Visual Regression', () => {
	it('My first visual regression test', () => {
		cy.visit('http://example.com')

		// compare sections
		cy.matchImageSnapshot()
	})
})
