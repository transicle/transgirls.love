document.querySelectorAll('.project-card[data-repo]').forEach(async (card) => {
    const repo = card.dataset.repo;
    try {
        const res = await fetch(`https://api.github.com/repos/${repo}`);
        if (!res.ok) return;
        const data = await res.json();
        const stats = card.querySelector('.project-stats');
        if (stats) {
            stats.innerHTML = `<span>\u2605 ${data.stargazers_count}</span><span>\u22d4 ${data.forks_count}</span>`;
        }
    } catch {
    }
});
