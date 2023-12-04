import Cookies from "js-cookie";

import users from "./../../database/users.json";

export const getResults = (search) => {
  let isEmpty = /^\s*$/.test(search);

  if (isEmpty) return [];

  let results = [];
  for (const key in users) {
    if (users[key].username.includes(search)) {
      results.push(key);
    }
  }
  return results;
};

export const getUsers = () => {
  return users;
};

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

export const addPhotosToUserStats = (email, photosAdded) => {
  const newUserData = users[email];
  const val = parseInt(photosAdded);
  newUserData.stats.photos_shared = newUserData.stats.photos_shared + val;
  setUserData(newUserData);
};

export const addDistanceToUserStats = (email, distanceAdded) => {
  const newUserData = users[email];
  const val = parseFloat(distanceAdded);
  newUserData.stats.total_distance_walked =
    newUserData.stats.total_distance_walked + val;
  setUserData(newUserData);
};

export const addFriendRequestSent = (email, requestSentTo) => {
  const newUserData = users[email];
  newUserData.friend_requests.push(requestSentTo);
  setUserData(email, newUserData);
};

export const setPostedLikedStatus = (email, id, status) => {
  const newUserData = users[email];
  for (let i = 0; i < newUserData.posts.length; i++) {
    let post = newUserData.posts[i];
    if (post.id === id) {
      newUserData.posts[i].liked = status;
    }
  }
  console.log(newUserData.posts)
  setUserData(email, newUserData);
};

export const getPostedLikedStatus = (email, id) => {
  const userData = users[email];
  for (let i = 0; i < userData.posts.length; i++) {
    let post = userData.posts[i];
    if (post.id === id) {
      return userData.posts[i].liked;
    }
  }
  return false;
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
