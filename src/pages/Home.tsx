import { Link } from "react-router-dom";

// Chemins des images
const noeudsMarins = '/images/Noeuds_Marins.png';
const noeudsMarinsComplete = '/images/Noeuds_Marins_complété.png';
const partiesBateau = '/images/Parties_Bateau.png';
const partiesBateauComplete = '/images/Parties_Bateau_complété.png';
const securiteMer = '/images/Sécurité_Mer.png';
const securiteMerComplete = '/images/Sécurité_Mer_fond_complété.png';
const ventNavigation = '/images/Vent_Navigation.png';
const ventNavigationComplete = '/images/Vent_Navigation_complété.png';
const voile = '/images/Voile.png';
const voileComplete = '/images/Voile_complété.png';

export default function Home() {
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
    }
  ];

  return (
    <div id="home-container" className="bg-gradient-to-b from-slate-900 via-blue-900 to-slate-900">
      <div className="flex flex-col gap-16 items-center text-center">
        <div className="flex justify-center items-center gap-12 flex-wrap">
          {navigationCards.slice(0, 3).map((card, index) => (
            <Link
              key={`row1-${index}`}
              to={card.path}
            >
              <img
                src={card.image}
                alt={card.title}
                className="navigation-icon"
              />
            </Link>
          ))}
        </div>

        <div className="flex justify-center gap-12 translate-x-[120px]">
          {navigationCards.slice(3).map((card, index) => (
            <Link
              key={`row2-${index}`}
              to={card.path}
            >
              <img
                src={card.image}
                alt={card.title}
                className="navigation-icon"
              />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
