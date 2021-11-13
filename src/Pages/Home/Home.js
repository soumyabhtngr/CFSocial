import React, { useEffect, useState, useRef } from "react";
// import { Link } from "@reach/router";
import { Card } from '../../Components/Card';
import { Loader } from '../../Components/Loader';
import { createPost as createPostUtil, getAllPosts } from '../../Proxy/Posts';
import './Home.css';

export const Home = () => {
    const [posts, setPosts] = useState([]);
    const [isFeedLoading, setFeedLoading] = useState(false);
    const [isError, setError] = useState(null);
    const titleRef = useRef();
    const postRef = useRef();
    const authorRef = useRef();

    useEffect(() => {
        const getPosts = async () => {
            try {
                setFeedLoading(true);
                const resp = await getAllPosts();
                setFeedLoading(false);
                setPosts(resp);
            } catch (e) {
                setFeedLoading(false);
                setError(e.message);
            }
        };

        getPosts();
    }, []);

    const createPost = async () => {
        const req = {
            title: titleRef.current.value,
            username: authorRef.current.value,
            content: postRef.current.value,
        }
        try {
            const feed = await createPostUtil(req);
            console.log('feef == ', feed);
            setPosts(feed);
        } catch (e) {
            setError(e.message);
        }
    }

    return (
        <>
            <div className="post-area">
                <div className="title">Title: <input ref={titleRef} className="title-input" placeholder="Post title will be..." type="text" name="title" /></div>
                <textarea ref={postRef} placeholder="Let your thoughts flow through..." />
                <div className="title">Author name: <input className="title-input" ref={authorRef} placeholder="Add your name" type="text" name="author" /></div>
                <button onClick={createPost} className="btn">Post</button>
            </div>
            {isError ? (<p style={{ color: 'red' }}>Some error occured</p>) : (
                isFeedLoading ? <div style={{ paddingTop: '24px' }}><Loader /></div> : posts.map((post) => {
                    const { title, content, username } = JSON.parse(post.result);
                    return (
                        <div key={post.id}>
                            <Card>
                                <h2 className="post-title">
                                    {title}
                                    {/* <Link to={`/posts/${post.id}`}>{title}</Link> */}
                                </h2>
                                <div className="post-content">{content}</div>
                                <div className="post-author">By - {username}</div>
                            </Card>
                        </div>
                    )
                })
            )}
        </>
    );
};