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

// Données des leçons avec contenu
const lessonContent = {
    1: {
        1: {
            title: "À quoi vous attendre dans ce premier module",
            moduleTitle: "Module 1 : Mettre ses compétences au service de son projet",
            content: `
                <h1>🎯 À quoi vous attendre dans ce premier module</h1>
                
                <p>Bienvenue dans ce premier module de formation ! Vous allez découvrir les fondations essentielles de l'entrepreneuriat.</p>
                
                <div style="background: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0; text-align: center;">
                    <h3>🎥 Vidéo d'introduction</h3>
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/_YR0Mf47J9k" frameborder="0" allowfullscreen style="max-width: 100%; border-radius: 8px;"></iframe>
                </div>
                
                <h2>🚀 Objectifs de ce module</h2>
                <ul>
                    <li>Comprendre les compétences clés nécessaires pour réussir en tant qu'entrepreneur</li>
                    <li>Identifier vos forces actuelles et les domaines à développer</li>
                    <li>Apprendre des exemples concrets d'entrepreneurs à succès</li>
                    <li>Créer votre plan d'action personnalisé</li>
                </ul>
                
                <h2>📚 Ce que vous allez apprendre</h2>
                <p>Ce module vous donnera une vision complète des compétences entrepreneuriales essentielles :</p>
                <ul>
                    <li><strong>Leadership :</strong> Comment inspirer et diriger une équipe</li>
                    <li><strong>Prise de décision :</strong> Les méthodes pour prendre de bonnes décisions</li>
                    <li><strong>Gestion financière :</strong> Les bases de la gestion d'entreprise</li>
                    <li><strong>Planification stratégique :</strong> Comment définir et atteindre vos objectifs</li>
                </ul>
                
                <div style="background: #f0f8ff; padding: 20px; border-radius: 8px; margin: 20px 0;">
                    <h3>💡 Conseil pratique</h3>
                    <p>Prenez des notes pendant cette formation et n'hésitez pas à mettre en pause pour réfléchir aux applications concrètes dans votre projet.</p>
                </div>
            `
        },
        2: {
            title: "Comment lancer son projet d'entreprise sans se louper",
            moduleTitle: "Module 1 : Mettre ses compétences au service de son projet",
            content: `
                <h1>🚀 Comment lancer son projet d'entreprise sans se louper</h1>
                
                <p>Lancer un projet d'entreprise est une aventure passionnante mais qui nécessite une approche méthodique pour éviter les pièges courants.</p>
                
                <div style="background: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0; text-align: center;">
                    <h3>🎥 Vidéo de formation</h3>
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/_YR0Mf47J9k" frameborder="0" allowfullscreen style="max-width: 100%; border-radius: 8px;"></iframe>
                </div>
                
                <h2>📋 Les étapes essentielles du lancement</h2>
                
                <h3>1. Validation de l'idée</h3>
                <p>Avant de vous lancer, assurez-vous que votre idée répond à un vrai besoin du marché :</p>
                <ul>
                    <li>Étudiez votre marché cible</li>
                    <li>Analysez la concurrence</li>
                    <li>Testez votre concept auprès de clients potentiels</li>
                </ul>
                
                <h3>2. Planification financière</h3>
                <p>Une gestion financière rigoureuse dès le départ est cruciale :</p>
                <ul>
                    <li>Établissez un budget détaillé</li>
                    <li>Prévoyez les coûts cachés</li>
                    <li>Planifiez vos sources de financement</li>
                </ul>
                
                <h3>3. Structure juridique</h3>
                <p>Choisissez la structure qui correspond le mieux à votre projet :</p>
                <ul>
                    <li>Auto-entrepreneur pour débuter</li>
                    <li>SASU pour plus de flexibilité</li>
                    <li>SARL pour un projet à plusieurs</li>
                </ul>
                
                <div style="background: #fff3cd; padding: 20px; border-radius: 8px; margin: 20px 0; border-left: 4px solid #ffc107;">
                    <h3>⚠️ Erreurs à éviter</h3>
                    <ul>
                        <li>Se lancer sans étude de marché</li>
                        <li>Négliger la gestion financière</li>
                        <li>Sous-estimer le temps nécessaire</li>
                        <li>Ignorer les aspects juridiques</li>
                    </ul>
                </div>
            `
        },
        3: {
            title: "Présentation des compétences requises pour être un chef d'entreprise",
            moduleTitle: "Module 1 : Mettre ses compétences au service de son projet",
            content: `
                <h1>👔 Présentation des compétences requises pour être un chef d'entreprise</h1>
                
                <p>Être chef d'entreprise nécessite un ensemble de compétences variées et complémentaires. Découvrons ensemble les principales.</p>
                
                <h2>🧠 Compétences techniques</h2>
                
                <h3>Gestion financière</h3>
                <p>Savoir lire et interpréter les états financiers, gérer la trésorerie et prendre des décisions financières éclairées.</p>
                
                <h3>Marketing et commercial</h3>
                <p>Comprendre les besoins clients, développer des stratégies marketing efficaces et savoir vendre.</p>
                
                <h3>Gestion des ressources humaines</h3>
                <p>Recruter, motiver et diriger une équipe, gérer les conflits et développer les talents.</p>
                
                <h2>💡 Compétences comportementales</h2>
                
                <h3>Leadership</h3>
                <p>Inspirer et guider son équipe vers un objectif commun, prendre des décisions difficiles.</p>
                
                <h3>Communication</h3>
                <p>Savoir s'exprimer clairement, écouter activement et négocier efficacement.</p>
                
                <h3>Adaptabilité</h3>
                <p>Être capable de s'adapter rapidement aux changements du marché et aux nouvelles technologies.</p>
                
                <div style="background: #d4edda; padding: 20px; border-radius: 8px; margin: 20px 0; border-left: 4px solid #28a745;">
                    <h3>💪 Développement des compétences</h3>
                    <p>Ces compétences peuvent être développées par la formation, l'expérience et la pratique. L'important est d'identifier vos points forts et vos axes d'amélioration.</p>
                </div>
            `
        },
        4: {
            title: "Comprendre l'importance des compétences entrepreneuriales",
            moduleTitle: "Module 1 : Mettre ses compétences au service de son projet",
            content: `
                <h1>🎯 Comprendre l'importance des compétences entrepreneuriales</h1>
                
                <p>Les compétences entrepreneuriales sont le fondement du succès en entreprise. Elles déterminent votre capacité à transformer une idée en réalité.</p>
                
                <h2>🔍 Pourquoi ces compétences sont-elles cruciales ?</h2>
                
                <h3>1. Différenciation concurrentielle</h3>
                <p>Dans un marché compétitif, ce sont souvent les compétences de l'entrepreneur qui font la différence entre le succès et l'échec.</p>
                
                <h3>2. Gestion des défis</h3>
                <p>L'entrepreneuriat est parsemé d'obstacles. Des compétences solides vous aident à les surmonter efficacement.</p>
                
                <h3>3. Croissance et développement</h3>
                <p>Pour faire grandir votre entreprise, vous devez maîtriser différents domaines de compétences.</p>
                
                <h2>📊 Impact sur la performance</h2>
                
                <p>Des études montrent que les entrepreneurs avec des compétences développées :</p>
                <ul>
                    <li>Ont 3x plus de chances de survie après 5 ans</li>
                    <li>Génèrent 40% plus de revenus</li>
                    <li>Attirent plus facilement des investisseurs</li>
                </ul>
                
                <div style="background: #e2e3e5; padding: 20px; border-radius: 8px; margin: 20px 0;">
                    <h3>📈 Retour sur investissement</h3>
                    <p>Investir dans le développement de vos compétences entrepreneuriales est l'un des meilleurs investissements que vous puissiez faire pour votre entreprise.</p>
                </div>
            `
        },
        5: {
            title: "Analyse des compétences clés pour gérer une entreprise",
            moduleTitle: "Module 1 : Mettre ses compétences au service de son projet",
            content: `
                <h1>🔍 Analyse des compétences clés pour gérer une entreprise</h1>
                
                <h2>🤔 Démarrez avec un fait intrigant !</h2>
                <p>Saviez-vous que plus de 90 % des startups échouent dans leurs premières années d'existence ? Ce chiffre montre qu'être un chef d'entreprise demande bien plus que d'avoir une bonne idée : il faut des compétences diverses et bien développées.</p>
                
                <h2>🛠️ Compétences Requises pour l'Entrepreneuriat</h2>
                
                <h3>👥 Leadership</h3>
                <p>Un bon chef d'entreprise ne se contente pas de diriger ; il doit inspirer et motiver son équipe. Steve Jobs, co-fondateur d'Apple, est souvent cité comme un exemple de leader visionnaire.</p>
                
                <h3>🧠 Prise de Décision</h3>
                <p>Prenons l'exemple de Jeff Bezos, fondateur d'Amazon. Sa décision d'élargir l'entreprise au-delà des livres illustre l'importance de la prise de décision stratégique.</p>
                
                <h3>💵 Gestion Financière</h3>
                <p>Sara Blakely, fondatrice de Spanx, a commencé sa société avec seulement 5 000 $ d'économies. Sa rigoureuse gestion financière lui a permis de transformer cette somme en une entreprise milliardaire.</p>
                
                <h3>📈 Planification Stratégique</h3>
                <p>La planification stratégique détermine la direction à long terme de l'entreprise. Tesla a élaboré un plan stratégique clair pour révolutionner l'industrie automobile.</p>
                
                <div style="background: #fff3cd; padding: 20px; border-radius: 8px; margin: 30px 0; border-left: 4px solid #ffc107;">
                    <h3>📝 Exercice pratique</h3>
                    <p>Identifiez vos 3 compétences les plus fortes et 3 domaines à développer pour votre projet entrepreneurial.</p>
                </div>
            `
        },
        6: {
            title: "Synthèse",
            moduleTitle: "Module 1 : Mettre ses compétences au service de son projet",
            content: `
                <h1>📋 Synthèse du Module 1</h1>
                
                <p>Félicitations ! Vous avez terminé le premier module de votre formation en entrepreneuriat.</p>
                
                <div style="background: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0; text-align: center;">
                    <h3>🎥 Vidéo de synthèse</h3>
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/_YR0Mf47J9k" frameborder="0" allowfullscreen style="max-width: 100%; border-radius: 8px;"></iframe>
                </div>
                
                <h2>🎯 Points clés à retenir</h2>
                
                <h3>1. Les compétences entrepreneuriales essentielles</h3>
                <ul>
                    <li><strong>Leadership :</strong> Capacité à inspirer et diriger une équipe</li>
                    <li><strong>Prise de décision :</strong> Savoir analyser et choisir les bonnes options</li>
                    <li><strong>Gestion financière :</strong> Maîtriser les aspects financiers de l'entreprise</li>
                    <li><strong>Planification stratégique :</strong> Définir et atteindre des objectifs clairs</li>
                </ul>
                
                <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 15px; margin: 20px 0;">
                    <div style="text-align: center; padding: 15px; background: #f8f9fa; border-radius: 8px;">
                        <img src="INSTALL FILES/FULL_STRUCTURE/01 Mettre ses compétences au service de son projet/06_IMAGE_LEADERSHIP.png" alt="Leadership" style="max-width: 100%; height: auto; border-radius: 4px;">
                        <h4>Leadership</h4>
                    </div>
                    <div style="text-align: center; padding: 15px; background: #f8f9fa; border-radius: 8px;">
                        <img src="INSTALL FILES/FULL_STRUCTURE/01 Mettre ses compétences au service de son projet/06_IMAGE_FINANCIERE.png" alt="Gestion Financière" style="max-width: 100%; height: auto; border-radius: 4px;">
                        <h4>Gestion Financière</h4>
                    </div>
                    <div style="text-align: center; padding: 15px; background: #f8f9fa; border-radius: 8px;">
                        <img src="INSTALL FILES/FULL_STRUCTURE/01 Mettre ses compétences au service de son projet/06_IMAGE_GESTION.png" alt="Gestion" style="max-width: 100%; height: auto; border-radius: 4px;">
                        <h4>Gestion</h4>
                    </div>
                    <div style="text-align: center; padding: 15px; background: #f8f9fa; border-radius: 8px;">
                        <img src="INSTALL FILES/FULL_STRUCTURE/01 Mettre ses compétences au service de son projet/06_IMAGE_COMMUNICATION.png" alt="Communication" style="max-width: 100%; height: auto; border-radius: 4px;">
                        <h4>Communication</h4>
                    </div>
                    <div style="text-align: center; padding: 15px; background: #f8f9fa; border-radius: 8px;">
                        <img src="INSTALL FILES/FULL_STRUCTURE/01 Mettre ses compétences au service de son projet/06_IMAGE_RESOLUTION.png" alt="Résolution de Problèmes" style="max-width: 100%; height: auto; border-radius: 4px;">
                        <h4>Résolution de Problèmes</h4>
                    </div>
                    <div style="text-align: center; padding: 15px; background: #f8f9fa; border-radius: 8px;">
                        <img src="INSTALL FILES/FULL_STRUCTURE/01 Mettre ses compétences au service de son projet/06_IMAGE_SYNTHESE.png" alt="Synthèse" style="max-width: 100%; height: auto; border-radius: 4px;">
                        <h4>Synthèse</h4>
                    </div>
                </div>
                
                <h3>2. L'importance du développement personnel</h3>
                <p>Ces compétences ne sont pas innées mais peuvent être développées par la formation continue, l'expérience pratique et le mentorat.</p>
                
                <h2>🚀 Prochaines étapes</h2>
                <p>Dans le module suivant, nous aborderons l'analyse de marché et la connaissance de vos clients.</p>
                
                <div style="background: #d1ecf1; padding: 20px; border-radius: 8px; margin: 20px 0; border-left: 4px solid #17a2b8;">
                    <h3>💡 Action recommandée</h3>
                    <p>Prenez le temps de réfléchir à vos propres compétences actuelles et identifiez les domaines que vous souhaitez développer en priorité.</p>
                </div>
            `
        },
        7: {
            title: "SMART Goals",
            moduleTitle: "Module 1 : Mettre ses compétences au service de son projet",
            content: `
                <h1>🎯 SMART Goals</h1>
                
                <p>Les objectifs SMART sont un outil puissant pour définir et atteindre vos objectifs entrepreneuriaux de manière efficace et mesurable.</p>
                
                <h2>📝 Qu'est-ce que SMART ?</h2>
                
                <p>SMART est un acronyme qui signifie :</p>
                
                <h3>🔤 S - Spécifique</h3>
                <p>Votre objectif doit être clair et précis. Évitez les formulations vagues comme "augmenter les ventes".</p>
                
                <h3>📊 M - Mesurable</h3>
                <p>Vous devez pouvoir quantifier votre objectif avec des chiffres, des pourcentages, des montants.</p>
                
                <h3>✅ A - Atteignable</h3>
                <p>Votre objectif doit être réaliste compte tenu de vos ressources et capacités actuelles.</p>
                
                <h3>🎯 R - Pertinent (Relevant)</h3>
                <p>L'objectif doit être aligné avec votre vision d'entreprise et contribuer à vos objectifs à long terme.</p>
                
                <h3>⏰ T - Temporel</h3>
                <p>Définissez une échéance claire pour atteindre votre objectif.</p>
                
                <h2>💡 Exemple d'objectif SMART</h2>
                
                <div style="background: #f8f9fa; padding: 15px; border-radius: 8px; margin: 15px 0;">
                    <h4>✅ Bon exemple :</h4>
                    <p><strong>"Augmenter le chiffre d'affaires de mon entreprise de 30% d'ici la fin de l'année en développant 3 nouveaux produits et en ciblant 2 nouveaux segments de marché."</strong></p>
                </div>
                
                <div style="background: #d4edda; padding: 20px; border-radius: 8px; margin: 20px 0; border-left: 4px solid #28a745;">
                    <h3>💪 Avantages des objectifs SMART</h3>
                    <ul>
                        <li>Clarté et focus</li>
                        <li>Motivation accrue</li>
                        <li>Meilleure planification</li>
                        <li>Suivi facilité</li>
                        <li>Probabilité de succès plus élevée</li>
                    </ul>
                </div>
            `
        },
        8: {
            title: "Fiches Complémentaires",
            moduleTitle: "Module 1 : Mettre ses compétences au service de son projet",
            type: "pdf",
            content: `
                <h1>📄 Fiches Complémentaires - Module 1</h1>
                
                <p>Voici les documents complémentaires pour approfondir les concepts abordés dans ce module.</p>
                
                <div class="pdf-grid">
                    <div class="pdf-card">
                        <div class="pdf-preview">📋</div>
                        <div class="pdf-info">
                            <h3 class="pdf-title">Guide des Compétences Entrepreneuriales</h3>
                            <p class="pdf-description">Un guide détaillé des compétences essentielles pour réussir en entrepreneuriat</p>
                            <button class="download-button" onclick="downloadPDF('guide-competences.pdf')">Télécharger</button>
                        </div>
                    </div>
                    
                    <div class="pdf-card">
                        <div class="pdf-preview">🎯</div>
                        <div class="pdf-info">
                            <h3 class="pdf-title">Template Objectifs SMART</h3>
                            <p class="pdf-description">Modèle pour définir vos objectifs selon la méthode SMART</p>
                            <button class="download-button" onclick="downloadPDF('template-smart.pdf')">Télécharger</button>
                        </div>
                    </div>
                    
                    <div class="pdf-card">
                        <div class="pdf-preview">📊</div>
                        <div class="pdf-info">
                            <h3 class="pdf-title">Auto-évaluation des Compétences</h3>
                            <p class="pdf-description">Questionnaire pour évaluer vos compétences actuelles</p>
                            <button class="download-button" onclick="downloadPDF('auto-evaluation.pdf')">Télécharger</button>
                        </div>
                    </div>
                </div>
            `
        }
    },
    2: {
        1: {
            title: "Analyse du Marché",
            moduleTitle: "Module 2 : Connaître son marché pour mieux vendre",
            content: `
                <h1>📊 Analyse du Marché</h1>
                
                <p>L'analyse de marché est une étape fondamentale pour comprendre votre environnement concurrentiel et identifier les opportunités.</p>
                
                <div style="background: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0; text-align: center;">
                    <h3>🎥 Vidéo d'introduction</h3>
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/kRiHQjF9ylM" frameborder="0" allowfullscreen style="max-width: 100%; border-radius: 8px;"></iframe>
                </div>
                
                <h2>🔍 Qu'est-ce que l'analyse de marché ?</h2>
                <p>L'analyse de marché consiste à étudier systématiquement votre secteur d'activité pour comprendre :</p>
                <ul>
                    <li>La taille et la croissance du marché</li>
                    <li>Les tendances et évolutions</li>
                    <li>Les segments de clientèle</li>
                    <li>Les forces concurrentielles</li>
                </ul>
                
                <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 15px; margin: 20px 0;">
                    <div style="text-align: center; padding: 15px; background: #f8f9fa; border-radius: 8px;">
                        <img src="INSTALL FILES/FULL_STRUCTURE/02 Connaître son marché pour mieux vendre/01_IMAGE_ANALYSE.png" alt="Analyse" style="max-width: 100%; height: auto; border-radius: 4px;">
                        <h4>Analyse</h4>
                    </div>
                    <div style="text-align: center; padding: 15px; background: #f8f9fa; border-radius: 8px;">
                        <img src="INSTALL FILES/FULL_STRUCTURE/02 Connaître son marché pour mieux vendre/01_IMAGE_ETUDEDEMARCHE.png" alt="Étude de Marché" style="max-width: 100%; height: auto; border-radius: 4px;">
                        <h4>Étude de Marché</h4>
                    </div>
                    <div style="text-align: center; padding: 15px; background: #f8f9fa; border-radius: 8px;">
                        <img src="INSTALL FILES/FULL_STRUCTURE/02 Connaître son marché pour mieux vendre/01_IMAGE_CONCURRENCE.png" alt="Concurrence" style="max-width: 100%; height: auto; border-radius: 4px;">
                        <h4>Concurrence</h4>
                    </div>
                    <div style="text-align: center; padding: 15px; background: #f8f9fa; border-radius: 8px;">
                        <img src="INSTALL FILES/FULL_STRUCTURE/02 Connaître son marché pour mieux vendre/01_IMAGE_COMPORTEMENTS.png" alt="Comportements" style="max-width: 100%; height: auto; border-radius: 4px;">
                        <h4>Comportements</h4>
                    </div>
                    <div style="text-align: center; padding: 15px; background: #f8f9fa; border-radius: 8px;">
                        <img src="INSTALL FILES/FULL_STRUCTURE/02 Connaître son marché pour mieux vendre/01_IMAGE_SWOT.png" alt="Analyse SWOT" style="max-width: 100%; height: auto; border-radius: 4px;">
                        <h4>Analyse SWOT</h4>
                    </div>
                    <div style="text-align: center; padding: 15px; background: #f8f9fa; border-radius: 8px;">
                        <img src="INSTALL FILES/FULL_STRUCTURE/02 Connaître son marché pour mieux vendre/01_IMAGE_ADAPTATIONOFFRE.png" alt="Adaptation de l'Offre" style="max-width: 100%; height: auto; border-radius: 4px;">
                        <h4>Adaptation de l'Offre</h4>
                    </div>
                </div>
                
                <h2>📈 Méthodes d'analyse</h2>
                
                <h3>1. Analyse quantitative</h3>
                <ul>
                    <li><strong>Données chiffrées :</strong> CA du secteur, nombre d'entreprises, croissance</li>
                    <li><strong>Sources :</strong> INSEE, études sectorielles, rapports d'experts</li>
                </ul>
                
                <h3>2. Analyse qualitative</h3>
                <ul>
                    <li><strong>Entretiens :</strong> Avec des clients potentiels et des experts</li>
                    <li><strong>Observation :</strong> Comportements d'achat, tendances</li>
                </ul>
                
                <h2>🎯 Les 5 forces de Porter</h2>
                <p>Un outil essentiel pour analyser la concurrence :</p>
                
                <div style="background: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
                    <h4>1. Intensité concurrentielle</h4>
                    <p>Nombre et force des concurrents directs</p>
                    
                    <h4>2. Menace des nouveaux entrants</h4>
                    <p>Facilité pour de nouveaux acteurs d'entrer sur le marché</p>
                    
                    <h4>3. Pouvoir de négociation des fournisseurs</h4>
                    <p>Influence des fournisseurs sur vos coûts</p>
                    
                    <h4>4. Pouvoir de négociation des clients</h4>
                    <p>Capacité des clients à influencer vos prix</p>
                    
                    <h4>5. Menace des produits de substitution</h4>
                    <p>Risque que votre produit soit remplacé par une alternative</p>
                </div>
                
                <div style="background: #d1ecf1; padding: 20px; border-radius: 8px; margin: 20px 0; border-left: 4px solid #17a2b8;">
                    <h3>💡 Conseil pratique</h3>
                    <p>L'analyse de marché doit être un processus continu, pas un exercice ponctuel. Le marché évolue constamment et votre analyse doit suivre ces évolutions.</p>
                </div>
            `
        },
        2: {
            title: "Analyse de la clientèle et de la concurrence",
            moduleTitle: "Module 2 : Connaître son marché pour mieux vendre",
            content: `
                <h1>👥 Analyse de la clientèle et de la concurrence</h1>
                
                <p>Comprendre vos clients et vos concurrents est essentiel pour développer une stratégie commerciale efficace.</p>
                
                <h2>🎯 Analyse de la clientèle</h2>
                
                <h3>1. Segmentation des clients</h3>
                <p>Divisez votre marché en groupes homogènes selon :</p>
                <ul>
                    <li><strong>Démographie :</strong> Âge, sexe, revenus, localisation</li>
                    <li><strong>Psychographie :</strong> Valeurs, style de vie, motivations</li>
                    <li><strong>Comportement :</strong> Fréquence d'achat, sensibilité au prix</li>
                </ul>
                
                <h3>2. Personas clients</h3>
                <p>Créez des profils détaillés de vos clients types :</p>
                <div style="background: #f8f9fa; padding: 15px; border-radius: 8px; margin: 15px 0;">
                    <h4>Exemple de persona :</h4>
                    <p><strong>Marie, 35 ans, cadre</strong></p>
                    <ul>
                        <li>Revenus : 45 000€/an</li>
                        <li>Valeurs : Qualité, praticité, écologie</li>
                        <li>Comportement : Achète en ligne, sensible aux avis</li>
                        <li>Besoins : Gain de temps, produits durables</li>
                    </ul>
                </div>
                
                <h2>🏢 Analyse de la concurrence</h2>
                
                <h3>1. Identification des concurrents</h3>
                <ul>
                    <li><strong>Concurrents directs :</strong> Même produit, même marché</li>
                    <li><strong>Concurrents indirects :</strong> Solutions alternatives</li>
                    <li><strong>Concurrents potentiels :</strong> Acteurs qui pourraient entrer</li>
                </ul>
                
                <h3>2. Analyse comparative</h3>
                <p>Comparez vos concurrents sur :</p>
                <ul>
                    <li>Positionnement et image de marque</li>
                    <li>Gamme de produits/services</li>
                    <li>Prix et politique tarifaire</li>
                    <li>Canaux de distribution</li>
                    <li>Forces et faiblesses</li>
                </ul>
                
                <div style="background: #d4edda; padding: 20px; border-radius: 8px; margin: 20px 0; border-left: 4px solid #28a745;">
                    <h3>💡 Stratégies gagnantes</h3>
                    <ul>
                        <li>Concentrez-vous sur les segments les plus rentables</li>
                        <li>Exploitez les faiblesses de vos concurrents</li>
                        <li>Développez des avantages difficiles à copier</li>
                        <li>Surveillez constamment l'évolution du marché</li>
                    </ul>
                </div>
            `
        },
        5: {
            title: "Customer Journey Mapping",
            moduleTitle: "Module 2 : Connaître son marché pour mieux vendre",
            content: `
                <h1>🗺️ Customer Journey Mapping</h1>
                
                <p>Le Customer Journey Mapping vous permet de comprendre et d'optimiser l'expérience client à chaque étape de son parcours.</p>
                
                <div style="background: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0; text-align: center;">
                    <h3>📊 Customer Journey Mapping</h3>
                    <img src="INSTALL FILES/FULL_STRUCTURE/02 Connaître son marché pour mieux vendre/05_IMAGE_CustomerJourneyMapping.png" alt="Customer Journey Mapping" style="max-width: 100%; height: auto; border-radius: 8px;">
                </div>
                
                <h2>🎯 Qu'est-ce que le Customer Journey ?</h2>
                <p>C'est l'ensemble des interactions qu'un client a avec votre marque, depuis la prise de conscience de son besoin jusqu'à la fidélisation.</p>
                
                <h2>📋 Les étapes du parcours client</h2>
                
                <h3>1. Prise de conscience (Awareness)</h3>
                <p>Le client réalise qu'il a un problème ou un besoin :</p>
                <ul>
                    <li><strong>Déclencheurs :</strong> Événements, changements, frustrations</li>
                    <li><strong>Actions :</strong> Recherche d'informations</li>
                    <li><strong>Émotions :</strong> Inquiétude, curiosité</li>
                </ul>
                
                <h3>2. Considération (Consideration)</h3>
                <p>Le client explore les solutions possibles :</p>
                <ul>
                    <li><strong>Actions :</strong> Comparaison des options</li>
                    <li><strong>Sources :</strong> Avis, recommandations, démos</li>
                    <li><strong>Émotions :</strong> Hésitation, excitation</li>
                </ul>
                
                <h3>3. Décision (Decision)</h3>
                <p>Le client choisit une solution :</p>
                <ul>
                    <li><strong>Facteurs :</strong> Prix, qualité, réputation</li>
                    <li><strong>Actions :</strong> Achat, signature</li>
                    <li><strong>Émotions :</strong> Confiance, anticipation</li>
                </ul>
                
                <h3>4. Utilisation (Usage)</h3>
                <p>Le client utilise votre produit/service :</p>
                <ul>
                    <li><strong>Actions :</strong> Installation, formation, utilisation</li>
                    <li><strong>Points de contact :</strong> Support, documentation</li>
                    <li><strong>Émotions :</strong> Satisfaction, frustration</li>
                </ul>
                
                <h3>5. Fidélisation (Retention)</h3>
                <p>Le client devient un ambassadeur :</p>
                <ul>
                    <li><strong>Actions :</strong> Renouvellement, recommandation</li>
                    <li><strong>Facteurs :</strong> Satisfaction, valeur perçue</li>
                    <li><strong>Émotions :</strong> Confiance, loyauté</li>
                </ul>
                
                <h2>🛠️ Comment créer votre Customer Journey Map</h2>
                
                <h3>Étape 1 : Définir vos personas</h3>
                <p>Identifiez vos clients types et leurs caractéristiques spécifiques.</p>
                
                <h3>Étape 2 : Lister les points de contact</h3>
                <p>Recensez tous les moments où le client interagit avec votre marque :</p>
                <ul>
                    <li>Site web</li>
                    <li>Réseaux sociaux</li>
                    <li>Email</li>
                    <li>Téléphone</li>
                    <li>Magasin physique</li>
                </ul>
                
                <h3>Étape 3 : Identifier les émotions</h3>
                <p>Pour chaque étape, déterminez :</p>
                <ul>
                    <li>Les émotions positives</li>
                    <li>Les frustrations</li>
                    <li>Les moments de doute</li>
                </ul>
                
                <h3>Étape 4 : Analyser les opportunités</h3>
                <p>Identifiez les points d'amélioration :</p>
                <ul>
                    <li>Moments de friction</li>
                    <li>Opportunités de personnalisation</li>
                    <li>Points de contact manqués</li>
                </ul>
                
                <div style="background: #d4edda; padding: 20px; border-radius: 8px; margin: 20px 0; border-left: 4px solid #28a745;">
                    <h3>💡 Outils recommandés</h3>
                    <ul>
                        <li><strong>Miro :</strong> Création collaborative de cartes</li>
                        <li><strong>Lucidchart :</strong> Diagrammes professionnels</li>
                        <li><strong>Hotjar :</strong> Analyse du comportement utilisateur</li>
                        <li><strong>Google Analytics :</strong> Données de parcours</li>
                    </ul>
                </div>
            `
        },
        6: {
            title: "Fiches Complémentaires",
            moduleTitle: "Module 2 : Connaître son marché pour mieux vendre",
            type: "pdf",
            content: `
                <h1>📄 Fiches Complémentaires - Module 2</h1>
                
                <p>Voici les documents complémentaires pour approfondir l'analyse de marché et les stratégies commerciales.</p>
                
                <div class="pdf-grid">
                    <div class="pdf-card">
                        <div class="pdf-preview">📊</div>
                        <div class="pdf-info">
                            <h3 class="pdf-title">Guide d'Analyse de Marché</h3>
                            <p class="pdf-description">Méthodologie complète pour analyser votre marché et identifier les opportunités</p>
                            <button class="download-button" onclick="downloadPDF('guide-analyse-marche.pdf')">Télécharger</button>
                        </div>
                    </div>
                    
                    <div class="pdf-card">
                        <div class="pdf-preview">🎯</div>
                        <div class="pdf-info">
                            <h3 class="pdf-title">Template Customer Journey</h3>
                            <p class="pdf-description">Modèle pour cartographier le parcours client de votre entreprise</p>
                            <button class="download-button" onclick="downloadPDF('template-customer-journey.pdf')">Télécharger</button>
                        </div>
                    </div>
                    
                    <div class="pdf-card">
                        <div class="pdf-preview">📋</div>
                        <div class="pdf-info">
                            <h3 class="pdf-title">Argumentaire Commercial</h3>
                            <p class="pdf-description">Structure et exemples d'argumentaires commerciaux efficaces</p>
                            <button class="download-button" onclick="downloadPDF('argumentaire-commercial.pdf')">Télécharger</button>
                        </div>
                    </div>
                    
                    <div class="pdf-card">
                        <div class="pdf-preview">🗺️</div>
                        <div class="pdf-info">
                            <h3 class="pdf-title">Customer Journey Mapping A2TA2L</h3>
                            <p class="pdf-description">Guide complet pour créer votre Customer Journey Map</p>
                            <button class="download-button" onclick="downloadPDF('INSTALL FILES/FULL_STRUCTURE/02 Connaître son marché pour mieux vendre/06_PDF_customerjourneymappingA2TA2L.pdf')">Télécharger</button>
                        </div>
                    </div>
                    
                    <div class="pdf-card">
                        <div class="pdf-preview">📈</div>
                        <div class="pdf-info">
                            <h3 class="pdf-title">Les étapes de la création d'entreprise - Le marché</h3>
                            <p class="pdf-description">Guide détaillé sur l'analyse de marché</p>
                            <button class="download-button" onclick="downloadPDF('INSTALL FILES/FULL_STRUCTURE/02 Connaître son marché pour mieux vendre/06_PDF_Lesetapesdelacreationdentreprise-Lemarche.pdf')">Télécharger</button>
                        </div>
                    </div>
                </div>
                
                <div style="background: #d1ecf1; padding: 20px; border-radius: 8px; margin: 20px 0; border-left: 4px solid #17a2b8;">
                    <h3>🎥 Vidéos complémentaires</h3>
                    <div style="margin: 15px 0;">
                        <h4>Business Model Canvas</h4>
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/S9GAk_2de2g" frameborder="0" allowfullscreen style="max-width: 100%; border-radius: 8px;"></iframe>
                    </div>
                </div>
            `
        }
    },
    3: {
        7: {
            title: "Fiches Complémentaires",
            moduleTitle: "Module 3 : Définir les besoins et la rentabilité du projet",
            type: "pdf",
            content: `
                <h1>📄 Fiches Complémentaires - Module 3</h1>
                
                <p>Voici les documents complémentaires pour approfondir la gestion financière et la structuration de votre projet.</p>
                
                <div class="pdf-grid">
                    <div class="pdf-card">
                        <div class="pdf-preview">📊</div>
                        <div class="pdf-info">
                            <h3 class="pdf-title">Plan Financier</h3>
                            <p class="pdf-description">Template pour créer votre plan financier détaillé</p>
                            <button class="download-button" onclick="downloadPDF('INSTALL FILES/FULL_STRUCTURE/03 Définir les besoins et la rentabilité du projet/06_PDF_PLANFINANCIER.pdf')">Télécharger</button>
                        </div>
                    </div>
                    
                    <div class="pdf-card">
                        <div class="pdf-preview">🎯</div>
                        <div class="pdf-info">
                            <h3 class="pdf-title">Lean Canvas</h3>
                            <p class="pdf-description">Modèle Lean Canvas pour structurer votre projet</p>
                            <button class="download-button" onclick="downloadPDF('INSTALL FILES/FULL_STRUCTURE/03 Définir les besoins et la rentabilité du projet/06_PDF_LEANCANVAS.pdf')">Télécharger</button>
                        </div>
                    </div>
                    
                    <div class="pdf-card">
                        <div class="pdf-preview">📋</div>
                        <div class="pdf-info">
                            <h3 class="pdf-title">Value Proposition Canvas</h3>
                            <p class="pdf-description">Outil pour définir votre proposition de valeur</p>
                            <button class="download-button" onclick="downloadPDF('INSTALL FILES/FULL_STRUCTURE/03 Définir les besoins et la rentabilité du projet/02_PDF_ValuePropositionCanvasA2TA2L.pdf')">Télécharger</button>
                        </div>
                    </div>
                    
                    <div class="pdf-card">
                        <div class="pdf-preview">📈</div>
                        <div class="pdf-info">
                            <h3 class="pdf-title">Business Plan - Les étapes essentielles</h3>
                            <p class="pdf-description">Guide pour rédiger un business plan efficace</p>
                            <button class="download-button" onclick="downloadPDF('INSTALL FILES/FULL_STRUCTURE/03 Définir les besoins et la rentabilité du projet/07_PDF_Lesetapesessentiellespourredigerunbusinessplan.pdf')">Télécharger</button>
                        </div>
                    </div>
                    
                    <div class="pdf-card">
                        <div class="pdf-preview">💡</div>
                        <div class="pdf-info">
                            <h3 class="pdf-title">Les étapes de la création d'entreprise - L'idée</h3>
                            <p class="pdf-description">Guide pour développer et valider votre idée d'entreprise</p>
                            <button class="download-button" onclick="downloadPDF('INSTALL FILES/FULL_STRUCTURE/03 Définir les besoins et la rentabilité du projet/07_PDF_Lesetapesdelacreationdentreprise-Lidee.pdf')">Télécharger</button>
                        </div>
                    </div>
                    
                    <div class="pdf-card">
                        <div class="pdf-preview">💰</div>
                        <div class="pdf-info">
                            <h3 class="pdf-title">Les étapes de la création d'entreprise - Chiffres et Financements</h3>
                            <p class="pdf-description">Guide complet sur les aspects financiers</p>
                            <button class="download-button" onclick="downloadPDF('INSTALL FILES/FULL_STRUCTURE/03 Définir les besoins et la rentabilité du projet/07_PDF_Lesetapesdelacreationdentreprise-ChiffresetFinancements.pdf')">Télécharger</button>
                        </div>
                    </div>
                    
                    <div class="pdf-card">
                        <div class="pdf-preview">🚀</div>
                        <div class="pdf-info">
                            <h3 class="pdf-title">La création d'entreprise en 6 étapes</h3>
                            <p class="pdf-description">Méthodologie complète en 6 étapes</p>
                            <button class="download-button" onclick="downloadPDF('INSTALL FILES/FULL_STRUCTURE/03 Définir les besoins et la rentabilité du projet/07_PDF_Lacreationdentrepriseen6etapes.pdf')">Télécharger</button>
                        </div>
                    </div>
                </div>
                
                <div style="background: #d1ecf1; padding: 20px; border-radius: 8px; margin: 20px 0; border-left: 4px solid #17a2b8;">
                    <h3>💡 Conseils d'utilisation</h3>
                    <ul>
                        <li>Commencez par le Lean Canvas pour structurer votre idée</li>
                        <li>Utilisez le Value Proposition Canvas pour clarifier votre offre</li>
                        <li>Élaborez votre plan financier avec les templates fournis</li>
                        <li>Référez-vous au guide en 6 étapes pour ne rien oublier</li>
                    </ul>
                </div>
            `
        }
    },
    13: {
        1: {
            title: "Études de Cas",
            moduleTitle: "Module 13 : Études de cas",
            type: "pdf",
            content: `
                <h1>📚 Études de Cas - Module 13</h1>
                
                <p>Découvrez des exemples concrets d'entreprises innovantes et leurs stratégies de développement.</p>
                
                <div class="pdf-grid">
                    <div class="pdf-card">
                        <div class="pdf-preview">🌱</div>
                        <div class="pdf-info">
                            <h3 class="pdf-title">WorkGreen - Réinventer le Coworking</h3>
                            <p class="pdf-description">Étude de cas sur un espace de coworking durable et écologique</p>
                            <button class="download-button" onclick="downloadPDF('INSTALL FILES/FULL_STRUCTURE/13 Études de cas/01_PDF_WorkGreen_ReinventerleCoworkingpourunFuturDurable.pdf')">Télécharger</button>
                        </div>
                    </div>
                    
                    <div class="pdf-card">
                        <div class="pdf-preview">🛒</div>
                        <div class="pdf-info">
                            <h3 class="pdf-title">GreenKart - Commerce Local et Écoresponsable</h3>
                            <p class="pdf-description">Réinventer le commerce avec des produits locaux et écoresponsables</p>
                            <button class="download-button" onclick="downloadPDF('INSTALL FILES/FULL_STRUCTURE/13 Études de cas/01_PDF_GreenKart_Reinventerle-commerceavecdesproduitslocauxetecoresponsables.pdf')">Télécharger</button>
                        </div>
                    </div>
                    
                    <div class="pdf-card">
                        <div class="pdf-preview">🥗</div>
                        <div class="pdf-info">
                            <h3 class="pdf-title">FitBio - Bio et Technologie</h3>
                            <p class="pdf-description">L'alliance du bio et de la technologie pour des choix alimentaires écoresponsables</p>
                            <button class="download-button" onclick="downloadPDF('INSTALL FILES/FULL_STRUCTURE/13 Études de cas/01_PDF_FitBio_Lalliancedubioetdelatechnologiepourdeschoixalimentairesecoresponsables.pdf')">Télécharger</button>
                        </div>
                    </div>
                    
                    <div class="pdf-card">
                        <div class="pdf-preview">🚗</div>
                        <div class="pdf-info">
                            <h3 class="pdf-title">EcoRide - Solution Électrique</h3>
                            <p class="pdf-description">La solution électrique pour une ville plus verte et plus agile</p>
                            <button class="download-button" onclick="downloadPDF('INSTALL FILES/FULL_STRUCTURE/13 Études de cas/01_PDF_EcoRide_LaSolutionElectriquepouruneVillePlusVerteetPlusAgile.pdf')">Télécharger</button>
                        </div>
                    </div>
                    
                    <div class="pdf-card">
                        <div class="pdf-preview">🔨</div>
                        <div class="pdf-info">
                            <h3 class="pdf-title">AtelierBoisCo - Artisanat d'Excellence</h3>
                            <p class="pdf-description">Redonner vie à l'artisanat d'excellence</p>
                            <button class="download-button" onclick="downloadPDF('INSTALL FILES/FULL_STRUCTURE/13 Études de cas/01_PDF_AtelierBoisCo_RedonnerViealArtisanatdExcellence.pdf')">Télécharger</button>
                        </div>
                    </div>
                </div>
                
                <div style="background: #d1ecf1; padding: 20px; border-radius: 8px; margin: 20px 0; border-left: 4px solid #17a2b8;">
                    <h3>💡 Comment utiliser ces études de cas</h3>
                    <ul>
                        <li>Analysez les stratégies de chaque entreprise</li>
                        <li>Identifiez les points communs de réussite</li>
                        <li>Adaptez les bonnes pratiques à votre projet</li>
                        <li>Réfléchissez aux défis spécifiques de chaque secteur</li>
                    </ul>
                </div>
            `
        }
    }
};

