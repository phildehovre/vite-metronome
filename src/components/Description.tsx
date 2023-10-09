function Description() {
  const renderDescription = () => {
    return (
      <div className="description">
        <h1>Metronome and tempo finder</h1>
        <p>
          This app combines the functionality of a metronome and a track finder.
          <br /> <br />
          It allows you to find the tempo of a song by clicking in rhythm on the
          'Tap' button (Two concentric circles, on the right of the 'Play' icon
          button)
          <br /> <br />
          Once the desired tempo is set, the user can click the 'List' button
          (on the left of the 'Play' icon button and get a randomly selected
          list of tracks of the same tempo)
          <br />
          The list will update in real time as the tempo changes, should the
          user decide to explore genre options at neighboring tempos. <br />
          <br />
          This is obviously quite a useful tool for DJ's, amateurs or
          professionals, who are looking for a simple tool to craft their sets
          and transition smoothly from one track to another with similar tempos.
        </p>
      </div>
    );
  };
  return <div>{renderDescription()}</div>;
}

export default Description;
