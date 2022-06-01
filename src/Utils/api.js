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
export const register = async (user) => {
    const userDto = {
        phone : user.phone,
        userName : user.firstName + " " + user.lastName,
        businessName : user.firstName[0] + user.lastName[0],
        emailAddress : user.email
    }
//     email: "ostrovruti@gmail.com"
// firstName: "רות"
// lastName: "אילני"
// password: "Bb1234567!"
   
    axios.post(SERVER_URL + 'NewUser', userDto);
}   