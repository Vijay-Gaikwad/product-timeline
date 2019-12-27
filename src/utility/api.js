import _ from 'lodash';
_.mixin({
    /**
     * Parse the product object.
     * Change the quantity.
     * @param {object} products, @param {number} id, @param {bool} operatorFlag
     */
    changeProductsQuantity: (id = 0, products = {}, operatorFlag) => {
        products.products[id].quantity = (operatorFlag === 0) ? (products.products[id].quantity + 1) : (products.products[id].quantity - 1);
        return products
    },

    /**
         * Parse the product object.
         * Create cart opject.
         * @param {object} products
         * return true
         */
    findChangedQuantity: (products = {}) => {
        let cart = [];
        if (products) {
            products.forEach(element => {
                let products = [];
                element.products.forEach(item => {
                    if (item.quantity > 0) {
                        products.push(item);
                        cart.push({ "year": element.year, "products": products })
                        const cart1 = _.uniqBy(cart, "year");
                        localStorage.setItem("cart", JSON.stringify(cart1));
                    }
                    return true;
                });
                return true;
            });
        }
    },

    /**
         * Parse the product object and add all quantities.
         * @param {object} products
         * return quantity.
         */

    totalQuantity: (products = {}) => {
        let quantity = 0
        _.map(products, (item) => {
            const totalQuantity = _.sumBy(item.products, (product) => {
                return product.quantity++;
            })
            quantity = totalQuantity + quantity
        });
        return quantity;
    },

    /**
         * @param {object} products, @param {string}title, @param {string} description , @param {number} year.
         * return true
         */
    addProduct: (products = {}, title = "", desc = "", year = 0) => {
        const newProduct = {
            title,
            "image": "",
            desc,
            year, "quantity": 0
        }
        if (products) {
            const product = _.findIndex(products, { year });
            if(products[product].products.length<4){
                products[product].products.push(newProduct);
                localStorage.setItem("products", products);
                return true;
            }
            return false;
        }
    }
})