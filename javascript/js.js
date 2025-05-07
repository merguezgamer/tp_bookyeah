function validation() {
    var destination = document.forms["formulaire"]["destination"].value;
    var date_depart = document.forms["formulaire"]["date_depart"].value;
    var date_retour = document.forms["formulaire"]["date_retour"].value;
    if (destination == "") {
        alert("Veuillez entrer une destination.");
        return false;
    }
    if (date_depart == "") {
        alert("Veuillez entrer une date de départ.");
        return false;
    }
    if (date_retour == "") {
        alert("Veuillez entrer une date depart.");
        return false;
    }
    if (date_depart > date_retour && date_depart != "" && date_retour != "") {
        alert("La date de départ ne peut pas être supérieure à la date de retour.");
        return false;
    }

    if (date_depart == date_retour && date_depart != "") {
        alert("le voyage ne peut pas etre inférieur a 1 jour.");
        return false;
    }
    if (adultInput == "") {
        alert("Le nombre d'adult ne peut etre 0.");
        return false;
    }

}

document.addEventListener("DOMContentLoaded", function() {
    // Gestionnaire pour le bouton "+" pour les adultes
    document.getElementById("adult_plus").addEventListener("click", function() {
        var adultInput = document.getElementById("adult");
        adult.value = parseInt(adultInput.value) + 1;
    });

    // Gestionnaire pour le bouton "-" pour les adultes
    document.getElementById("adult_moin").addEventListener("click", function() {
        var adultInput = document.getElementById("adult");
        if (parseInt(adultInput.value) > 0) {
            adultInput.value = parseInt(adultInput.value) - 1;
        }
    });

    // Gestionnaire pour le bouton "+" pour les enfants
    document.getElementById("enfant_plus").addEventListener("click", function() {
        var enfantInput = document.getElementById("enfant");
        enfantInput.value = parseInt(enfantInput.value) + 1;
            const h2 = document.getElementById("div_enfant");
            let html = "<div id='enfant_retirer'><br><label>enfant</label><input class='form-control' placeholder='entrer age'></input></div>";
            h2.insertAdjacentHTML("afterend", html);
    });

    // Gestionnaire pour le bouton "-" pour les enfants
    document.getElementById("enfant_moin").addEventListener("click", function() {
        var enfantInput = document.getElementById("enfant");
        if (parseInt(enfantInput.value) > 0) {
            enfantInput.value = parseInt(enfantInput.value) - 1;
            const element = document.getElementById("enfant_retirer");
            element.remove();
        }
    });

    // Gestionnaire pour le bouton "+" pour les chambres
    document.getElementById("chambre_plus").addEventListener("click", function() {
        var chambreInput = document.getElementById("chambre");
        chambreInput.value = parseInt(chambreInput.value) + 1;
    });

    // Gestionnaire pour le bouton "-" pour les chambres
    document.getElementById("chambre_moin").addEventListener("click", function() {
        var chambreInput = document.getElementById("chambre");
        if (parseInt(chambreInput.value) > 0) {
            chambreInput.value = parseInt(chambreInput.value) - 1;
        }
    });
});
