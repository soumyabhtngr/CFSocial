import React, { useEffect, useState } from "react";
// import { Link } from "@reach/router";

export const Post = ({ id }) => {
    const [post, setPost] = useState({});

    useEffect(() => {
        const getPost = async () => {
            const resp = await fetch(
                `https://serverless-api.signalnerve.workers.dev/api/posts/${id}`
            );
            const postResp = await resp.json();
            setPost(postResp);
        };

        getPost();
    }, [id]);

    if (!Object.keys(post).length) return <div />;

    return (
        <div>
            <p>CFSocial Post page </p>
        </div>
    );
};
