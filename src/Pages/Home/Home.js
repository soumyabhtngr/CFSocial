import React, { useEffect, useState, useRef } from "react";
import { Card } from '../../Components/Card';
import { Loader } from '../../Components/Loader';
import { Button } from '../../Components/Button';
import { createPost as createPostUtil, getAllPosts } from '../../Proxy/Posts';
import './Home.css';

export const Home = () => {
    const [posts, setPosts] = useState([]);
    const [isFeedLoading, setFeedLoading] = useState(false);
    const [isPostCreating, setCreatePost] = useState(false);
    const [isInvalid, setInvalid] = useState(false);
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

    const removeValidation = () => {
        setInvalid(false);
    }

    const createPost = async () => {
        if(postRef.current.value.trim().length === 0) {
            setInvalid(true);
            return;
        }
        setCreatePost(true);
        const req = {
            title: titleRef.current.value,
            username: authorRef.current.value,
            content: postRef.current.value,
        }
        try {
            const feed = await createPostUtil(req);
            setPosts(feed);
            setCreatePost(false);
        } catch (e) {
            setError(e.message);
            setCreatePost(false);
        }
    }

    return (
        <div className="home-container">
            <div className="post-area">
                <div className="title">Title: <input ref={titleRef} className="title-input" placeholder="Post title will be..." type="text" name="title" /></div>
                <textarea onChange={removeValidation} ref={postRef} placeholder="Let your thoughts flow through..." />
                <div className="title">Author name: <input className="title-input" ref={authorRef} placeholder="Add your name" type="text" name="author" /></div>
                {isInvalid && <p style={{ color: 'red' }}>Post content cannot be empty.</p>}
                <Button isLoading={isPostCreating} onClick={createPost}>Post</Button>
            </div>
            {isError ? (<p style={{ color: 'red' }}>Some error occured</p>) : (
                isFeedLoading ? <div style={{ paddingTop: '24px' }}><Loader /></div> : posts.map((post) => {
                    try {
                        const { title, content, username } = JSON.parse(post.result);
                        return (
                            <div key={post.id}>
                                <Card>
                                    <h2 className="post-title">
                                        {title}
                                    </h2>
                                    <div className="post-content">{content}</div>
                                    <div className="post-author">By - {username ? username : 'Unnamed Author'}</div>
                                </Card>
                            </div>
                        )
                    } catch (e) {
                        return <div />
                    }
                })
            )}
        </div>
    );
};