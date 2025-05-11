import { Question } from './quizQuestions';

export interface KnotStep {
  id: number;
  type: 'quiz' | 'image';
  title: string;
  description: string;
  questions?: Question[];
  imageUrl?: string;
  correctAnswer?: string;
}

export const knotSteps: KnotStep[] = [
  {
    id: 1,
    type: 'image',
    imageUrl: "/assets/quiz/noeud1.png",
    correctAnswer: "noeud en huit"
  },
  {
    id: 2,
    type: 'image',
    title: "Le Nœud de Chaise",
    description: "Identifiez ce nœud essentiel",
    imageUrl: "/assets/quiz/noeud_de_chaise.png",
    correctAnswer: "noeud de chaise"
  },
  {
    id: 3,
    type: 'quiz',
    title: "Utilisation des Nœuds",
    description: "Testez vos connaissances sur l'utilisation pratique des nœuds",
    questions: [
      {
        question: "Dans quelle situation utiliseriez-vous un nœud de chaise ?",
        answers: ["Pour créer une boucle de sauvetage", "Pour amarrer un bateau", "Pour relier deux cordages", "Pour décorer"],
        correctIndex: 0
      },
      {
        question: "Quelle est la principale qualité du nœud de cabestan ?",
        answers: ["Facile à défaire", "Très solide", "Décoratif", "Rapide à faire"],
        correctIndex: 0
      }
    ]
  },
  {
    id: 4,
    type: 'image',
    title: "Le Nœud de Huit",
    description: "Identifiez ce nœud d'arrêt",
    imageUrl: "/src/assets/noeud_de_huit.png",
    correctAnswer: "noeud de huit"
  },
  {
    id: 5,
    type: 'quiz',
    title: "Sécurité Maritime",
    description: "Les nœuds essentiels pour la sécurité",
    questions: [
      {
        question: "Quel nœud est recommandé pour attacher un gilet de sauvetage ?",
        answers: ["Nœud en huit", "Nœud plat", "Nœud de chaise", "Tour mort"],
        correctIndex: 2
      }
    ]
  },
  {
    id: 6,
    type: 'quiz',
    title: "Histoire des Nœuds Marins",
    description: "Découvrez l'histoire de la navigation",
    questions: [
      {
        question: "À quelle époque le nœud de chaise a-t-il été inventé ?",
        answers: ["Antiquité", "Moyen Âge", "Renaissance", "Époque moderne"],
        correctIndex: 1
      },
      {
        question: "Quelle civilisation a développé les premiers nœuds marins complexes ?",
        answers: ["Les Phéniciens", "Les Grecs", "Les Vikings", "Les Polynésiens"],
        correctIndex: 0
      }
    ]
  },
  {
    id: 7,
    type: 'image',
    title: "Le Nœud de Taquet",
    description: "Identifiez ce nœud d'amarrage",
    imageUrl: "/src/assets/nœud_de_taquet.png",
    correctAnswer: "noeud de taquet"
  },
  {
    id: 8,
    type: 'quiz',
    title: "Entretien des Cordages",
    description: "Maintenance et soin des cordages",
    questions: [
      {
        question: "Comment protéger un cordage de l'usure ?",
        answers: ["Utiliser une garcette", "Le peindre", "Le mouiller", "Le tendre"],
        correctIndex: 0
      },
      {
        question: "À quelle fréquence faut-il vérifier les nœuds d'amarrage ?",
        answers: ["Quotidiennement", "Hebdomadairement", "Mensuellement", "Annuellement"],
        correctIndex: 0
      }
    ]
  },
  {
    id: 9,
    type: 'quiz',
    title: "Situations d'Urgence",
    description: "Les nœuds pour les situations critiques",
    questions: [
      {
        question: "Quel nœud utiliser pour une réparation temporaire de gréement ?",
        answers: ["Nœud de chaise double", "Nœud plat", "Nœud en huit", "Tour mort"],
        correctIndex: 0
      },
      {
        question: "En cas de remorquage d'urgence, quel nœud privilégier ?",
        answers: ["Nœud de remorquage", "Nœud de chaise", "Tour mort", "Nœud de cabestan"],
        correctIndex: 1
      }
    ]
  },
  {
    id: 10,
    type: 'image',
    title: "Le Nœud de Chaise Double",
    description: "Un nœud avancé",
    imageUrl: "/assets/quiz/noeud_de_chaise_double.png",
    correctAnswer: "noeud de chaise double"
  },
  {
    id: 11,
    type: 'quiz',
    title: "Navigation Traditionnelle",
    description: "Les techniques ancestrales",
    questions: [
      {
        question: "Quel nœud était utilisé pour mesurer la vitesse d'un navire ?",
        answers: ["Nœud de Carrick", "Nœud de Senne", "Nœud de Lof", "Nœud de Ride"],
        correctIndex: 2
      }
    ]
  },
  {
    id: 12,
    type: 'quiz',
    title: "Compétition et Course",
    description: "Les nœuds pour la performance",
    questions: [
      {
        question: "Quel nœud permet le réglage le plus rapide des écoutes ?",
        answers: ["Nœud de taquet", "Nœud de chaise", "Tour mort", "Nœud italien"],
        correctIndex: 3
      },
      {
        question: "Pour une manœuvre rapide de spinnaker, quel nœud utiliser ?",
        answers: ["Nœud rapide", "Nœud de prussik", "Nœud de lagut", "Nœud de bouline"],
        correctIndex: 0
      }
    ]
  },
  {
    id: 13,
    type: 'quiz',
    title: "Les Cordages Modernes",
    description: "Nouvelles technologies des cordages",
    questions: [
      {
        question: "Quel type de cordage offre le meilleur rapport résistance/poids ?",
        answers: ["Polyester tressé", "Dyneema", "Nylon", "Polypropylène"],
        correctIndex: 1
      },
      {
        question: "Pour quel usage le cordage en Kevlar est-il le plus adapté ?",
        answers: ["Amarrage", "Drisse", "Écoute", "Garde"],
        correctIndex: 1
      }
    ]
  },
  {
    id: 14,
    type: 'quiz',
    title: "Manœuvres Avancées",
    description: "Techniques professionnelles",
    questions: [
      {
        question: "Pour un mouillage sur corps-mort, quel nœud utiliser ?",
        answers: ["Nœud de chaise", "Tour mort et deux demi-clés", "Nœud de bouée", "Nœud d'étalingure"],
        correctIndex: 2
      }
    ]
  },
  {
    id: 15,
    type: 'quiz',
    title: "Certification Finale",
    description: "Validez vos connaissances",
    questions: [
      {
        question: "Combien de nœuds essentiels un marin doit-il maîtriser ?",
        answers: ["5", "8", "10", "12"],
        correctIndex: 2
      },
      {
        question: "Quel est le nœud le plus polyvalent en navigation ?",
        answers: ["Nœud de chaise", "Nœud en huit", "Tour mort", "Nœud plat"],
        correctIndex: 0
      },
      {
        question: "Dans quel cas ne jamais utiliser un nœud plat ?",
        answers: ["Pour les amarres", "Pour les voiles", "Pour joindre deux cordages de sécurité", "Pour le stockage"],
        correctIndex: 2
      }
    ]
  }
];
