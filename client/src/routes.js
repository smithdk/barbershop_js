import {ADMIN_ROUTE, LOGIN_ROUTE, ROOT_ROUTE, USER_ROUTE} from "./utils/consts";
import Login from "./pages/Login";
import User from "./pages/User";
import Admin from "./pages/Admin";
import Root from "./pages/Root";


export const loginRoutes = [
    {path: LOGIN_ROUTE, component: Login}
]
export const userRoutes = [
    {path: USER_ROUTE, component: User}
]
export const adminRoutes = [
    {path: ADMIN_ROUTE, component: Admin}
]
export const rootRoutes = [
    {path: ROOT_ROUTE, component: Root}
]

