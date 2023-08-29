const jokeContent = document.getElementById("joke-content");
const btnNewJoke = document.getElementById("new-joke");
const btnCopy = document.getElementById("copy");

async function fetchJoke () {
    const url = "https://icanhazdadjoke.com";
    const getJoke = await fetch(url, {
        headers: {
            "Accept": "application/json"
        }
    });
    const response = await getJoke.json();
    const { joke } = await response;

    jokeContent.textContent = joke;
};

function copyToClipboard () {
    navigator.clipboard.writeText(jokeContent.textContent);
    alert("The text was successfully copied to your transfer area. Knock'em dead, dad!");
};

btnNewJoke.addEventListener("click", () => fetchJoke());
btnCopy.addEventListener("click", () => copyToClipboard());