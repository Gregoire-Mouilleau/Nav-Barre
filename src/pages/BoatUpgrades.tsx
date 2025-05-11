import { useState } from 'react';
import boatImage from '/src/assets/boat.png';
import treasureMapBg from '/assets/treasure-map-bg.jpg'; 

interface BoatLevel {
  id: number;
  cost: number;
  name: string;
  description: string;
  stats: {
    speed: number;
    resistance: number;
    maneuverability: number;
  };
  imageUrl: string;
}

const boatLevels: BoatLevel[] = [
  {
    id: 1,
    cost: 25,
    name: "Optimist",
    description: "Le voilier idéal pour débuter, stable et facile à manœuvrer",
    stats: { speed: 10, resistance: 10, maneuverability: 10 },
    imageUrl: "/assets/ameliorations/optimist.png" // Modifié
  },
  {
    id: 2,
    cost: 25,
    name: "Laser Pico",
    description: "Un dériveur léger parfait pour progresser",
    stats: { speed: 20, resistance: 20, maneuverability: 20 },
    imageUrl: "/src/assets/ameliorations/laser_pico.png"
  },
  {
    id: 3,
    cost: 50,
    name: "Laser",
    description: "Le dériveur olympique, rapide et technique",
    stats: { speed: 35, resistance: 30, maneuverability: 35 },
    imageUrl: "/src/assets/ameliorations/laser.png"
  },
  {
    id: 4,
    cost: 50,
    name: "420",
    description: "Voilier de compétition en double, excellent pour la régate",
    stats: { speed: 45, resistance: 40, maneuverability: 45 },
    imageUrl: "/src/assets/ameliorations/420.png"
  },
  {
    id: 5,
    cost: 75,
    name: "First 25",
    description: "Un voilier habitable performant pour la croisière côtière",
    stats: { speed: 60, resistance: 55, maneuverability: 60 },
    imageUrl: "/src/assets/ameliorations/first25.png"
  },
  {
    id: 6,
    cost: 75,
    name: "Class 40",
    description: "Un monocoque de course au large",
    stats: { speed: 75, resistance: 70, maneuverability: 75 },
    imageUrl: "/src/assets/ameliorations/class40.png"
  },
  {
    id: 7,
    cost: 100,
    name: "IMOCA 60",
    description: "Le voilier du Vendée Globe, conçu pour la course au large en solitaire",
    stats: { speed: 90, resistance: 85, maneuverability: 90 },
    imageUrl: "/src/assets/ameliorations/imoca60.png"
  },
  {
    id: 8,
    cost: 125,
    name: "Yacht",
    description: "Yacht de luxe moderne, élégant et rapide",
    stats: { speed: 100, resistance: 100, maneuverability: 100 },
    imageUrl: "/src/assets/ameliorations/yacht.png"
  }
];

export default function BoatUpgrades() {
  const [currentLevel, setCurrentLevel] = useState(() => {
    const saved = localStorage.getItem('boatLevel');
    return saved ? parseInt(saved) : 1;
  });

  const calculatePoints = () => {
    let points = 0;
    if (localStorage.getItem('moduleNoeudsComplete') === 'true') points += 100;
    if (localStorage.getItem('moduleBoatComplete') === 'true') points += 100;
    if (localStorage.getItem('moduleSecurityComplete') === 'true') points += 100;
    if (localStorage.getItem('moduleWindComplete') === 'true') points += 100;
    if (localStorage.getItem('moduleSailComplete') === 'true') points += 100;
    return points;
  };

  const [availablePoints, setAvailablePoints] = useState(calculatePoints);
  const currentBoat = boatLevels[currentLevel - 1];
  const nextBoat = currentLevel < 8 ? boatLevels[currentLevel] : null;

  const handleUpgrade = () => {
    if (nextBoat && availablePoints >= nextBoat.cost) {
      setAvailablePoints(prev => prev - nextBoat.cost);
      setCurrentLevel(prev => prev + 1);
      localStorage.setItem('boatLevel', (currentLevel + 1).toString());
    }
  };

  return (
    <div className="min-h-screen p-8" style={{ 
      background: `url(${treasureMapBg})`,
      backgroundSize: 'contain',
      backgroundPosition: 'center',
      backgroundAttachment: 'fixed'
    }}>
      <div className="max-w-7xl mx-auto backdrop-blur rounded-xl shadow-2xl p-8" 
        style={{ 
          marginTop: '6rem',
          border: '3px solid #8b4513',
          boxShadow: '0 0 20px rgba(139, 69, 19, 0.3)'
        }}>
        <div className="px-6">
          <h2 
            className="text-3xl font-pirates mb-8" 
            style={{ 
              color: '#8b4513',
              marginLeft: '2rem' 
            }}
          >
            {currentBoat.name}
          </h2>

          <div className="flex w-full gap-12 items-start mt-16">
            <div className="p-8 rounded-xl bg-gray-800" style={{ width: '50%', marginLeft: '2rem' }}>
              <p className="text-lg text-blue-400 font-semibold mb-8">
                {currentBoat.description}
              </p>
              <div className="space-y-6">
                {Object.entries(currentBoat.stats).map(([stat, value]) => (
                  <div key={stat} className="stat-bar-container">
                    <div className="stat-label">{stat.toUpperCase()}</div>
                    <div className="relative">
                      <div className={`stat-bar ${stat}`} style={{ width: `${value}%` }}>
                        <span className="stat-value">{value}/100</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="w-1/2 flex justify-center items-center">
              <img
                src={currentBoat.imageUrl}
                alt={currentBoat.name}
                style={{
                  position: 'absolute',
                  top: '20%',
                  right: '20%',
                  width: '300px',
                  maxHeight: '300px',
                  objectFit: 'contain',
                  zIndex: 20
                }}
              />
            </div>
          </div>

          <div className="flex justify-start mt-8" style={{ marginLeft: '2rem' }}>
            {currentLevel < 8 && nextBoat ? (
              <button
                onClick={handleUpgrade}
                disabled={availablePoints < nextBoat.cost}
                className="treasure-button px-8 py-4 rounded-xl font-pirates text-xl flex items-center gap-3"
                style={{
                    right: '-20%',
                  background: 'linear-gradient(45deg, #d5bc93 0%, #e6d5b8 100%)',
                  border: '3px solid #8b4513',
                  color: '#8b4513',
                  opacity: availablePoints < nextBoat.cost ? 0.5 : 1,
                  cursor: availablePoints < nextBoat.cost ? 'not-allowed' : 'pointer'
                }}
              >
                <span>⛵</span>
                <span>Améliorer ({availablePoints}/{nextBoat.cost} points)</span>
              </button>
            ) : (
              <div className="text-2xl font-pirates text-green-600">
                Félicitations ! Votre bateau a atteint son niveau maximal !
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
