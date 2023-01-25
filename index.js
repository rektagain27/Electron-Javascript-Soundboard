const Store = require('electron-store');

var store = new Store();

sounds = store.get('one');

const countbar = document.getElementById("countbar");

if (sounds === undefined) {store.set('one',[['sound1','sample']])};

sounds = store.get('one');

const clearBtn = document.getElementById("clearAll");

clearBtn.addEventListener('click', () => {
  sounds.length = 0;
  store.set('one', sounds);
  document.querySelectorAll('audio').forEach(el => el.pause());
  document.querySelectorAll('audio').forEach(el => el.currentTime = 0);
  clearEverything();
})


function clearEverything(){
  document.getElementById('button-container').innerHTML = "";
  document.getElementById('soundbar').innerHTML ="";
  countbar.innerText = "You don't have any sounds. Add some using the menu at the bottom of your screen."

  
}

function rebuildChart(){
  sounds.forEach((sound)=> {
    const aud = document.createElement('audio');
    aud.id       = sound[0];
    aud.src      = sound[1];
    const btn = document.createElement('button');
    btn.classList.add('btn');
    btn.innerText = sound[0];
    btn.addEventListener('click', () => {
        document.getElementById(sound[0]).play();
    })
    document.getElementById('button-container').appendChild(btn);
    document.getElementById('soundbar').appendChild(aud);
    countbar.innerText = 'You have '+String(sounds.length)+ ' sounds.';
  });
}

rebuildChart();

const addButton = document.getElementById("add");

addButton.addEventListener('click', ()=>{
  newEntry = [String(document.getElementById("getName").value), String(document.getElementById("getAddress").files[0].path)];
  sounds.push(newEntry);
  store.set('one',sounds);
  document.getElementById("getName").value = "";
  document.getElementById("getAddress").value = "";
  clearEverything();
  rebuildChart();
})

document.getElementById('pauseButton').addEventListener('click', () => {
  document.querySelectorAll('audio').forEach(el => el.pause());
});

document.getElementById('playAllButton').addEventListener('click', () => {
  document.querySelectorAll('audio').forEach(el => el.play());
});

document.getElementById('playButton').addEventListener('click', () => {
  document.querySelectorAll('audio').forEach(el=>{if(el.currentTime != 0) {
    el.play()}})});

document.getElementById('stopButton').addEventListener('click', () => {
  document.querySelectorAll('audio').forEach(el => el.pause());
  document.querySelectorAll('audio').forEach(el => el.currentTime = 0);
});


document.getElementById('volume').addEventListener("change", function(e) {
  document.querySelectorAll('audio').forEach(el => el.volume = e.currentTarget.value / 100)
});
