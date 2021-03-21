
// --- Task 1 ---

let playList = [
    {
    author: "LED ZEPPELIN",
    song:   "STAIRWAY TO HEAVEN",
    path:   "/lesson_28/mp3/LedZeppelin-StairwayToHeaven.mp3",
    },

    {
    author: "QUEEN",
    song:   "BOHEMIAN RHAPSODY",
    path:   "/mp3/Queen-BohemianRhapsody.mp3",
    },

    {
    author: "LYNYRD SKYNYRD",
    song:   "FREE BIRD",
    path:   "/mp3/LynyrdSkynyrd-FreeBird.mp3",
    },

    {
    author: "DEEP PURPLE",
    song:   "SMOKE ON THE WATER",
    path:   "/mp3/DeepPurple-SmokeOnTheWater.mp3",
    },

    {
    author: "JIMI HENDRIX",
    song:   "ALL ALONG THE WATCHTOWER",
    path:   "/mp3/JimiHendrix-AllAlongTheWatchtower.mp3",
    },

    {
    author: "AC/DC",
    song:   "BACK IN BLACK",
    path:   "/mp3/AcDc-BackIinBlack.mp3",
    },

    {
    author: "QUEEN",
    song:   "WE WILL ROCK YOU",
    path:   "/mp3/Queen-WeWillRockYou.mp3",
    },

    {
    author: "METALLICA",
    song:   "ENTER SANDMAN",
    path:   "/mp3/Metallica-EnterSandman.mp3",
    }
];


let boxSongs = document.createElement('div');

    boxSongs.className = 'box-songs';
    document.body.appendChild(boxSongs);


let headerSongs = document.createElement('div');

    headerSongs.className = 'header-songs';
    headerSongs.innerHTML = 'PLAY LIST';

    boxSongs.append(headerSongs);


let songUl = document.createElement('ul');

    songUl.className = 'list-songs';
    boxSongs.append(songUl);

    for (let index = 0; index < playList.length; ++index) {

        let currentAuthor = playList[index].author;
        let currentSong = playList[index].song;
        let num = index + 1;
        let songLi = document.createElement('li');

        songLi.className = 'item-songs'
        songLi.innerHTML = `${num}: ${currentAuthor} - ${currentSong}`;
        songUl.append(songLi);
    }


let semafore = [
    {
    name: "red",
    foneColor: "hsl(0, 100%, 50%)",
    strokeColor: "hsl(0, 100%, 80%)",
    },

    {
    name: "yellow",
    foneColor: "hsl(60, 100%, 50%)",
    strokeColor: "hsl(60, 100%, 80%)",
    },

    {
    name: "green",
    foneColor: "hsl(90, 100%, 50%)",
    strokeColor: "hsl(90, 100%, 80%)",
    },

    {
    name: "neutral",
    foneColor: "hsl(0, 0%, 80%)",
    strokeColor: "hsl(0, 0%, 70%)",
    },
]


let boxSemafor = document.createElement('div');

    boxSemafor.className = 'box-semafor';
    document.body.appendChild(boxSemafor);


    for (let index = 0; index < 3; ++index) {

        let currentSection = document.createElement('div');
        let sectionName = semafore[index].name;

        currentSection.id = `${sectionName}`;
        currentSection.className = 'section';
        boxSemafor.appendChild(currentSection);
    }


let btnState = document.createElement('button');

    btnState.className = 'btn-semafor';
    btnState.innerHTML = 'Change State';

    boxSemafor.after(btnState);


function resetColor() {

    for (let index = 0; index < 3; ++index) {

        document.getElementById(`${semafore[index].name}`).style.backgroundColor = `${semafore[3].foneColor}`;
        document.getElementById(`${semafore[index].name}`).style.borderColor = `${semafore[3].strokeColor}`;
    }
}


let i = 0;

btnState.onclick = function() {

    resetColor();
    document.getElementById(`${semafore[i].name}`).style.backgroundColor = `${semafore[i].foneColor}`;
    document.getElementById(`${semafore[i].name}`).style.borderColor = `${semafore[i].strokeColor}`;

    i++;

    if (i > 2) { i = 0};
}

