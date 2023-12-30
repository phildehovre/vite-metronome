import "./metronome.scss";

import { useState } from "react";

function TapTempo(props: {
  setBpm: React.Dispatch<React.SetStateAction<number>>;
}) {
  const { setBpm } = props;
  const [tapped, setTapped] = useState<number>();
  const [tappedArray, setTappedArray] = useState<number[]>([]);

  const tapTempo = () => {
    if (tapped) {
      let elapsed = new Date().getTime() - tapped;
      if (elapsed < 2500) {
        const tappedBpm = Math.round((6000 / elapsed) * 10);
        setBpm(
          Math.round(
            tappedArray.reduce((a, b) => a + b, 0) / tappedArray.length
          )
        );
        if (tappedArray.length == 5) {
          setTappedArray((prev) => [...prev.slice(1), tappedBpm]);
        } else {
          setTappedArray((prev) => [...prev, tappedBpm]);
        }
      } else {
        setTapped(new Date().getTime());
      }
    }
    setTapped(new Date().getTime());
  };

  return (
    <div onClick={tapTempo} className="metro-btn-tap">
      <div className="outer">
        <div className="inner"></div>
      </div>
    </div>
  );
}

export default TapTempo;
