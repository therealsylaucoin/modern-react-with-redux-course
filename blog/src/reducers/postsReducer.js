export default (state = [], action) => {
    // if (action.type === 'FETCH_POSTS'){
    //     return action.payload;
    // }
    // return state;

    //Equals to: (And more common - Switch statements)

    switch(action.type){
        case 'FETCH_POSTS':
            return action.payload;
        default:
            return state;
    }
};