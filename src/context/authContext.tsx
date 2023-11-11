import { useRouter } from 'next/router';
import React, { createContext, ReactNode, useContext, useEffect, useState } from 'react';
import { getItem } from '../utils/useLocalStorage';
import IUser from '../interfaces/user.interface';

export const AuthContext = createContext<AuthContextType | undefined>(undefined);

interface AuthContextType {
    user: any;
    login: (userData: any) => void;
    logout: () => void;
    isLoading: boolean;
    isError: string;
    setLoading: (loading: boolean) => void;
    setError: (error: string) => void;
}

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (context === undefined) {
        throw new Error('useAuth must be used within an AuthContext.Provider');
    }
    return context;
};

export default function AuthProvider({ children }: { children: ReactNode }) {
    const [user, setUser] = useState<any>(null);
    const router = useRouter();
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState("");
    useEffect(() => {
        const userData = getItem("user");
        if (userData) {
            login(JSON.parse(userData));
        }
    }, []);
    const login = (userData: any) => {
        setUser(userData);
        setIsLoading(false);
        setIsError("");
        // router.push('/dashboard');
    };


    const logout = () => {
        setUser(null);
        setIsLoading(false);
        setIsError("");
        router.push('/login');
    };
    const setLoading = (loading: boolean) => {
        setIsLoading(loading);
    };
    const setError = (error: string) => {
        setIsError(error);
    };
    const authContextValue: AuthContextType = {
        user,
        isLoading,
        isError,
        login,
        logout,
        setLoading,
        setError
    };

    return <AuthContext.Provider value={authContextValue}>{children}</AuthContext.Provider>;
}
