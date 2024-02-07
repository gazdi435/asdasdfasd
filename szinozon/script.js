let lastRow = 0;
let lastElem = 0;
let szinek = ["kekDiv", "pirosDiv", "sargaDiv", "zoldDiv"];
let sorsolt = [];
let eltalaltak = [];

for (let index = 0; index < 4; index++) {
    sorsolt.push(szinek[Math.floor(Math.random()*4)]);
}

console.log(sorsolt);


function SzinValaszt(kuldo){
    document.getElementById("balDiv").children[lastRow].children[lastElem].classList.add(kuldo);
    if (lastElem == 3) {
        Ellenoriz(lastRow);
        lastElem = 0;
        lastRow++;
    } else {
        lastElem++;
    }
}

function Ellenoriz(sorIndex) {
    let potty = 0;
    for (let index = 0; index < 4; index++) {
        if (document.getElementById("balDiv").children[sorIndex].children[index].classList.contains(sorsolt[index])) {
            document.getElementById("balDiv").children[sorIndex].children[4].children[potty].classList.add("kekDiv");
            potty++;
            eltalaltak.push(index);
            if (potty==4) {
                alert("Nyertél!");
                location.reload();
            }
        }
    };
    if (sorIndex==9) {
        alert("Nem nyertél!");
        location.reload();
    }
    for (let index = 0; index < 4; index++) {
        if(!eltalaltak.includes(index)){
            for (let valami = 0; valami < 4; valami++) {
                if(eltalaltak.includes(index)){
                    if(document.getElementById("balDiv").children[sorIndex].children[valami].classList.contains(sorsolt[index]))
                    {
                        eltalaltak.add(index);
                        document.getElementById("balDiv").children[sorIndex].children[4].children[potty].classList.add("sargaDiv");
                    }
                }
            }
        }
    }


}