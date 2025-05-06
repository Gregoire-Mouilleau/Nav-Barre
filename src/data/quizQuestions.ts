export interface Question {
  question: string;
  answers: string[];
  correctIndex: number;
}

export const marinKnotsQuestions: Question[] = [
  {
    question: "Quel nœud est utilisé pour amarrer un bateau ?",
    answers: ["Tour mort et deux demi-clés", "Nœud plat", "Nœud de chaise", "Nœud en huit"],
    correctIndex: 0
  },
  {
    question: "Quel nœud permet de faire une boucle qui ne se resserre pas ?",
    answers: ["Nœud de chaise", "Nœud de huit", "Nœud plat", "Nœud de cabestan"],
    correctIndex: 0
  },
  {
    question: "Pour quel usage utilise-t-on le nœud de huit ?",
    answers: ["Arrêter un cordage", "Amarrer", "Faire une boucle", "Relier deux cordages"],
    correctIndex: 0
  },
  {
    question: "Le nœud plat sert à :",
    answers: ["Relier deux cordages de même diamètre", "Faire une boucle", "Arrêter un cordage", "Amarrer"],
    correctIndex: 0
  },
  {
    question: "Quel nœud utilise-t-on pour hisser une personne ?",
    answers: ["Nœud de chaise", "Nœud en huit", "Nœud plat", "Nœud de cabestan"],
    correctIndex: 0
  },
  {
    question: "Le nœud de cabestan est utilisé pour :",
    answers: ["Fixer une amarre sur un taquet", "Faire une boucle", "Relier deux cordages", "Arrêter un cordage"],
    correctIndex: 0
  },
  {
    question: "Pour raccourcir un cordage, on utilise :",
    answers: ["Nœud de chaînette", "Nœud plat", "Nœud en huit", "Nœud de chaise"],
    correctIndex: 0
  },
  {
    question: "Le nœud d'écoute sert à :",
    answers: ["Relier deux cordages de diamètres différents", "Amarrer", "Faire une boucle", "Arrêter un cordage"],
    correctIndex: 0
  },
  {
    question: "Pour frapper une poulie, on utilise :",
    answers: ["Nœud de chaise", "Nœud plat", "Tour mort et deux demi-clés", "Nœud en huit"],
    correctIndex: 0
  },
  {
    question: "Le nœud de pêcheur est utilisé pour :",
    answers: ["Relier deux cordages", "Amarrer", "Faire une boucle", "Arrêter un cordage"],
    correctIndex: 0
  },
  {
    question: "Pour faire une boucle au bout d'un cordage :",
    answers: ["Nœud en huit gansé", "Nœud plat", "Nœud de cabestan", "Tour mort"],
    correctIndex: 0
  },
  {
    question: "Le nœud de laguis sert à :",
    answers: ["Réunir deux cordages", "Amarrer", "Faire une boucle", "Arrêter un cordage"],
    correctIndex: 0
  },
  {
    question: "Pour fixer une voile à une drisse, on utilise :",
    answers: ["Nœud de chaise", "Nœud plat", "Nœud en huit", "Tour mort et deux demi-clés"],
    correctIndex: 3
  },
  {
    question: "Le nœud d'évadé permet de :",
    answers: ["Se détacher rapidement", "Amarrer solidement", "Relier deux cordages", "Raccourcir un cordage"],
    correctIndex: 0
  },
  {
    question: "Pour amarrer provisoirement, on utilise :",
    answers: ["Tour mort", "Nœud de chaise", "Nœud plat", "Nœud en huit"],
    correctIndex: 0
  }
];

