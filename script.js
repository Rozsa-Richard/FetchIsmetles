async function getRandomJoke() {
    try {
        const data = await fetch('https://official-joke-api.appspot.com/jokes/random')
        .then(response => response.json())
        document.getElementById("Joke").innerHTML = data.setup + " <br>" + data.punchline;
    
    }
    catch (error) {
        console.log(error);
    }
}

async function getJokeById() {
    let id = prompt("Add meg az id-t");
    if (nev) {
      alert("Szia, " + nev + "!");
    }
  }