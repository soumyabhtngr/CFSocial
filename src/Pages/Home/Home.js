import React, { useEffect, useState } from "react";
// import { Link } from "@reach/router";
import { Card } from '../../Components/Card';
import { Loader } from '../../Components/Loader';
import './Home.css';

export const Home = () => {
    const [posts, setPosts] = useState([]);
    const [isLoading, setLoading] = useState(false);

    useEffect(() => {
        const getPosts = async () => {
            setLoading(true);
            const resp = await fetch(
                "https://cfsocial-api.cfsocial.workers.dev/api/posts"
            );
            const postsResp = await resp.json();
            setLoading(false);
            setPosts(postsResp);
        };

        getPosts();
    }, []);

    return (
        <>
            <div className="post-area">
                <div className="title">Title: <input className="title-input" placeholder="Post title will be..." type="text" name="title" /></div>
                <textarea placeholder="Let your thoughts flow through..." />
                <div className="title">Author name: <input className="title-input" placeholder="Add your name"  type="text" name="author" /></div>
                <button className="btn">Post</button>
            </div>
            {isLoading ? <Loader /> : posts.map((post) => {
                const content = JSON.parse(post.result);
                return (
                    <div key={post.id}>
                        <Card>
                            <h2>
                                {content.title}
                                {/* <Link to={`/posts/${post.id}`}>{post.title}</Link> */}
                            </h2>
                        </Card>
                    </div>
                )
            })}
        </>
    );
};

