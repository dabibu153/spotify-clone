export const initialState = {
  token: null,
  // "BQDHu9tBonrjveK_fwk109uu2BNuiZs9Xa9AeqvCdrMOlGMnRb…fa3BeOxVRNO7ZeOhdr_0wNNqUmOfMwDp_jyx7xrYjGrWjJBUl",
  user: null,
  playlists: [],
  playing: false,
  item: null,
  currentPlaylist: null,
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

    case "SET_DISCOVER":
      return { ...state, currentPlaylist: action.playlist };

    case "SET_PLAYING":
      return {
        ...state,
        playing: action.playing,
      };

    case "SET_ITEM":
      return {
        ...state,
        item: action.item,
      };

    default:
      return state;
  }
};

export default reducer;
