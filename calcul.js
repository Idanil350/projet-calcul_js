echo 'console.log("Fichier JavaScript pour les calculs de base");' > calcul.js

echo 'function addition(a, b) {
    return a + b;
}
document.getElementById("addition").onclick = function() {
    var a = parseFloat(document.getElementById("a").value);
    var b = parseFloat(document.getElementById("b").value);
    document.getElementById("resultat").innerHTML = "Résultat: " + addition(a, b);
};' > calcul.js

echo 'function soustraction(a, b) {
    return a - b;
}
document.getElementById("soustraction").onclick = function() {
    var a = parseFloat(document.getElementById("a").value);
    var b = parseFloat(document.getElementById("b").value);
    document.getElementById("resultat").innerHTML = "Résultat: " + soustraction(a, b);
};' >> calcul.js


echo 'function multiplication(a, b) {
    return a * b;
}
document.getElementById("multiplication").onclick = function() {
    var a = parseFloat(document.getElementById("a").value);
    var b = parseFloat(document.getElementById("b").value);
    document.getElementById("resultat").innerHTML = "Résultat: " + multiplication(a, b);
};' >> calcul.js
