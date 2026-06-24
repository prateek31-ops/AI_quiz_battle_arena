import { useNavigate } from "react-router-dom";

function Home() {
    const navigate = useNavigate();

    return (
        <div
            style={{
                height: "100vh",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                gap: "20px",
            }}
        >
            <h1>AI Quiz Battle Arena</h1>

            <button onClick={() => navigate("/create-room")}>
                Create Room
            </button>

            <button onClick={() => navigate("/join-room")}>
                Join Room
            </button>
        </div>
    );
}

export default Home;