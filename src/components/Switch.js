const Switch = (props) => {
  const handleSwitchOn = () => {
    props.setSwitch(true);
  };
  const handleSwitchOff = () => {
    props.setSwitch(false);
  };
  return (
    <div>
      <div className="switchs">
        <div
          className={props.switch === true ? "purple switch" : "white switch"}
          onClick={handleSwitchOn}
        >
          ON
        </div>
        <div
          className={props.switch === false ? "purple switch" : "white switch"}
          onClick={handleSwitchOff}
        >
          OFF
        </div>
      </div>
    </div>
  );
};

export default Switch;
