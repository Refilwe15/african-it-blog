
 

document.getElementById("btn").addEventListener("click", function() {
  const selected = document.querySelector('input[name="rate"]:checked');
  if (!selected) {
    alert("Select at least one option.");
  } else {
    
    alert("You selected: " + selected.value);
  }
});