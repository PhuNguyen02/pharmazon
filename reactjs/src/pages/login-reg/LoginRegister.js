import React, { useEffect, useRef, useState } from 'react';
import "../../styles/login-register/loginReg.css"
import { useDispatch, useSelector} from 'react-redux';
import { useFormAction, useNavigate, useParams } from 'react-router-dom';
import { loginUser } from '../../redux/api/userAPI';
function LoginRegister() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const inputPsdRef = useRef()
  const inputEmailRef = useRef()
  const [email,setEmail] = useState('')
  const [password, setPassword] = useState('')
  const initialValues = { email: "", password: "" };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const userLogin =  useSelector(state => state.auth)
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault()
    setFormErrors(validate(formValues));
    if(formErrors.email == undefined && formErrors.password == undefined){
      dispatch(loginUser(formValues)).then((result) => {
        if(result.payload) {
          navigate('/')
        }
      })
    }
    console.log("ssss",validate(formValues));
    console.log("formerros",formErrors);
    console.log("psd",formErrors.password);
    console.log("email",formErrors.email);
  }

  const validate = (values) => {
    const errors = {};
    const regex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!values.email) {
      errors.email = "Email không được bỏ trống";
    } else if (!regex.test(values.email)) {
      errors.email = "Email không đúng định dạng!";
    }
    if (!values.password) {
      errors.password = "Password không được bỏ trống";
    } else if (values.password.length < 8) {
      errors.password = "Password phải trên 8 ký tự";
    }
    console.log(errors);
    return errors;
  };
  return (
    <div className="container">,
      <div className="login-container">
        <div className="cover">
          <img src="/assets/img/login.png" alt="" />
        </div>
        <div className="login-form">
          <div className="logo">
            <img src="/assets/img/LogoDO.png" alt="" />
          </div>
          <div className="title">
            <h2>Đăng nhập</h2>
          </div>
          <form action="" id="login-form">
            <div className="form-control">
              <input
                type="email"
                name="email"
                id="login-email"
                ref={inputEmailRef}
                placeholder="Email"
                onChange={handleChange}
              />
              <div className='error'>
              {formErrors.email && <small className='error-mess' >{formErrors.email}</small>}
              </div>
            </div>
            <div className="form-control">
              <input
                type="password"
                name="password"
                id="login-pswd"
                ref={inputPsdRef}
                placeholder="Password"
                onChange={handleChange}
              />
              <div className='error'>
              {formErrors.password && <small className='error-mess' >{formErrors.password}</small>}
              </div>
            </div>
            <div className="button">
              <button type="submit" className="login-btn" onClick={handleSubmit}>
                Đăng nhâp
              </button>
            </div>
            <div className="forgot-pass">
              <div className="remember">
                <input type="checkbox" />
                Ghi nhớ mật khẩu
              </div>
              <div className="forgot">
                <a href="#">Quên mật khẩu?</a>
              </div>
            </div>
            <div className="line">
              <span>Hoặc</span>
            </div>
            <div className="link">
              <p>
                Bạn chưa có tài khoản? <a className="register-link">Đăng ký</a>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default LoginRegister;
