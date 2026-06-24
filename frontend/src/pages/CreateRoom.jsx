import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createRoom } from "../services/roomService";

function CreateRoom() {
    const [name, setName] = useState("");
    const navigate = useNavigate();

    const handleCreateRoom = async () => {
        try {
            const data = await createRoom();

            navigate(`/lobby/${data.roomCode}`, {
                state: {
                    roomCode: data.roomCode,
                    playerName: name,
                },
            });
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div>
            <h1>Create Room</h1>

            <input
                type="text"
                placeholder="Enter Name"
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