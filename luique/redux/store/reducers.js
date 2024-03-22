import * as actions from '../../actions/userActions';

const initialState = {
  user: null,
  loading: false,
  error: null
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.FETCH_USER_REQUEST:
      return { ...state, loading: true, error: null };
    case actions.FETCH_USER_SUCCESS:
      return { ...state, loading: false, user: action.payload, error: null };
    case actions.FETCH_USER_FAILURE:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

export default userReducer;
