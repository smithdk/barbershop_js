import React from 'react';
import {Routes, Route,Navigate} from "react-router-dom";
import {adminRoutes, rootRoutes, userRoutes} from "../routes";
import {LOGIN_ROUTE} from "../utils/consts";


const AppRouter = () => {
    const isAuth = false
    console.log(userRoutes)
    return (
        <Routes>
            {userRoutes.map(({path, component}) =>
                <Route key={path} path={path} Component={component} exact />
            )}
            {isAuth && adminRoutes.map(({path, component}) =>
                <Route key={path} path={path} Component={component} exact />
            )}
            {isAuth && rootRoutes.map(({path, component}) =>
                <Route key={path} path={path} Component={component} exact />
            )}
            <Route
                path="*"  element={<Navigate to={LOGIN_ROUTE} replace />}
            />
        </Routes>
    );
};

export default AppRouter;