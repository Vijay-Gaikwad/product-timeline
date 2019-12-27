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
    },

    /**
         * Parse the product object.
         * Change the quantity.
         * @param {object} products
         */
    findChangedQuantity: (products) => {
        let cart = [];
        if (products) {
            products.forEach(element => {
                let products = [];
                element.products.forEach(item => {
                    if (item.quantity > 0) {
                        products.push(item);
                        cart.push({ "year": element.year, "products": products })
                        const cart1 = _.uniqBy(cart,"year");
                        localStorage.setItem("cart", JSON.stringify(cart1));
                    }
                    return true;
                });
                return true;
            });
        }
    }
})