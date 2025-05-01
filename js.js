var lieu = document.getElementById("lieu");
console.log(lieu);
var date_debut = document.getElementById("date_debut");
var date_fin = document.getElementById("date_fin");
 if (date_debut.value> date_fin.value) {
    alert("La date de début doit être inférieure à la date de fin."); {
        set_element_value(date_debut, "date_debut", date_fin.value);
    }
}
