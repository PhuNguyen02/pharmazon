import React, { useEffect,useRef,useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { fetchUserList,RegisterUser} from '../../redux/api/userAPI';
const RegisterScreen = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch()
    const users =  useSelector(state => state.auth)
    const inputFullNameRef = useRef()
    const inputPsdRef = useRef()
    const inputEmailRef = useRef()
    const inputRePsdRef = useRef()
    const {id} = useParams()
    const initialValues = { fullname: "", email: "", password: "", repassword:"" };
    const [formValues, setFormValues] =  useState(initialValues);
    const [formErrors, setFormErrors] = useState({});
    console.log(users);
    useEffect(() => {
        if (!id) return;
        const user = users.find((x) => Number(x.id) === Number(id));
        if(user) {
            inputFullNameRef.current.value = user.fullname
            inputPsdRef.current.value = user.password
            inputEmailRef.current.value = user.repassword
        }

    },[])
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormValues({ ...formValues, [name]: value });
      };
    
    const handleSubmit = async(e) => {
        e.preventDefault()
        const user = {
            fullname: inputFullNameRef?.current?.value,
            email: inputEmailRef?.current?.value,
            password: inputPsdRef?.current?.value,
            repassword: inputRePsdRef?.current?.value,
        }
        setFormErrors(validate(user));
            // if(formErrors.fullname == "",formErrors.email == "",formErrors.password == "",formErrors.repassword == ""){
                dispatch(RegisterUser(user))
            // }
    }
    const validate = (values) => {
        const errors = {};
        const regex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (!values.fullname) {
          errors.fullname = "Fullname is required!";
        }
        if (!values.email) {
          errors.email = "Email is required!";
        } else if (!regex.test(values.email)) {
          errors.email = "This is not a valid email format!";
        }
        if (!values.password) {
          errors.password = "Password is required";
        } else if (values.password.length < 8) {
          errors.password = "Password must be more than 8 characters";
        }
        if (values.repassword != values.password) {
            errors.repassword = "Nhập lại cho đÚng";
        }
        return errors;
      };
    return (
        <div className="container">
            <div class="register-container">
                <div class="register-form">
                    <div className="logo">
                        <img src="/assets/img/LogoDO.png" alt="" />
                    </div>
                    <div class="title">
                        <h2>Đăng ký</h2>
                    </div>
                    <form action="">
                        <input type="text" name="fullname" id="sign-name" placeholder="Họ tên đầy đủ" 
                        ref={inputFullNameRef} 
                        onChange={handleChange}/>
                         {formErrors.fullname && <span className='error-mess' >{formErrors.fullname}</span>}
                        <input type="email" name="email" id="sign-email" placeholder="Email của bạn" 
                        ref={inputEmailRef} 
                        onChange={handleChange} />
                        {formErrors.email && <span className='error-mess' >{formErrors.email}</span>}

                        <input type="password" name="password" id="sign-pswd" placeholder="Mật khẩu" 
                        ref={inputPsdRef} 
                        onChange={handleChange}/>
                        {formErrors.password && <span className='error-mess' >{formErrors.password}</span>}

                        <input type="password" name="repassword" id="sign-rpswd" placeholder="Nhập lại mật khẩu"
                        onChange={handleChange} />
                        {formErrors.repassword && <span className='error-mess' >{formErrors.repassword}</span>}
                        <div class="button">
                            {/* <a href="" class="SignUp-btn" onClick={handleSubmit}>Đăng ký</a> */}
                            <button class="SignUp-btn" onClick={handleSubmit}>Đăng ký</button>
                        </div>
                        <div class="line">
                            <span>Hoặc</span>
                        </div>
                        <div class="link">
                            <p>Bạn đã có tài khoản? <a class="login-link">Đăng nhập</a></p>
                        </div>
                    </form>
                </div>
                <div className="cover">
                    <img src="/assets/img/login.png" alt="" />
                </div>
            </div>
        </div>
    );
}

export default RegisterScreen;