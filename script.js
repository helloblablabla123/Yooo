async function loadLeaderboard() {
    const container = document.getElementById("leaderboard");
    container.innerHTML = "Loading...";

    try {
        const response = await fetch("http://localhost:3000/leaderboard");
        const data = await response.json();

        container.innerHTML = "";
        data.forEach((player, index) => {
            const div = document.createElement("div");
            div.classList.add("player");
            div.innerHTML = `<span>#${index + 1} ${player.name}</span><span>${player.trophies} 🏆</span>`;
            container.appendChild(div);
        });

    } catch (err) {
        container.innerHTML = "Failed to load leaderboard.";
        console.error(err);
    }
}

loadLeaderboard();
