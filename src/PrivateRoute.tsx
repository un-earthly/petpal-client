import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { getItem } from './utils/useLocalStorage';

interface PrivateRouteProps {
    children: React.ReactNode;
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({ children }) => {
    const router = useRouter();
    const [user, setUser] = useState(null);

    useEffect(() => {
        const storedUserData = getItem("user");
        if (storedUserData) {
            setUser(JSON.parse(storedUserData));
        } else {
            router.push('/login');
        }
    }, [router]);

    return user ? <>{children}</> : null;
};

export default PrivateRoute;
