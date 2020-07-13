import $axios from "./server.util";

const Login = data => {
    return $axios({
        url: '/user/login',
        method: 'post',
        data
    })
};

// export const Login = {
//     async getLogin(params){
//         console.log(params);
//         let res = await axios.post('/user/login', params);
//         res = res.data;
//         return res
//     }
// };

export default {
    Login
}