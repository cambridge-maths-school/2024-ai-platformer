const canvas = document.getElementById("game-canvas");
const ctx = canvas.getContext("2d");

const player = {};

let pT = -Infinity;

requestAnimationFrame(function animate(cT) {
    let dT = cT - pT;

    if (dT <= 1_000) {
        
    }

    pT = cT;
    requestAnimationFrame(animate);
});
