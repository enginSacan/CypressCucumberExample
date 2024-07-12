import { expect } from "chai";

export class ProductPage {

    checkAllProductHeaders (product) {
        cy.get(".a-size-base-plus.a-color-base.a-text-normal").each(
            (item,index,list) => {
                cy.wrap(item).invoke('text').then( (str) => {
                    const lowerCaseString = str.toLowerCase();
                    expect(lowerCaseString).to.contains(product);
                })            
            }
        )
    }

}
export const productPage = new ProductPage();