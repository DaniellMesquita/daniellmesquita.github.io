// Arrays of random HTML phrases for different categories
const textCollections = {
    curiosities: [
        "I have an underspoken addiction: updates.<br/>This gives me a lot of pleasure to update my phone (Play Store, Samsung Store, F-Droid, Android itself) and my computer (Windows Update, apt get)",
        "I love <a href='https://www.instagram.com/p/CuSQ-t-urM4/' target='_blank'>crystals</a> and gems.<br/>One of the things I love about the Pokémon Terapagos is the Terastal effect, which is about colored crystals shining and bringing effects/powers/blesses!",
        "Em 2011, meu apelido era 'come-mosca': porque eu passava o recreio na frente das lixeiras recicláveis, literalmente me sentindo lixo",
        "Em 2005, meu apelido era 'troca-letras': porque eu falava 'alaçá' invés de 'araçá' e 'zonatan' invés de 'jonatan'",
        "Frequente que eu misturo a Língua Portuguesa com a Inglesa, como se ambas fizessem parte de um único idioma nativo pra mim",
        "Época do ano favorita: Natal (pelas reuniões, pelo clima, pelas festas, pela comida, pelas luzes, pelas músicas de harpa humildes simples e alegres). Pra mim o verdadeiro Natal é dia 24, dia 25 sendo só uma sobra das festas do dia anterior",
        "I always smile without opening the mouth, and I have **reasons** for that lol (someday I'll handle that)",
        "Meu gosto pelo sono é um paradoxo: quando estou em uma época triste, não vejo a hora de ir dormir; e quando estou em época feliz, não gosto de dormir pq é a sensação como se eu fosse ir deixar de existir mesmo que por umas horas",
        "Prefiro calor do que frio, aliás detesto frio, é como se a energia dos meus átomos sumisse",
        "Since 2010, I love to draw 'Pokémons' and <a href='https://www.instagram.com/idanimesq/p/C1yalHTO78P/' target='_blank'>never stopped</a> since then"
    ],
    habits: [
        "Andar pra lá e pra cá enquanto imagino momentos felizes que nunca irão acontecer, e também ideias para projetos de artísticos à tecnológicos",
        "Roer as unhas: com as próprias unhas, e os cantinhos envolta das laterais das unhas",
        "Arranhar - com as pontas dos dedos - tecido, como a parte debaixo da minha blusa",
        "Esfregar os dedos em unha pintada"
    ],
    comfy: [
        "Saber que tem doce ou outros snacks me esperando no armário <a href='https://www.instagram.com/idanimesq/p/C_Goy7qyt0f/' target='_blank'>ou em uma bolsa/sacola</a> - em bolsa é ainda mais comfy🥰",
        "Assistir Pokémon, principalmente o Horizons",
        "Escovar meus cabelos com os próprios dedos💆🏻‍♀️🌷͙֒",
        "Torre de papéis higiênicos no chão do banheiro",
        "Saber que tem caneta e tem papel de montao, mas hj nao utilizo mais tanto quanto na adolescencia e infancia (2021 e 2022 reviveu isso e nao sei explicar como que tive esse reset)",
        "Temperatura igual ou acima de 28/30C até de noite/madrugada (claro que tem limite né, não vou querer 40C, mas amo 35C - menos quem tá causando esses aumentos de temperatura e 4 estações no mesmo dia)",
        "Dormir com som de ventilador ou de chuva🥰",
        "A <a href='https://www.instagram.com/idanimesq/p/C-8yrFSus20/' target='_blank'>cor rosa</a>, me faz lembrar doces",
        "Ter coisinhas <a href='https://www.instagram.com/idanimesq/p/C595KeUuxXt/' target='_blank'>fofas, infantis</a> e que <a href='https://www.instagram.com/idanimesq/p/C_v-Bo5Sq7s/' target='_blank'>tenham animaizinhos</a>",
        "Taking a bath in the dark 💦😴🌙"
    ],
    happenings: [
        "Em 2017, de tanto viajar entre Curitiba e Itajaí/Blumenau (subindo e descendo serra, ficando com falta de ar e formigamento), hoje em dia sinto dificuldade de saber de qual direção um som mais ou menos distante vem",
        "Às vezes tenho uns resets, do tipo: 2022 voltei a precisar comer muitos doces igual em 2016 pra baixo; 2022 voltei à desenhar muitos 'Pokémons'/Tamiguchos/Phonemons lindos igual em 2013; 2023+2024 voltei à ter muitas, mas muitas ideias pro Peepz/Peeper e pra Plasmmer igual em 2013-2014"
    ],
    food: [
        "Não gosto de pão com banana, gosto de banana só pura ; Não gosto de misturar alimentos, por exemplo miojo com carne",
        "Prefiro feijão carioca do que os outros, mas prefiro feijão vermelho do que o carioca",
        "Adoro alimentos suculentos e de sabor suave (como a pitaya)",
        "Minha parte favorita da melância: a verde",
        "Amo sorvete (minha sobremesa favorita), <a href='https://www.instagram.com/idanimesq/p/C-7yOxruu9z/' target='_blank'>meus favoritos sendo os verdes</a>: menta, abacate, <a href='https://www.instagram.com/idanimesq/p/C--vrEsu-1g' target='_blank'>pistache</a> (até mesmo <a href='https://www.instagram.com/idanimesq/p/C-7yOxruu9z/' target='_blank'>meu pote de sorvete, comprado em 2021</a>, também é verde💚",
        "Meus salgados favoritos: lasanha, hotdog, x-egg-dog, <a href='https://www.instagram.com/idanimesq/p/C-9FqF_OiY-/?img_index=2' target='_blank'>pastel de camarão</a> com catupiry, <a href='https://www.instagram.com/idanimesq/p/C_E6KEzuWCK/' target='_blank'>pizza</a>, risóles, <a href='https://www.instagram.com/idanimesq/p/C_FEGweOQk_/' target='_blank'>coxinha</a>",
        "Eu não como bolacha ou outra <a href='https://www.instagram.com/idanimesq/p/C-9Ijaousah/' target='_blank'>guloseima durinha sem for com alguma bebida cremosa</a>, como leite (também nescau, nesquik) ou leite de amêndoas por exemplo. Gosto de mastigar junto com o líquido.<br/>Acho que porque me acostumei assim, me criei assim.",
        "Adoro <a href='https://www.instagram.com/idanimesq/p/C598XihucsP/' target='_blank'>gelatina</a>, e <a href='https://www.instagram.com/idanimesq/p/C597D5Su12X/' target='_blank'>sagu</a>",
        "Sei fazer <a href='https://www.instagram.com/idanimesq/p/C2wkt85OcDD/' target='_blank'>limonada suíssa</a>, e mt <a href='https://www.instagram.com/idanimesq/p/C3B_Vj4ukiO/' target='_blank'>das boas</a> 😛",
        "Objetivo: SER VEGANA 🌿; Obstáculo: <a href='https://www.instagram.com/idanimesq/p/C-9FqF_OiY-/' target='_blank'>FRUTOS DO MAR</a> 😋🍤🦐🦀🐟😍"
    ]
};

