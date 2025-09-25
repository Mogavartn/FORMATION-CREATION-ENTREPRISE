// Module 13: Études de cas
window.module13Content = {
    1: {
        title: "Études de Cas",
        moduleTitle: "Module 13 : Études de cas",
        type: "pdf",
        content: `
            <h1>📄 Études de Cas</h1>
            
            <p>Voici les documents complémentaires pour approfondir les concepts abordés dans ce module.</p>
            
            <div class="pdf-grid">
                <div class="pdf-card">
                    <div class="pdf-preview">📋</div>
                    <div class="pdf-info">
                        <h3 class="pdf-title">Document 13</h3>
                        <p class="pdf-description">Document complémentaire pour le module 13</p>
                        <button class="download-button" onclick="downloadPDF('module13_document.pdf')">Télécharger</button>
                    </div>
                </div>
            </div>
            
            <div style="background: #d1ecf1; padding: 20px; border-radius: 8px; margin: 20px 0; border-left: 4px solid #17a2b8;">
                <h3>💡 Ressources supplémentaires</h3>
                <ul>
                    <li>Consultez les documents officiels</li>
                    <li>Utilisez les outils en ligne disponibles</li>
                    <li>Contactez les professionnels spécialisés</li>
                </ul>
            </div>
        `
    },
};

// Export pour utilisation dans d'autres fichiers
if (typeof module !== 'undefined' && module.exports) {
    module.exports = module13Content;
}

// Exposer globalement pour l'utilisation dans lesson.html
if (typeof window !== 'undefined') {
    window.module13Content = module13Content;
}