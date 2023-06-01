import React,{useContext} from 'react';
import {Routes, Route, Navigate} from "react-router-dom";
import {adminRoutes, loginRoutes, rootRoutes, userRoutes} from "../routes";
import {LOGIN_ROUTE} from "../utils/consts";
import {Context} from "../index";
import {observer} from "mobx-react-lite";


const AppRouter = observer(() => {
    const {user} = useContext(Context)
    console.log(user)
    return (
        <Routes>
            {loginRoutes.map(({path, component}) =>
                <Route key={path} path={path} Component={component} exact />
            )}
            {userRoutes.map(({path, component}) =>
                <Route key={path} path={path} Component={component} exact />
            )}
            {adminRoutes.map(({path, component}) =>
                <Route key={path} path={path} Component={component} exact />
            )}
{/*            {user.isAuth && rootRoutes.map(({path, component}) =>*/}
            {user.userRole === 'ROOT' && rootRoutes.map(({path, component}) =>
                <Route key={path} path={path} Component={component} exact />
            )}
            <Route path="*"  element={<Navigate to={LOGIN_ROUTE} replace />}/>
        </Routes>
    );
});


export default AppRouter;