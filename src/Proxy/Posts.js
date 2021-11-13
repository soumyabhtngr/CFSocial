import { createPostUrl, getPosts, getPostByIdUrl } from './constants';

export const createPost = async (post) => {
    const data = JSON.stringify(post);
    return await fetch(createPostUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: data
    }).then(res => res.json());
}

export const getAllPosts = async () => {
    return await fetch(getPosts).then(res => res.json())
}

export const getPostById = async (id) => {
    return await fetch(getPostByIdUrl(id)).then(res => res.json());
}