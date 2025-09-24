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
        5: {
            title: "Analyse des compétences clés pour gérer une entreprise",
            moduleTitle: "Module 1 : Mettre ses compétences au service de son projet",
            content: `
                <h1>🔍 Analyse des compétences clés pour gérer une entreprise</h1>
                
                <h2>🤔 Démarrez avec un fait intrigant !</h2>
                <p>Saviez-vous que plus de 90 % des startups échouent dans leurs premières années d'existence ? Ce chiffre montre qu'être un chef d'entreprise demande bien plus que d'avoir une bonne idée : il faut des compétences diverses et bien développées.</p>
                
                <h2>🛠️ Compétences Requises pour l'Entrepreneuriat</h2>
                
                <h3>👥 Leadership</h3>
                <p>Un bon chef d'entreprise ne se contente pas de diriger ; il doit inspirer et motiver son équipe. Steve Jobs, co-fondateur d'Apple, est souvent cité comme un exemple de leader visionnaire. Il a su inspirer ses employés à repousser les limites et à innover constamment.</p>
                
                <p><strong>Qualités essentielles :</strong></p>
                <ul>
                    <li><strong>Vision :</strong> Une capacité à envisager l'avenir et à guider l'entreprise dans cette direction.</li>
                    <li><strong>Empathie :</strong> Comprendre et répondre aux besoins de l'équipe pour maintenir une motivation élevée.</li>
                </ul>
                
                <h3>🧠 Prise de Décision</h3>
                <p>Prenons l'exemple de Jeff Bezos, fondateur d'Amazon. Sa décision d'élargir l'entreprise au-delà des livres et d'investir dans des technologies émergentes comme Alexa et AWS (Amazon Web Services) illustre l'importance de la prise de décision stratégique.</p>
                
                <p><strong>Étapes clés :</strong></p>
                <ul>
                    <li><strong>Analyse des Données :</strong> Évaluer les informations et les tendances pour prendre des décisions informées.</li>
                    <li><strong>Prise de Risque Calculée :</strong> Savoir quand suivre son instinct tout en calculant les risques potentiels.</li>
                </ul>
                
                <h3>💵 Gestion Financière</h3>
                <p>L'une des erreurs courantes des entrepreneurs est de négliger la gestion des finances, conduisant souvent à des problèmes de liquidité. Sara Blakely, fondatrice de Spanx, a commencé sa société avec seulement 5 000 $ d'économies. Sa rigoureuse gestion financière lui a permis de transformer cette somme en une entreprise milliardaire.</p>
                
                <p><strong>Principes :</strong></p>
                <ul>
                    <li><strong>Budgeting :</strong> Planification rigoureuse des entrées et sorties d'argent.</li>
                    <li><strong>Investissement Intelligent :</strong> Savoir où et comment allouer les ressources financières pour maximiser la croissance.</li>
                </ul>
                
                <h3>📈 Planification Stratégique</h3>
                <p>La planification stratégique détermine la direction à long terme de l'entreprise. Prenons l'exemple de l'entreprise Tesla, qui a élaboré un plan stratégique clair pour révolutionner l'industrie automobile en se concentrant d'abord sur des véhicules électriques de luxe avant d'élargir son marché.</p>
                
                <p><strong>Éléments Clés :</strong></p>
                <ul>
                    <li><strong>Analyse SWOT :</strong> Identifier les Forces, Faiblesses, Opportunités et Menaces.</li>
                    <li><strong>Objectifs SMART :</strong> Définir des objectifs Spécifiques, Mesurables, Atteignables, Réalistes et Temporels.</li>
                </ul>
                
                <h2>💡 Le Rôle de l'Entrepreneur</h2>
                <p>L'entrepreneur est le moteur de la croissance et du succès de son entreprise. Il doit non seulement gérer quotidiennement les opérations, mais aussi être visionnaire et innovant. Elon Musk est un exemple typique d'entrepreneur multidimensionnel, naviguant entre ses diverses entreprises comme SpaceX et Tesla, tout en inspirant un changement global.</p>
                
                <h3>🌟 Adaptabilité et Innovation</h3>
                <p>Dans un monde des affaires en constante évolution, les qualités d'adaptabilité et d'innovation sont cruciales. La pandémie de COVID-19 a par exemple montré combien il était essentiel pour des entreprises de pouvoir s'adapter rapidement à des conditions changeantes.</p>
                
                <p><strong>Études de cas :</strong></p>
                <ul>
                    <li><strong>Zoom :</strong> Avant la pandémie, Zoom n'était qu'une autre application de visioconférence. Son équipe dirigeante a su saisir l'opportunité en répondant rapidement à la demande croissante, démontrant ainsi une grande adaptabilité.</li>
                    <li><strong>Blockbuster vs. Netflix :</strong> L'histoire de Blockbuster, qui n'a pas su s'adapter aux nouvelles tendances de consommation et a fait faillite, comparée à Netflix, qui a su tirer parti des technologies numériques pour transformer son modèle économique.</li>
                </ul>
                
                <h3>🚀 Gestion des Risques</h3>
                <p>Chaque entreprise est confrontée à des incertitudes. Richard Branson, fondateur du groupe Virgin, est renommé pour sa gestion des risques efficace, qu'il qualifie de "calculés". Sa philosophie repose sur l'expérimentation avec des filets de sécurité, minimisant l'impact des échecs potentiels.</p>
                
                <p><strong>Approches :</strong></p>
                <ul>
                    <li><strong>Diversification :</strong> Ne pas placer tous les œufs dans le même panier.</li>
                    <li><strong>Assurances :</strong> Utiliser les assurances pour protéger l'entreprise contre les risques imprévisibles.</li>
                </ul>
                
                <h2>🔍 Conclusion</h2>
                <p>Être un chef d'entreprise requiert une combinaison unique de compétences. Du leadership à la gestion financière, en passant par la prise de décision, la planification stratégique, et les capacités d'adaptabilité et d'innovation, chaque aspect contribue à créer et à maintenir une entreprise prospère. En comprenant et en développant ces compétences, les entrepreneurs peuvent non seulement survivre mais aussi prospérer dans le monde compétitif des affaires.</p>
                
                <div style="background: #fff3cd; padding: 20px; border-radius: 8px; margin: 30px 0; border-left: 4px solid #ffc107;">
                    <h3>📝 Devoir: Création d'un plan d'action pour devenir un chef d'entreprise</h3>
                    <p><strong>Instructions:</strong></p>
                    <p><strong>Étape 1 : Sélection des compétences requises</strong><br>
                    Identifier et décrire les compétences nécessaires pour être un chef d'entreprise, telles que le leadership, la prise de décision, la gestion financière et la planification stratégique.</p>
                    
                    <p><strong>Étape 2 : Analyse du rôle de l'entrepreneur</strong><br>
                    Analyser le rôle de l'entrepreneur dans la réussite et la croissance de l'entreprise, en mettant l'accent sur l'importance de l'adaptabilité, de l'innovation et de la gestion des risques.</p>
                    
                    <p><strong>Étape 3 : Élaboration d'un plan d'action</strong><br>
                    Créer un plan d'action détaillé décrivant comment acquérir et développer ces compétences, en mettant l'accent sur le développement personnel, la formation et l'expérience pratique.</p>
                </div>
            `
        }
    }
};

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
    
    // Récupérer le contenu depuis lessonContent si disponible
    const content = lessonContent[moduleId] && lessonContent[moduleId][lessonId] 
        ? lessonContent[moduleId][lessonId].content 
        : `<h1>${lesson.title}</h1><p>Contenu de la leçon en cours de préparation...</p>`;
    
    return {
        title: lesson.title,
        moduleTitle: `Module ${moduleId} : ${module.title}`,
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
    
    if (!progress || !username) return;
    
    fetch('admin/api.php', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            action: 'update_progress',
            username: username,
            progress: JSON.parse(progress),
            timestamp: new Date().toISOString()
        })
    })
    .then(response => response.json())
    .then(data => {
        console.log('Progression sauvegardée:', data);
    })
    .catch(error => {
        console.error('Erreur lors de la sauvegarde:', error);
    });
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