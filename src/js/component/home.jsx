
import React, { useState } from "react";
import "../../styles/index.css";

// Componente individual para cada luz
const Light = ({ color, isActive, onClick }) => {
  return (
    <div
      className={`light ${color} ${isActive ? "glow" : ""}`}
      onClick={onClick}
    ></div>
  );
};

const Home = () => {
  const [activeColor, setActiveColor] = useState("red"); // Estado para manejar el color activo

  return (
    <div className="traffic-light-container">
      <Light
        color="red"
        isActive={activeColor === "red"}
        onClick={() => setActiveColor("red")}
      />
      <Light
        color="yellow"
        isActive={activeColor === "yellow"}
        onClick={() => setActiveColor("yellow")}
      />
      <Light
        color="green"
        isActive={activeColor === "green"}
        onClick={() => setActiveColor("green")}
      />
    </div>
  );
};

export default Home;
