const pages = ['http://example.com']

const sizes = ['iphone-6', 'ipad-2', [1200, 800]]

describe('Visual Regression', () => {
	sizes.forEach(size => {
		pages.forEach(page => {
			it(`Should match ${page} in resolution ${size}`, () => {
				const currentTime = new Date(Date.UTC(2020, 1, 1)).getDate(currentTime)
				cy.clock()

				cy.setResolution(size)
				cy.visit(page)

				cy.matchImageSnapshot()
			})
		})
	})
})

describe('Single Element Snapshot', () => {
	it('Should macth a single element on the page', () => {
		cy.visit('http://example.com')
		// dont override the following whe in production
		cy.get('h1').matchImageSnapshot({
			failureTreshold: 10.0,
			failureTresholdType: 'pixels',
		})
	})
})
