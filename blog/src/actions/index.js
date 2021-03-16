import _ from 'lodash'; 
import jsonPlaceholder from '../apis/jsonPlaceholder';

export const fetchPostsAndUsers = () => async (dispatch, getState) => {
    // console.log('about to fetch posts!');
    await dispatch(fetchPosts());
    // console.log('fetched posts!');
    // console.log(getState().posts);

    //Use lodash library to map over posts and get unique user ids
    const userIds = _.uniq(_.map(getState().posts, 'userId'));
    //call fetchUSer
    userIds.forEach(id => dispatch(fetchUser(id)));
};


export const fetchPosts = () => async dispatch => {
    const response = await jsonPlaceholder.get('/posts');
    
    dispatch({ type: 'FETCH_POSTS', payload: response.data });
};

export const fetchUser = (id) => async dispatch => {
    const response = await jsonPlaceholder.get(`/users/${id}`);

    dispatch({ type: 'FETCH_USER', payload: response.data });
};




//MEMOIZED VERSION
// //memoize to avoid calling everytime we want to get a user id. This way we only need to call it once.

// export const fetchUser = (id) => dispatch => {
//     _fetchUser(id, dispatch);
// };

// const _fetchUser = _.memoize(async (id, dispatch) => {
//     const response = await jsonPlaceholder.get(`/users/${id}`);

//     dispatch({ type: 'FETCH_USER', payload: response.data });
// });



//Bad approach!!!! We need to use redux-thunk!
//1. because of the async/await, we are returning the request, which is not an object
//2. If we remove the async/await, we'll then get a promise and the code will run before we have a response. 

// const response = await jsonPlaceholder.get('/posts');

// return {
//     type: 'FETCH_POSTS',
//     payload: response
// };