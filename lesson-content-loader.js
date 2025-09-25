// Import lesson content from separate files
// This will be loaded dynamically in the main script

// Module 1 content placeholder - will be loaded from lesson-content-module1.js
const module1Lessons = {};

// Module 2 content placeholder - will be loaded from lesson-content-module2.js  
// Note: The actual content is defined in lesson-content-module2.js as module2Content

// Additional modules will be added here
const module3Lessons = {};
const module4Lessons = {};
const module5Lessons = {};
const module6Lessons = {};
const module7Lessons = {};
const module8Lessons = {};
const module9Lessons = {};
const module10Lessons = {};
const module11Lessons = {};
const module12Lessons = {};
const module13Lessons = {};

// Combined lesson content object
const allLessonContent = {
    1: module1Lessons,
    2: module2Lessons,
    3: module3Lessons,
    4: module4Lessons,
    5: module5Lessons,
    6: module6Lessons,
    7: module7Lessons,
    8: module8Lessons,
    9: module9Lessons,
    10: module10Lessons,
    11: module11Lessons,
    12: module12Lessons,
    13: module13Lessons
};

// Function to load lesson content dynamically
function loadLessonContent(moduleId, lessonId) {
    // This will be implemented to load content from the separate files
    return allLessonContent[moduleId] && allLessonContent[moduleId][lessonId] 
        ? allLessonContent[moduleId][lessonId] 
        : {
            title: "Contenu en cours de préparation",
            moduleTitle: `Module ${moduleId}`,
            content: `<h1>Contenu en cours de préparation</h1><p>Cette leçon sera bientôt disponible.</p>`,
            type: "lesson"
        };
}

// Export for use in main script
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { allLessonContent, loadLessonContent };
}