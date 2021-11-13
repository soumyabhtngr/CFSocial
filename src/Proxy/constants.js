export const BASE = "https://cfsocial-api.cfsocial.workers.dev";
export const createPostUrl = BASE + '/api/posts';
export const getPosts = BASE + '/api/posts';
export const getPostByIdUrl = (id) => (BASE + '/api/posts/' + id);