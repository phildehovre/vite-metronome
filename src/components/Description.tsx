import "./Description.scss";

function Description() {
  const renderDescription = () => {
    return (
      <div className="description-ctn">
        <h1>Metronome and tempo finder</h1>
        <p>
          This app seamlessly combines the power of a metronome with a song
          tempo finder.
        </p>
        <li>
          <span>Discover Tempo: </span>
          Easily uncover the tempo of a song by tapping the 'Tap' button
          (depicted by two concentric circles to the right of the 'Play' icon).
        </li>
        <li>
          <span>Track Suggestions: </span>
          Once you've found your desired tempo, click the 'List' button (located
          to the left of the 'Play' icon) to receive a handpicked list of tracks
          that match the tempo. This list updates in real-time, ensuring you
          always have fresh suggestions at your fingertips, even if you decide
          to explore nearby tempo ranges.
        </li>
        <p>
          This tool is indispensable for DJs, whether you're a seasoned pro or
          just starting out. It simplifies the process of crafting seamless sets
          and transitioning effortlessly between tracks that share similar
          tempos. Get ready to elevate your music mixing experience! 🎵🎧
        </p>
      </div>
    );
  };
  return <div>{renderDescription()}</div>;
}

export default Description;
