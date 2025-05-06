import { Link } from "react-router-dom";

// Importation des images avec @
import noeudsMarins from '@/assets/Noeuds_Marins.png';
import noeudsMarinsComplete from '@/assets/Noeuds_Marins_complété.png';
import partiesBateau from '@/assets/Parties_Bateau.png';
import partiesBateauComplete from '@/assets/Parties_Bateau_complété.png';
import securiteMer from '@/assets/Sécurité_Mer.png';
import securiteMerComplete from '@/assets/Sécurité_Mer_fond_complété.png';
import ventNavigation from '@/assets/Vent_Navigation.png';
import ventNavigationComplete from '@/assets/Vent_Navigation_complété.png';
import voile from '@/assets/voile.png';
import voileComplete from '@/assets/Voile_complété.png';

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
