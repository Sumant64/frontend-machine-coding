import React from "react";

const Player = (props) => {
  const { playerX, setPlayerX, playerO, setPlayerO, setDisplayBoard } = props;
  return (
    <>
      <div className="player-container">
        <div className="player-form-container">
          <div>
            <h1>Enter Player Names</h1>
            <div className="player-input-container">
              <label>
                PLAYER X:{" "}
                <input
                  className="player-input"
                  value={playerX}
                  onChange={(event) => setPlayerX(event.target.value)}
                />
              </label>
              <label>
                PLAYER O:{" "}
                <input
                  className="player-input"
                  value={playerO}
                  onChange={(event) => setPlayerO(event.target.value)}
                />
              </label>
            </div>
            <div className="btn-container">
              <button
                className="display-board"
                onClick={() => setDisplayBoard(true)}
              >
                DISPLAY BOARD
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Player;
