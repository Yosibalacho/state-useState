import { createContext, useEffect, useState } from "react";
import { getDevicesApi } from "../services/devices/getDevicesApi";
export const devicesContext = createContext();

export default function DevicesProvider({ children }) {
  const [devices, setDevices] = useState([]);
  useEffect(() => {
    getDevicesApi().then((res) => setDevices(res));
  }, []);

  return (
    <devicesContext.Provider value={{ devices, setDevices }}>
      {children}
    </devicesContext.Provider>
  );
}
