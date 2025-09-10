const link = "https://official-joke-api.appspot.com/jokes/";

async function getRandomJoke() {
    try {
        const data = await fetch(link+"random").then(response => response.json())
        writeOut(data);
    }
    catch (error) {
        console.log(error);
    }
}

async function getJokeById() {
    let id = prompt("Add meg az id-t");
    try {
        const data = await fetch(link+ id).then(response => response.json())
        writeOut(data);
    }
    catch(error){
        console.log(error)
    }
}
async function getJokeByType() {
    const type = document.getElementById("select").value;
    try {
        const data = await fetch(link + type +"/random").then(response => response.json())
        writeOut(data);
    }
    catch (error) {
        console.log(error);
    }
}
function writeOut(data){
    document.getElementById("Setup").innerHTML = data.setup;
    document.getElementById("Punchline").innerHTML = data.punchline;
    document.getElementById("JokeId").innerHTML = "Id: "+ data.id;
    document.getElementById("JokeType").innerHTML = "Type: "+ data.type;
    document.getElementById("JokeNext").onclick(getJokeById);
    document.getElementById("JokeNext").style;
}