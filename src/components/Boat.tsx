interface BoatProps {
  boatDirection: number;
  sailAngle: number;
  windDirection: number;
  windSpeed: number;
}

export default function Boat({ boatDirection, sailAngle, windDirection, windSpeed }: BoatProps) {
  return (
    <div className="relative w-full h-[500px] flex items-center justify-center">
      {/* Container principal avec rotation du bateau */}
      <div 
        className="relative w-[425px] h-[390px] flex items-center justify-center"
        style={{ 
          transform: `rotate(${boatDirection + 180}deg)`,
          transition: 'transform 0.8s ease-out',
          marginRight: '-100px'
        }}
      >
        {/* Bateau */}
        <div 
          className="absolute"
          style={{ 
            transform: 'translateY(50%)',
            width: '400px',
            height: '300px',
            left: '40%',
            marginLeft: '650px',
            backgroundColor: '#4a5568',
            clipPath: 'polygon(25% 0%, 75% 0%, 100% 100%, 0% 100%)'
          }}
        />
        
        {/* Voile avec rotation */}
        <div
          className="absolute"
          style={{ 
            width: '250px',
            height: '300px',
            top: '40%',
            left: '150%',
            transform: `translate(-50%, -25%) rotate(${sailAngle}deg)`,
            transformOrigin: 'bottom center',
            transition: 'all 0.5s ease-out',
            zIndex: 1,
            backgroundColor: 'white',
            clipPath: 'polygon(50% 0%, 100% 100%, 0% 100%)'
          }}
        />
      </div>

      {/* Indicateur de vent */}
      <div 
        className="absolute top-8 left-1/2 transform -translate-x-1/2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg"
        style={{ transform: `rotate(${windDirection}deg)` }}
      >
        <div className="flex items-center gap-2">
          <div className="w-8 h-2 bg-blue-500 rounded-full" />
          <span className="text-sm font-bold">{windSpeed} nœuds</span>
        </div>
      </div>
    </div>
  );
}