// Function to pick and display random text for a specific category
function pickRandomText(category) {
    console.log(`Function 'pickRandomText' called for category: ${category}`);

    const randomIndex = Math.floor(Math.random() * textCollections[category].length);
    const randomTextElement = document.getElementById(`random${capitalize(category)}`);

    if (randomTextElement) {
        console.log(`Random text element found for category: ${category}`);
        randomTextElement.innerHTML = textCollections[category][randomIndex];
    } else {
        console.error(`Random text element not found for category: ${category}`);
    }
}

// Function to show all texts for a specific category
function showAllTexts(category) {
    console.log(`Function 'showAllTexts' called for category: ${category}`);

    const allTextsBox = document.getElementById(`allTextsBox${capitalize(category)}`);
    if (allTextsBox) {
        allTextsBox.innerHTML = ""; // Clear the box first
        textCollections[category].forEach((text) => {
            const paragraph = document.createElement("p");
            paragraph.innerHTML = text;
            allTextsBox.appendChild(paragraph);
        });
    } else {
        console.error(`All texts box not found for category: ${category}`);
    }
}

// Utility function to capitalize the first letter
function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

// Attach event listeners dynamically
function attachListeners(category) {
    const reloadButton = document.getElementById(`reloadButton${capitalize(category)}`);
    const showAllButton = document.getElementById(`showAllButton${capitalize(category)}`);

    if (reloadButton) {
        reloadButton.addEventListener("click", () => {
            console.log(`Reload button clicked for category: ${category}`);
            pickRandomText(category);
        });
    } else {
        console.error(`Reload button not found for category: ${category}`);
    }

    if (showAllButton) {
        showAllButton.addEventListener("click", () => {
            console.log(`Show all button clicked for category: ${category}`);
            showAllTexts(category);
        });
    } else {
        console.error(`Show all button not found for category: ${category}`);
    }
}

// Initialize the script on page load
window.onload = () => {
    console.log("Window loaded, initializing categories.");
    ["curiosities", "habits", "comfy", "happenings", "food"].forEach((category) => {
        pickRandomText(category); // Display random text on load
        attachListeners(category); // Attach button event listeners
    });
};

