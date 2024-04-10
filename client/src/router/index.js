import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import NotFound from "../views/404Page.vue";
import About from "../views/About.vue"; 
import AddCategory from "../views/Category/addCategory.vue";
import AllProducts from "../views/AllProducts.vue"
import LoginSignUp from "../views/LoginSignup.vue"
import Register from "../components/loginsignup/SignUp.vue"
import Cart from "../views/Cart.vue"
import ProductDetail from "../components/allproduct/ProductDetails.vue"
const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    component: About,
  },
  {
    path: "/allproducts",
    name: "AllProducts",
    component: AllProducts,
  },
  {
    path: "/allproducts/:id",
    name: "ProductsDetails",
    component: ProductDetail,
  },
  {
    path: "/loginsignup",
    name: "LoginSignUp",
    component: LoginSignUp,
  },
  {
    path: "/loginsignup/register",
    name: "Register",
    component: Register,
  },
  {
    path: "/cart",
    name: "Cart",
    component: Cart,
  },
  {
    path: "/admin/category/add",
    name: "AddCategory",
    component: AddCategory,
  },
  {
    path: "/:pathMatch(.*)*",
    component: NotFound,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
