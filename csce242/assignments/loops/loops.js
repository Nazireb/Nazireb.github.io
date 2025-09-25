const scene = document.getElementById("scene");
const btn = document.getElementById("btn")

const getArt = () => {
    let art = document.getElementById("art");
    if (!art) {
        art = document.createElement("div");
        art.id = "art";
        scene.append(art);
    }
    return art;
}

const add = (clas) => {
    const d = document.createElement("div");
    d.className = clas;
    const art = getArt();
    art.append(d);
    return d;
}

btn.onclick = () => {
    const art = getArt();
    art.innerHTML = "";
    const hour = new Date().getHours();
    const isNight = (hour >= 18 || hour < 6);
    if (isNight) {
        scene.classList.add("night");
    } else {
        scene.classList.remove("night");
    }
    add(isNight ? "moon" : "sun");

    const pad = 60;
    const usable = scene.clientWidth - pad * 2;
    
for (let i = 0; i < 6; i++) {
    const cloud = add("cloud");
    const step = i / 5;
    const left = Math.round(pad + step * usable - 45);
    cloud.style.left = `${left}px`;
    cloud.style.top = `${165 - (i % 2 ? 6 : 0)}px`;
  }

for (let i = 0; i < 6; i++) {
    const tree = add("tree");
    const crown = document.createElement("div");
    crown.className = "crown";
    const trunk = document.createElement("div");
    trunk.className = "trunk";
    tree.append(crown);
    tree.append(trunk);

    const step = i / 5;
    const left = Math.round(pad + step * usable - 48);
    tree.style.left = `${left}px`;
    tree.style.bottom = "40px";
  }
}