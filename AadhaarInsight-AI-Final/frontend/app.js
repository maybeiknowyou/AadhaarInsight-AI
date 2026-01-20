const API_URL = "https://aadhaarinsight-ai.onrender.com";

document.addEventListener("DOMContentLoaded", () => {
  const btn = document.getElementById("checkBackend");
  const output = document.getElementById("output");

  if (!btn) return;

  btn.addEventListener("click", async () => {
    output.innerText = "Checking backend...";

    try {
      const res = await fetch(API_URL);
      const data = await res.json();
      output.innerText = data.status;
    } catch (err) {
      output.innerText = "Backend not reachable";
    }
  });
});
