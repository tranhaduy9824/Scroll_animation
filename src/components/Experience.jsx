/* eslint-disable react/no-unknown-property */
import { OrbitControls, ScrollControls } from "@react-three/drei";
import { Office } from "./Office";
import OverLay from "./OverLay";

function Experience() {
  return (
    <>
      <ambientLight intensity={2} />
      <OrbitControls enableZoom={false} />
      <ScrollControls pages={3} damping={0.25}>
        <OverLay />
        <Office />
      </ScrollControls>
    </>
  );
}

export default Experience;
