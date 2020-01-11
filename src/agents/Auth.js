import AsyncStorage from '@react-native-community/async-storage';

const sampleUser = {
    username: 'jack',
    password: '123123123'
}

export const Login = async (loginForm, callback) => {
    const {username, password} = loginForm;
    console.log(username, password)
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