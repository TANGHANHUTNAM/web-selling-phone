import AdminLayout from "../layouts/admin.vue";
import Product from "../components/admin/product/product.vue";
import Order from "../components/admin/order/order.vue";
import Feedback from "../components/admin/feedback/feedback.vue";
import User from "../components/admin/user/user.vue";
import Login from "../components/admin/login/login.vue"
import AddProduct from "../components/admin/product/add_product.vue";
import EditProduct from "../components/admin/product/edit_product.vue";
import OutOfStockProduct from "../components/admin/product/out_of_stock_product.vue";
import UpdateProduct from "../components/admin/product/update_product.vue";
import FeedbackApproved from "../components/admin/feedback/feedbackApproved.vue";
import FeedbackPending from "../components/admin/feedback/feedbackPending.vue";
import PendingOrder from "../components/admin/order/pending_order.vue";
import ApprovedOrder from "../components/admin/order/approved_order.vue";
const admin = [
    {
        path: "/admin",
        name: "AdminLayout",
        component: AdminLayout,
        children: [
            {
                path: "product" ,
                name: "admin-product",
                component: Product,
                children: [
                    {
                        path: "add",
                        name: "admin-product-add",
                        component: AddProduct,
                    },
                    {
                        path: "edit",
                        name: "admin-product-edit",
                        component: EditProduct,
                    },
                    {
                        path: "out-of-stock-product",
                        name: "admin-product-out-of-stock-product",
                        component: OutOfStockProduct,
                    },
                    {
                        path: "update/:id",
                        name: "admin-product-update",
                        component: UpdateProduct,
                    }
                ]
            },
            {
                path: "user" ,
                name: "admin-user",
                component: User,
            },
            {
                path: "order" ,
                name: "admin-order",
                component: Order,
                children: [
                    {
                        path: "pending",
                        name: "admin-order-pending",
                        component: PendingOrder,
                    },
                    {
                        path: "approved",
                        name: "admin-order-approved",
                        component: ApprovedOrder,
                    }
                ]
            },
            {
                path: "feedback" ,
                name: "admin-feedback",
                component: Feedback,
                children: [
                    {
                        path: "pending",
                        name: "admin-feedback-pending",
                        component: FeedbackPending,
                    },
                    {
                        path: "approved",
                        name: "admin-feedback-approved",
                        component: FeedbackApproved,
                    },
                ]
            },
            {
                path: "login" ,
                name: "admin-login",
                component: Login,
            }
        ],
    }
];

export default admin;