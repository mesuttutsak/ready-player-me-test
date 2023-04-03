const initialState = {
  avatarUrl: null,
  authenticatedLayoutMode: "default",
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {

    case "setAvatarUrl": {
      return { ...state, avatarUrl: action.payload }
    }

    case "setAuthenticatedLayoutMode": {
      return { ...state, authenticatedLayoutMode: action.payload };
    }

    default:
      return state;
  }
};
