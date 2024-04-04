import faker from 'faker';

const mount = (el) => {
  let products = '';

  for (let i = 0; i < 5; i++) {
    const name = faker.commerce.productName();
    products += `<div>${i + 1}) ${name}.</div>`;
  }

  el.innerHTML = products;

  // if using React
  // ReactDOM.render(<App/>, el)
};

// Context/ Situation #1
// We are running this file in development in isolation
// We are using our local index.html file
// Which DEFENETLY has an element with an id of 'dev-products'
// We want to immediately render our app into that element
if (process.env.NODE_ENV === 'development') {
  console.log('Products APP - mode development');

  const el = document.querySelector('#dev-products');
  console.log('Products APP el', el);

  // Assuming our container doesnt have an element
  // with id 'dev-products'...
  if (el) {
    // We are probably running in isolation
    mount(el);
  }
}
// Context/ Situation #2
// We are running this file in development or production
// through the CONTAINER app
// No GUARANTEE that an element with an id of 'dev-products' exist
// WE do not want try to immediately render the app

export { mount };
