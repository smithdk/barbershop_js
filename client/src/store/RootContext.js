import React from "react";

const rootContext = {
    isObjectsShow: {},
//    setIsObjectShow: () => {},
    isUsersShow: {},
//    setIsUsersShow: () =>{},
    objects: {},
    setObjects: () => {},
    showObjects: () =>{},
    showUsers: () => {}
}

export const RootContext = React.createContext(rootContext);