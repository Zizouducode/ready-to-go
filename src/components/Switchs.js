import { useState } from "react";

const Switchs = () => {
  const [switch1, setSwitch1] = useState(false);
  const [switch2, setSwitch2] = useState(false);
  const [switch3, setSwitch3] = useState(false);

  const handleSwitch1On = () => {
    setSwitch1(true);
  };
  const handleSwitch1Off = () => {
    setSwitch1(false);
  };
  const handleSwitch2On = () => {
    setSwitch2(true);
  };
  const handleSwitch2Off = () => {
    setSwitch2(false);
  };
  const handleSwitch3On = () => {
    setSwitch3(true);
  };
  const handleSwitch3Off = () => {
    setSwitch3(false);
  };

  return (
    <div className="container">
      <div className="all-switch">
        <div className="switch">
          <div
            className={switch1 === true ? "purple" : "white"}
            onClick={handleSwitch1On}
          >
            ON
          </div>
          <div
            className={switch1 === false ? "purple" : "white"}
            onClick={handleSwitch1Off}
          >
            OFF
          </div>
        </div>
        <div className="switch">
          <div
            className={switch2 === true ? "purple" : "white"}
            onClick={handleSwitch2On}
          >
            ON
          </div>
          <div
            className={switch2 === false ? "purple" : "white"}
            onClick={handleSwitch2Off}
          >
            OFF
          </div>
        </div>
        <div className="switch">
          <div
            className={switch3 === true ? "purple" : "white"}
            onClick={handleSwitch3On}
          >
            ON
          </div>
          <div
            className={switch3 === false ? "purple" : "white"}
            onClick={handleSwitch3Off}
          >
            OFF
          </div>
        </div>
      </div>
      <div className={switch1 & switch2 & switch3 ? "green" : "red"}>
        {switch1 & switch2 & switch3 ? "GO ! " : "NO WAY !"}
      </div>
    </div>
  );
};

export default Switchs;
