import React from "react";
import Homepage from "../../pages/user/HomePage/homepage";
import { Route, Routes, Outlet, Router, Navigate } from "react-router-dom";
import ProductDetail from "../../pages/user/ProductPage/ProductDetail";
import Header from "../../pages/user/theme/header/Header";
import Menubar from "../../component/menuBar/Menubar";
import Footer from "../../pages/user/theme/footer/Footer";
import LoginRegister from "../../pages/login-reg/LoginRegister";
import Cart from "../../pages/user/cart/Cart";
import CategoryPage from "../../pages/user/categoryPage/CategoryPage";
import AdminHomePage from "../../pages/admin/pages/homePage/AdminHomePage";
import Sidebar from "../../pages/admin/components/sideBar/Sidebar";
import RightBar from "../../pages/admin/components/rightBar/RightBar";
import AdminNavBar from "../../pages/admin/components/navBar/AdminNavBar";
import AdminUsersPage from "../../pages/admin/pages/users/adminUsersPage";
import Productlist from "../../component/Productlist/Productlist";
import AdminProductsList from "../../pages/admin/pages/product/AdminProductsList";
import AddProduct from "../../pages/admin/pages/addProduct/AddProduct";
import RegisterScreen from "../../pages/login-reg/RegisterScreen";
import AdminLogin from "../../pages/admin/pages/admin-login/AdminLogin";
const renderUserRouter = () => {
    const admin = JSON.parse(localStorage.getItem('user'))
    const userRouters = [
        {
            path: "/",
            component: <Homepage />
        },
        {
            path: "/sanpham/:id/:title",
            component: <ProductDetail />
        },
        {
            path: "/danh-muc-san-pham/:link",
            component: <CategoryPage />
        },
        {
            path: "/gio-hang",
            component: <Cart />
        }
    ]
    const adminRouters = [
        {
            path: "/admin/dashboard",
            component: <AdminHomePage />
        },
        {
            path: "/admin/",
            component: <AdminHomePage />
        },
        {
            path: "/admin/users",
            component: <AdminUsersPage />
        },
        {
            path: "/admin/products",
            component: <AdminProductsList />
        },
        {
            path: "/admin/addproduct",
            component: <AddProduct />
        },

    ]
    return (
        <Routes>
            <Route path="/" element={
                <>
                    <Header />
                    <Menubar />
                    <Outlet />
                    <Footer />
                </>
            } >
                {userRouters.map((item, key) => (
                    <Route key={key} path={item.path} element={item.component} />
                ))}
            </Route>
            <Route path="/" element={
                <>
                    <Header />
                    <Menubar />
                    <Outlet />
                    <Footer />
                </>
            }
            >
            <Route path="/them-vao-gio-hang" element={<Cart />} />
            </Route>
            <Route path="/dangnhap" element={<LoginRegister />} />
            <Route path="/dangky" element={<RegisterScreen />} />
                    <Route path="/admin" element={
                        admin ?
                        <div className="admin-container">
                            <Sidebar />
                            <Outlet />
                            <RightBar />
                        </div>  : <Navigate to='/admin/login'/>
                    }>
                        {adminRouters.map((item, key) => (
                            <Route key={key} path={item.path} element={item.component} />
                        ))}
                    </Route>
                    <Route path="/admin/login" element = { admin ?
                     <Navigate to = '/admin'/> :
                        <AdminLogin/> 
                    } />
        </Routes>
    )
}
const RouterCustom = () => {
    return renderUserRouter()
}
export default RouterCustom