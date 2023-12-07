// import React from "react";
// import Homepage from "./pages/user/HomePage/homepage";
// import MasterLayout from "./pages/user/theme/masterlayout/MasterLayout";
// import { Route, Routes } from "react-router-dom";
// import LoginRegister from "./pages/login-reg/LoginRegister";
// const renderUserRouter = () => {
//     const userRouters = [
//         {
//             path: "/",
//             component: <Homepage />
//         }
//     ]
//         return (
//             <>
//                 <MasterLayout>
//                     <Routes>
//                         {userRouters.map((item, key) => (
//                             <Route key={key} path={item.path} element={item.component} />
//                         ))}
//                     </Routes>
//                 </MasterLayout>
//                 <Routes>
//                     <Route path="/dangnhap" element={<LoginRegister/>}></Route>
//                 </Routes>
//             </>
//         )
// }
// const RouterCustom = () => {
//     return renderUserRouter()
// }
// export default RouterCustom