// Fonction pour télécharger les PDFs
function downloadPDF(pdfPath) {
    // Créer un lien de téléchargement
    const link = document.createElement('a');
    link.href = pdfPath;
    link.download = pdfPath.split('/').pop(); // Nom du fichier
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

// Fonctions utilitaires
function checkAuth() {
    if (localStorage.getItem('isLoggedIn') !== 'true') {
        window.location.href = 'index.html';
    }
}

function generateNavigation() {
    const navigationElement = document.getElementById('navigation');
    if (!navigationElement) return;
    
    let navigationHTML = '';
    
    formationData.modules.forEach(module => {
        const isActive = hasActiveLesson(module.id);
        
        navigationHTML += `
            <div class="nav-section ${isActive ? 'active' : ''}" id="module-${module.id}">
                <div class="nav-section-header" onclick="toggleModule(${module.id})">
                    <span class="nav-section-title">${module.title}</span>
                    <span class="nav-arrow">▶</span>
                </div>
                <div class="nav-items">
        `;
        
        module.lessons.forEach(lesson => {
            const lessonKey = `module_${module.id}_lesson_${lesson.id}`;
            const progress = JSON.parse(localStorage.getItem('lessonProgress') || '{}');
            const isCompleted = progress[lessonKey] && progress[lessonKey].completed;
            const isCurrentLesson = isCurrentLessonActive(module.id, lesson.id);
            
            const lessonUrl = lesson.type === 'pdf' ? 
                `pdf-downloads.html?module=${module.id}&lesson=${lesson.id}` :
                `lesson.html?module=${module.id}&lesson=${lesson.id}`;
            
            navigationHTML += `
                <a href="${lessonUrl}" class="nav-item ${isCurrentLesson ? 'active' : ''} ${isCompleted ? 'completed' : ''}">
                    <span class="nav-item-icon">${isCompleted ? '✓' : '○'}</span>
                    ${lesson.title}
                </a>
            `;
        });
        
        navigationHTML += `
                </div>
            </div>
        `;
    });
    
    navigationElement.innerHTML = navigationHTML;
}

function hasActiveLesson(moduleId) {
    const urlParams = new URLSearchParams(window.location.search);
    const currentModule = parseInt(urlParams.get('module'));
    return currentModule === moduleId;
}

function isCurrentLessonActive(moduleId, lessonId) {
    const urlParams = new URLSearchParams(window.location.search);
    const currentModule = parseInt(urlParams.get('module'));
    const currentLesson = parseInt(urlParams.get('lesson'));
    return currentModule === moduleId && currentLesson === lessonId;
}

function toggleModule(moduleId) {
    const moduleElement = document.getElementById(`module-${moduleId}`);
    moduleElement.classList.toggle('active');
}

function updateProgress() {
    const progress = JSON.parse(localStorage.getItem('lessonProgress') || '{}');
    const totalLessons = getTotalLessonsCount();
    const completedLessons = Object.keys(progress).filter(key => progress[key].completed).length;
    const percentage = totalLessons > 0 ? Math.round((completedLessons / totalLessons) * 100) : 0;
    
    // Mettre à jour l'interface
    const progressPercent = document.getElementById('progressPercent');
    const progressFill = document.getElementById('progressFill');
    const completedLessonsElement = document.getElementById('completedLessons');
    const totalLessonsElement = document.getElementById('totalLessons');
    
    if (progressPercent) progressPercent.textContent = `${percentage}%`;
    if (progressFill) progressFill.style.width = `${percentage}%`;
    if (completedLessonsElement) completedLessonsElement.textContent = completedLessons;
    if (totalLessonsElement) totalLessonsElement.textContent = totalLessons;
}

function getTotalLessonsCount() {
    let total = 0;
    formationData.modules.forEach(module => {
        total += module.lessons.length;
    });
    return total;
}

function initializeDashboard() {
    // Générer la navigation
    generateNavigation();
    
    // Mettre à jour la progression
    updateProgress();
    
    // Initialiser les informations utilisateur
    const username = localStorage.getItem('username') || 'Utilisateur';
    const userNameElement = document.getElementById('userName');
    const userAvatar = document.getElementById('userAvatar');
    
    if (userNameElement) userNameElement.textContent = username;
    if (userAvatar) userAvatar.textContent = username.charAt(0).toUpperCase();
}

function getLessonData(moduleId, lessonId) {
    const module = formationData.modules.find(m => m.id === moduleId);
    if (!module) return null;
    
    const lesson = module.lessons.find(l => l.id === lessonId);
    if (!lesson) return null;
    
    // Essayer de récupérer le contenu depuis les modules chargés
    let content = null;
    let moduleTitle = `Module ${moduleId} : ${module.title}`;
    
    // Vérifier les modules chargés (format: module2Content, module3Content, etc.)
    const moduleContentVar = `module${moduleId}Content`;
    console.log(`Recherche du module: ${moduleContentVar}, leçon: ${lessonId}`);
    
    if (typeof window[moduleContentVar] !== 'undefined' && window[moduleContentVar][lessonId]) {
        console.log(`Contenu trouvé dans ${moduleContentVar}`);
        content = window[moduleContentVar][lessonId].content;
        moduleTitle = window[moduleContentVar][lessonId].moduleTitle || moduleTitle;
    } else if (lessonContent[moduleId] && lessonContent[moduleId][lessonId]) {
        console.log(`Contenu trouvé dans lessonContent`);
        content = lessonContent[moduleId][lessonId].content;
        moduleTitle = lessonContent[moduleId][lessonId].moduleTitle || moduleTitle;
    } else {
        console.log(`Aucun contenu trouvé pour module ${moduleId}, leçon ${lessonId}`);
    }
    
    // Si aucun contenu n'est trouvé, utiliser le contenu par défaut
    if (!content) {
        content = `<h1>${lesson.title}</h1><p>Contenu de la leçon en cours de préparation...</p>`;
    }
    
    return {
        title: lesson.title,
        moduleTitle: moduleTitle,
        content: content,
        type: lesson.type
    };
}

function getModuleData(moduleId) {
    return formationData.modules.find(m => m.id === moduleId);
}

function getPreviousLesson(currentModule, currentLesson) {
    // Si ce n'est pas la première leçon du module
    if (currentLesson > 1) {
        const module = formationData.modules.find(m => m.id === currentModule);
        const prevLesson = module.lessons.find(l => l.id === currentLesson - 1);
        return {
            module: currentModule,
            lesson: currentLesson - 1,
            isPDF: prevLesson.type === 'pdf'
        };
    }
    
    // Si c'est la première leçon, aller au module précédent
    if (currentModule > 1) {
        const prevModule = formationData.modules.find(m => m.id === currentModule - 1);
        if (prevModule) {
            const lastLesson = prevModule.lessons[prevModule.lessons.length - 1];
            return {
                module: currentModule - 1,
                lesson: lastLesson.id,
                isPDF: lastLesson.type === 'pdf'
            };
        }
    }
    
    return null;
}

function getNextLesson(currentModule, currentLesson) {
    const module = formationData.modules.find(m => m.id === currentModule);
    if (!module) return null;
    
    // Si ce n'est pas la dernière leçon du module
    if (currentLesson < module.lessons.length) {
        const nextLesson = module.lessons.find(l => l.id === currentLesson + 1);
        return {
            module: currentModule,
            lesson: currentLesson + 1,
            isPDF: nextLesson.type === 'pdf'
        };
    }
    
    // Si c'est la dernière leçon, aller au module suivant
    if (currentModule < formationData.modules.length) {
        const nextModule = formationData.modules.find(m => m.id === currentModule + 1);
        if (nextModule) {
            return {
                module: currentModule + 1,
                lesson: 1,
                isPDF: nextModule.lessons[0].type === 'pdf'
            };
        }
    }
    
    return null;
}

function sendProgressToServer() {
    const progress = localStorage.getItem('lessonProgress');
    const username = localStorage.getItem('username');
    
    if (!progress || !username) {
        console.log('Pas de progression ou nom d\'utilisateur à sauvegarder');
        return;
    }
    
    try {
        const progressData = JSON.parse(progress);
        
        fetch('admin/api.php', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                action: 'update_progress',
                username: username,
                progress: progressData,
                timestamp: new Date().toISOString()
            })
        })
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            console.log('Progression sauvegardée avec succès:', data);
            if (data.success) {
                console.log(`Leçons terminées: ${data.stats.completed_lessons}, Taux de completion: ${data.stats.completion_rate}%`);
            }
        })
        .catch(error => {
            console.error('Erreur lors de la sauvegarde:', error);
            // Optionnel: afficher une notification d'erreur à l'utilisateur
            showNotification('Erreur lors de la sauvegarde de la progression', 'error');
        });
    } catch (error) {
        console.error('Erreur lors du parsing de la progression:', error);
    }
}

function showNotification(message, type = 'success') {
    // Créer une notification temporaire
    const notification = document.createElement('div');
    const bgColor = type === 'error' ? '#dc3545' : '#28a745';
    
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: ${bgColor};
        color: white;
        padding: 15px 20px;
        border-radius: 6px;
        z-index: 1000;
        box-shadow: 0 4px 12px rgba(0,0,0,0.15);
        max-width: 300px;
        word-wrap: break-word;
    `;
    notification.textContent = message;
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.remove();
    }, type === 'error' ? 5000 : 3000);
}

// Fonction d'initialisation générale
function initializeFormation() {
    // Vérifier l'authentification
    checkAuth();
    
    // Initialiser selon la page
    if (document.getElementById('navigation')) {
        generateNavigation();
        updateProgress();
        
        // Initialiser les informations utilisateur
        const username = localStorage.getItem('username') || 'Utilisateur';
        const userNameElement = document.getElementById('userName');
        const userAvatar = document.getElementById('userAvatar');
        
        if (userNameElement) userNameElement.textContent = username;
        if (userAvatar) userAvatar.textContent = username.charAt(0).toUpperCase();
    }
}

// Initialiser au chargement de la page
document.addEventListener('DOMContentLoaded', initializeFormation);