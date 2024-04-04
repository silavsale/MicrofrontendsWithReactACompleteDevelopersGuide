// const Cart = () => {
//   return <div>Cart</div>;
// };

// export default Cart;

import faker from 'faker';


const mount = (el) => {
    const cartText = `<div>You have ${faker.random.number()} items in your cart</div>`;

    el.innerHTML = cartText;
}


if (process.env.NODE_ENV === 'development') {
    console.log('CART APP - mode development');
    const el = document.querySelector('#dev-cart');
    console.log('Cart APP el', el);

    // Assuming our container doesnt have an element
    // with id 'dev-cart'...
    if (el) {
      // We are probably running in isolation
      mount(el);
    }
  }

// document.querySelector('#dev-cart').innerHTML = cartText;

export { mount}