document.getElementById("generateBtn").addEventListener("click", generateEmail);

async function generateEmail() {
  const purpose = document.getElementById("purpose").value.trim();
  const recipient_name = document.getElementById("name").value.trim();
  const tone = document.getElementById("tone").value.trim();

  if (!purpose || !recipient_name || !tone) {
    alert("Please fill all fields");
    return;
  }

  const response = await fetch("/api/email/generate", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      purpose,
      recipient_name,
      tone
    })
  });

  const data = await response.json();

  document.getElementById("result").innerText =
    data.email + "\n\nAI Response Time: " + data.ai_response_time_ms + " ms";
}
