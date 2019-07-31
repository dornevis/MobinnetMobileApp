import { AsyncStorage } from "react-native"

const userStoreKey = '@MyUserStore:key';

export default UserStorage = {
    setUser: async (value) => {
        try {
            const userAsJson = JSON.stringify(value);
            await AsyncStorage.setItem(userStoreKey, userAsJson);
        } catch (error) {

        }
    },
    getUser: async () => {
        try {
            const value = await AsyncStorage.getItem(userStoreKey);
            if (value !== null) {
                return value;
            }
            return null;
        } catch (error) {
            return null;
        }
    },
    isAuth: async () => {
        try {
            const value = await AsyncStorage.getItem(userStoreKey);
            if (value !== null) {
                return true;
            }
            return false;
        } catch (error) {
            return false;
        }
    },
    clean: async () => {
        try {
            await AsyncStorage.removeItem(userStoreKey);
            return true;
        } catch (error) {
            return false;
        }
    }
}