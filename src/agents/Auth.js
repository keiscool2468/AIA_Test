import AsyncStorage from '@react-native-community/async-storage';

const sampleUser = {
    username: 'jack',
    password: '123123123'
}
/**
 * General function to role play calling a api for login
 * @param loginForm {username: string, passward: string}
 * @param callback callback function
 */
export const Login = async (loginForm, callback) => {
    const {username, password} = loginForm;
    if(username !== sampleUser.username) {
        callback(false, "Unknown Username or password")
        return;
    }

    if(password !== sampleUser.password) {
        callback(false, "Unknown Username or password")
        return;
    }
    try {
        await AsyncStorage.setItem('username', username, () => {
            callback(true)
            return;
        })
    } catch (error) {
        console.log(error)
        callback(false)
        return;
    }
}