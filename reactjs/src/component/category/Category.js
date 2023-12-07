import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from "react-router-dom";
// import { fetchProductList } from "../../redux/api/productListAPI";
const Category = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [categories, setCategory] = useState([])
    useEffect(() => {
        const category = [
            {
                src: "/assets/img/than_kinh_nao.webp",
                name: "thần kinh não",
                link: "than-kinh-nao"
            },
            {
                src: "/assets/img/tpcn_vitamin_khoang_chat_.webp",
                name: "Vitamin khoáng chất",
                link: "vitamin-khoang-chat"
            },
            {
                src: "/assets/img/suc_khoe_tim_mach.webp",
                name: "Sức khoẻ tim mạch",
                link: "suc-khoe-tim-mach"
            },
            {
                src: "/assets/img/tang_suc_de_khang_mien_dich.webp",
                name: "Tăng sức đề kháng, miễn dịch",
                quantity: "tang-suc-de-khang-mien-dich"
            },
            {
                src: "/assets/img/ho_tro_tieu_hoa.webp",
                name: "Hỗ trợ tiêu hoá",
                link: "ho-tro-tieu-hoa"
            },
            {
                src: "/assets/img/than_kinh_nao.webp",
                name: "Sinh lý - nội tiết tố",
                link: "sinh-ly-noi-tiet-to"
            },
        ]
        setCategory(category)
    }, [])
    console.log(categories)
    const handleCategoryPage = (item) => {
        navigate("danh-muc-san-pham"+ "/" + item.link)
    }
    return (
        <div className="category-list">
            {categories?.map(item => (
                <div className="category-item">
                    <a href="" onClick={()=> {
                        handleCategoryPage(item)
                    }}>
                        <div className="item-img">
                            <img src={item.src} alt="" />
                        </div>
                        <div className="category-name">
                            <p> {item.name}</p>
                        </div>
                        <div className="quantity-product">
                            
                        </div>
                    </a>
                </div>
            ))}

        </div>
    );
};

export default Category;