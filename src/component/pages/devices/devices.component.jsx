import { useContext } from "react";
import { devicesContext } from "../../../contexts/devices-context";
import DeviceCard from "../../features/device-card/device-card";

function Devices() {
  const { devices, setDevices } = useContext(devicesContext);
  return (
    <div>
      <h1>Devices</h1>
      {devices?.map((deviceItem) => (
        <DeviceCard devices={deviceItem} />
      ))}
    </div>
  );
}

export default Devices;