export const boatPartsQuestions: Question[] = [
  {
    question: "Comment s'appelle la partie avant d'un bateau ?",
    answers: ["La proue", "La poupe", "La quille", "Le pont"],
    correctIndex: 0
  },
  {
    question: "À quoi sert la quille ?",
    answers: ["Stabiliser le bateau", "Diriger", "Amarrer", "Porter les voiles"],
    correctIndex: 0
  },
  {
    question: "Où se trouve le safran ?",
    answers: ["À l'arrière", "À l'avant", "Au milieu", "Sur le côté"],
    correctIndex: 0
  },
  {
    question: "La bôme est reliée à :",
    answers: ["Au mât", "À la coque", "Au pont", "Au safran"],
    correctIndex: 0
  },
  {
    question: "Le winch sert à :",
    answers: ["Border les écoutes", "Diriger", "Ancrer", "Stabiliser"],
    correctIndex: 0
  },
  {
    question: "Où se trouve la barre ?",
    answers: ["À l'arrière", "À l'avant", "Au milieu", "Sur le côté"],
    correctIndex: 0
  },
  {
    question: "L'étai est situé :",
    answers: ["À l'avant du mât", "À l'arrière", "Sur les côtés", "Sur le pont"],
    correctIndex: 0
  },
  {
    question: "Les haubans servent à :",
    answers: ["Tenir le mât", "Diriger", "Porter les voiles", "Amarrer"],
    correctIndex: 0
  },
  {
    question: "Le cockpit est :",
    answers: ["L'espace de pilotage", "La cabine", "La cale", "Le pont avant"],
    correctIndex: 0
  },
  {
    question: "La grand-voile est fixée sur :",
    answers: ["Le mât et la bôme", "L'étai", "Les haubans", "Le beaupré"],
    correctIndex: 0
  },
  {
    question: "Les bastaques sont des :",
    answers: ["Haubans arrière", "Cordages avant", "Poulies", "Winch"],
    correctIndex: 0
  },
  {
    question: "Le beaupré est situé :",
    answers: ["À l'avant", "À l'arrière", "Au centre", "Sur les côtés"],
    correctIndex: 0
  },
  {
    question: "Les cadènes servent à :",
    answers: ["Fixer les haubans", "Amarrer", "Diriger", "Border"],
    correctIndex: 0
  },
  {
    question: "Le pataras est fixé :",
    answers: ["À l'arrière du mât", "À l'avant", "Sur les côtés", "Au pont"],
    correctIndex: 0
  },
  {
    question: "Le pont est :",
    answers: ["La surface supérieure", "Le fond", "L'intérieur", "L'arrière"],
    correctIndex: 0
  },
  {
    question: "Les chandeliers supportent :",
    answers: ["Les filières", "Les voiles", "Le mât", "Les cordages"],
    correctIndex: 0
  },
  {
    question: "La barre d'écoute est utilisée pour :",
    answers: ["Régler la grand-voile", "Diriger", "Amarrer", "Ancrer"],
    correctIndex: 0
  },
  {
    question: "Le roof est :",
    answers: ["La partie surélevée", "Le fond", "L'avant", "L'arrière"],
    correctIndex: 0
  },
  {
    question: "Les pantoires sont reliées aux :",
    answers: ["Haubans", "Voiles", "Safran", "Bôme"],
    correctIndex: 0
  },
  {
    question: "Le tableau arrière est situé :",
    answers: ["À la poupe", "À la proue", "Au centre", "Sur les côtés"],
    correctIndex: 0
  }
];

