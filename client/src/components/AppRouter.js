import React, {useContext} from 'react';
import {Routes, Route,Navigate} from "react-router-dom";
import {adminRoutes, rootRoutes, userRoutes} from "../routes";
import {LOGIN_ROUTE} from "../utils/consts";
import {Context} from "../index";


const AppRouter = () => {
    const {user} = useContext(Context)
    console.log(user)
    return (
        <Routes>
            {userRoutes.map(({path, component}) =>
                <Route key={path} path={path} Component={component} exact />
            )}
            {adminRoutes.map(({path, component}) =>
                <Route key={path} path={path} Component={component} exact />
            )}
            {rootRoutes.map(({path, component}) =>
                <Route key={path} path={path} Component={component} exact />
            )}
            <Route path="*"  element={<Navigate to={LOGIN_ROUTE} replace />}/>
        </Routes>
    );
};

export default AppRouter;