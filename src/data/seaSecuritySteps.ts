import { Question } from './quizQuestions';

export interface SecurityStep {
  id: number;
  type: 'quiz';
  title: string;
  description: string;
  questions: Question[];
}

export const securitySteps: SecurityStep[] = [
  {
    id: 1,
    type: 'quiz',
    title: "Équipements de Sécurité",
    description: "Les essentiels de la sécurité",
    questions: [
      {
        question: "Quel numéro d'urgence appeler en mer ?",
        answers: ["196", "112", "18", "15"],
        correctIndex: 0
      },
      {
        question: "Que faire en premier si quelqu'un tombe à l'eau ?",
        answers: ["Crier 'Homme à la mer'", "Plonger", "Appeler les secours", "Couper le moteur"],
        correctIndex: 0
      }
    ]
  },
  {
    id: 2,
    type: 'quiz',
    title: "Gilets de Sauvetage",
    description: "Port et utilisation",
    questions: [
      {
        question: "Quand doit-on porter un gilet de sauvetage ?",
        answers: ["En permanence sur l'eau", "Par mauvais temps seulement", "Uniquement la nuit", "Quand on a peur"],
        correctIndex: 0
      },
      {
        question: "Comment choisir la taille d'un gilet ?",
        answers: ["Selon le poids de la personne", "Selon la taille", "Selon l'âge", "Au hasard"],
        correctIndex: 0
      }
    ]
  },
  {
    id: 3,
    type: 'quiz',
    title: "Communication",
    description: "Moyens de communication",
    questions: [
      {
        question: "Quelle est la fréquence de détresse en VHF ?",
        answers: ["Canal 16", "Canal 9", "Canal 12", "Canal 70"],
        correctIndex: 0
      },
      {
        question: "Le message 'MAYDAY' signifie...",
        answers: ["Danger immédiat", "Simple avertissement", "Demande d'information", "Fin d'alerte"],
        correctIndex: 0
      }
    ]
  },
  {
    id: 4,
    type: 'quiz',
    title: "Équipement Obligatoire",
    description: "Matériel de sécurité",
    questions: [
      {
        question: "Les fusées de détresse sont valables...",
        answers: ["3 ans", "5 ans", "1 an", "10 ans"],
        correctIndex: 0
      },
      {
        question: "L'extincteur doit être vérifié...",
        answers: ["Chaque année", "Tous les 2 ans", "Tous les 6 mois", "Tous les 5 ans"],
        correctIndex: 0
      }
    ]
  },
  {
    id: 5,
    type: 'quiz',
    title: "Homme à la Mer",
    description: "Procédures de sauvetage",
    questions: [
      {
        question: "La manœuvre de Boutakov sert à...",
        answers: ["Récupérer un homme à la mer", "Éviter un obstacle", "Ancrer le bateau", "Prendre un ris"],
        correctIndex: 0
      }
    ]
  },
  {
    id: 6,
    type: 'quiz',
    title: "Navigation de Nuit",
    description: "Règles et précautions",
    questions: [
      {
        question: "Quel feu doit être allumé en navigation de nuit ?",
        answers: ["Feu de position", "Feu de mouillage", "Feu de route", "Feu de pont"],
        correctIndex: 0
      },
      {
        question: "Que faire en cas de panne de feux de navigation ?",
        answers: ["Utiliser une lampe torche", "Continuer sans feux", "Arrêter le bateau", "Appeler les secours"],
        correctIndex: 0
      }
    ]
  },
  {
    id: 7,
    type: 'quiz',
    title: "Météorologie",
    description: "Interprétation des bulletins",
    questions: [
      {
        question: "Que signifie un avis de grand frais ?",
        answers: ["Vent fort", "Mer calme", "Pluie", "Brouillard"],
        correctIndex: 0
      },
      {
        question: "Comment obtenir les prévisions météo en mer ?",
        answers: ["VHF", "Internet", "Télévision", "Radio"],
        correctIndex: 0
      }
    ]
  },
  {
    id: 8,
    type: 'quiz',
    title: "Cartographie",
    description: "Lecture des cartes marines",
    questions: [
      {
        question: "Que représente une ligne de sonde ?",
        answers: ["Profondeur", "Courant", "Vent", "Température"],
        correctIndex: 0
      },
      {
        question: "Comment identifier un danger sur une carte ?",
        answers: ["Symbole spécifique", "Couleur rouge", "Ligne pointillée", "Aucune indication"],
        correctIndex: 0
      }
    ]
  },
  {
    id: 9,
    type: 'quiz',
    title: "Règles de Barre",
    description: "Priorités en mer",
    questions: [
      {
        question: "Qui a la priorité entre un voilier et un bateau à moteur ?",
        answers: ["Voilier", "Bateau à moteur", "Celui venant de droite", "Celui venant de gauche"],
        correctIndex: 0
      },
      {
        question: "Que signifie un bateau avec trois feux verts ?",
        answers: ["Bateau pilote", "Bateau de pêche", "Bateau en détresse", "Bateau au mouillage"],
        correctIndex: 0
      }
    ]
  },
  {
    id: 10,
    type: 'quiz',
    title: "Manœuvres de Port",
    description: "Accostage et appareillage",
    questions: [
      {
        question: "Quelle est la première étape pour accoster ?",
        answers: ["Préparer les amarres", "Couper le moteur", "Jeter l'ancre", "Appeler le port"],
        correctIndex: 0
      },
      {
        question: "Comment éviter une collision en port ?",
        answers: ["Réduire la vitesse", "Utiliser le klaxon", "Allumer les feux", "Naviguer en marche arrière"],
        correctIndex: 0
      }
    ]
  },
  {
    id: 11,
    type: 'quiz',
    title: "Sécurité Incendie",
    description: "Prévention et réaction",
    questions: [
      {
        question: "Que faire en cas d'incendie à bord ?",
        answers: ["Utiliser l'extincteur", "Sauter à l'eau", "Appeler les secours", "Couper le moteur"],
        correctIndex: 0
      },
      {
        question: "Comment prévenir un incendie à bord ?",
        answers: ["Vérifier les installations électriques", "Avoir un seau d'eau", "Porter un gilet de sauvetage", "Naviguer de jour"],
        correctIndex: 0
      }
    ]
  },
  {
    id: 12,
    type: 'quiz',
    title: "Sécurité des Passagers",
    description: "Consignes et responsabilités",
    questions: [
      {
        question: "Que faire en cas de malaise d'un passager ?",
        answers: ["Appeler les secours", "Donner de l'eau", "Le laisser se reposer", "Continuer la navigation"],
        correctIndex: 0
      },
      {
        question: "Comment informer les passagers des consignes de sécurité ?",
        answers: ["Briefing avant départ", "Affiches à bord", "Par téléphone", "Aucune information"],
        correctIndex: 0
      }
    ]
  },
  {
    id: 13,
    type: 'quiz',
    title: "Sécurité Environnementale",
    description: "Respect de la nature",
    questions: [
      {
        question: "Que faire des déchets à bord ?",
        answers: ["Les ramener à terre", "Les jeter à la mer", "Les brûler", "Les enterrer"],
        correctIndex: 0
      },
      {
        question: "Comment éviter la pollution en mer ?",
        answers: ["Utiliser des produits biodégradables", "Naviguer lentement", "Éviter les zones protégées", "Ne pas pêcher"],
        correctIndex: 0
      }
    ]
  },
  {
    id: 14,
    type: 'quiz',
    title: "Sécurité des Enfants",
    description: "Précautions spécifiques",
    questions: [
      {
        question: "Quel équipement est obligatoire pour les enfants ?",
        answers: ["Gilet de sauvetage", "Casque", "Lunettes de soleil", "Chaussures fermées"],
        correctIndex: 0
      },
      {
        question: "Comment surveiller les enfants à bord ?",
        answers: ["Les garder à vue", "Les attacher", "Les laisser jouer", "Les confiner à l'intérieur"],
        correctIndex: 0
      }
    ]
  },
  {
    id: 15,
    type: 'quiz',
    title: "Sécurité en Plongée",
    description: "Règles et équipements",
    questions: [
      {
        question: "Quel est le signe de détresse en plongée ?",
        answers: ["Agiter les bras", "Faire des bulles", "Rester immobile", "Nager rapidement"],
        correctIndex: 0
      },
      {
        question: "Comment éviter les accidents de décompression ?",
        answers: ["Respecter les paliers", "Plonger rapidement", "Utiliser un tuba", "Nager en surface"],
        correctIndex: 0
      }
    ]
  },
  {
    id: 16,
    type: 'quiz',
    title: "Sécurité en Pêche",
    description: "Bonnes pratiques",
    questions: [
      {
        question: "Que faire en cas de capture d'un poisson dangereux ?",
        answers: ["Le relâcher", "Le garder", "Le tuer", "Le photographier"],
        correctIndex: 0
      },
      {
        question: "Comment éviter les accidents avec les hameçons ?",
        answers: ["Utiliser des hameçons sans ardillon", "Porter des gants", "Pêcher de nuit", "Ne pas pêcher"],
        correctIndex: 0
      }
    ]
  },
  {
    id: 17,
    type: 'quiz',
    title: "Sécurité en Kayak",
    description: "Règles et équipements",
    questions: [
      {
        question: "Quel équipement est obligatoire en kayak ?",
        answers: ["Gilet de sauvetage", "Casque", "Pagaie", "Chaussures fermées"],
        correctIndex: 0
      },
      {
        question: "Comment éviter les chavirements ?",
        answers: ["Équilibrer le poids", "Ramer rapidement", "Naviguer en eaux calmes", "Ne pas pagayer"],
        correctIndex: 0
      }
    ]
  },
  {
    id: 18,
    type: 'quiz',
    title: "Sécurité en Voile",
    description: "Règles et manœuvres",
    questions: [
      {
        question: "Que faire en cas de chavirement ?",
        answers: ["Rester avec le bateau", "Nager vers la côte", "Appeler à l'aide", "Abandonner le bateau"],
        correctIndex: 0
      },
      {
        question: "Comment éviter les collisions en régate ?",
        answers: ["Respecter les règles de priorité", "Naviguer rapidement", "Utiliser le klaxon", "Allumer les feux"],
        correctIndex: 0
      }
    ]
  },
  {
    id: 19,
    type: 'quiz',
    title: "Sécurité en Ski Nautique",
    description: "Règles et équipements",
    questions: [
      {
        question: "Quel équipement est obligatoire en ski nautique ?",
        answers: ["Gilet de sauvetage", "Casque", "Lunettes de soleil", "Chaussures fermées"],
        correctIndex: 0
      },
      {
        question: "Comment éviter les accidents en ski nautique ?",
        answers: ["Respecter les distances de sécurité", "Naviguer rapidement", "Utiliser un tuba", "Ne pas skier"],
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
        question: "En cas d'urgence médicale en mer, qui contacter en premier ?",
        answers: ["Le CROSS", "Les pompiers", "La police", "L'hôpital"],
        correctIndex: 0
      },
      {
        question: "La VHF doit être...",
        answers: ["Allumée en permanence", "Éteinte au port", "Utilisée uniquement en urgence", "Testée chaque heure"],
        correctIndex: 0
      }
    ]
  }
];
