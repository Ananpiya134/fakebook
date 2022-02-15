import { createContext, useContext, useState } from 'react';
import axios from '../config/axios'
import { setToken, clearToken } from '../services/localStorage'
import jwtDecode from 'jwt-decode';
import { ErrorContext } from './ErrorContext';


const AuthContext = createContext();

function AuthContextProvider({ children }) {
    const [user, setUser] = useState(null);
    const { setError } = useContext(ErrorContext)

    const login = async (emailOrPhoneNumber, password) => {
        try {

            const res = await axios.post('/users/login', {
                emailOrPhoneNumber,
                password
            })

            const token = res.data.token;
            setToken(token);
            setUser(jwtDecode(token));

        } catch (err) {

        }
    }

    const logout = () => {
        clearToken();
        setUser(null);
    }
    return (
        <AuthContext.Provider value={{ user, login, logout }}>
            {children}
        </AuthContext.Provider>
    )
};

export default AuthContextProvider;

export { AuthContext }