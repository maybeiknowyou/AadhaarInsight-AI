const API_URL = "https://aadhaarinsight-ai.onrender.com";

document.getElementById("checkBackend").onclick = async () => {
  const output = document.getElementById("output");
  output.innerText = "Checking...";

  try {
    const res = await fetch(API_URL);
    const data = await res.json();
    output.innerText = data.status;
  } catch (e) {
    output.innerText = "Backend not reachable";
  }
};
