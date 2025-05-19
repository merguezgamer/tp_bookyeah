
// Fonction pour valider le formulaire
function validation() {
    let destination = document.forms["formulaire"]["destination"].value;
    let date_depart = document.forms["formulaire"]["date_depart"].value;
    let date_retour = document.forms["formulaire"]["date_retour"].value;
    let adult = document.forms["formulaire"]["adult"].value;
    let enfant = document.forms["formulaire"]["enfant"].value;
    let chambre = document.forms["formulaire"]["chambre"].value;
    // Vérification des champs vides
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
    // Vérification des champs date 
    if (date_depart > date_retour && date_depart != "" && date_retour != "") {
        alert("La date de départ ne peut pas être supérieure à la date de retour.");
        return false;
    }

    if (date_depart == date_retour && date_depart != "") {
        alert("le voyage ne peut pas etre inférieur a 1 jour.");
        return false;
    }
    // Vérification des champs nombre d'adultes, enfants et chambres
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
// Fonction pour pour ajouter ou retirer des adultes
document.addEventListener("DOMContentLoaded", function() {
    // Gestionnaire pour le bouton "+" pour les adultes
    document.getElementById("adult_plus").addEventListener("click", function() {
        var adultInput = document.getElementById("adult");
        adultInput.value = parseInt(adultInput.value) + 1;
    });

    // Gestionnaire pour le bouton "-" pour les adultes
    document.getElementById("adult_moin").addEventListener("click", function() {
        var adultInput = document.getElementById("adult");
        if (parseInt(adultInput.value) > 0) {
            adultInput.value = parseInt(adultInput.value) - 1;
        }
    });

    // fonction pour ajouter ou retirer des enfants en inserant du code html dans une div vide 
    document.getElementById("enfant_plus").addEventListener("click", function() {
        var enfantInput = document.getElementById("enfant");
        enfantInput.value = parseInt(enfantInput.value) + 1;
            const h2 = document.getElementById("div_enfant");
            let html = `<div id='enfant_retirer'><br>
                        <label for='enfant_age'>enfant(2 à 17ans)</label>
                        <input class='form-control' type='number' placeholder='entrer age entre 2 et 17ans'id='enfant_age' max='17' min='2'>
                        </input></div>`;
            h2.insertAdjacentHTML("afterend", html);
    });

    // fonction pour retirer un enfant en supprimant le code html de la div
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
    let destination = document.forms["formulaire"]["destination"].value;
    let date_depart = document.forms["formulaire"]["date_depart"].value;
    let date_retour = document.forms["formulaire"]["date_retour"].value;
    let adult = document.forms["formulaire"]["adult"].value;
    let enfant = document.forms["formulaire"]["enfant"].value;
    let chambre = document.forms["formulaire"]["chambre"].value;
    if (enfant > 0) {
        var age = document.forms["formulaire"]["enfant_age"].value;
    }
    if (validation() == true ){
    // Calculer le montant total;

    var prix_adult = 1000;
    var prix_enfant = 500;
    var prix_chambre = 2000;
    var travail =document.forms["formulaire"]["travail"].value;
    console.log(travail);
        if (travail == 'oui') {
            var prix_adult = 800;
            var prix_enfant = 400;
            var prix_chambre = 1500;
        }
        else {
            var travail = "Non";
        }
    // Calculer le montant total
    var total = (adult * prix_adult) + (enfant * prix_enfant) + (chambre * prix_chambre);
   
    const tableBody = document.querySelector("#reservationTable tbody");
    tableBody.innerHTML = `
        <tr>
            <td>Destination</td>
            <td>${destination}</td>
        </tr>
        <tr>
            <td>Date de départ</td>
            <td>${date_depart}</td>
        </tr>
        <tr>
            <td>Date de retour</td>
            <td>${date_retour}</td>
        </tr>
        <tr>
            <td>Nombre d'adultes</td>
            <td>${adult}</td>
        </tr>
        <tr>
            <td>Nombre d'enfants</td>
            <td>${enfant}</td>
        </tr>
        <tr>
            <td>Nombre de chambres</td>
            <td>${chambre}</td>
        </tr>
        <tr>
            <td>travail</td>
            <td>${travail}</td>
        </tr>
        <tr>
            <td>Montant total</td>
            <td>${total} €</td>
        </tr>
    `;
    }
}

function reload() {
    location.reload();
}