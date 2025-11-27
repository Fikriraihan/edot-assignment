const BASE_URL = "https://www.giovankov.com/api";

export async function getProducts() {
  const res = await fetch(`${BASE_URL}/product.json`);
  const json = await res.json();
  return json.data;
}

export async function getImages() {
  const res = await fetch(`${BASE_URL}/image.json`);
  const json = await res.json();
  return json.data;
}
