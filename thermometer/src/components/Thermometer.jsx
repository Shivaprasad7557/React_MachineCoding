import Celsius from "./Celsius";
import Farenhiet from "./Ferenhiet";
import { useState } from "react";

function Thermometer() {
  const [temp, settemp] = useState(0);

  return (
    <div>
      <input
        type="number"
        value={temp}
        onChange={(e) => {
          settemp(e.target.value);
        }}
      />
      <Celsius temperature={temp} />
      <Farenhiet temperature={temp} />
    </div>
  );
}

export default Thermometer;
