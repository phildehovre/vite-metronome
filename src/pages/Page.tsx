import { useState } from "react";
import Metronome from "../components/Metronome";
import "./Page.scss";

function Page() {
  const [showSongs, setShowSongs] = useState(false);

  return (
    <main className="page-ctn">
      <Metronome showSongs={showSongs} setShowSongs={setShowSongs} />
    </main>
  );
}

export default Page;
