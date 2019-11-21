class shoppingCart {
  constructor() {
    this.products = [];
  }

  getQuantity(product) {
    const reducedArray = this.products.filter((currentItem) => {
      return currentItem.name === product.name;
    })
    return reducedArray.length;
  }

  //methods
  addProducts(products) {
    this.products.push(...products);
  }

  calculateTotalPrice() {
    if (this.products.length === 0) return 0;

    const totalPrice = this.products.reduce((accumulator, currentItem) => {
      const taxValue = (currentItem.taxRate/100) * currentItem.unitPrice;
      return accumulator + (parseFloat(parseFloat(taxValue).toFixed(2)) + currentItem.unitPrice);
    }, 0);

    return parseFloat(parseFloat(totalPrice).toFixed(2));
  }
}

module.exports = shoppingCart;
