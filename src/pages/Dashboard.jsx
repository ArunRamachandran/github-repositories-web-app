import axios from "axios";
import React, { useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { PageLoader } from "../components/PageLoader";
import { Repository } from "../components/Repository";
import { ErrorPage } from "./ErrorPage";

import '../stylesheets/pages/dashboard.css';

export const Dashboard = () => {
    const [repositories, setRepositories] = useState([]);
    const [isLoading, setLoader] = useState(true);
    const navigate = useNavigate();

    const fetchGitHubRepos = useCallback(async () => {
        try {
            const result = await axios('https://api.github.com/orgs/godaddy/repos');
            setRepositories(result.data);
            setLoader(false);
        } catch (err) {
            console.log(err);
            navigate('/error');
        }
    }, [navigate])

    useEffect(() => {
        fetchGitHubRepos();
    }, [fetchGitHubRepos]);

    return (
        <div className="dashboard-container" data-testid="dashboard">
            { isLoading ? 
                <PageLoader /> : 
                <>
                    { repositories?.length ? 
                        repositories.map((data, index) => 
                            <Repository data={data} key={data.id} testId={index}/>
                        )  : 
                        <ErrorPage />  
                    } 
                </>
            }
        </div>
    )
}