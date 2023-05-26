import React from 'react';

const user_family_name = localStorage.getItem('user_family_name')
const user_name = localStorage.getItem('user_name')
const user_surname = localStorage.getItem('user_surname')
const user_role = localStorage.getItem('user_role')


const User = () => {
    return (
        <div>
            This is User page
            {user_family_name} {user_name} {user_surname} {user_role}
        </div>
    );
};

export default User;