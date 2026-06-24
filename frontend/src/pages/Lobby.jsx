import { useLocation } from "react-router-dom";

function Lobby() {
    const location = useLocation();

    const { roomCode, playerName } = location.state || {};

    return (
        <div>
            <h1>Lobby</h1>

            <h2>Room Code: {roomCode}</h2>

            <h3>Player: {playerName}</h3>

            <p>Waiting for players...</p>

            <button>
                Start Game
            </button>
        </div>
    );
}

export default Lobby;