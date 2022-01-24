import React from "react";
import {  Navigate, useLocation } from "react-router-dom";
import Auth from "utils/Auth";
import { PublicPaths } from "./index";

const RequireAuth = ({ children }) => {
    let location = useLocation();
        const content = Auth.isAuthenticated() ? 
          children
         : 
          <Navigate to={PublicPaths.PUBLIC} state={{ from: location }} replace /> /* Path to redirect to when an unauthorized user tries to access a protected route */
         
        return content;
};

export default RequireAuth;
