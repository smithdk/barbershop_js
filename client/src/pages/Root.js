import React, {useContext} from 'react';
import {Context} from "../index";

const Root = () => {
    const {user} = useContext(Context)
    return (
        <div>
            This is Root page
            {user.userRole}
        </div>
    );
};

export default Root;