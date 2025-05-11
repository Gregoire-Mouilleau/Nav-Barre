import { Question } from './quizQuestions';

export interface SimulationStep {
  id: number;
  type: 'quiz';
  title: string;
  description: string;
  questions: Question[];
}

export const simulationSteps: SimulationStep[] = [
  {
    id: 1,
    type: 'quiz',
    title: "Navigation Virtuelle",
    description: "Bases de la simulation",
    questions: [
      {
        question: "Comment optimiser sa vitesse dans une simulation ?",
        answers: [
          "Ajuster l'angle des voiles au vent",
          "Naviguer en ligne droite",
          "Utiliser le moteur",
          "Suivre le courant"
        ],
        correctIndex: 0
      },
      {
        question: "Quelle est la meilleure allure pour remonter au vent ?",
        answers: [
          "Le près serré",
          "Le vent arrière",
          "Le grand largue",
          "Le travers"
        ],
        correctIndex: 0
      }
    ]
  },
  // ... Ajoutez plus d'étapes similaires
];
