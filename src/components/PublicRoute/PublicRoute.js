import { Navigate, Outlet } from "react-router-dom";

export const PublicRoute = ({ authed }) =>
    !authed ? < Outlet / > : < Navigate to = '/account'
replace / > ;