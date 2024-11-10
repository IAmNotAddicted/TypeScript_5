import { Electronics } from './models/Electronics';
import { Clothing } from './models/Clothing';
import { Book } from './models/Book';
import { findProduct, filterByPrice } from './utils/productFunctions';
import { addToCart, calculateTotal, CartItem } from './utils/cartFunctions';

const electronics: Electronics[] =
[
  { id: 1, name: "Телефон", price: 10000, category: 'electronics', warrantyPeriod: 24 }
];

const clothing: Clothing[] =
[
  { id: 2, name: "Футболка", price: 500, category: 'clothing', size: 'M', material: 'cotton' }
];

const books: Book[] =
[
  { id: 3, name: "Книга", price: 300, category: 'book', author: "Автор", pages: 200 }
];

const phone = findProduct(electronics, 1);
console.log("Знайдений товар:", phone);

let cart: CartItem<Electronics | Clothing | Book>[] = [];
if (phone)
{
  cart = addToCart(cart, phone, 1);
}

const total = calculateTotal(cart);
console.log("Загальна вартість кошика:", total);

const affordableClothes = filterByPrice(clothing, 600);
console.log("Доступний одяг:", affordableClothes);
