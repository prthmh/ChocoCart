# ChocoCart
ChocoCart is an e-commerce application to but different kinds of chocolates online.
## Live project: [ChocoCart](https://chococart.netlify.app/ "Live Project link")

### Tech Stack : <img src="https://cdn.worldvectorlogo.com/logos/html-1.svg" width="25" height="25" alt="html" /> <img src="https://cdn.worldvectorlogo.com/logos/css-3.svg" width="25" height="25" alt="css" /> <img src="https://cdn.worldvectorlogo.com/logos/logo-javascript.svg" width="25" height="25" alt="react" /> <img src="https://cdn.worldvectorlogo.com/logos/react-2.svg" width="25" height="25" alt="react" /> 
- **Frontend:** HTML, CSS, JavaScript, React
- **Version Control:** Git and GitHub
- **Hosting:** Netlify
- **Code Editor and tools:** VS Code
- **Backend:** MockBee

### Features:
1. **Home Page** : A home/landing page, it shows the available categories with some of the products from that category.
2. **Product Listing Page** : A product listing page which shows all the products and a filters section.
3. **Individual Product Page** : A product details page which shows the details of the products and the call to action buttons to add the product to the cart or the wishlist.
4. **Filter** : On the products listing page, the user can filter the products on the basis of category, ratings, sort the products from low to high or high to low.
5. **Search** : A search bar in the navigation bar, clicking on which the the search input opens and the user can search the products by name.
6. **Cart Management** : A cart page, which is a private route, so the user can only go to the cart page or add the product to cart if they are logged in. In the cart page, The user can update the quantity of the product, remove from cart, or move the product from the cart.
7. **Wishlist Management** : A wishlist page, which is a private route, so the user can only go to the wishlist page or add the product to wishlist if they are logged in.
8. **Loading & Alerts** : React-tostify has been used to show the alerts, when products are added to cart/wishlist, when user logs in, etc.
9. **Authentication** : The user can sign up, sign in, sign in as guest and sign out of the website.
10. **Address Management** : The user can save multiple addresses and choose from the saved address while purchasing the products.
11. **Checkout** : The user can click on the checkout button in the cart page and then choose the shipping address from the saved addresses or can add a new address. after choosing the address the user can place order by clicking on place order button.

### How to install and run locally:
```
$ git clone https://github.com/prthmh/ChocoCart.git
$ cd chococart
$ npm install
$ npm start
```
