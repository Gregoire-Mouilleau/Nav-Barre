import { Question } from './quizQuestions';

export interface SailStep {
  id: number;
  type: 'quiz';
  title: string;
  description: string;
  questions: Question[];
}

export const sailSteps: SailStep[] = [
  {
    id: 1,
    type: 'quiz',
    title: "Introduction aux Voiles",
    description: "Comprendre les bases",
    questions: [
      {
        question: "Quelle voile est située à l'avant du mât ?",
        answers: ["Le foc", "La grand-voile", "Le spinnaker", "La trinquette"],
        correctIndex: 0
      },
      {
        question: "Quelle est la fonction principale de la grand-voile ?",
        answers: [
          "Propulser le bateau",
          "Équilibrer le bateau",
          "Diriger le bateau",
          "Freiner le bateau"
        ],
        correctIndex: 0
      }
    ]
  },
  {
    id: 2,
    type: 'quiz',
    title: "La Grand-Voile",
    description: "Fonctionnement principal",
    questions: [
      {
        question: "Comment hisser la grand-voile ?",
        answers: ["Avec la drisse", "Avec l'écoute", "Avec le hale-bas", "Avec le cunningham"],
        correctIndex: 0
      },
      {
        question: "Le point d'amure est situé...",
        answers: ["En bas avant", "En haut avant", "En bas arrière", "En haut arrière"],
        correctIndex: 0
      }
    ]
  },
  {
    id: 3,
    type: 'quiz',
    title: "Le Foc",
    description: "La voile d'avant",
    questions: [
      {
        question: "Le foc sert principalement à...",
        answers: ["Diriger le bateau", "Freiner", "Stabiliser", "Accélérer"],
        correctIndex: 0
      }
    ]
  },
  {
    id: 4,
    type: 'quiz',
    title: "Le Spinnaker",
    description: "La voile de portant",
    questions: [
      {
        question: "Quand utilise-t-on le spinnaker ?",
        answers: ["Aux allures portantes", "Au près", "Face au vent", "Par vent faible"],
        correctIndex: 0
      }
    ]
  },
  {
    id: 5,
    type: 'quiz',
    title: "Les Points de la Voile",
    description: "Anatomie d'une voile",
    questions: [
      {
        question: "La têtière est...",
        answers: ["Le haut de la voile", "Le bas", "L'avant", "L'arrière"],
        correctIndex: 0
      }
    ]
  },
  {
    id: 6,
    type: 'quiz',
    title: "Le Réglage",
    description: "Optimisation des voiles",
    questions: [
      {
        question: "Pour border une voile, il faut...",
        answers: ["Tirer sur l'écoute", "Relâcher l'écoute", "Monter la voile", "Descendre la voile"],
        correctIndex: 0
      }
    ]
  },
  {
    id: 7,
    type: 'quiz',
    title: "Les Allures",
    description: "Position des voiles",
    questions: [
      {
        question: "Au près, les voiles doivent être...",
        answers: ["Bordées", "Choquées", "Mi-bordées", "Affalées"],
        correctIndex: 0
      }
    ]
  },
  {
    id: 8,
    type: 'quiz',
    title: "Le Génois",
    description: "Le grand foc",
    questions: [
      {
        question: "Le génois est...",
        answers: ["Plus grand que le foc", "Plus petit que le foc", "Identique au foc", "Une voile arrière"],
        correctIndex: 0
      }
    ]
  },
  {
    id: 9,
    type: 'quiz',
    title: "Les Lattes",
    description: "Support de voile",
    questions: [
      {
        question: "Les lattes servent à...",
        answers: ["Maintenir le profil", "Réduire la voile", "Attacher la voile", "Protéger la voile"],
        correctIndex: 0
      }
    ]
  },
  {
    id: 10,
    type: 'quiz',
    title: "Le Cunningham",
    description: "Réglage fin",
    questions: [
      {
        question: "Le cunningham permet de...",
        answers: ["Régler la tension du guindant", "Border la voile", "Réduire la voile", "Protéger la voile"],
        correctIndex: 0
      }
    ]
  },
  {
    id: 11,
    type: 'quiz',
    title: "La Prise de Ris",
    description: "Réduction de voilure",
    questions: [
      {
        question: "On prend un ris quand...",
        answers: ["Le vent forcit", "Le vent faiblit", "Il pleut", "La nuit tombe"],
        correctIndex: 0
      }
    ]
  },
  {
    id: 12,
    type: 'quiz',
    title: "L'Écoute",
    description: "Contrôle des voiles",
    questions: [
      {
        question: "L'écoute permet de...",
        answers: ["Régler l'angle de la voile", "Hisser la voile", "Protéger la voile", "Réparer la voile"],
        correctIndex: 0
      }
    ]
  },
  {
    id: 13,
    type: 'quiz',
    title: "Le Tangon",
    description: "Support de spinnaker",
    questions: [
      {
        question: "Le tangon sert à...",
        answers: ["Tenir le spinnaker", "Border la voile", "Hisser la voile", "Réduire la voile"],
        correctIndex: 0
      }
    ]
  },
  {
    id: 14,
    type: 'quiz',
    title: "L'Accastillage",
    description: "Équipements des voiles",
    questions: [
      {
        question: "Les poulies servent à...",
        answers: ["Renvoyer les cordages", "Attacher les voiles", "Protéger les voiles", "Réparer les voiles"],
        correctIndex: 0
      }
    ]
  },
  {
    id: 15,
    type: 'quiz',
    title: "Les Penons",
    description: "Indicateurs de vent",
    questions: [
      {
        question: "Les penons indiquent...",
        answers: ["L'écoulement du vent", "La force du vent", "La direction du vent", "La température"],
        correctIndex: 0
      }
    ]
  },
  {
    id: 16,
    type: 'quiz',
    title: "Le Chariot d'Écoute",
    description: "Réglage latéral",
    questions: [
      {
        question: "Le chariot permet de...",
        answers: ["Régler la position de l'écoute", "Hisser la voile", "Protéger la voile", "Réparer la voile"],
        correctIndex: 0
      }
    ]
  },
  {
    id: 17,
    type: 'quiz',
    title: "L'Étai",
    description: "Support avant",
    questions: [
      {
        question: "L'étai sert à...",
        answers: ["Tenir le mât", "Porter les voiles", "Diriger le bateau", "Freiner"],
        correctIndex: 0
      }
    ]
  },
  {
    id: 18,
    type: 'quiz',
    title: "La Bôme",
    description: "Support horizontal",
    questions: [
      {
        question: "La bôme maintient...",
        answers: ["Le bas de la grand-voile", "Le foc", "Le spinnaker", "Les drisses"],
        correctIndex: 0
      }
    ]
  },
  {
    id: 19,
    type: 'quiz',
    title: "L'Enrouleur",
    description: "Système de rangement",
    questions: [
      {
        question: "L'enrouleur permet de...",
        answers: ["Ranger le foc", "Hisser la voile", "Border la voile", "Prendre un ris"],
        correctIndex: 0
      }
    ]
  },
  {
    id: 20,
    type: 'quiz',
    title: "Certification Finale",
    description: "Test final",
    questions: [
      {
        question: "Quelle est la meilleure voile par vent fort ?",
        answers: ["Le foc", "Le spinnaker", "Le génois", "La grand-voile seule"],
        correctIndex: 0
      },
      {
        question: "Comment optimiser le réglage des voiles ?",
        answers: ["Observer les penons", "Tirer fort sur les écoutes", "Naviguer vite", "Prendre des ris"],
        correctIndex: 0
      },
      {
        question: "Un bon jeu de voiles comprend...",
        answers: ["Grand-voile, foc, spi", "Une seule voile", "Uniquement des focs", "Que des spinnakers"],
        correctIndex: 0
      }
    ]
  }
];
