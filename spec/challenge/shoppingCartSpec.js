describe('Shopping Cart', () => {
	const shoppingCart = require('../../js/challenge/shoppingCart');

	it('should return an empty shopping cart', () => {
		const newShoppingCart = new shoppingCart();
		expect(newShoppingCart.calculateTotalPrice()).toEqual(0);
	});

	it('should return the total price of 39.99 for 1 product', () => {
		const product = {
			name: 'Dove Soap',
			unitPrice: 39.99,
			quantity: 1,
			taxRate: 0
		};
		const newShoppingCart = new shoppingCart();
		newShoppingCart.addProducts([product]);
		expect(newShoppingCart.calculateTotalPrice()).toEqual(39.99);
	});

	it('should return the total price of 199.95 for 5 products', () => {
		const product = {
			name: 'Dove Soap',
			unitPrice: 39.99,
			taxRate: 0
		};

		const newShoppingCart = new shoppingCart();
		newShoppingCart.addProducts([product, product, product, product, product]);
		expect(newShoppingCart.calculateTotalPrice()).toEqual(199.95);
	});

	it('should return the total quantity of 5 products', () => {
		const product = {
			name: 'Dove Soap',
			unitPrice: 39.99,
			taxRate: 0
		};
		const products = [product, product, product, product, product];
		const newShoppingCart = new shoppingCart(products);
		newShoppingCart.addProducts([product, product, product, product, product]);
		expect(newShoppingCart.getQuantity(product)).toEqual(5);
	});

	it('should return the total price of 319.92 for 8 dove soaps', () => {
		const product = {
			name: 'Dove Soap',
			unitPrice: 39.99,
			taxRate: 0
		};

		const newShoppingCart = new shoppingCart();
		newShoppingCart.addProducts([product, product, product, product, product]);
		newShoppingCart.addProducts([product, product, product]);
		expect(newShoppingCart.calculateTotalPrice()).toEqual(319.92);
	});

	it('should return the total price including the tax rate of 314.96 for 2 dove soaps and 2 axe deo', () => {
		const product_dove = {
			name: 'Dove Soap',
			unitPrice: 39.99,
			taxRate: 12.5
		};
		const product_axe = {
			name: 'Axe Deo',
			unitPrice: 99.99,
			taxRate: 12.5
		};

		const newShoppingCart = new shoppingCart();
		newShoppingCart.addProducts([product_dove, product_dove]);
		newShoppingCart.addProducts([product_axe, product_axe]);
		expect(newShoppingCart.calculateTotalPrice()).toEqual(314.96);
	});

});
