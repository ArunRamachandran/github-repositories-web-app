import React from "react";
import { useNavigate } from "react-router-dom";
import { Avatar } from "./Avatar";

import '../stylesheets/components/repository.css';

export const Repository = ({ data, testId }) => {

    const navigate = useNavigate();

    const {
        id,
        owner,
        full_name,
        description
    } = data;

    const handleOnClick = () => {
        navigate(`/details?id=${id}`, { state:{ repository: data }});
    }

    return (
        <div className="repository-card-container" data-testid={`repository-card-${testId}`} key={`repo_${id}`} onClick={handleOnClick}>
            <Avatar url={owner?.avatar_url} />
            <h3 className="repository-name">{full_name}</h3>
            <p className="repository-desc">{description}</p>
        </div>
    )
}