function validation() {
    var destination = document.forms["formulaire"]["destination"].value;
    var date_depart = document.forms["formulaire"]["date_depart"].value;
    var date_retour = document.forms["formulaire"]["date_retour"].value;
    var adult = document.forms["formulaire"]["adult"].value;
    var enfant = document.forms["formulaire"]["enfant"].value;
    var chambre = document.forms["formulaire"]["chambre"].value;
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
    if (adult == "0") {
        alert("Le nombre d'adult ne peut etre 0.");
        return false;
    }
    if (enfant == "0") {
        alert("Veuillez entrer le nombre d'adult.");
        return false;
    }
    if (chambre == "0") {
        alert("Veuillez entrer le nombre de chambre.");
        return false;
    }
    return true;
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
            let html = "<div id='enfant_retirer'><br><label for='enfant_age'>enfant</label><input class='form-control' type='number' placeholder='entrer age'id='enfant_age' max='17' min='0'></input></div>";
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

function calculer() {
    if (validation() == true ){
    // Calculer le montant total;
    var adult = document.forms["formulaire"]["adult"].value;
    for (var i = 0; i < enfant; i++) {
        var age = document.forms["formulaire"]["enfant_age"].value;
        if (age < 2) {
            alert("L'enfant doit avoir au moins 2 ans.");
            return false;
        }
    }

    var chambre = document.forms["formulaire"]["chambre"].value;
    var prix_adult = 1000;
    var prix_enfant = 500;
    var prix_chambre = 2000;

    var total = (adult * prix_adult) + (enfant * prix_enfant) + (chambre * prix_chambre);
    alert("Le montant total est de " + total + " euros.");
    }
}