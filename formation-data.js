// Configuration des données de formation
const formationData = {
    modules: [
        {
            id: 1,
            title: "Mettre ses compétences au service de son projet",
            lessons: [
                { id: 1, title: "À quoi vous attendre dans ce premier module", type: "lesson" },
                { id: 2, title: "Comment lancer son projet d'entreprise sans se louper", type: "lesson" },
                { id: 3, title: "Présentation des compétences requises pour être un chef d'entreprise", type: "lesson" },
                { id: 4, title: "Comprendre l'importance des compétences entrepreneuriales", type: "lesson" },
                { id: 5, title: "Analyse des compétences clés pour gérer une entreprise", type: "lesson" },
                { id: 6, title: "Synthèse", type: "lesson" },
                { id: 7, title: "SMART Goals", type: "lesson" },
                { id: 8, title: "Fiches Complémentaires", type: "pdf" }
            ]
        },
        {
            id: 2,
            title: "Connaître son marché pour mieux vendre",
            lessons: [
                { id: 1, title: "Analyse du Marché", type: "lesson" },
                { id: 2, title: "Analyse de la clientèle et de la concurrence", type: "lesson" },
                { id: 3, title: "Mise en place de stratégies basées sur la connaissance du marché", type: "lesson" },
                { id: 4, title: "Utilisation des documents commerciaux pour mieux vendre", type: "lesson" },
                { id: 5, title: "Customer Journey Mapping", type: "lesson" },
                { id: 6, title: "Fiches Complémentaires", type: "pdf" }
            ]
        },
        {
            id: 3,
            title: "Définir les besoins et la rentabilité du projet",
            lessons: [
                { id: 1, title: "Définir les besoins et la rentabilité du projet", type: "lesson" },
                { id: 2, title: "Comprendre et structurer son projet avec le Business Model Canva", type: "lesson" },
                { id: 3, title: "Élaboration d'un compte de résultat", type: "lesson" },
                { id: 4, title: "Création d'un plan de financement", type: "lesson" },
                { id: 5, title: "Présentation des outils de financement en partenariat avec un banquier", type: "lesson" },
                { id: 6, title: "Plan financier & Lean Canvas", type: "lesson" },
                { id: 7, title: "Fiches Complémentaires", type: "pdf" }
            ]
        },
        {
            id: 4,
            title: "Choisir une structure juridique appropriée",
            lessons: [
                { id: 1, title: "Introduction aux structures juridiques", type: "lesson" },
                { id: 2, title: "Présentation des différentes formes juridiques", type: "lesson" },
                { id: 3, title: "Comparaison des avantages et limites des structures juridiques", type: "lesson" },
                { id: 4, title: "Sélection de la structure juridique adaptée au projet", type: "lesson" },
                { id: 5, title: "Fiches Complémentaires", type: "pdf" }
            ]
        },
        {
            id: 5,
            title: "Comprendre les différents régimes fiscaux",
            lessons: [
                { id: 1, title: "Les régimes fiscaux des entreprises", type: "lesson" },
                { id: 2, title: "Présentation des divers régimes fiscaux", type: "lesson" },
                { id: 3, title: "Comparaison des avantages et limites des régimes fiscaux", type: "lesson" },
                { id: 4, title: "Sélection du régime fiscal approprié à l'entreprise", type: "lesson" }
            ]
        },
        {
            id: 6,
            title: "Connaître les principales aides à la création d'entreprise",
            lessons: [
                { id: 1, title: "Introduction aux aides à la création d'entreprise", type: "lesson" },
                { id: 2, title: "Identification des aides à la création nationales, régionales, territoriales", type: "lesson" },
                { id: 3, title: "Application des aides en fonction du statut personnel", type: "lesson" },
                { id: 4, title: "Maximisation des avantages des principales aides", type: "lesson" },
                { id: 5, title: "Fiches Complémentaires", type: "pdf" }
            ]
        },
        {
            id: 7,
            title: "Où s'adresser pour déclarer son entreprise",
            lessons: [
                { id: 1, title: "Centre de Formalités des Entreprises (CFE)", type: "lesson" },
                { id: 2, title: "Présentation du centre de formalités des entreprises", type: "lesson" },
                { id: 3, title: "Explication des modalités de fonctionnement administratif", type: "lesson" },
                { id: 4, title: "Connaissances des conséquences administratives de l'immatriculation", type: "lesson" }
            ]
        },
        {
            id: 8,
            title: "Atouts de la reprise d'entreprise",
            lessons: [
                { id: 1, title: "Moins de risques que la création", type: "lesson" },
                { id: 2, title: "Spécificités de la reprise d'entreprise", type: "lesson" },
                { id: 3, title: "Outils disponibles pour trouver une entreprise à reprendre", type: "lesson" },
                { id: 4, title: "Évaluation des avantages de la reprise par rapport à la création", type: "lesson" }
            ]
        },
        {
            id: 9,
            title: "Obtenir les premières informations sur les structures juridiques",
            lessons: [
                { id: 1, title: "Comprendre les statuts juridiques", type: "lesson" },
                { id: 2, title: "Compréhension des mécanismes financiers de base", type: "lesson" },
                { id: 3, title: "Mise en place d'une organisation administrative et comptable efficace", type: "lesson" },
                { id: 4, title: "Connaissance du calendrier des déclarations et des télédéclarations", type: "lesson" }
            ]
        },
        {
            id: 10,
            title: "Trouver ses clients en étudiant son marché",
            lessons: [
                { id: 1, title: "Identifier votre marché cible", type: "lesson" },
                { id: 2, title: "Étude approfondie du marché cible", type: "lesson" },
                { id: 3, title: "Stratégies pour se démarquer des concurrents", type: "lesson" },
                { id: 4, title: "Création d'une identité commerciale distinctive", type: "lesson" },
                { id: 5, title: "Comprendre les attentes clients avec le Value Proposition Canvas", type: "lesson" }
            ]
        },
        {
            id: 11,
            title: "Valoriser son offre et choisir son circuit de distribution",
            lessons: [
                { id: 1, title: "Comprendre la Valeur de son Offre", type: "lesson" },
                { id: 2, title: "Prospection et valorisation de l'offre commerciale", type: "lesson" },
                { id: 3, title: "Création d'outils de communication adaptés à l'entreprise", type: "lesson" },
                { id: 4, title: "Détermination du juste prix et du coût de revient", type: "lesson" }
            ]
        },
        {
            id: 12,
            title: "Cibler les actions commerciales adaptées à ses clients",
            lessons: [
                { id: 1, title: "Comprendre ses Clients", type: "lesson" },
                { id: 2, title: "Identification des meilleures actions commerciales adaptées", type: "lesson" },
                { id: 3, title: "Création de stratégies pour fidéliser la clientèle", type: "lesson" },
                { id: 4, title: "Élaboration d'un plan d'actions commerciales personnalisées", type: "lesson" },
                { id: 5, title: "Avant de vous lancer : erreurs classiques à éviter", type: "lesson" }
            ]
        },
        {
            id: 13,
            title: "Études de cas",
            lessons: [
                { id: 1, title: "Études de Cas", type: "pdf" }
            ]
        }
    ]
};