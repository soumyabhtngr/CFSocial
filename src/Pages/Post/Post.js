import React, { useEffect, useState } from "react";
// import { Link } from "@reach/router";
import { getPostById } from './../../Proxy/Posts';
import './Post.css';

export const Post = ({ id }) => {
    const [post, setPost] = useState({});

    useEffect(() => {
        const getPost = async () => {
            const resp = await getPostById(id);
            setPost(resp);
        };

        getPost();
    }, [id]);

    if (!Object.keys(post).length) return <div />;

    // const { content, title, username } = JSON.parse(post.result);
    return (
        <div className="post-display">

        </div>
    );
};
