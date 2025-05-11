import { Link } from "react-router-dom";

// Imports des images depuis /assets
import noeudsMarins from '/assets/Noeuds_Marins.png';
import noeudsMarinsComplete from '/assets/Noeuds_Marins_complété.png';
import partiesBateau from '/assets/Parties_Bateau.png';
import partiesBateauComplete from '/assets/Parties_Bateau_complété.png';
import securiteMer from '/assets/Sécurité_Mer.png';
import securiteMerComplete from '/assets/Sécurité_Mer_fond_complété.png';
import ventNavigation from '/assets/Vent_Navigation.png';
import ventNavigationComplete from '/assets/Vent_Navigation_complété.png';
import voile from '/assets/voile.png';
import voileComplete from '/assets/voile_complété.png';
import boatRacing from '/assets/boat_racing.png';
import boatRacingComplete from '/assets/boat_racing_complété.png';
import sailingSimu from '/assets/sailing_simu.png';
import sailingSimuComplete from '/assets/sailing_simu_complete.png';

export default function Home() {
  const isNavigationCompleted = localStorage.getItem('moduleWindComplete') === 'true';

  const navigationCards = [
    { 
      title: "Nœuds Marins", 
      image: localStorage.getItem('moduleNoeudsComplete') === 'true' ? noeudsMarinsComplete : noeudsMarins,
      path: "/quiz/noeuds" 
    },
    { 
      title: "Parties du Bateau", 
      image: localStorage.getItem('moduleBoatComplete') === 'true' ? partiesBateauComplete : partiesBateau,
      path: "/quiz/bateau" 
    },
    { 
      title: "Sécurité en Mer", 
      image: localStorage.getItem('moduleSecurityComplete') === 'true' ? securiteMerComplete : securiteMer,
      path: "/quiz/securite" 
    },
    { 
      title: "Navigation", 
      image: localStorage.getItem('moduleWindComplete') === 'true' ? ventNavigationComplete : ventNavigation,
      path: "/quiz/navigation" 
    },
    { 
      title: "Voiles", 
      image: localStorage.getItem('moduleSailComplete') === 'true' ? voileComplete : voile,
      path: "/quiz/voiles" 
    },
    { 
      title: "Course au Large", 
      image: localStorage.getItem('moduleRacingComplete') === 'true' 
        ? boatRacingComplete 
        : boatRacing,
      path: "/quiz/racing",
      isLocked: !isNavigationCompleted
    },
    { 
      title: "Simulation", 
      image: localStorage.getItem('moduleSimulationComplete') === 'true' 
        ? sailingSimuComplete 
        : sailingSimu,
      path: "/quiz/simulation",
      isLocked: !isNavigationCompleted
    }
  ];

  return (
    <div id="home-container" className="bg-gradient-to-b from-slate-900 via-blue-900 to-slate-900">
      <div className="flex flex-col gap-16 items-center text-center">
        {/* Premier groupe de cartes */}
        <div className="flex justify-center items-center gap-12 flex-wrap">
          {navigationCards.slice(0, 3).map((card, index) => (
            <Link
              key={`row1-${index}`}
              to={card.path}
              className={card.isLocked ? 'pointer-events-none opacity-50' : ''}
            >
              <img
                src={card.image}
                alt={card.title}
                className="navigation-icon transition-transform duration-300 hover:scale-110"
              />
            </Link>
          ))}
        </div>

        {/* Deuxième groupe de cartes */}
        <div className="flex justify-center gap-12 translate-x-[120px]">
          {navigationCards.slice(3, 5).map((card, index) => (
            <Link
              key={`row2-${index}`}
              to={card.path}
              className={card.isLocked ? 'pointer-events-none opacity-50' : ''}
            >
              <img
                src={card.image}
                alt={card.title}
                className="navigation-icon transition-transform duration-300 hover:scale-110"
              />
            </Link>
          ))}
        </div>

        {/* Nouvelle rangée pour les nouvelles cartes */}
        <div className="flex justify-center gap-12">
          {navigationCards.slice(5).map((card, index) => (
            <div key={`row3-${index}`} className="relative">
              <Link
                to={card.isLocked ? '#' : card.path}
                className={card.isLocked ? 'pointer-events-none relative' : ''}
                onClick={(e) => {
                  if (card.isLocked) {
                    e.preventDefault();
                  }
                }}
              >
                <img
                  src={card.image}
                  alt={card.title}
                  className={`navigation-icon transition-transform duration-300 ${
                    card.isLocked ? 'opacity-50' : 'hover:scale-110'
                  }`}
                />
                {card.isLocked && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="bg-black/75 text-white px-4 py-2 rounded-lg text-center">
                      <p className="font-pirates text-lg mb-1">🔒 Module verrouillé</p>
                      <p className="text-sm">Terminez d'abord Navigation et Vent</p>
                    </div>
                  </div>
                )}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
