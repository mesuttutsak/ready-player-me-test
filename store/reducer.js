const initialState = {
  avatarUrl: null
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "setAvatarUrl": {
      return { ...state, avatarUrl: action.payload }
    }

    default:
      return state;
  }
};
