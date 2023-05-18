import Tools from "./pages/Tools";
import {LOGIN_ROUTE, TOOLS_ROUTE} from "./utils/consts";
import Login from "./pages/Login";

export const userRoutes = [
    {path: LOGIN_ROUTE, component: Login}
]
export const adminRoutes = [
    {path: TOOLS_ROUTE, component: Tools}
]
export const rootRoutes = [
    {path: TOOLS_ROUTE, component: Tools}
]

