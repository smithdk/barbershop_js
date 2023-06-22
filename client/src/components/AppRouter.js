import React,{useContext} from 'react';
import {Routes, Route, Navigate} from "react-router-dom";
import {adminRoutes, loginRoutes, rootRoutes, userRoutes} from "../routes";
import {LOGIN_ROUTE} from "../utils/consts";
import {Context} from "../index";
import {observer} from "mobx-react-lite";


const AppRouter = observer(() => {
    const {user} = useContext(Context)

    return (
        <Routes>
            {loginRoutes.map(({path, component}) =>
                <Route key={path} path={path} Component={component} exact />
            )}
            {(user.userRole === 'ROOT' || user.userRole === 'ADMIN'|| user.userRole === 'USER') && userRoutes.map(({path, component}) =>
                <Route key={path} path={path} Component={component} exact />
            )}
            {(user.userRole === 'ROOT' || user.userRole === 'ADMIN') && adminRoutes.map(({path, component}) =>
                <Route key={path} path={path} Component={component} exact />
            )}
            {user.userRole === 'ROOT' && rootRoutes.map(({path, component}) =>
                <Route key={path} path={path} Component={component} exact />
            )}
            <Route path="*"  element={<Navigate to={LOGIN_ROUTE} replace />}/>
        </Routes>
    );
});


export default AppRouter;