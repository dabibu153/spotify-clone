import React, { useState, useEffect } from "react";
import Login from "./login.js";
import Player from "./player.js";
import { getTokenFromResponse } from "./authContent";
import SpotifyWebApi from "spotify-web-api-js";
import { useDataLayerValue } from "./DataLayer";

function App() {
  const spotify = new SpotifyWebApi();
  const [{ user, token, playlists }, dispatch] = useDataLayerValue();

  useEffect(() => {
    const hash = getTokenFromResponse();
    window.location.hash = "";
    const _token = hash.access_token;

    if (_token) {
      dispatch({
        type: "SET_TOKEN",
        token: _token,
      });
      spotify.setAccessToken(_token);
      spotify.getMe().then((user) => {
        dispatch({
          type: "SET_USER",
          user: { ...user },
        });
      });
      spotify.getUserPlaylists().then((res) => {
        dispatch({
          type: "SET_PLAYLISTS",
          playlists: [...res.items],
        });
      });
      spotify.getPlaylist("37i9dQZEVXcSbjF3uzk6mC").then((res) => {
        dispatch({ type: "SET_DISCOVER", playlist: res });
      });
    }
  }, []);

  return (
    <div className="App">
      {token ? <Player spotify={spotify} /> : <Login />}
    </div>
  );
}

export default App;
