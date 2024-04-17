function SidePanel() {
  return (
    <div className="side-panel">
      <div className="side-panel-content">
        <div className="panel-block">
          <a href="MichaelRheintgen">
            <p className="panel-text">Michael Rheintgen</p>
            <img
              src="https://i.ibb.co/V3dc6yw/Resume-photo-1.jpg"
              alt="Michael"
              className="panel-image"
            />
          </a>
        </div>
        <div className="panel-block">
          <a href="PaulJablonski">
            <p className="panel-text">Paul Jablonski</p>
            <img
              src="https://i.ibb.co/YN6jz7z/paulpic.jpg"
              alt="Paul"
              className="panel-image"
            />
          </a>
        </div>
        <div className="panel-block">
          <a href="JacobPoeschel">
            <p className="panel-text">Jacob Poeschel</p>
            <img
              src="https://i.ibb.co/kMHg8hN/jacob.jpg"
              alt="Jacob"
              className="panel-image"
            />
          </a>
        </div>
        <div className="panel-block">
          <a href="Joe">
            <p className="panel-text">Joe</p>
            <img
              src="https://i.ibb.co/BVyr2yw/joepic.jpg"
              alt="Joe"
              className="panel-image"
            />
          </a>
        </div>
      </div>
    </div>
  );
}

export default SidePanel;
