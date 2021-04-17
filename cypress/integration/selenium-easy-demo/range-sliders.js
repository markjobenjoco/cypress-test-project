describe('Practice for Range Sliders', () => {
  beforeEach('Navigate to page', () => {
    cy.visit('/drag-drop-range-sliders-demo.html')
    cy.url().should('contain', '/drag-drop-range-sliders-demo')
  })
  it('Test for Range Sliders', () => {
    setSliderTo(1, 13.54)
    setSliderTo(2, 23)
    setSliderTo(3, 33)
    setSliderTo(4, 43)
    setSliderTo(5, 53)
    setSliderTo(6, 63)
  })
  function selectSliderById(id) {
    const sliderId = (id) => `[id="slider${id}"]`
    return cy.get(sliderId(id))
  }
  function setSliderTo(id, value) {
    const modifiedValue = Math.floor(value)
    selectSliderById(id).within(() => {
      cy.get('[type="range"]').invoke('val', modifiedValue).trigger('change')
      cy.get('output').invoke('text').should('eq', modifiedValue.toString())
    })
  }
})
