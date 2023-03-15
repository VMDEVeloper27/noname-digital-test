export function fetchProducts() {
  return fetch(`https://637b17c010a6f23f7f9f2d44.mockapi.io/contacts`);
}
export function fetchProductbyId(id) {
  return fetch(
    `
https://637b17c010a6f23f7f9f2d44.mockapi.io/contacts/${id}`
  );
}
