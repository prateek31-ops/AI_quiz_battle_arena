import { useState } from "react";
import { useNavigate } from "react-router-dom";

function JoinRoom() {
    const [name, setName] = useState("");
    const [roomCode, setRoomCode] = useState("");

    const navigate = useNavigate();

    const handleJoin = () => {
        navigate(`/lobby/${roomCode}`, {
            state: {
                roomCode,
                playerName: name,
            },
        });
    };

    return (
        <div>
            <h1>Join Room</h1>

            <input
                type="text"
                placeholder="Your Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />

            <input
                type="text"
                placeholder="Room Code"
                value={roomCode}
                onChange={(e) => setRoomCode(e.target.value)}
            />

            <button onClick={handleJoin}>
                Join Room
            </button>
        </div>
    );
}

export default JoinRoom;