import { useState } from 'react';
import { simulationQuestions } from '../data/simulationQuestions';
import QuizStep from '../components/QuizStep';

export default function SimulationMap() {
  const [currentStep, setCurrentStep] = useState(0);
  const [scores, setScores] = useState<{ [key: number]: number }>({});
  const [started, setStarted] = useState(false);
  const [showFinalScore, setShowFinalScore] = useState(false);

  const handleStepComplete = (stepScore: number) => {
    const newScores = {
      ...scores,
      [currentStep]: stepScore
    };
    setScores(newScores);

    if (currentStep === simulationQuestions.length - 1) {
      setShowFinalScore(true);
      const hasPassedModule = Object.values(newScores).reduce((sum, score) => sum + score, 0) >= simulationQuestions.length / 2;
      if (hasPassedModule) {
        localStorage.setItem('moduleSimulationComplete', 'true');
      }
    } else {
      setCurrentStep(prev => prev + 1);
    }
  };

  if (showFinalScore) {
    const totalQuestions = simulationQuestions.length;
    const passThreshold = Math.ceil(totalQuestions / 2);
    const totalScore = Object.values(scores).reduce((sum, score) => sum + score, 0);
    const hasPassedModule = totalScore >= passThreshold;

    return (
      <div className="p-6 bg-white/90 rounded-xl text-center">
        <h2 className="text-3xl font-bold mb-6 text-[#8b4513]">Score Final</h2>
        <div className="text-2xl mb-4">
          Score total : {totalScore}/{totalQuestions}
        </div>
        <div className={`text-xl mb-6 ${hasPassedModule ? 'text-green-600' : 'text-red-600'}`}>
          {hasPassedModule 
            ? "🎉 Félicitations ! Vous avez validé le module Simulation !" 
            : "❌ Vous n'avez pas obtenu le score minimum requis."}
        </div>
        <button
          onClick={() => window.location.reload()}
          className={`px-6 py-3 rounded-lg text-white ${
            hasPassedModule ? 'bg-green-500 hover:bg-green-600' : 'bg-blue-500 hover:bg-blue-600'
          }`}
        >
          {hasPassedModule ? "Module suivant" : "Recommencer le module"}
        </button>
      </div>
    );
  }

  return started ? (
    <div className="min-h-screen flex items-center justify-center pt-16 relative">
      <QuizStep
        key={`step-${currentStep}`}
        questions={[simulationQuestions[currentStep]]}
        onComplete={handleStepComplete}
        stepNumber={currentStep + 1}
        totalSteps={simulationQuestions.length}
        totalScore={Object.values(scores).reduce((sum, score) => sum + score, 0)}
      />
    </div>
  ) : (
    <div 
      className="min-h-screen flex items-center justify-center pt-16"
      style={{
        backgroundImage: "url('/assets/fonds/Noeuds_Marins_fond.png')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        position: 'relative',
        zIndex: 0
      }}
    >
      <div className="relative w-[800px] h-[600px] z-10">
        <div 
          style={{
            position: 'absolute',
            top: '350px',
            left: '850px',
            transform: 'translate(-50%, -50%)',
            zIndex: 50
          }}
        >
          <button
            onClick={() => setStarted(true)}
            className="group treasure-button p-6 rounded-xl mb-8"
            style={{
              background: 'transparent',
              border: 'none',
              outline: 'none',
              boxShadow: 'none',
            }}
          >
            <div
              className="relative p-6 rounded-xl treasure-button"
              style={{
                background: 'linear-gradient(45deg, #d5bc93 0%, #e6d5b8 100%)'
              }}
            >
              <div className="flex flex-col items-center gap-3">
                <span className="text-4xl text-[#8b4513]">🎮</span>
                <div className="text-2xl text-[#5c3317] font-pirates">
                  Étape VII
                </div>
                <div className="text-xl font-bold text-[#8b4513]">
                  Simulation
                </div>
                <div className="text-sm italic text-[#5c3317]">
                  ~ Cliquez pour découvrir le trésor ~
                </div>
              </div>
            </div>
          </button>
            
          <div 
            className="text-white bg-blue-900/80 px-4 py-2 rounded-lg font-pirates mt-4 text-center"
            style={{ 
              zIndex: 20,
              transform: 'translateX(20px)'
            }}
          >
            <span role="img" aria-label="time" className="mr-2">⏱️</span>
            Temps estimé : 15 minutes
          </div>
        </div>
      </div>
    </div>
  );
}
