// so fängt es oft an:
function begruessung() {
    // 1 wert aus dem eingabefeld holen
    let name = document.getElementById("nameInput").value;
// Speichert den Namen im Browser-Speicher
    localStorage.setItem("user_name", name);
 // 2. text mit dr id schreiben
    document.getElementById("greeting").textContent = "helloo " + name + "!!!!"; 
}

function myFunction() {
        alert("button was clicked!!!!1111!!!!!11");
      }

function kys() {
    alert("loading request....");
}
