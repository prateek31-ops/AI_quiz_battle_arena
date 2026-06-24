import { useState } from "react";
import { useNavigate } from "react-router-dom";

function CreateRoom() {
    const [name, setName] = useState("");
    const navigate = useNavigate();

    const generateRoomCode = () => {
        return Math.random().toString(36).substring(2, 8).toUpperCase();
    };

    const handleCreateRoom = () => {
        const roomCode = generateRoomCode();

        navigate(`/lobby/${roomCode}`, {
            state: {
                roomCode,
                playerName: name,
            },
        });
    };

    return (
        <div>
            <h1>Create Room</h1>

            <input
                type="text"
                placeholder="Enter your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />

            <button onClick={handleCreateRoom}>
                Create Room
            </button>
        </div>
    );
}

export default CreateRoom;