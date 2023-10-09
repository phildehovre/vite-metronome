import { useState } from "react";
import Metronome from "../components/Metronome";
import "./Page.scss";

function Page() {
  const [showSongs, setShowSongs] = useState(false);

  return (
    <div className="page-ctn">
      <Metronome showSongs={showSongs} setShowSongs={setShowSongs} />
    </div>
  );
}

export default Page;
