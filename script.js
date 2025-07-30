
 
//This function checks if the radio button is selected ,if its not selected the alert will be triggered
document.getElementById("btn").addEventListener("click", function() {
    const selected = document.querySelector('input[name="rate"]:checked');
    if (!selected) {
      alert("Select at least one option.");

    } 
  });