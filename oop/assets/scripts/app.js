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
    App.addProductToCart(this.product);
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

  set cartItem(products) {
    this.items = products;
    this.totalOutput.innerHTML = `Total: \$${this.totalAmount}`;
  }

  get totalAmount() {
    const sum = this.items.reduce((prevValue, currentItem) => {
      return prevValue + currentItem.price;
    }, 0);
    return sum;
  }

  addItem(product) {
    this.items = [...this.items, product];
  }

  render() {
    const cartElement = document.createElement('section');
    cartElement.className = 'cart';
    cartElement.innerHTML = `
      <h2>Total: \$${0}</h2>
      <button>Order Now</button>
    `;

    const orderButton = cartElement.querySelector('button');
    this.totalOutput = cartElement.querySelector('h2');
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
    this.cart = new ShoppingCart();
    const cartElement = this.cart.render();
    const productList = new ProductList();
    const productListElement = productList.render();
    renderHook.append(cartElement);
    renderHook.append(productListElement);
  }
}

class App {
  static init() {
    const shop = new Shop();
    shop.render();
    this.cart = shop.cart;
  }

  static addProductToCart(product) {
    this.cart.addItem(product);
  }
}

App.init();