import PlayButton from "./playButton";
function ToolBar() {
  return (
    <>
      <h1>Tool Bar</h1>
      <br />
      <div>
        <PlayButton movieName="The Breakfast Club" />
        <br />
        <PlayButton movieName="Gone with the Wind" />
        <br />
        <PlayButton movieName="Footloose" />
        <br />
        <PlayButton movieName="The Count of Monte Cristo" />
        <br />
      </div>
    </>
  );
}

export default ToolBar;
