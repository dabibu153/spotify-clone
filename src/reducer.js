export const initialState = {
  token:
    "BQDHu9tBonrjveK_fwk109uu2BNuiZs9Xa9AeqvCdrMOlGMnRb…fa3BeOxVRNO7ZeOhdr_0wNNqUmOfMwDp_jyx7xrYjGrWjJBUl",
  user: null,
  playlists: [],
  playing: false,
  item: null,
};

const reducer = (state, action) => {
  console.log(action);

  switch (action.type) {
    case "SET_USER":
      return { ...state, user: action.user };

    case "SET_TOKEN":
      return { ...state, token: action.token };

    case "SET_PLAYLISTS":
      return { ...state, playlists: action.playlists };

    default:
      return state;
  }
};

export default reducer;
