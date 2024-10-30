import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { userAuth } from '../Context/useAuth';

type Props = { children: React.ReactNode };

const ProtectedRoute = ({ children }: Props) => {
    const location = useLocation();
    const { isLoggedIn } = userAuth();
    return isLoggedIn() ? <>{children}</> : <Navigate to="/login/>" state={{ form: location }} replace />;
};

export default ProtectedRoute;