export const safetyQuestions: Question[] = [
  {
    question: "Quel numéro d'urgence appeler en mer ?",
    answers: ["196", "112", "18", "15"],
    correctIndex: 0
  },
  {
    question: "Que faire en premier si quelqu'un tombe à l'eau ?",
    answers: ["Crier 'Homme à la mer'", "Plonger", "Appeler les secours", "Couper le moteur"],
    correctIndex: 0
  },
  {
    question: "Un gilet de sauvetage doit être porté :",
    answers: ["En permanence sur l'eau", "Uniquement la nuit", "Par mauvais temps", "En cas de danger"],
    correctIndex: 0
  },
  {
    question: "La VHF doit être :",
    answers: ["Allumée en permanence", "Éteinte au port", "Utilisée uniquement en urgence", "Testée chaque heure"],
    correctIndex: 0
  },
  {
    question: "Le canal 16 de la VHF est réservé :",
    answers: ["Aux appels de détresse", "Aux conversations", "À la météo", "Aux ports"],
    correctIndex: 0
  },
  {
    question: "En cas d'incendie à bord :",
    answers: ["Utiliser l'extincteur", "Sauter à l'eau", "Appeler les secours", "Couper le moteur"],
    correctIndex: 0
  },
  {
    question: "La balise de détresse doit être :",
    answers: ["Facilement accessible", "Dans un coffre fermé", "Sous le pont", "Dans le moteur"],
    correctIndex: 0
  },
  {
    question: "Les fusées de détresse sont valables :",
    answers: ["3 ans", "1 an", "5 ans", "10 ans"],
    correctIndex: 0
  },
  {
    question: "Le radeau de survie doit être :",
    answers: ["Révisé régulièrement", "Toujours gonflé", "Dans la cabine", "Sous l'eau"],
    correctIndex: 0
  },
  {
    question: "La trousse de secours doit contenir :",
    answers: ["Des pansements étanches", "Des médicaments", "Des fusées", "Une radio"],
    correctIndex: 0
  },
  {
    question: "Le coupe-circuit du moteur doit être :",
    answers: ["Attaché au pilote", "Dans la cabine", "Sur le tableau de bord", "Dans la poche"],
    correctIndex: 0
  },
  {
    question: "En cas de voie d'eau :",
    answers: ["Pomper et colmater", "Abandonner le navire", "Appeler les secours", "Couper le moteur"],
    correctIndex: 0
  },
  {
    question: "Les gilets de sauvetage doivent être :",
    answers: ["Adaptés au poids", "De couleur orange", "Gonflables", "En tissu"],
    correctIndex: 0
  },
  {
    question: "La survie en mer dépend principalement :",
    answers: ["De la préparation", "Du matériel", "De la chance", "De l'expérience"],
    correctIndex: 0
  },
  {
    question: "L'hypothermie survient en :",
    answers: ["Moins d'une heure", "Quelques minutes", "Plusieurs heures", "Quelques jours"],
    correctIndex: 0
  },
  {
    question: "Le message MAYDAY signifie :",
    answers: ["Danger immédiat", "Attention", "Demande d'aide", "Information"],
    correctIndex: 0
  },
  {
    question: "Un extincteur doit être :",
    answers: ["Vérifié chaque année", "Caché", "Utilisé régulièrement", "Jeté après usage"],
    correctIndex: 0
  },
  {
    question: "La survie en mer nécessite :",
    answers: ["De l'eau douce", "De la nourriture", "Une radio", "Une boussole"],
    correctIndex: 0
  },
  {
    question: "Le contact avec les secours doit être :",
    answers: ["Maintenu en permanence", "Bref", "Évité", "Codé"],
    correctIndex: 0
  },
  {
    question: "L'équipement de sécurité doit être :",
    answers: ["Vérifié avant chaque sortie", "Rangé soigneusement", "Neuf", "Léger"],
    correctIndex: 0
  }
];

export const navigationQuestions: Question[] = [
  {
    question: "Quel instrument permet de connaître sa position en mer ?",
    answers: ["Le GPS", "Le compas", "L'anémomètre", "Le sondeur"],
    correctIndex: 0
  },
  {
    question: "Comment s'appelle l'instrument qui mesure la vitesse du vent ?",
    answers: ["L'anémomètre", "Le compas", "Le loch", "Le baromètre"],
    correctIndex: 0
  },
  {
    question: "Le compas indique :",
    answers: ["Le nord magnétique", "La vitesse", "La profondeur", "La pression"],
    correctIndex: 0
  },
  {
    question: "Qu'est-ce qu'un loch ?",
    answers: ["Un instrument de mesure de vitesse", "Une carte", "Un gouvernail", "Une ancre"],
    correctIndex: 0
  },
  {
    question: "La déclinaison magnétique est :",
    answers: ["L'écart entre nord magnétique et vrai", "La vitesse du vent", "La profondeur", "Le cap"],
    correctIndex: 0
  },
  {
    question: "Un nœud équivaut à :",
    answers: ["Un mille par heure", "Un kilomètre", "Une vitesse constante", "Un degré"],
    correctIndex: 0
  },
  {
    question: "Le waypoint est :",
    answers: ["Un point de route", "Une vitesse", "Une profondeur", "Un cap"],
    correctIndex: 0
  },
  {
    question: "La latitude se mesure :",
    answers: ["Par rapport à l'équateur", "D'est en ouest", "En nœuds", "En degrés seulement"],
    correctIndex: 0
  },
  {
    question: "Un mille nautique équivaut à :",
    answers: ["1852 mètres", "1000 mètres", "1609 mètres", "2000 mètres"],
    correctIndex: 0
  },
  {
    question: "La longitude se mesure :",
    answers: ["Par rapport au méridien de Greenwich", "Par rapport à l'équateur", "En milles", "En nœuds"],
    correctIndex: 0
  },
  {
    question: "Le rail de navigation est :",
    answers: ["Une route maritime recommandée", "Un instrument", "Une partie du bateau", "Un type de vent"],
    correctIndex: 0
  },
  {
    question: "Les courbes bathymétriques indiquent :",
    answers: ["La profondeur", "La direction", "La vitesse", "La position"],
    correctIndex: 0
  },
  {
    question: "Un almanach nautique contient :",
    answers: ["Les horaires des marées", "La météo", "Les caps", "Les positions"],
    correctIndex: 0
  },
  {
    question: "La route fond est :",
    answers: ["La trajectoire réelle", "La direction du vent", "La vitesse", "Le cap compas"],
    correctIndex: 0
  },
  {
    question: "Le pilote automatique maintient :",
    answers: ["Le cap", "La vitesse", "La position", "La profondeur"],
    correctIndex: 0
  }
];

