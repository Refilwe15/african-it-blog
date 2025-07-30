document.getElementById("btn").addEventListener("click", function () {
  const selected = document.querySelector('input[name="rate"]:checked');

  if (!selected) {
    alert("Select at least one option.");
  } else {
    const value = selected.value;

    if (value === "Bad" || value === "Good") {
      const feedback = prompt("What can we improve?");
      if (feedback) {
        alert("Thank you for your feedback:\n" + feedback);
      } else {
        alert("Feedback skipped.");
      }
    } else {
      alert("You selected: " + value);
    }
  }
});
