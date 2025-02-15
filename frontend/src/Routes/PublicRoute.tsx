import React from 'react'
import { UseAuth } from '@/context/AuthContext';
import { Navigate } from 'react-router-dom';
const PublicRoute = ( {children}) => {
    const { user } = UseAuth();
  
    if (user) {
      return <Navigate to="/dashboard" replace />;
    }
  
    return <>{children}</>;
}

export default PublicRoute