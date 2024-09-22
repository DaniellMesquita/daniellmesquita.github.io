// Arrays of random HTML phrases for different categories
const textCollections = {
    curiosities: [
        "I have an underspoken addiction: updates.<br/>This gives me a lot of pleasure to update my phone (Play Store, Samsung Store, F-Droid, Android itself) and my computer (Windows Update, apt get)",
        "I love <a href='https://www.instagram.com/p/CuSQ-t-urM4/' target='_blank'>crystals</a> and gems.<br/>One of the things I love about the Pokémon Terapagos is the Terastal effect, which is about colored crystals shining and bringing effects/powers/blesses!",
        "Em 2011, meu apelido era 'come-mosca': porque eu passava o recreio na frente das lixeiras recicláveis, literalmente me sentindo lixo",
        "Em 2005, meu apelido era 'troca-letras': porque eu falava 'alaçá' invés de 'araçá' e 'zonatan' invés de 'jonatan'",
        "Frequente que eu misturo a Língua Portuguesa com a Inglesa, como se ambas fizessem parte de um único idioma nativo pra mim",
        "Época do ano favorita: Natal (pelas reuniões, pelo clima, pelas festas, pela comida, pelas luzes, pelas músicas de harpa humildes simples e alegres). Pra mim o verdadeiro Natal é dia 24 (sera que so brasileires q sao assim?), dia 25 sendo só uma sobra das festas do dia anterior",
        "Meu gosto pelo sono é um paradoxo: quando estou em uma época triste, não vejo a hora de ir dormir; e quando estou em época feliz, não gosto de dormir pq é a sensação como se eu fosse ir deixar de existir mesmo que por umas horas",
        "Prefiro calor do que frio, aliás detesto frio, é como se a energia dos meus átomos sumisse",
        "Since 2010, I love to draw 'Pokémons' and <a href='https://www.instagram.com/idanimesq/p/C1yalHTO78P/' target='_blank'>never stopped</a> since then",
        "Sou virgem (escrevi isso em 21/09/2024, e acho que vai valer pra 2025) - eu não tô me referindo à signo tá kkkkk eu tb sou BVL (perdi meu BV lá por 2004, eu tinha 7 anos e a maiara tinha 9 - mas o BVL nunca aconteceu)",
        "Nunca fumei, nem ao menos cigarro (e não pretendo pq amo meus plumão e quero viver tanto quanto um <a href='https://www.pokemon.com/br/pokedex/terapagos' target='_blank'>Terapagos</a>). Sim, todas as 💩 q já fiz fui eu mesma"
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
        "Dormir com som de grilos, ventilador ou de chuva🥰",
        "Som de grilos e de cigarras",
        "A <a href='https://www.instagram.com/idanimesq/p/C-8yrFSus20/' target='_blank'>cor rosa</a>, me faz lembrar doces",
        "Ter coisinhas <a href='https://www.instagram.com/idanimesq/p/C595KeUuxXt/' target='_blank'>fofas, infantis</a> e que <a href='https://www.instagram.com/idanimesq/p/C_v-Bo5Sq7s/' target='_blank'>tenham animaizinhos</a>",
        "Taking a bath in the dark 💦😴🌙",
        "Saber que tem Climene e Ciproterona guardadinho na minha bolsa",
        "Brisa e calor de cidade litorânea (te amo Itajaí - te detestava em 2015, te amo Matinhos)",
        "Saber que tem salgadinho no armário, como Fandangos e Cheetos"
    ],
    happenings: [
        "Em 2017, de tanto viajar entre Curitiba e Itajaí/Blumenau (subindo e descendo serra, ficando com falta de ar e formigamento), hoje em dia sinto dificuldade de saber de qual direção um som mais ou menos distante vem",
        "Às vezes tenho uns resets, do tipo: 2022 voltei a precisar comer muitos doces igual em 2016 pra baixo; 2022 voltei à desenhar muitos 'Pokémons'/Tamiguchos/Phonemons lindos igual em 2013; 2023+2024 voltei à ter muitas, mas muitas ideias pro Peepz/Peeper e pra Plasmmer igual em 2013-2014",
        "2018 em diante nunca mais me veio choro mesmo eu estando em situação de chorar, chorando só por dentro; em 2024 isso mudou, e eu agradeço à minha TH por agr eu poder voltar à desabafar/desintoxicar o psicológico/organismo🎁",
        "Última vez quue eu me apaixonei foi em 2018"
    ],
    food: [
        "Não gosto de pão com banana, gosto de banana só pura ; Não gosto de misturar alimentos, por exemplo miojo com carne",
        "Prefiro feijão carioca do que os outros, mas prefiro feijão vermelho do que o carioca",
        "Adoro alimentos suculentos e de sabor suave (como a pitaya)",
        "Minha parte favorita da melância: a verde",
        "Amo sorvete (minha sobremesa favorita), <a href='https://www.instagram.com/idanimesq/p/C-7yOxruu9z/' target='_blank'>meus favoritos sendo os verdes</a>: menta, abacate, <a href='https://www.instagram.com/idanimesq/p/C--vrEsu-1g' target='_blank'>pistache</a> (até mesmo <a href='https://www.instagram.com/idanimesq/p/C-7yOxruu9z/' target='_blank'>meu pote de sorvete, comprado em 2021</a>, também é verde💚",
        "Meus salgados favoritos: lasanha, hotdog, x-egg-dog, <a href='https://www.instagram.com/idanimesq/p/C-9FqF_OiY-/?img_index=2' target='_blank'>pastel de camarão</a> com catupiry ou de pizza, <a href='https://www.instagram.com/idanimesq/p/C_E6KEzuWCK/' target='_blank'>pizza</a>, shawarma, enroladinho de salsicha, hamburgão, risóles, <a href='https://www.instagram.com/idanimesq/p/C_FEGweOQk_/' target='_blank'>coxinha</a>, misto quente, pão de queijo",
        "Eu não como bolacha ou outra <a href='https://www.instagram.com/idanimesq/p/C-9Ijaousah/' target='_blank'>guloseima durinha sem for com alguma bebida cremosa</a>, como leite (também nescau, nesquik) ou leite de amêndoas por exemplo. Gosto de mastigar junto com o líquido.<br/>Acho que porque me acostumei assim, me criei assim.",
        "Adoro <a href='https://www.instagram.com/idanimesq/p/C598XihucsP/' target='_blank'>gelatina</a>, e <a href='https://www.instagram.com/idanimesq/p/C597D5Su12X/' target='_blank'>sagu</a>",
        "Sei fazer <a href='https://www.instagram.com/idanimesq/p/C2wkt85OcDD/' target='_blank'>limonada suíssa</a>, e mt <a href='https://www.instagram.com/idanimesq/p/C3B_Vj4ukiO/' target='_blank'>das boas</a> 😛",
        "Objetivo: SER VEGANA 🌿; Obstáculo: <a href='https://www.instagram.com/idanimesq/p/C-9FqF_OiY-/' target='_blank'>FRUTOS DO MAR</a> 😋🍤🦐🦀🐟😍",
        "Não entendo essa diferença entre 'comida de adulto' e 'comida de criança'. Em 2021 até 2022, quando eu ainda tinha dinheiro, eu não perdia a oportunidade de comprar muitas papinhas NaturNes e comer assim que eu acordava como lanche. Também adoro Mucilon de milho 😋 e nunca deixei de comer Kinder Ovo",
        "Meu sushi favorito é o de salmão. Adoro tilápia crua (sabor suave e suculento) e tb casquinha de siri!",
        "Meu achocolatado favorito não podia ser menos nostálgico: o Xocopinho",
        "Sou formiga pra doces, filha de um diabético profissional (mas eu me cuido, o tanto que não meço minhas palavras eu meço minha glicose oaksaoskoaksoa",
        "Quando como algo gostoso, eu como bem devagarinho, pra sentir cada 'nota musical' do sabor haha",
        "Já comi ração de peixe (em floquinhos - tipo aquelas da Alcon pra guppies) na infância, e isso me deixou com nojo de comer fígado (porque achei o gosto igual)",
        "Tenho alergia à mexilhão: é eu comer, eu boto pra fora (e isso já aconteceu umas 3 vezes, q foi todas as vezes q comi)",
        "Não gosto de strogonoff",
        "Nunca comi marisco nem caviar, e olha que fui milionária por qse 2 anos",
        "Nunca comi pasta de dente Tandy, meus pais falaram só uma vez que aquilo era veneno e eu me tremi",
        "Um dos meus snacks favoritos é Salamitos, pena que hj em dia meus dentes - e meu bolso - não dão conta mais (um dia quero por dentista em dia) - sim, me tornar vegana vai ser difícil (impossível pq frutos do mar existem) ; posso muito bem um dia trocar por outro dos meus snacks que mais gosto, como amendoim torrado",
        "Não posso tomar cerveja que tenha álcool, senão meu coração dispara (que bom né, eu já sou doidinha, de coerência aleatória e esquisita **sóbria**)",
        "Adoro nuggets e steak de peixe (e de frango, mas prefiro o de peixe), pena que pra saúde deve ser horrível",
        "Adoro macarrão alho e óleo (sem arroz); e carne moída pura (ou atum sólido puro) com arroz",
        "Pamonha: prefiro a salgada do que a doce (derivado de milho doce pra mim, só se for bolo e curau)",
        "Sou louca por churros, <a href='https://www.tudogostoso.com.br/receita/101053-bomba-de-chocolate-facil-e-deliciosa.html' target='_blank'>bomba</a>, carolina e orelha de gato (no Paraná levaram pro lado da grosseria, chamam de 'cueca-virada')",
        "Tapioca salgada? Vade-retro! Tapioca doce? Adooooro, ainda mais se tiver um crepe de chocolate pra acompanhar!",
        "Amo queijo de fungos (chamam de blue cheese), gosto de comer com colher pequena tiquinho por tiquinho (até pq comer igual formiguinha tb me dá sensação de saciedade que termina em economiaaa)",
        "Prefiro chocolate Amaro, de preferência 70%, pois além de saber que estou comendo algo puro, não machuca meus dentes com aquela sensação de cáries surtando fazendo vandalismo tacando furadeira na parede dos meus dentes",
        "Se tem um marketing que me pega na teia🎯 é dizer que algum doce/café/shake tem pistache💚",
        "Morei em Cascavel PR, Curitiba, Itajaí, Matinhos, Blumenau, São Paulo: mas nunca vi cidade pra saber tanto fazer comida boa (na vdd divina) quanto Cascavel 🥹🎉",
        "Tenho um karma com carne suína: quando como morcella fico com enjôo, e quando como torresmo me afogo (espero um dia criar forças e contar quantos dias tive dinheiro/oportunidade pra comer mas preferi ficar sem)",
        "Não é brincadeira que defino meu DNA como ~75% Catarinense: amo pirão (farinha molhada com linguiça blumenau/calabresa)",
        "Churrasco: amo costela (mas um dia quero me desapegar totalmente de carne vermelha), é minha carne favorita além de coração de frango e linguiça",
        "Um doce que faz eu perder o controle de quantos comi, é paçoca",
        "Não gosto muito de pipoca doce",
        "Amo aqueles amendoins doce rosa de Páscoa, e tudo que é doce que deriva de amendoim",
        "Melhor ovo de Páscoa que já comi até hoje, foi em 2022: de KitKat",
        "Se tem algo em uma cozinha que me aterroriza é Wasabi, pq em 2017 num shopping de Blumenau eu taquei no meu prato sem saber o que era e tive um faniquito quando comi tive que correr assoar foi o caos rebosteio dos plumão, entao eu nunca mais quis saber mesmo sabendo que dessa vez da forma certa/moderada a experiência poderia ser diferente",
        "Meus miojos favoritos são: galinha caipira, seafood e de pimenta (não gosto de miojo com carne nem com ovo, o único miojo misturado que aprendi a gostar é o CupNoodles Seafood)",
        "Adoro ovo com a gema vermelhinha cremosinha quase líquida"
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

