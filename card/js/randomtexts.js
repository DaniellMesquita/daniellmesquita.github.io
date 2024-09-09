// Arrays of random HTML phrases for different categories
const textCollections = {
    curiosities: [
        "I have an underspoken addiction: updates.<br/>This gives me a lot of pleasure to update my phone (Play Store, Samsung Store, F-Droid, Android itself) and my computer (Windows Update, apt get)",
        "I love crystals and gems.<br/>One of the things I love about the Pokémon Terapagos is the Terastal effect, which is about colored crystals shining and bringing effects/powers/blesses!",
        "Em 2011, meu apelido era 'come-mosca': porque eu passava o recreio na frente das lixeiras recicláveis, como uma forma de dizer 'sou lixo também'",
        "Em 2005, meu apelido era 'troca-letras': porque eu falava 'alaçá' invés de 'araçá' e 'zonatan' invés de 'jonatan'"
    ],
    habits: [
        "Andar pra lá e pra cá enquanto imagino momentos felizes que nunca irão acontecer, e também ideias para projetos de artísticos à tecnológicos",
        "Roer as unhas: com as próprias unhas, e os cantinhos envolta das laterais das unhas"
    ],
    comfy: [
        "Saber que tem doce ou outros snacks me esperando no armário <a href='https://www.instagram.com/idanimesq/p/C_Goy7qyt0f/' target='_blank'>ou em uma bolsa/sacola - em bolsa</a> é ainda mais comfy",
        "Assistir Pokémon, principalmente o Horizons"
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
    ["curiosities", "habits", "comfy"].forEach((category) => {
        pickRandomText(category); // Display random text on load
        attachListeners(category); // Attach button event listeners
    });
};

