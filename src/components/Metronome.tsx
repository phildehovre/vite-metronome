import React, { useState, useEffect, useCallback } from "react";
//@ts-ignore
import useSound from "use-sound";

import "./metronome.scss";
import Dropdown from "./Dropdown";
import Sidestick from "../assets/Click.wav";
import Cowbell from "../assets/Cowbell.mp3";
import Woodblock from "../assets/Woodblock.mp3";
import SongList from "./SongList";
import Description from "./Description";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const Metronome = ({
  showSongs,
  setShowSongs,
}: {
  showSongs: boolean;
  setShowSongs: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const [play, setPlay] = useState(false);
  const [bpm, setBpm] = useState(120);
  const [tempoInterval, setTempoInterval] = useState<number>(0);
  const [tapped, setTapped] = useState<number>();
  const [soundEffect, setSoundEffect] = useState("sidestick");
  const [debouncedBpm, setDebouncedBpm] = useState(bpm);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  // const [searchTerm, setSearchTerm] = useState('Search')
  const [listSize, setListSize] = useState(12);
  const [pulse, setPulse] = useState(false);

  const [cowbell] = useSound(Cowbell);
  const [woodblock] = useSound(Woodblock);
  const [sidestick] = useSound(Sidestick);

  // ========================== Tap Tempo Logic:

  const tapTempo = () => {
    if (tapped) {
      let elapsed = new Date().getTime() - tapped;
      if (elapsed < 2500) {
        const tappedBpm = Math.round((6000 / elapsed) * 10);
        setBpm(tappedBpm);
      } else {
        setTapped(new Date().getTime());
      }
    }
    setTapped(new Date().getTime());
  };

  const playSound = useCallback(() => {
    if (soundEffect === "cowbell") {
      cowbell();
    } else if (soundEffect === "woodblock") {
      woodblock();
    } else {
      sidestick();
    }
  }, [soundEffect, cowbell, woodblock, sidestick]);

  // Sound and Visual:

  const trigger = useCallback(() => {
    if (play) {
      playSound();
    } else {
      return;
    }
  }, [play, playSound]);

  const startClick = () => {
    setPlay(!play);
  };

  // Tempo setter:
  useEffect(() => {
    if (play) {
      const intervalId = setInterval(() => {
        trigger();
        setPulse(true);
        setTimeout(() => {
          setPulse(false);
        }, tempoInterval - tempoInterval * 0.1);
      }, tempoInterval);
      return () => {
        clearInterval(intervalId);
      };
    }
  }, [play, tempoInterval, soundEffect, trigger]);

  useEffect(() => {
    setTempoInterval((60 / bpm) * 1000);
    if (bpm <= 40) {
      setBpm(40);
    }
    if (bpm >= 220) {
      setBpm(220);
    }
    const intervalId = setTimeout(() => {
      setDebouncedBpm(bpm);
    }, 500);
    return () => {
      clearTimeout(intervalId);
    };
  }, [bpm]);

  const handleDisplaySongsList = () => {
    setShowSongs(!showSongs);
  };

  const increment = () => {
    setBpm(Number(bpm) + 1);
  };
  const decrement = () => {
    setBpm(Number(bpm) - 1);
  };

  return (
    <div className="metronome-ctn">
      <Description />
      <div className={`metronome ${pulse ? "pulse" : ""}`}>
        <h1>Metronome</h1>
        <div className="metro-display">
          <div className="metro-btn decrement" onClick={decrement}>
            -
          </div>
          <div className="metro-display bpm">{bpm}</div>
          <div className="metro-btn increment" onClick={increment}>
            +
          </div>
        </div>
        <input
          type="range"
          min="40"
          max="220"
          value={bpm}
          onChange={(e) => setBpm(Number(e.target.value))}
        />
        <div className="metro-controls">
          <div
            onClick={startClick}
            className={`metro-btn ${play ? `pause` : `play`} noSelect`}
            id="metro-there"
            style={{ animationDuration: `${tempoInterval}ms` }}
          ></div>
          <div
            className="metro-btn-generate"
            onClick={() => handleDisplaySongsList()}
          >
            <FontAwesomeIcon icon={faBars} size="2x" />
          </div>

          <div onClick={tapTempo} className="metro-btn-tap">
            <div className="outer">
              <div className="inner"></div>
            </div>
          </div>
          <div
            className="metro-dropdown-header"
            onClick={() => setDropdownOpen(!dropdownOpen)}
          >
            {soundEffect}
            <Dropdown
              open={dropdownOpen}
              soundEffect={soundEffect}
              setSoundEffect={setSoundEffect}
              dropdownOpen={dropdownOpen}
              setDropdownOpen={setDropdownOpen}
            />
          </div>
        </div>
        <h6 style={{ color: "var(--secondary)" }}>Powered by GetSongBpm.com</h6>
        <SongList
          bpm={debouncedBpm}
          showSongs={showSongs}
          listSize={listSize}
          setListSize={setListSize}
        />
      </div>
    </div>
  );
};

export default Metronome;
