// Search tizimi:\
// Buni o`zim qiziqib qo`shimcha sifatida qildim:
const searchInput = document.getElementById("search");
const cards = document.querySelectorAll(".card");
searchInput.addEventListener("input", function() {
    let searchQuery = searchInput.value.toLowerCase();
    cards.forEach(card => {
        let h3Text = card.querySelector("h3").textContent.toLowerCase();
        card.style.display = h3Text.includes(searchQuery) ? "block" : "none";
    });
});
document.getElementById("searchForm").addEventListener("submit", function(event) {
    event.preventDefault();
});

searchInput.addEventListener("keydown", function(event) {
    if (event.key === "Backspace" || event.key === "Delete") {
        setTimeout(() => {
            let searchQuery = searchInput.value.toLowerCase();
            cards.forEach(card => {
                let h3Text = card.querySelector("h3").textContent.toLowerCase();
                if (searchQuery === "") {
                    card.style.display = "block";
                } else {
                    card.style.display = h3Text.includes(searchQuery) ? "block" : "none";
                }
            });
        }, 0);
    }
});
// Agar searchdan keyin sayt hunuk bo`lib qolsa refresh qilvorasiz va nimaga searchdan keyin bunaqa yopishib qolishini hech topa olmadim, agar iloji bo`lsa nega sshunday bo`lib turganini aytvorsangiz erp ga iltimos


// Oson masalalar
// N1
function Num1Easy(num1easy) {
    return num1easy * num1easy;
}
document.getElementById("num1-easy").addEventListener("click", function() {
    let num1Easy = document.getElementById("inputNum1-easy").value;
    let res1Easy = num1Easy.trim() === "" || isNaN(num1Easy) ?
        "Sonni qayta kiriting!" : Num1Easy(num1Easy);

    document.getElementById("result1Easy").value = res1Easy;
})

function clearFields1() {
    document.getElementById("inputNum1-easy").value = "";
    document.getElementById("result1Easy").value = "";
}
document.getElementById("clear1").addEventListener("click", clearFields1);

// N2 
function Num2Easy(num2easy1, num2easy2) {
    return num2easy1 + num2easy2;
}

document.getElementById("num2-easy").addEventListener("click", function() {
    let num2Easy1 = parseInt(document.getElementById("inputNum2-easy1").value);
    let num2Easy2 = parseInt(document.getElementById("inputNum2-easy2").value);
    let resNum2Easy = !isNaN(num2Easy1) && !isNaN(num2Easy2) ?
        Num2Easy(num2Easy1, num2Easy2) : "Sonlarni qayta kiriting!";

    document.getElementById("result2Easy").value = resNum2Easy;
});

function clearFields2() {
    document.getElementById("inputNum2-easy1").value = "";
    document.getElementById("inputNum2-easy2").value = "";
    document.getElementById("result2Easy").value = "";

}
document.getElementById("clear2").addEventListener("click", clearFields2);

// N3
function Num3Easy(num3easy) {
    return "Salom " + num3easy + "!";
}
document.getElementById("num3-easy").addEventListener("click", function() {
    let num3Easy = document.getElementById("inputNum3-easy").value;
    let resNum3Easy = num3Easy.trim() !== "" ?
        Num3Easy(num3Easy) : "Ismingizni qayta kiriting!";

    document.getElementById("result3Easy").value = resNum3Easy;
});

function clearFields3() {
    document.getElementById("inputNum3-easy").value = "";
    document.getElementById("result3Easy").value = "";
}
document.getElementById("clear3").addEventListener("click", clearFields3);

// N4
function Num4Easy(num4easy1, num4easy2) {
    if (num4easy1 === num4easy2) {
        return "Sonlar teng!";
    } else {
        return num4easy1 > num4easy2 ? num4easy1 : num4easy2;
    }
}

document.getElementById("num4-easy").addEventListener("click", function() {
    let num4Easy1 = parseInt(document.getElementById("inputNum4-easy1").value);
    let num4Easy2 = parseInt(document.getElementById("inputNum4-easy2").value);
    let resNum4Easy = !isNaN(num4Easy1) && !isNaN(num4Easy2) ?
        Num4Easy(num4Easy1, num4Easy2) : "Sonlarni qayta kiriting!";

    document.getElementById("result4Easy").value = resNum4Easy;
});

function clearFields4() {
    document.getElementById("inputNum4-easy1").value = "";
    document.getElementById("inputNum4-easy2").value = "";
    document.getElementById("result4Easy").value = "";

}
document.getElementById("clear4").addEventListener("click", clearFields4);

// N5
function resultFunction(num5easy) {
    let sum5Easy = 0;
    for (let i = 0; i < num5easy.length; i++) {
        sum5Easy += num5easy[i];
    }
    return sum5Easy;
}

function Num5Easy() {
    let num5Easy = document.getElementById("inputNum5-easy").value.trim();
    if (num5Easy === "") {
        document.getElementById("result5Easy").value = "Sonlarni qayta kiriting!";
        return;
    }
    let num5EasyToMassiv = num5Easy.split(",").map(Number);
    let resNum5Easy = num5EasyToMassiv.every(num => !isNaN(num)) ?
        resultFunction(num5EasyToMassiv) : "Sonlarni qayta kiriting!";
    document.getElementById("result5Easy").value = resNum5Easy;
}
document.getElementById("num5-easy").addEventListener("click", Num5Easy);

function clearFields5() {
    document.getElementById("inputNum5-easy").value = "";
    document.getElementById("result5Easy").value = "";
}
document.getElementById("clear5").addEventListener("click", clearFields5);

// N6
function Num6Easy(num6easy) {
    return num6easy > 0 ? "Musbat" : (num6easy < 0 ? "Manfiy" : "Nol");
}
document.getElementById("num6-easy").addEventListener("click", function() {
    let num6Easy = parseInt(document.getElementById("inputNum6-easy").value);
    let resNum6Easy = !isNaN(num6Easy) ?
        Num6Easy(num6Easy) : "Sonni qayta kiriting!";

    document.getElementById("result6Easy").value = resNum6Easy;
});

function clearFields6() {
    document.getElementById("inputNum6-easy").value = "";
    document.getElementById("result6Easy").value = "";
}
document.getElementById("clear6").addEventListener("click", clearFields6);

// N7
function Num7Easy(num7Lenth) {
    return num7Lenth.length;
}

document.getElementById("num7-easy").addEventListener("click", function() {
    let num7Easy = document.getElementById("inputNum7-easy").value;
    let resNum7Easy = num7Easy ?
        Num7Easy(num7Easy) : "Qiymatni qayta kiriting!";
    document.getElementById("result7Easy").value = resNum7Easy;
});

function clearFields7() {
    document.getElementById("inputNum7-easy").value = "";
    document.getElementById("result7Easy").value = "";
}
document.getElementById("clear7").addEventListener("click", clearFields7);

// N8