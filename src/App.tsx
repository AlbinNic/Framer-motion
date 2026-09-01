import DragBox from "./DragBox";

function App() {
  return (
    <div style={{ 
      display: "flex", 
      flexDirection: "column", 
      justifyContent: "center", 
      alignItems: "center", 
      height: "100vh", 
      gap: "20px", 
      backgroundColor: "#fff" 
    }}>
      <h2 style={{ fontFamily: "sans-serif", color: "#333" }}>Ta tag i boxen och se vad som händer</h2>
      <DragBox />
    </div>
  );
}

export default App;

