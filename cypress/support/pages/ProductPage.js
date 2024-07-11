export class ProductPage {

    checkAllProductHeaders (product) {
        cy.get(".a-size-base-plus.a-color-base.a-text-normal").each(
            (item,index,list) => {
                cy.wrap(item).should('contain.text',product)
            }
        )
    }

}
export const productPage = new ProductPage();