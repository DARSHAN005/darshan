import axios from "axios";

const LOGIN_API_BASE_URL="http://localhost:8096/onlinesweetmart-login/login"

class LoginService{
    login(login){
        return axios.post( LOGIN_API_BASE_URL,login);
    }
}
export default new LoginService();