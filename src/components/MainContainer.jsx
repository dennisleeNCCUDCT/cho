import "../index.css";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stars } from "@react-three/drei";

import ReactLogo from "./canvas/ReactLogo";
import Neo from "./canvas/NEO";

const MainContainer = () => {
  // Canvas BG color
  const bgColor = ({ gl }) => {
    gl.setClearColor("#000000", 1);
  };
  return (
    <>
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          zIndex: "10000",
        }}
      >
        <a
          href="https://docs.google.com/forms/d/e/1FAIpQLSenKXKAcn2We4m-bFV8nAADUolAqHzRSk1aSGnxubO3Hmq4fg/viewform?fbclid=IwAR12C7pzonk5cm-KxSg_mwBBNpMw-QTDIs7g3Hx2LZ4hz90B9IDziUQR92k&pli=1"
          className="chosenone"
        >
          Click me to see
          <br />
          The Chosen one
        </a>
      </div>

      <Canvas
        id="canvas"
        style={{ position: "fixed" }}
        camera={{ position: [20, 3, 5], fov: 25 }}
        onCreated={bgColor}
      >
        <pointLight intensity={2} color={0xeb1f10} position={[0, 5, 5]} />
        <spotLight intensity={0.5} color={0x61dbfb} position={(-20, 50, 10)} />
        <OrbitControls />
        <Neo />
        <ReactLogo />
        <Stars />
      </Canvas>
    </>
  );
};

export default MainContainer;
