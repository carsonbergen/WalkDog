import Cookies from "js-cookie";

import users from "./../../database/users.json";

export const getUserData = (formData) => {
    return users[formData.email];
}

export const logInUser = (userData) => {
    console.log("If this is undefined then re-enter in the information:", userData)
    console.log("Logging in user");
    Cookies.set('user-logged-in', true, { expires: 365 });
    Cookies.set('user', userData.email, { expires: 365 });
}