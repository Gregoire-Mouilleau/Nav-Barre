export interface Question {
    question: string;
    answers: string[];
    correctIndex: number;
  }
  
  export const questions: Question[] = [
    {
      question: "Quel est le rôle de la grand-voile ?",
      answers: [
        "Gouverner le bateau",
        "Donner de la propulsion",
        "Stabiliser la quille",
        "Accrocher l’ancre",
      ],
      correctIndex: 1,
    },
    {
      question: "Que signifie lofer ?",
      answers: [
        "Aller contre le vent",
        "Aller dans le sens du vent",
        "Faire demi-tour",
        "Lever la dérive",
      ],
      correctIndex: 0,
    },
    {
      question: "Quel équipement est obligatoire en navigation ?",
      answers: [
        "Un panneau solaire",
        "Un sondeur",
        "Un gilet de sauvetage",
        "Une radio VHF",
      ],
      correctIndex: 2,
    },
    {
      question: "Qu'appelle-t-on le « vent apparent » ?",
      answers: [
        "Le vent mesuré à terre",
        "Le vent ressenti par le bateau en mouvement",
        "Le vent qui souffle en rafales",
        "Le vent prévu par la météo",
      ],
      correctIndex: 1,
    },
    {
      question: "Quelle est la fonction du safran ?",
      answers: [
        "Propulser le bateau",
        "Stabiliser le mât",
        "Diriger le bateau",
        "Freiner en cas d’urgence",
      ],
      correctIndex: 2,
    },
    {
      question: "Dans quel cas faut-il réduire la voile ?",
      answers: [
        "Quand il y a du courant",
        "Quand le vent devient trop fort",
        "Quand on approche du port",
        "Quand on navigue au près",
      ],
      correctIndex: 1,
    },
    {
      question: "Quel nœud est utilisé pour attacher une écoute ?",
      answers: [
        "Nœud de chaise",
        "Nœud en huit",
        "Nœud plat",
        "Nœud de cabestan",
      ],
      correctIndex: 0,
    },
    {
      question: "Comment s’appelle la partie inférieure du bateau ?",
      answers: [
        "Le pont",
        "La coque",
        "La cabine",
        "Le cockpit",
      ],
      correctIndex: 1,
    },
    {
      question: "Quelle voile est située à l’avant du mât ?",
      answers: [
        "La grand-voile",
        "Le spinnaker",
        "Le foc",
        "La trinquette",
      ],
      correctIndex: 2,
    },
    {
      question: "Quand dit-on qu’un bateau est « bout au vent » ?",
      answers: [
        "Quand il navigue vent arrière",
        "Quand il fait face au vent",
        "Quand il prend un ris",
        "Quand il est au mouillage",
      ],
      correctIndex: 1,
    },
    {
      question: "Qu’est-ce qu’un virement de bord ?",
      answers: [
        "Changer de cap en passant face au vent",
        "Faire un demi-tour",
        "Changer de voile",
        "Arrêter le bateau",
      ],
      correctIndex: 0,
    },
    {
      question: "Que signifie abattre ?",
      answers: [
        "Aller vers le vent",
        "Aller dos au vent",
        "Baisser les voiles",
        "Tourner à droite",
      ],
      correctIndex: 1,
    },
    {
      question: "Quel est l'effet d’un vent de travers ?",
      answers: [
        "Il ralentit le bateau",
        "Il rend la navigation impossible",
        "Il permet une vitesse optimale",
        "Il oblige à lofer",
      ],
      correctIndex: 2,
    },
    {
      question: "Quel est l’avantage du spinnaker ?",
      answers: [
        "Naviguer contre le vent",
        "Stabiliser le bateau",
        "Gagner de la vitesse au portant",
        "Faire des manœuvres plus précises",
      ],
      correctIndex: 2,
    },
    {
      question: "Quelle est la fonction du mât ?",
      answers: [
        "Diriger le bateau",
        "Supporter les voiles",
        "Servir d’antenne radio",
        "Protéger du vent",
      ],
      correctIndex: 1,
    },
    {
      question: "Quand utilise-t-on une dérive ?",
      answers: [
        "Pour freiner",
        "Pour garder la direction",
        "Pour éviter de dériver sous le vent",
        "Pour ancrer le bateau",
      ],
      correctIndex: 2,
    },
    {
      question: "Quel est le rôle d’un winch ?",
      answers: [
        "Garder l’équilibre",
        "Bloquer les voiles",
        "Dévier le vent",
        "Aider à border les voiles",
      ],
      correctIndex: 3,
    },
    {
      question: "Quelle est la position de sécurité en cas de chavirage ?",
      answers: [
        "Sauter du bateau",
        "Nager loin",
        "Rester accroché au bateau",
        "Nager sous le bateau",
      ],
      correctIndex: 2,
    },
    {
      question: "Comment appelle-t-on la partie arrière du bateau ?",
      answers: [
        "La proue",
        "La coque",
        "La poupe",
        "Le hauban",
      ],
      correctIndex: 2,
    },
    {
      question: "À quoi sert une bouée fer à cheval ?",
      answers: [
        "À se protéger du soleil",
        "À signaler sa présence",
        "À se repérer au large",
        "À secourir une personne tombée à l’eau",
      ],
      correctIndex: 3,
    },
  ];
  