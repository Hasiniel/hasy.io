// Fonction pour ajouter l'animation de verre cassé
function shatterElement(element) {
    // Ajouter une classe pour l'animation de verre cassé
    element.classList.add('shatter');

    // Supprimer l'élément après l'animation pour simuler la casse
    setTimeout(() => {
        element.style.visibility = 'hidden'; // On peut également utiliser `element.remove()` si vous voulez supprimer complètement l'élément
    }, 1000); // 1 seconde pour que l'animation se termine
}

// Ajouter un gestionnaire d'événements de clic à tous les éléments que vous souhaitez animer
document.querySelectorAll('nav a').forEach(el => {
    el.addEventListener('click', function() {
        shatterElement(el);
    });
});


// Pour la lesson
document.getElementById('redirectSelect').addEventListener('change', function() {
    var selectedValue = this.value;
    if (selectedValue) {
        document.body.style.transition = "opacity 0.5s ease-out"; // Transition pour un effet de fondu
        document.body.style.opacity = "0"; // Début de l'effet de fondu
        
        setTimeout(function() {
            window.location.href = selectedValue;
        }, 500); // Attendre que l'animation se termine avant de rediriger
    }
});

document.getElementById('myForm').addEventListener('submit', function(event) {
    var message = document.getElementById('message').value.trim();
    var alertMessage = '';

    
    if (message === '') {
        alertMessage += 'Le champ "Message" est requis.\n';
    }
    
    if (alertMessage !== '') {
        alert(alertMessage);
        event.preventDefault(); // Empêche l'envoi du formulaire si des champs sont vides
    }
});
