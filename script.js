function checkCode() {
  const correctCode = "53841"; // Your secret agent code
  const input = document.getElementById("codeInput").value;
  const message = document.getElementById("message");

  if (input === correctCode) {
    window.location.href = "mission.html";
  } else {
    message.textContent = "❌ Incorrect code. Try again, Agent.";
  }
}
