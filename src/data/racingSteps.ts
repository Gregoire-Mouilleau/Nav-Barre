import { Question } from './quizQuestions';

export interface RacingStep {
  id: number;
  type: 'quiz';
  title: string;
  description: string;
  questions: Question[];
}

export const racingSteps: RacingStep[] = [
  {
    id: 1,
    type: 'quiz',
    title: "Tactiques de Régate",
    description: "Fondamentaux de la course",
    questions: [
      {
        question: "Qu'est-ce qu'une lay-line en régate ?",
        answers: [
          "La route directe vers la marque au près",
          "La ligne de départ",
          "La ligne d'arrivée",
          "La route sous le vent"
        ],
        correctIndex: 0
      },
      {
        question: "Que signifie 'tribord amure' ?",
        answers: [
          "Le vent vient de tribord",
          "On navigue tribord au vent",
          "La voile est à tribord",
          "Le bateau gîte à tribord"
        ],
        correctIndex: 1
      }
    ]
  },
  {
    id: 2,
    type: 'quiz',
    title: "Règles de Course",
    description: "Priorités et droits",
    questions: [
      {
        question: "Qui est prioritaire entre deux voiliers ?",
        answers: [
          "Tribord amure",
          "Bâbord amure",
          "Le plus rapide",
          "Le plus grand"
        ],
        correctIndex: 0
      }
    ]
  }
  // ... Ajoutez plus d'étapes similaires
];
