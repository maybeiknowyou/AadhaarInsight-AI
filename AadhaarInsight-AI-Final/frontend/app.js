const API_URL = "https://aadhaarinsight-ai.onrender.com";

document.getElementById("checkBackend").onclick = async () => {
  const output = document.getElementById("output");
  output.innerText = "Checking backend service...";

  try {
    const response = await fetch(API_URL);
    const data = await response.json();
    output.innerText = "SUCCESS: " + data.status;
  } catch (error) {
    output.innerText = "ERROR: Backend service not reachable";
  }
};
