import NavBar from "../components/NavBar"
import RootListGroup from "../components/RootListGroup";
import RootObjects from "../components/RootObjects";
import RootUsers from "../components/RootUsers";

import {RootContext} from "../store/RootContext";
import {useState} from "react";

const Root = () => {
    const [isObjectsShow, setIsObjectsShow] = useState(true)
    const [isUsersShow, setIsUsersShow] = useState(false)

    const showObjects = () =>{
        setIsObjectsShow(true);
        setIsUsersShow(false)
    }
    const showUsers = () =>{
        setIsObjectsShow(false);
        setIsUsersShow(true)
    }
    return (
        <div className="m-1" >
            <RootContext.Provider value={{isObjectsShow, isUsersShow, showObjects, showUsers}}>
                <NavBar role='ROOT'/>
                <div className=" d-flex flex-row " style={{marginRight : 4 , marginTop: 4}}>
                    <RootListGroup />
                    <RootObjects />
                    <RootUsers />
                </div>
            </RootContext.Provider>
        </div>
    );
};

export default Root;