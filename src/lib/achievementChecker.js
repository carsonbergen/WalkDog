import achievements from "./../../database/achievements.json";
import { getUserData, setUserData } from "./file";
import Cookies from "js-cookie";

// Add a function to check all requirements

export function checkIfAchievementEarned(id) {
    const requirement = achievements[id].requirement;
    if (requirement.type === "photos_taken_in_a_walk") {
        const requirementMet = localStorage.getItem("photos_taken") >= requirement.value;
        if (requirementMet) {
            const email = Cookies.get("user");
            addAchievementToUser(email, id);
        }
        return requirementMet;
    } else if (requirement.type === "distance_walked") {
        const requirementMet = localStorage.getItem("total_distance_walked") >= requirement.value;
        if (requirementMet) {
            const email = Cookies.get("user");
            addAchievementToUser(email, id);
        }
        return requirementMet;
    } else if (requirement.type === "less_than_distance_walked") {
        const requirementMet = localStorage.getItem("total_distance_walked") < requirement.value;
        if (requirementMet) {
            const email = Cookies.get("user");
            addAchievementToUser(email, id);
        }
        return requirementMet;
    }
    return false;
} 

export function getAchievement(id) {
    return achievements[id];   
}

export function addAchievementToUser(email, id) {
    const newUserData = getUserData(email);
    if (!newUserData.achievements.includes(id)) {
        newUserData.achievements.push(id);
    }
    setUserData(newUserData);
}