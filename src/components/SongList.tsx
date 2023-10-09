import { useEffect, useState } from "react";
import "./SongList.scss";

import SongCard from "./SongCard";
import { fetchTempoData } from "../api/helpers";
import { useQuery } from "@tanstack/react-query";
import { Song } from "../lib/types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
  faSpinner,
} from "@fortawesome/free-solid-svg-icons";

function SongList(props: any) {
  const { bpm, showSongs } = props;
  const [songs, setSongs] = useState([]);
  const [listStart, setListStart] = useState(0);
  const [listEnd, setListEnd] = useState(12);
  const [pageCounter, setPageCounter] = useState(1);

  const { data, isLoading } = useQuery(
    ["tempoData", bpm],
    () => fetchTempoData(bpm),
    {
      enabled: !!showSongs,
    }
  );

  //   console.log("data", data, showSongs, songs);

  useEffect(() => {
    setSongs(data?.slice(listStart, listEnd));
  }, [data, listStart, listEnd]);

  const renderSongListWithNav = () => {
    if (data && showSongs) {
      return (
        <>
          {renderSongList()}
          <div className="songlist-nav-ctn">
            <FontAwesomeIcon
              icon={faChevronLeft}
              className="songlist-nav-btn"
              onClick={() => handleNavClick("prev")}
            />
            <div>Page {pageCounter}</div>
            <FontAwesomeIcon
              icon={faChevronRight}
              className="songlist-nav-btn"
              onClick={() => handleNavClick("next")}
            />
          </div>
        </>
      );
    }
  };

  const renderSongList = () => {
    return songs?.map((song: Song) => {
      return <SongCard song={song} key={song.song_id} />;
    });
  };

  const handleNavClick = (value: "prev" | "next") => {
    if (value === "prev") {
      if (listStart > 0) {
        setListStart(listStart - 10);
        setListEnd(listEnd - 10);
        if (pageCounter !== 1) {
          setPageCounter(pageCounter - 1);
        }
      }
    }
    if (value === "next") {
      if (listEnd < 250) {
        setListStart(listStart + 10);
        setListEnd(listEnd + 10);
        setPageCounter(pageCounter + 1);
      }
    }
  };

  return (
    <>
      <div className={`metro-songlist ${showSongs ? "open" : "closed"}`}>
        {!isLoading && data?.length > 0 ? (
          renderSongListWithNav()
        ) : (
          <FontAwesomeIcon
            icon={faSpinner}
            spin
            className="songList-spinner"
            size="2x"
          />
        )}
      </div>
    </>
  );
}

export default SongList;
