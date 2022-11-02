const Switch = (props) => {
  const handleSwitchOn = () => {
    props.setSwitch(true);
  };
  const handleSwitchOff = () => {
    props.setSwitch(false);
  };
  return (
    <div>
      <div className="switch">
        <div
          className={props.switch === true ? "purple" : "white"}
          onClick={handleSwitchOn}
        >
          ON
        </div>
        <div
          className={props.switch === false ? "purple" : "white"}
          onClick={handleSwitchOff}
        >
          OFF
        </div>
      </div>
    </div>
  );
};

export default Switch;
