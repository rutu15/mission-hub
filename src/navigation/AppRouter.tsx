import { BrowserRouter, Routes, Route } from "react-router-dom";
import MissionDetails from "../pages/MissionDetails/MissionDetails";
import MissionOverview from "../pages/MissionOverview/MissionOverview";
import PageNotFound from "../components/PageNotFound/PageNotFound";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MissionOverview />} />
        <Route path="/mission/:id" element={<MissionDetails />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
