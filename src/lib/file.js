import Cookies from "js-cookie";

import users from "./../../database/users.json";

export const getUserData = (email) => {
  if (email === undefined || email === null) {
    return {
      name: "No user available",
      username: "No user available",
      email: "No user available",
      password: "No user available",
      avatar_src: "/avatars/default.png",
      dogs: [
        {
          name: "No dog available",
          times_walked: -1,
        },
      ],
      stats: {
        total_distance_walked: -1,
        photos_shared: -1,
      },
      posts: [],
      achievements: [],
      notifications: [],
      settings: {
        location: false,
        camera: false,
        notification: false,
      },
    };
  }
  return users[email];
};

export const setUserData = (email, newUserData) => {
  users[email] = newUserData;
};

export const logInUser = (userData) => {
  console.log(
    "If this is undefined then re-enter in the information:",
    userData
  );
  console.log("Logging in user");
  Cookies.set("user-logged-in", true, { expires: 365 });
  Cookies.set("user", userData.email, { expires: 365 });
};
