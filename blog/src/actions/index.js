import jsonPlaceholder from '../apis/jsonPlaceholder';


export const fetchPosts = () => async dispatch => {
    const response = await jsonPlaceholder.get('/posts');
    
    dispatch({
        type: 'FETCH_POSTS',
        payload: response.data
    })
};

export const fetchUser = (id) => async dispatch => {
    const response = await jsonPlaceholder.get(`/users/${id}`);

    dispatch({
        type: 'FETCH_USER',
        payload: response.data
    })
}

//Bad approach!!!! We need to use redux-thunk!
//1. because of the async/await, we are returning the request, which is not an object
//2. If we remove the async/await, we'll then get a promise and the code will run before we have a response. 

// const response = await jsonPlaceholder.get('/posts');

// return {
//     type: 'FETCH_POSTS',
//     payload: response
// };