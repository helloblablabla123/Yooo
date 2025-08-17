async function loadPlayer() {
  const playerDiv = document.getElementById("playerInfo");

  try {
    const res = await fetch("/player");
    const data = await res.json();

    if (data.error || data.reason) {
      playerDiv.textContent = "⚠️ Error loading data.";
      return;
    }

    playerDiv.innerHTML = `
      <h2>${data.name || "N/A"} (${data.tag || "N/A"})</h2>
      <div class="stat">Trophies: ${data.trophies ?? "N/A"}</div>
      <div class="stat">Highest Trophies: ${data.highestTrophies ?? "N/A"}</div>
      <div class="stat">Exp Level: ${data.expLevel ?? "N/A"}</div>
      <div class="stat">Club: ${data.club ? data.club.name : "None"}</div>
    `;
  } catch {
    playerDiv.textContent = "⚠️ Error loading data.";
  }
}

loadPlayer();
setInterval(loadPlayer, 30000);
