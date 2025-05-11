import { Question } from './quizQuestions';

export interface BoatPartStep {
  id: number;
  type: 'quiz' | 'image';
  title: string;
  description: string;
  questions?: Question[];
  imageUrl?: string;
  correctAnswer?: string;
}

export const boatPartSteps: BoatPartStep[] = [
  {
    id: 1,
    type: 'quiz',
    title: "Introduction aux Parties du Bateau",
    description: "Les éléments fondamentaux",
    questions: [
      {
        question: "Comment s'appelle la partie avant d'un bateau ?",
        answers: ["La proue", "La poupe", "La quille", "Le pont"],
        correctIndex: 0
      },
      {
        question: "Quelle est la fonction principale de la quille ?",
        answers: ["Stabiliser le bateau", "Diriger", "Freiner", "Accélérer"],
        correctIndex: 0
      }
    ]
  },
  {
    id: 2,
    type: 'image',
    title: "La Proue",
    description: "Identifiez cette partie du bateau",
    imageUrl: "/assets/proue.png",
    correctAnswer: "proue"
  },
  {
    id: 3,
    type: 'quiz',
    title: "Le Gréement",
    description: "Les éléments du mât",
    questions: [
      {
        question: "Qu'est-ce que le gréement dormant ?",
        answers: ["Les haubans et étais", "Les voiles", "Les cordages", "Le gouvernail"],
        correctIndex: 0
      },
      {
        question: "À quoi servent les haubans ?",
        answers: ["Tenir le mât", "Border les voiles", "Diriger le bateau", "Amarrer"],
        correctIndex: 0
      },
      {
        question: "L'étai avant supporte...",
        answers: ["Le foc", "La grand-voile", "Le spinnaker", "La trinquette"],
        correctIndex: 0
      }
    ]
  },
  {
    id: 4,
    type: 'quiz',
    title: "La Voilure",
    description: "Les différentes voiles",
    questions: [
      {
        question: "Où se trouve la grand-voile ?",
        answers: ["Sur le mât principal", "À l'avant", "À l'arrière", "Sur les côtés"],
        correctIndex: 0
      },
      {
        question: "Le foc est situé...",
        answers: ["À l'avant du mât", "Derrière le mât", "Sur les côtés", "Au milieu"],
        correctIndex: 0
      }
    ]
  },
  {
    id: 5,
    type: 'image',
    title: "Le Safran",
    description: "Identifiez cet élément",
    imageUrl: "/assets/safran.png",
    correctAnswer: "safran"
  },
  {
    id: 6,
    type: 'quiz',
    title: "Le Pont",
    description: "Les équipements du pont",
    questions: [
      {
        question: "À quoi sert le winch ?",
        answers: ["Border les écoutes", "Diriger", "Freiner", "Accélérer"],
        correctIndex: 0
      },
      {
        question: "Les filières servent à...",
        answers: ["La sécurité de l'équipage", "Tenir les voiles", "Amarrer", "Ranger le matériel"],
        correctIndex: 0
      }
    ]
  },
  {
    id: 7,
    type: 'quiz',
    title: "La Coque",
    description: "Structure principale",
    questions: [
      {
        question: "Quel est le rôle des bouchains ?",
        answers: ["Renforcer la coque", "Décorer", "Stocker", "Flotter"],
        correctIndex: 0
      },
      {
        question: "La ligne de flottaison est...",
        answers: ["L'intersection entre l'eau et la coque", "Le fond du bateau", "Le haut de la coque", "L'avant du bateau"],
        correctIndex: 0
      },
      {
        question: "Le bordé désigne...",
        answers: ["L'ensemble des planches de la coque", "Le pont", "La quille", "Le gouvernail"],
        correctIndex: 0
      }
    ]
  },
  {
    id: 8,
    type: 'image',
    title: "Le Mât",
    description: "Structure verticale",
    imageUrl: "/assets/mat.png",
    correctAnswer: "mat"
  },
  {
    id: 9,
    type: 'quiz',
    title: "Les Appendices",
    description: "Éléments sous-marins",
    questions: [
      {
        question: "La dérive sert à...",
        answers: ["Limiter la dérive", "Accélérer", "Freiner", "Tourner"],
        correctIndex: 0
      },
      {
        question: "Le lest permet de...",
        answers: ["Stabiliser le bateau", "Augmenter la vitesse", "Diriger", "Flotter"],
        correctIndex: 0
      }
    ]
  },
  {
    id: 10,
    type: 'quiz',
    title: "Le Cockpit",
    description: "Zone de pilotage",
    questions: [
      {
        question: "Où se trouve normalement la barre ?",
        answers: ["Dans le cockpit", "Sur le pont", "Dans la cabine", "Sur le mât"],
        correctIndex: 0
      },
      {
        question: "Le compas de route est placé...",
        answers: ["Près de la barre", "Sur le mât", "À l'avant", "Dans la cabine"],
        correctIndex: 0
      },
      {
        question: "Les barres de flèche servent à...",
        answers: ["Écarter les haubans", "Tenir la barre", "Ranger le matériel", "Amarrer"],
        correctIndex: 0
      }
    ]
  },
  {
    id: 11,
    type: 'image',
    title: "La Bôme",
    description: "Support horizontal",
    imageUrl: "/assets/bome.png",
    correctAnswer: "bome"
  },
  {
    id: 12,
    type: 'quiz',
    title: "Les Équipements",
    description: "Accessoires essentiels",
    questions: [
      {
        question: "Les taquets servent à...",
        answers: ["Amarrer les cordages", "Diriger", "Supporter les voiles", "Décorer"],
        correctIndex: 0
      }
    ]
  },
  {
    id: 13,
    type: 'quiz',
    title: "La Navigation",
    description: "Instruments de navigation",
    questions: [
      {
        question: "Où est situé le compas ?",
        answers: ["Près de la barre", "Sur le mât", "Dans la cale", "Sur la proue"],
        correctIndex: 0
      }
    ]
  },
  {
    id: 14,
    type: 'quiz',
    title: "Le Gréement Courant",
    description: "Les cordages mobiles",
    questions: [
      {
        question: "Les écoutes servent à...",
        answers: ["Régler les voiles", "Tenir le mât", "Amarrer", "Ancrer"],
        correctIndex: 0
      }
    ]
  },
  {
    id: 15,
    type: 'quiz',
    title: "La Sécurité",
    description: "Équipements de sécurité",
    questions: [
      {
        question: "Les chandeliers supportent...",
        answers: ["Les filières", "Les voiles", "Le mât", "Les cordages"],
        correctIndex: 0
      }
    ]
  },
  {
    id: 16,
    type: 'quiz',
    title: "Le Mouillage",
    description: "Système d'ancrage",
    questions: [
      {
        question: "Le guindeau sert à...",
        answers: ["Remonter l'ancre", "Hisser les voiles", "Diriger", "Freiner"],
        correctIndex: 0
      }
    ]
  },
  {
    id: 17,
    type: 'quiz',
    title: "L'Accastillage",
    description: "Équipements divers",
    questions: [
      {
        question: "Les poulies servent à...",
        answers: ["Renvoyer les cordages", "Amarrer", "Stocker", "Diriger"],
        correctIndex: 0
      }
    ]
  },
  {
    id: 18,
    type: 'quiz',
    title: "Les Aménagements",
    description: "Espaces intérieurs",
    questions: [
      {
        question: "Le carré est...",
        answers: ["Le salon", "La cuisine", "La salle de bain", "Le garage"],
        correctIndex: 0
      }
    ]
  },
  {
    id: 19,
    type: 'quiz',
    title: "La Motorisation",
    description: "Système de propulsion",
    questions: [
      {
        question: "L'hélice est protégée par...",
        answers: ["La chaise", "Le safran", "La quille", "Le gouvernail"],
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
        question: "Le tableau arrière est situé...",
        answers: ["À la poupe", "À la proue", "Sur les côtés", "Au milieu"],
        correctIndex: 0
      },
      {
        question: "Le roof est...",
        answers: ["La partie surélevée", "Le fond", "L'avant", "L'arrière"],
        correctIndex: 0
      },
      {
        question: "Les passes-coques sont...",
        answers: ["Des ouvertures dans la coque", "Des cordages", "Des voiles", "Des instruments"],
        correctIndex: 0
      }
    ]
  }
];
