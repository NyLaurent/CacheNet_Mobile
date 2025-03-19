import axios from "axios";
import * as SecureStore from "expo-secure-store";

const host = "http://10.0.2.2:3000";
const route = "user";

// Update User Profile
const handleUpdateUserProfile = async ({ name, }) => {
    const token = await SecureStore.getItemAsync("AuthToken");
    try {
        const response = await axios.put(`${host}/${route}`,{
            headers: {
                Authorization: `Bearer ${token}`
            },
            {
                name: FullName
            }
        })
    }
    catch (error) {
        console.log("Error Occured: ", error);
    }
}