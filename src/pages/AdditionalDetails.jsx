import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Chip } from "../components/Chip";
import { Avatar } from "../components/Avatar";

import '../stylesheets/pages/additional-details.css';

export const AdditionalDetails = () => {
    const location = useLocation();

    const {
        owner,
        full_name,
        description,
        svn_url,
        language,
        forks,
        open_issues,
        watchers
    } = location.state.repository;

    return (
        <div className="additional-details-container" data-testid="additional-details">
            <Link to="/" className="redirect-link" data-testid="redirect-link">{'< Back to repositories '}</Link>
            <div className="title-section">
                <Avatar url={owner?.avatar_url} />
                <div>
                    <h2 className="repository-title" data-testid="repository-title">{full_name}</h2>
                    <div className="repository-sub-title-section">
                        <Chip category='forks' value={forks} />
                        <Chip category='watchers' value={watchers} />
                    </div>
                </div>
            </div>
            <h3 className="repository-description">{description}</h3>
            <div className="additional-details-footer">
                <Chip value={language} />
                <Chip category='open issues' value={open_issues} />
                <a href={svn_url} target="_blank" rel="noreferrer">View repository</a>
            </div>
        </div>
    )
}