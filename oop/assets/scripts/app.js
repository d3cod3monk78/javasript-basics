class Product {
  constructor(title, imageUrl, description, price) {
    this.title = title;
    this.imageUrl = imageUrl;
    this.description = description;
    this.price = price;
  }
}

class ProductItem {
  constructor(product) {
    this.product = product;
  }

  addToCart() {
    console.log(this.product);
  }

  render() {
    const productElement = document.createElement('li');
    productElement.className = 'product-item';
    productElement.innerHTML = `
      <div>
        <img src="${this.product.imageUrl}" alt="${this.product.title}" />
        <div class="product-item__content">
          <h2>
            ${this.product.title}
          </h2>
          <h3>
            \$${this.product.price}
          </h3>
          <p>
            ${this.product.description}
          </p>
          <button>Add To Cart</button>
        </div>
      </div>
    `;
    const addCartButton = productElement.querySelector('button');
    addCartButton.addEventListener('click', this.addToCart.bind(this));
    return productElement;
  }
}

class ShoppingCart {
  items = [];

  render() {
    const cartElement = document.createElement('section');
    cartElement.className = 'cart';
    cartElement.innerHTML = `
      <h2>Total: \$${0}</h2>
      <button>Order Now</button>
    `;

    const orderButton = cartElement.querySelector('button');
    return cartElement;
  }
}

class ProductList {
  products = [
    new Product('A Pillow', 'https://images.pexels.com/photos/1248583/pexels-photo-1248583.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', 'A soft pillow!', 19.99),
    new Product('A Carpet', 'https://images.pexels.com/photos/2555533/pexels-photo-2555533.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', 'A carpet which you might like - or not.', 89.99)
  ];

  constructor() {

  }

  render() {
    const productList = document.createElement('ul');
    productList.className = 'product-list';
    for (const product of this.products) {
      const productElement = new ProductItem(product).render();
      productList.append(productElement);
    }
    return productList;
  }
}


class Shop {
  constructor() {

  }

  render() {
    const renderHook = document.getElementById('app');
    const cart = new ShoppingCart();
    const cartElement = cart.render();
    const productList = new ProductList();
    const productListElement = productList.render();
    renderHook.append(cartElement);
    renderHook.append(productListElement);
  }
}

new Shop().render();