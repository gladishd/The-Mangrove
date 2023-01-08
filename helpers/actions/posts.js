// import * as api from '../api/index.js';
import * as api from './postsAPI.js';

// Action Creators
export const getPosts = () => async (dispatch) => {
    try {
        const { data } = await api.fetchPosts();
        console.log("What'st he data any anohwohowho ho w", data)
        dispatch({ type: 'FETCH_ALL', payload: data });
    } catch (error) {
        console.log(error.message);
    }
}

export const createPost = (post) => async (dispatch) => {
    console.log("What is the post?100509093i3 ", post)
    try {
        const { data } = await api.createPost(post);

        // dispatch({ type: 'CREATE', payload: data });

        dispatch({ type: 'CREATE', payload: data })
    } catch (error) {
        console.log(error.message);
    }
}

export const updatePost = (id, post) => async (dispatch) => {
    try {
        const { data } = await api.updatePost(id, post);

        dispatch({ type: 'UPDATE', payload: data });
    } catch (error) {
        console.log(error);
    }
}

export const deletePost = (id) => async (dispatch) => {
    try {
        await api.deletePost(id);

        dispatch({ type: 'DELETE', payload: id });
    } catch (error) {
        console.log(error);
    }
}
