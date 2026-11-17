/* ---------- Menu lateral ---------- */
function openNav() {
    document.getElementById("sidebar").style.width = "250px";
    const main = document.getElementById("main");
    if (main) main.style.marginLeft = "250px";
}

function closeNav() {
    document.getElementById("sidebar").style.width = "0";
    const main = document.getElementById("main");
    if (main) main.style.marginLeft = "0";
}

/* ---------- Projetos ---------- */
const projetos = [
    {
        titulo: "Periastron Fight",
        funcao: "Programador, Designer e Desenvolvedor de jogos Principal",
        periodo: "Fevereiro de 2026 a Dezembro de 2026",
        imagem: "/imagens/peri.png",
        descricao: [
            "Periastron Fight é um jogo, que desenvolvi no Roblox, de luta com espadas utilizando um combate complexo e espadas super poderosas.",
            "Esse é um projeto solo onde eu fiz todas as etapas de desenvolvimento do jogo, desde o design e o planejamento até a implementação final e o marketing."
        ]
    },
    {
        titulo: "Reactor Rush",
        funcao: "Designer Gráfico e Designer de Som",
        periodo: "Fevereiro de 2026 a Dezembro de 2026",
        imagem: "/imagens/reactorrush.png",
        descricao: [
            "Reactor Rush é o jogo produzido como parte da matéria de Projeto de Desenvolvimento de Jogos no último ano do curso técnico integrado no IFPR.",
            "Foi produzido em equipe, e parte de minhas responsabilidades focaram na interface do jogo, na música e nos sons."
        ]
    },
    {
        titulo: "Projeto: TEMPO",
        funcao: "Programador e Designer de Nível",
        periodo: "Agosto de 2025 a Outubro de 2025",
        imagem: "/imagens/projeto_tempo_2.png",
        descricao: [
            "Projeto: TEMPO é um jogo feito em trio para a disciplina de Programação de Jogos 3D no curso técnico integrado no IFPR.",
            "Cuidei de parte da implementação das mecânicas básicas em código e principalmente do design de nível do jogo."
        ]
    },
    {
        titulo: "Lost in Danger",
        funcao: "Programador",
        periodo: "Março de 2024 a Janeiro de 2025",
        imagem: "/imagens/lostindanger.png",
        descricao: [
            "Jogo baseado em Terraria desenvolvido no IFPR onde você está perdido em um planeta hostil e tem que sobreviver e buscar recursos para construir um foguete e escapar.",
        ]
    },
    {
        titulo: "Modelagem",
        funcao: "Modelador",
        periodo: "2024",
        imagem: "/imagens/casa.png",
        descricao: [
            "Modelo feito baseado em uma foto para a matéria de Design de Jogos"
        ]
    },
    {
        titulo: "Personagem 2D",
        funcao: "Designer",
        periodo: "2024",
        imagem: "/imagens/pedra.png",
        descricao: [
            "Personagem vetorial em 2D feito para a matéria de design de jogos. O personagem tinha de ser desenvolvido com base em uma imagem de um objeto físico, assim foi esse personagem feito, baseado em uma garrafa de produto de limpeza."
        ]
    },
    {
        titulo: "Atari Fishing Derpy",
        funcao: "Programador",
        periodo: "2026",
        imagem: "/imagens/fishing.png",
        descricao: [
            "Recriação web fiél da versão de Atari do jogo Fishing Derpy. Desenvolvido em duas pessoas"
        ],
        link: "https://teiorobardo.github.io/WebFishingDerby/"
    }
];

const trilho = document.getElementById("carrossel-trilho");
const modal = document.getElementById("modal-projeto");

projetos.forEach((p) => {
    const card = document.createElement("button");
    card.className = "projeto-card";
    card.type = "button";
    card.setAttribute("aria-label", `Ver detalhes de ${p.titulo}`);

    const img = document.createElement("img");
    img.src = p.imagem;
    img.alt = p.titulo;
    img.loading = "lazy";

    const titulo = document.createElement("span");
    titulo.className = "card-titulo";
    titulo.textContent = p.titulo;

    card.append(img, titulo);
    card.addEventListener("click", () => abrirModal(p));
    if(p.link){
        card.addEventListener("click", () => redirecionar(p.link));
    }
    trilho.appendChild(card);
});

function abrirModal(p) {
    document.getElementById("modal-img").src = p.imagem;
    document.getElementById("modal-img").alt = p.titulo;
    document.getElementById("modal-titulo").textContent = p.titulo;
    document.getElementById("modal-funcao").textContent = p.funcao;
    document.getElementById("modal-periodo").textContent = p.periodo;

    const desc = document.getElementById("modal-descricao");
    desc.replaceChildren(...p.descricao.map((texto) => {
        const par = document.createElement("p");
        par.textContent = texto;
        return par;
    }));

    modal.showModal();
    document.body.style.overflow = "hidden";
}

function fecharModal() {
    modal.close();
}

function redirecionar(l){
    window.open(l);
}

modal.addEventListener("close", () => {
    document.body.style.overflow = "";
});

document.getElementById("modal-fechar").addEventListener("click", fecharModal);

// Fecha ao clicar fora do pop-up (no fundo escurecido)
modal.addEventListener("click", (e) => {
    if (e.target === modal) fecharModal();
});

/* Setas do carrossel */
function passo() {
    const card = trilho.querySelector(".projeto-card");
    return card ? card.offsetWidth + 16 : 300;
}

document.getElementById("carrossel-prev").addEventListener("click", () => {
    trilho.scrollBy({ left: -passo() });
});

document.getElementById("carrossel-next").addEventListener("click", () => {
    trilho.scrollBy({ left: passo() });
});