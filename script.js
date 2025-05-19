
function verif(event) 
{
  var title1, title2;
  title1 = document.querySelector("#title1").value;
  title2 = document.querySelector("#title2").value;

  if(title1 === "" || title2 === "") 
  {
    alert("Veuillez remplir les champs.");
    event.preventDefault();
    window.location.href = "toto.html";
  }
  else
  {
    console.log("Nom:", title1, "| Email:", title2);
    localStorage.setItem("Nom", title1);
    localStorage.setItem("EMAIL", title2);
  }
}


