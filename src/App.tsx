import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import MarineKnotsMap from "./pages/MarineKnotsMap";
import BoatPartsMap from "./pages/BoatPartsMap";
import SeaSecurityMap from "./pages/SeaSecurityMap";
import WindNavigationMap from "./pages/WindNavigationMap";
import SailMap from "./pages/SailMap";
import BoatUpgrades from "./pages/BoatUpgrades";
import RacingMap from "./pages/RacingMap";
import SimulationMap from "./pages/SimulationMap";

function App() {
  return (
    <Router>
      <div className="min-h-screen relative">
        <Header />
        <main className="pt-16 relative z-0">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/quiz/noeuds" element={<MarineKnotsMap />} />
            <Route path="/quiz/bateau" element={<BoatPartsMap />} />
            <Route path="/quiz/securite" element={<SeaSecurityMap />} />
            <Route path="/quiz/navigation" element={<WindNavigationMap />} />
            <Route path="/quiz/voiles" element={<SailMap />} />
            <Route path="/boat-upgrades" element={<BoatUpgrades />} />
            <Route path="/quiz/racing" element={<RacingMap />} />
            <Route path="/quiz/simulation" element={<SimulationMap />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
