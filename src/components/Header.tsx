import { Link, useLocation } from "react-router-dom";
import logo from '/assets/logo.png';

export default function Header() {
  const location = useLocation();

  const calculatePoints = () => {
    let points = 0;
    if (localStorage.getItem('moduleNoeudsComplete') === 'true') points += 100;
    if (localStorage.getItem('moduleBoatComplete') === 'true') points += 100;
    if (localStorage.getItem('moduleSecurityComplete') === 'true') points += 100;
    if (localStorage.getItem('moduleWindComplete') === 'true') points += 100;
    if (localStorage.getItem('moduleSailComplete') === 'true') points += 100;
    return points;
  };

  return (
    <header className="bg-white shadow" style={{ height: '64px' }}>
      <div className="h-full relative flex items-center px-4">
        {/* Logo et bouton retour */}
        <div className="flex items-center gap-4">
          <Link to="/">
            <img 
              src={logo} 
              alt="Logo" 
              style={{ 
                maxWidth: '270px',
                height: 'auto',
                objectFit: 'contain'
              }}
            />
          </Link>
          
          {location.pathname !== '/' && (
            <div style={{
              position: 'absolute',
              left: '300px',
              top: '9%',
              transform: 'translateY(-50%)'
            }}>
              <Link 
                to="/"
                className="px-4 py-2 flex items-center gap-2 rounded"
                style={{
                  background: 'linear-gradient(45deg, #d5bc93 0%, #e6d5b8 100%)',
                  border: '2px solid #8b4513',
                  color: '#8b4513',
                  fontFamily: "'Pirata One', cursive",
                  boxShadow: '2px 2px 4px rgba(139, 69, 19, 0.2)'
                }}
              >
                <span role="img" aria-label="back" className="text-xl">🗺️</span>
                <span className="font-bold">Retour</span>
              </Link>
            </div>
          )}
        </div>

        {/* Bouton amélioration */}
        <div 
          style={{
            position: 'absolute',
            right: '170px',
            top: '8%',
            transform: 'translateY(-50%)'
          }}
        >
          <Link 
            to="/boat-upgrades"
            className="px-4 py-2 flex items-center gap-2 rounded"
            style={{
              background: 'linear-gradient(45deg, #d5bc93 0%, #e6d5b8 100%)',
              border: '2px solid #8b4513',
              color: '#8b4513',
              fontFamily: "'Pirata One', cursive",
              boxShadow: '2px 2px 4px rgba(139, 69, 19, 0.2)'
            }}
          >
            <span role="img" aria-label="boat" className="text-xl">⛵</span>
            <span className="font-bold">Améliorer le navire</span>
          </Link>
        </div>

        {/* Points fixés à droite */}
        <div 
          style={{
            position: 'absolute',
            right: '30px',
            top: '8%',
            transform: 'translateY(-50%)'
          }}
          className="flex items-center gap-2"
        >
          <span className="text-xl">⚓</span>
          <span className="text-lg font-bold text-blue-900">
            {calculatePoints()} points
          </span>
        </div>
      </div>
    </header>
  );
}