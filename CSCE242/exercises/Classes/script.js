class Bird {
    constructor(title, speed, color, wingspan, size, beak, diet, pic) {
        this.title = title;
        this.speed = speed;
        this.color = color;
        this.wingspan = wingspan;
        this.size = size;
        this.beak = beak;
        this.pic = pic;
        this.diet = diet;
    }

    get item() {
        const section = document.createElement("section");
        section.classList.add("bird");

        const h3 = document.createElement("h3");
        h3.innerHTML = this.title;
        section.append(h3);

        const columnsDiv = document.createElement("div");
        columnsDiv.classList.add("columns");
        section.append(columnsDiv);

        const firstColumn = document.createElement("div");
        const secondColumn = document.createElement("div");

        columnsDiv.append(firstColumn);
        columnsDiv.append(secondColumn);

        firstColumn.append(this.picture(this.pic));

        secondColumn.classList.add("hidden");
        secondColumn.append(this.paragraph("Speed", this.speed));
        secondColumn.append(this.paragraph("Color", this.color));
        secondColumn.append(this.paragraph("Wingspan", this.wingspan));
        secondColumn.append(this.paragraph("Size", this.size));
        secondColumn.append(this.paragraph("Beak", this.beak));
        secondColumn.append(this.paragraph("Diet", this.diet));

        const expCon = document.createElement("a");
        expCon.href = "#";
        expCon.innerHTML = "&#x2964;";
        h3.append(expCon);

        expCon.onclick = () => {
            secondColumn.classList.toggle("hidden");
        };

        return section;
    }

    picture(info) {
        const pic = document.createElement("img");
        pic.src = "Images/" + info;
        return pic;
    }

    paragraph(title, info) {
        const p = document.createElement("p");
        p.innerHTML = `<strong>${title}</strong>: ${info}`;
        return p;
    }
}

const birds = [];
birds.push(new Bird("Bald Eagle", "74-99 mph", "Black and White", "5.9 - 7.5ft", "28 - 40 inches", "Large hooked", "Fish", "eagle.png"));
birds.push(new Bird("Blue Jay", "20-25 mph", "Blue", "13-17in", "9.8 - 11.8 inches", "Strong straight and slightly pointed", "Different types of nuts and seeds", "bluejay.png"));
birds.push(new Bird("Falcon", "240 mph", "blue-gray and white", "2.4 - 3.9ft", "1.5ft", "Hooked", "Shorebirds, ducks, gulls etc.", "falcon.png"));
birds.push(new Bird("Zebra Finch", "10-12 mph", "Gray and White", "7.9 to 9.8in", "4 -5 inches", "Conical", "Seeds", "zebrafinch.png"));


birds.forEach((bird) => {
    document.getElementById("bird-list").append(bird.item);
});
