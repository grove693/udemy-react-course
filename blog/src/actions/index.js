import _ from 'lodash';
import jsonPlaceholder from '../apis/jsonplaceholder';

export const fetchPostsAndUsers = () => async (dispatch, getState) => {

  console.log('About to fetch posts');
  await dispatch(fetchPosts());
  const userIds = _.uniq(_.map(getState().posts, 'userId'));

  userIds.forEach(id => dispatch(fetchUser(id)));



};


export const fetchPosts =  () => {

    return async  (dispatch)  =>  {
        const response = await jsonPlaceholder.get('/posts');

        dispatch({type: 'FETCH_POSTS', payload: response.data })
    };
};


export const fetchUser = id => async dispatch => {
    const response =  await jsonPlaceholder.get(`/users/${id}`);

    dispatch({type: 'FETCH_USER' , payload: response.data});

};



/*
    MEMEOIZED ALTERNATIVE USING LODASH LIBRARY
export const fetchUser = (id) =>  dispatch => {
    _fetchUser(id,dispatch);
  };
  
  const _fetchUser =  _.memoize( async (id,dispatch) => {
      const response = await jsonPlaceholder.get(`/users/${id}`);
  
      dispatch({type: 'FETCH_USER', payload: response.data});
  });


  */