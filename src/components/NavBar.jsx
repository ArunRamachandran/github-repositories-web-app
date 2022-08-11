import React from "react";
import { useNavigate, useLocation, matchRoutes } from "react-router-dom";

import '../stylesheets/components/nav-bar.css';

export const NavBar = () => {
    const navigate = useNavigate();
    const location = useLocation();

    const onClickHandler = () => {
        location.pathname !== "/" && navigate('/')
    }

    return (
        <header className="app-navbar-wrapper">
            <div className="app-logo">{"{ Logo }"}</div>
            <h2 className="app-title" onClick={onClickHandler}>GitHub repositories</h2>
        </header>
    )
}