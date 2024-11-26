// src/context/AuthContext.js
import { createContext, useState, useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const navigate = useNavigate();
    const [user, setUser ] = useState(null);

    useEffect(() => {
        const token = localStorage.getItem('token');
        const fName = localStorage.getItem('userFName');
        const lName = localStorage.getItem('userLName');
        const email = localStorage.getItem('userEmail');
        const role = localStorage.getItem('userRole');

        console.log('Setting user:', { fName, lName, email, role });
        console.log('Token:', token);
        console.log('First Name:', fName);
        console.log('Last Name:', lName);
        console.log('Email:', email);
        console.log('Role:', role);

        if (token) {
            setUser ({ fName, lName, email, role }); // Ensure Role is set correctly
        } else {
            setUser (null); // Clear user if no token
        }
    }, []);

    const login = (token, fName, lName, email, role) => {
        setUser ({ fName, lName, email, role });
        localStorage.setItem('token', token);
        localStorage.setItem('userFName', fName);
        localStorage.setItem('userLName', lName);
        localStorage.setItem('userEmail', email);
        localStorage.setItem('userRole', role);
    };

    const logout = () => {
        setUser (null);
        localStorage.removeItem('token');
        localStorage.removeItem('userFName');
        localStorage.removeItem('userLName');
        localStorage.removeItem('userEmail');
        localStorage.removeItem('userRole');
        navigate('/Login');
    };

    return (
        <AuthContext.Provider value={{ user, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);