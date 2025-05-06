import { Question } from './quizQuestions';

export interface WindStep {
  id: number;
  type: 'quiz';
  title: string;
  description: string;
  questions: Question[];
}

export const windSteps: WindStep[] = [
  {
    id: 1,
    type: 'quiz',
    title: "Les Bases du Vent",
    description: "Comprendre le vent en navigation",
    questions: [
      {
        question: "Qu'est-ce que le vent apparent ?",
        answers: [
          "Le vent ressenti en mouvement",
          "Le vent réel",
          "Le vent prévu",
          "Une rafale"
        ],
        correctIndex: 0
      },
      {
        question: "Comment se forme le vent ?",
        answers: [
          "Par différence de pression atmosphérique",
          "Par les marées",
          "Par la rotation de la terre",
          "Par le soleil"
        ],
        correctIndex: 0
      }
    ]
  },
  {
    id: 2,
    type: 'quiz',
    title: "Direction du Vent",
    description: "Les différentes allures",
    questions: [
      {
        question: "Qu'appelle-t-on le près ?",
        answers: ["Navigation face au vent", "Navigation vent arrière", "Navigation travers au vent", "Navigation sans vent"],
        correctIndex: 0
      },
      {
        question: "Quelle est l'allure la plus rapide ?",
        answers: ["Le grand largue", "Le près", "Le vent arrière", "Le face au vent"],
        correctIndex: 0
      }
    ]
  },
  {
    id: 3,
    type: 'quiz',
    title: "Force du Vent",
    description: "Échelle de Beaufort",
    questions: [
      {
        question: "Combien de degrés compte l'échelle de Beaufort ?",
        answers: ["12", "10", "8", "15"],
        correctIndex: 0
      }
    ]
  },
  {
    id: 4,
    type: 'quiz',
    title: "Effets du Vent",
    description: "Impact sur la navigation",
    questions: [
      {
        question: "Qu'est-ce que la dérive ?",
        answers: ["Le déplacement latéral du bateau", "L'accélération", "Le freinage", "Le tangage"],
        correctIndex: 0
      },
      {
        question: "Comment limiter la dérive ?",
        answers: ["Utiliser la dérive/quille", "Augmenter la vitesse", "Réduire la voilure", "Changer de cap"],
        correctIndex: 0
      }
    ]
  },
  {
    id: 5,
    type: 'quiz',
    title: "Mesure du Vent",
    description: "Instruments de mesure",
    questions: [
      {
        question: "Quel instrument mesure la vitesse du vent ?",
        answers: ["L'anémomètre", "Le baromètre", "Le compas", "La girouette"],
        correctIndex: 0
      }
    ]
  },
  {
    id: 6,
    type: 'quiz',
    title: "Navigation au Près",
    description: "Techniques spécifiques",
    questions: [
      {
        question: "Quel angle minimum peut-on tenir au près ?",
        answers: ["Environ 45°", "90°", "0°", "180°"],
        correctIndex: 0
      },
      {
        question: "Comment optimiser sa vitesse au près ?",
        answers: ["Border les voiles", "Choquer les voiles", "Naviguer face au vent", "Arrêter le bateau"],
        correctIndex: 0
      }
    ]
  },
  {
    id: 7,
    type: 'quiz',
    title: "Vents Locaux",
    description: "Phénomènes particuliers",
    questions: [
      {
        question: "Qu'est-ce qu'une brise thermique ?",
        answers: ["Un vent créé par différence de température", "Un vent constant", "Une tempête", "Un courant marin"],
        correctIndex: 0
      }
    ]
  },
  {
    id: 8,
    type: 'quiz',
    title: "Prévisions",
    description: "Anticiper le vent",
    questions: [
      {
        question: "Comment obtenir les prévisions météo en mer ?",
        answers: ["Par VHF", "Par téléphone", "Par observation", "Par intuition"],
        correctIndex: 0
      },
      {
        question: "Quelle est la validité moyenne d'une prévision marine ?",
        answers: ["24 heures", "1 semaine", "12 heures", "48 heures"],
        correctIndex: 0
      }
    ]
  },
  {
    id: 9,
    type: 'quiz',
    title: "Réglages des Voiles",
    description: "Adaptation au vent",
    questions: [
      {
        question: "Comment régler les voiles au portant ?",
        answers: ["Les choquer", "Les border", "Les affaler", "Les rouler"],
        correctIndex: 0
      }
    ]
  },
  {
    id: 10,
    type: 'quiz',
    title: "Changements de Direction",
    description: "Manœuvres et vent",
    questions: [
      {
        question: "Qu'est-ce qu'un virement de bord ?",
        answers: ["Changement de direction face au vent", "Changement dos au vent", "Un arrêt", "Une accélération"],
        correctIndex: 0
      }
    ]
  },
  {
    id: 11,
    type: 'quiz',
    title: "Situations Difficiles",
    description: "Gestion du vent fort",
    questions: [
      {
        question: "Que faire en cas de vent fort ?",
        answers: ["Réduire la voilure", "Augmenter la voilure", "Arrêter le bateau", "Naviguer face au vent"],
        correctIndex: 0
      },
      {
        question: "Qu'est-ce qu'un ris ?",
        answers: ["Une réduction de voile", "Une augmentation de voile", "Un type de nœud", "Un instrument"],
        correctIndex: 0
      }
    ]
  },
  {
    id: 12,
    type: 'quiz',
    title: "Navigation de Nuit",
    description: "Le vent sans visibilité",
    questions: [
      {
        question: "Comment évaluer le vent la nuit ?",
        answers: ["Avec les instruments", "À la vue", "Au son", "À l'odeur"],
        correctIndex: 0
      }
    ]
  },
  {
    id: 13,
    type: 'quiz',
    title: "Effets de Site",
    description: "Influence du relief",
    questions: [
      {
        question: "Comment le relief influence-t-il le vent ?",
        answers: ["Il le dévie et le renforce", "Il l'arrête", "Il le stabilise", "Il n'a pas d'effet"],
        correctIndex: 0
      },
      {
        question: "Qu'est-ce qu'un effet Venturi ?",
        answers: ["Une accélération du vent", "Un arrêt du vent", "Un changement de direction", "Une diminution du vent"],
        correctIndex: 0
      }
    ]
  },
  {
    id: 14,
    type: 'quiz',
    title: "Performance",
    description: "Optimisation de la navigation",
    questions: [
      {
        question: "Comment optimiser sa vitesse au portant ?",
        answers: ["Choquer les voiles", "Border les voiles", "Réduire la voilure", "Naviguer face au vent"],
        correctIndex: 0
      }
    ]
  },
  {
    id: 15,
    type: 'quiz',
    title: "Certification Finale",
    description: "Test final",
    questions: [
      {
        question: "Quelle est la meilleure allure pour remonter au vent ?",
        answers: ["Le près", "Le vent arrière", "Le travers", "Le grand largue"],
        correctIndex: 0
      },
      {
        question: "Comment s'appelle un changement de direction face au vent ?",
        answers: ["Virement", "Empannage", "Abattée", "Auloffée"],
        correctIndex: 0
      },
      {
        question: "Que signifie 'être ardent' ?",
        answers: ["Tendance à remonter au vent", "Tendance à abattre", "Naviguer droit", "Être à l'arrêt"],
        correctIndex: 0
      }
    ]
  }
];
