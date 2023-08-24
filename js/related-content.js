function createCards() {
    if (portfolioTarget) {
        shuffleArray(content);
        for (let i = 0; i < content.length; i++) {
            const template = `
                <div class="card">
                    <img src="${content[i].img}" alt="${content[i].title}">
                    <h5>
                        ${content[i].title}
                    </h5>
                    <p>
                        ${content[i].body}
                    </p>
                    <a href="${content[i].url}" class="btn ghost">
                        Lees meer
                    </a>
                </div>
            `;
            portfolioTarget.insertAdjacentHTML("beforeend", template);
        };
    }
};

$(document).ready(createCards);