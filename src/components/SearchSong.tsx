import React, { useState, useEffect } from "react";

function SongList() {
  const [songs, setSongs] = useState([]);
  const [loading, setLoading] = useState(true);
  const apiKey = "YOUR_API_KEY_HERE"; // Replace with your API key

  useEffect(() => {
    // Define the API endpoint URL
    const apiUrl = `https://api.getsongbpm.com/tempo/?api_key=${
      import.meta.env.VITE_REACT_APP_SONGPBM_API_KEY
    }&bpm=120`;

    console.log(import.meta.env.VITE_REACT_APP_SONGPBM_API_KEY);
    // Fetch data from the API
    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        setSongs(data.search);
        setLoading(false);
        console.log(data);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, [apiKey]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Song List</h1>
      <ul>
        {/* {songs?.map((song) => (
          <li key={song.id}>
            <a href={song.uri}>{song.title}</a> by {song.artist.name} (BPM:{" "}
            {song.tempo})
          </li>
        ))} */}
      </ul>
    </div>
  );
}

export default SongList;
