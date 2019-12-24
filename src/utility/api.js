import _ from 'lodash';
// import productsConstant from "../constants/constant.json"

_.mixin({
    /**
     * Parse the product object.
     * Change the quantity.
     * @param {object} products
     */
    changeProductsQuantity: (id = 0, products = {}, operatorFlag) => {
        products.products[id].quantity = (operatorFlag === 0) ? (products.products[id].quantity + 1) : (products.products[id].quantity - 1);
        return products
    }
})