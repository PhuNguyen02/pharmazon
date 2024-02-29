import { logout } from "../redux/reducer/userSlice";
export const checkAuth = (store) => (next) => (action) => {
  if (action.type === 'login/loginUser/fulfilled' && action.payload.data[0].role_name !== 'admin') {
    store.dispatch(logout());
  }
  console.log("action",action);
  next(action);
};
