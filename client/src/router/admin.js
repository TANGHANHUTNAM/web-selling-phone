import AdminLayout from "../layouts/admin.vue";
import Product from "../components/admin/product/product.vue";
const admin = [
    {
        path: "/admin",
        name: "AdminLayout",
        component: AdminLayout,
        children: [
            {
                path: "products" ,
                name: "admin-product",
                component: Product,
            }
        ],
    }
];

export default admin;