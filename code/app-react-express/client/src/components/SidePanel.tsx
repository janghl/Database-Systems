import React from "react";

interface SidePanelProps {
  onClose: () => void;
}

const SidePanel: React.FC<SidePanelProps> = ({ onClose }) => {
  return (
    <div className="side-panel">
      <button className="close-btn" onClick={onClose}>
        X
      </button>
      <div
        className="side-panel-content"
        style={{ height: "800px", overflowY: "auto" }}
      >
        <div className="panel-block">
          <div>
            <p className="panel-text">Michael Rheintgen</p>
            <img
              src="https://i.ibb.co/V3dc6yw/Resume-photo-1.jpg"
              alt="Michael"
              className="panel-image"
            />
          </div>
        </div>
        <div className="panel-block">
          <div>
            <p className="panel-text">Paul Jablonski</p>
            <img
              src="https://i.ibb.co/YN6jz7z/paulpic.jpg"
              alt="Paul"
              className="panel-image"
            />
          </div>
        </div>
        <div className="panel-block">
          <div>
            <p className="panel-text">Jacob Poeschel</p>
            <img
              src="https://i.ibb.co/kMHg8hN/jacob.jpg"
              alt="Jacob"
              className="panel-image"
            />
          </div>
        </div>
        <div className="panel-block">
          <div>
            <p className="panel-text">Hanliang Jiang</p>
            <img
              src="https://i.ibb.co/BVyr2yw/joepic.jpg"
              alt="Joe"
              className="panel-image"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SidePanel;
