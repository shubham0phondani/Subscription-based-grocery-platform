import { AuthContext } from "./AuthContext";
import { useState, useEffect } from "react";

const AuthProvider = ({ children }) => {

    const [users, setUsersDetails] = useState(() => JSON.parse(localStorage.getItem("users")) || []);
    
    const [currentUser, setCurrentUserDetails] = useState(() => JSON.parse(localStorage.getItem("currentUser"))||"");

    useEffect(() => {
        localStorage.setItem("users", JSON.stringify(users));
        localStorage.setItem("currentUser", JSON.stringify(currentUser));
        console.log(users);
    }, [users, currentUser])

    const signup = (name, password) => {
        const exists = users.find((user) => {
            return user.name === name && user.password === password;
        })
        if (exists) {
            return false;
        }
        setUsersDetails([...users, { name, password }])
        setCurrentUserDetails({name})
        return true;
    }

    const login = (name, password) => {
        const val = users.find((user) => user.name === name && user.password === password)
        if (val) {
            setCurrentUserDetails({name})
            return true
        } else {
            return false
        }
    }

    const forgotpassword = (name, password) => {
        const val = users.some((user) => user.name === name)
        if (val) {
            setUsersDetails(prev => prev.map((user) => {
                return user.name === name ? { ...user, password } : user;
            }))
            return true
        } else {
            return false
        }
    }

    return (
        <AuthContext.Provider value={{
            signup,
            currentUser,
            login,
            forgotpassword,
            setUsersDetails
        }}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider;