import { Gallery, Videos, HomePage } from "./component/pages";
import PageNotFound from "./component/pages/NotFound/NotFound";
import { Routes, Route } from "react-router-dom";
import DevicesProvider from "./contexts/devices-context";
import Devices from "./component/pages/devices/devices.component";
export default function Router() {
  return (
    <Routes>
      <Route path="HomePage" element={<HomePage />} />
      <Route path="*" element={<PageNotFound />} />
      <Route path="Gallery" element={<Gallery />} />
      <Route
        path="Devices"
        element={
          <DevicesProvider>
            <Devices />
          </DevicesProvider>
        }
      />
      <Route path="Videos" element={<Videos />} />
    </Routes>
  );
}
