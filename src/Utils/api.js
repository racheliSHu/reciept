import axios from "axios";

const SERVER_URL = 'https://localhost:44391/api/'

export const login = async (id) => {
    try {
        const result = await axios.post(SERVER_URL + 'OldUser', id, { headers: { 'Content-Type': 'application/json' } });
        return result.data;
    }
    catch (err) {
        console.log(err);
    }
}
export const register = async () => {
    const user = {
        phone: '2',
        emailAddress: 'aabb@gmail.com',
        userName: 'racheli'
    }
    axios.post(SERVER_URL + 'NewUser', user);
}   