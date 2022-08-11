import React from "react";
import { Link } from "react-router-dom";

export const ErrorPage = () => {

    return (
        <div className="app-error-page-wrapper">
            <h2>Something went wrong! Let's try again :)</h2>
            <Link to="/">Reload</Link>
        </div>
    );
}