export const voileQuestions: Question[] = [
  {
    question: "Quelle voile est utilisée aux allures portantes ?",
    answers: ["Le spinnaker", "Le foc", "La grand-voile", "Le génois"],
    correctIndex: 0
  },
  {
    question: "La grand-voile se hisse :",
    answers: ["Le long du mât", "Sur l'étai", "Sur le bastingage", "À l'arrière"],
    correctIndex: 0
  },
  {
    question: "Le foc est une voile :",
    answers: ["D'avant", "Arrière", "Principale", "Supplémentaire"],
    correctIndex: 0
  },
  {
    question: "L'écoute sert à :",
    answers: ["Régler la voile", "Hisser la voile", "Protéger la voile", "Ranger la voile"],
    correctIndex: 0
  },
  {
    question: "La drisse permet de :",
    answers: ["Hisser la voile", "Border la voile", "Diriger la voile", "Protéger la voile"],
    correctIndex: 0
  },
  {
    question: "Le génois est :",
    answers: ["Un grand foc", "Une petite voile", "Une voile arrière", "Une voile de tempête"],
    correctIndex: 0
  },
  {
    question: "Border une voile signifie :",
    answers: ["La tendre", "La relâcher", "La hisser", "La descendre"],
    correctIndex: 0
  },
  {
    question: "Le cunningham sert à :",
    answers: ["Tendre le guidant", "Border la voile", "Réduire la voile", "Protéger la voile"],
    correctIndex: 0
  },
  {
    question: "Un ris permet de :",
    answers: ["Réduire la surface", "Augmenter la surface", "Protéger la voile", "Diriger la voile"],
    correctIndex: 0
  },
  {
    question: "La bande de ris est :",
    answers: ["Un renfort de la voile", "Une couleur", "Une corde", "Un nœud"],
    correctIndex: 0
  },
  {
    question: "Le point d'amure est :",
    answers: ["Le coin avant bas", "Le coin haut", "Le milieu", "L'arrière"],
    correctIndex: 0
  },
  {
    question: "La chute est :",
    answers: ["Le bord arrière", "Le bord avant", "Le bas", "Le haut"],
    correctIndex: 0
  },
  {
    question: "Une voile lattée est :",
    answers: ["Renforcée par des lattes", "Cousue", "Pliée", "Roulée"],
    correctIndex: 0
  },
  {
    question: "Le guindant est :",
    answers: ["Le bord avant", "Le bord arrière", "Le bas", "Le haut"],
    correctIndex: 0
  },
  {
    question: "Une garcette est :",
    answers: ["Un petit cordage", "Une voile", "Un nœud", "Un renfort"],
    correctIndex: 0
  },
  {
    question: "La têtière est :",
    answers: ["Le haut de la voile", "Le bas", "L'avant", "L'arrière"],
    correctIndex: 0
  },
  {
    question: "Un tangon sert à :",
    answers: ["Tenir le spinnaker", "Border la voile", "Réduire la voile", "Hisser la voile"],
    correctIndex: 0
  },
  {
    question: "La bordure est :",
    answers: ["Le bas de la voile", "Le haut", "L'avant", "L'arrière"],
    correctIndex: 0
  },
  {
    question: "Une voile de tempête est :",
    answers: ["Plus petite et plus solide", "Plus grande", "Plus légère", "Plus colorée"],
    correctIndex: 0
  },
  {
    question: "Le penon est :",
    answers: ["Un indicateur de vent", "Une corde", "Un nœud", "Un renfort"],
    correctIndex: 0
  }
];
