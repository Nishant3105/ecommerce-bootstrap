import React, { useState, useEffect } from 'react'
// import {
//     createUserWithEmailAndPassword,
//     signInWithEmailAndPassword,
//     s
// } from "firebase/auth";
// import auth from "../firebase/firebaseConfig";

const AuthContext = React.createContext({
    isLoggedIn: false,
    login: () => { },
    logout: () => { },
    token: null,
    email: null
})

export const AuthContextProvider = (props) => {
    const [token, setToken] = useState(null)
    const [email, setEmail] = useState(null)

    useEffect(() => { setToken(localStorage.getItem('token'))
        setEmail(localStorage.getItem('email'))
     }, [])

    const isLoggedIn = !!token

    const loginHandler = async (userCreds) => {
        // signInWithPassword
        // signUp
        try {
            const response = await fetch('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCf0bMYuIZj1daUMsyGcesOPIdG8iT7jms',
                {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(userCreds)
                })

            if (!response.ok) {
                throw new Error('SOmething went wrong')
            }
            if (response.ok) {
                const data = await response.json()
                const {email,idToken}=data
                localStorage.setItem('token', idToken)
                localStorage.setItem('email', email)
                setToken(idToken)
                setEmail(email)
                return true
            }
        } catch (error) {
            console.log('Please check your credentials')
            return false
        }
    }
    const logoutHandler = () => {
        localStorage.removeItem('token')
        localStorage.removeItem('email')
        setToken(null)
        setEmail(null)
    }
    const contextValues = {
        isLoggedIn: isLoggedIn,
        login: loginHandler,
        logout: logoutHandler,
        token: token,
        email: email
    }
    return (
        <AuthContext.Provider value={contextValues}>
            {props.children}
        </AuthContext.Provider>
    )
}

export default AuthContext