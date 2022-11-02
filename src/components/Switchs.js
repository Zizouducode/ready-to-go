import { useState } from "react";
import Switch from "./Switch";

const Switchs = () => {
  const [switch1, setSwitch1] = useState(false);
  const [switch2, setSwitch2] = useState(false);
  const [switch3, setSwitch3] = useState(false);

  return (
    <div className="container">
      <div className="all-switch">
        <Switch switch={switch1} setSwitch={setSwitch1} />
        <Switch switch={switch2} setSwitch={setSwitch2} />
        <Switch switch={switch3} setSwitch={setSwitch3} />
      </div>
      <div className={switch1 & switch2 & switch3 ? "green" : "red"}>
        {switch1 & switch2 & switch3 ? "GO ! " : "NO WAY !"}
      </div>

      <div
        className="reset"
        onClick={() => {
          setSwitch1(false);
          setSwitch2(false);
          setSwitch3(false);
        }}
      >
        Reset
      </div>
    </div>
  );
};

export default Switchs;
