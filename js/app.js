// Search tizimi:
// Buni o`zim qiziqib qo`shimcha sifatida qildim:
const searchInput = document.getElementById("search");
const titles = document.querySelectorAll("h1, h2");
const notFound = document.getElementById("notFound");
const searchTitle = document.getElementById("searchTitile");
const cards = document.querySelectorAll(".card");

searchInput.addEventListener("input", function() {
    let searchQuery = searchInput.value.toLowerCase();
    let found = false;

    titles.forEach(title => {
        title.style.display = "none";
    });

    cards.forEach(card => {
        let h3Text = card.querySelector("h3").textContent.toLowerCase();
        if (h3Text.includes(searchQuery) && searchQuery !== "") {
            card.style.display = "flex";
            found = true;
            console.log(card.id);
        } else {
            card.style.display = "none";
        }
    });

    if (searchQuery === "") {
        cards.forEach(card => {
            card.style.display = "flex";
        });
        titles.forEach(title => {
            title.style.display = "flex";
        });
        searchTitle.style.display = "none";
        notFound.style.display = "none";
    } else if (found) {
        searchTitle.style.display = "flex";
        notFound.style.display = "none";
    } else {
        searchTitle.style.display = "none";
        notFound.style.display = "flex";
        notFound.querySelector("h2").style.display = "block"; // h2 ko'rsatish
    }
});

document.getElementById("searchForm").addEventListener("submit", function(event) {
    event.preventDefault();
});

// Oson masalalar
// N1:
function difficultEasy(num1easy) {
    return num1easy * num1easy;
}

document.getElementById("num1-easy").addEventListener("click", () => {
    let num1Easy = Number(document.getElementById("inputNum1-easy").value.trim());
    let res1Easy = isNaN(num1Easy) ?
        "Sonni qayta kiriting!" :
        difficultEasy(num1Easy);

    document.getElementById("result1Easy").value = res1Easy;
});


function clearFields1() {
    document.getElementById("inputNum1-easy").value = "";
    document.getElementById("result1Easy").value = "";
}
document.getElementById("clear1").addEventListener("click", clearFields1);

// N2:
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

// N3:
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

// N4:
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

// N5:
function resultFunction5(num5easy) {
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
        resultFunction5(num5EasyToMassiv) : "Sonlarni qayta kiriting!";
    document.getElementById("result5Easy").value = resNum5Easy;
}
document.getElementById("num5-easy").addEventListener("click", Num5Easy);

function clearFields5() {
    document.getElementById("inputNum5-easy").value = "";
    document.getElementById("result5Easy").value = "";
}
document.getElementById("clear5").addEventListener("click", clearFields5);

// N6:
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

// N7:
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

// N8:
function Num8Easy(num8easy1, num8easy2) {
    return num8easy1 + num8easy2 + "👍";
}

document.getElementById("num8-easy").addEventListener("click", function() {
    let num8Easy1 = document.getElementById("inputNum8-easy1").value;
    let num8Easy2 = document.getElementById("inputNum8-easy2").value;
    let resConcatenated = num8Easy1.trim() !== "" && num8Easy2.trim() !== "" ?
        Num8Easy(num8Easy1, num8Easy2) : "Stringni qayta kiriting!";
    document.getElementById("result8Easy").value = resConcatenated;
});

function clearFields8() {
    document.getElementById("inputNum8-easy1").value = "";
    document.getElementById("inputNum8-easy2").value = "";
    document.getElementById("result8Easy").value = "";
}
document.getElementById("clear8").addEventListener("click", clearFields8);

// N9:
function resultFunction9(num9easy) {
    let minNum9 = num9easy[0];

    for (let i = 1; i < num9easy.length; i++) {
        if (num9easy[i] < minNum9) {
            minNum9 = num9easy[i];
        }
    }
    return minNum9;
}

function Num9Easy() {
    let num9Easy = document.getElementById("inputNum9-easy").value.trim();
    if (num9Easy === "") {
        document.getElementById("result9Easy").value = "Sonlarni qayta kiriting!";
        return;
    }
    let num9EasyToMassiv = num9Easy.split(",").map(Number);
    let resNum9Easy = num9EasyToMassiv.every(num => !isNaN(num)) ?
        resultFunction9(num9EasyToMassiv) : "Sonlarni qayta kiriting!";
    document.getElementById("result9Easy").value = resNum9Easy;
}
document.getElementById("num9-easy").addEventListener("click", Num9Easy);

function clearFields9() {
    document.getElementById("inputNum9-easy").value = "";
    document.getElementById("result9Easy").value = "";
}
document.getElementById("clear9").addEventListener("click", clearFields9);

// N10:
function Num10Easy(result10easy) {
    let NumResult10 = "";
    for (let i = result10easy.length - 1; i >= 0; i--) {
        NumResult10 += result10easy[i];
    }
    return NumResult10;
}
document.getElementById("num10-easy").addEventListener("click", function() {
    let num10Easy = document.getElementById("inputNum10-easy").value;
    let resNum10Easy = num10Easy.trim() !== "" ?
        Num10Easy(num10Easy) : "Ismingizni qayta kiriting!";
    document.getElementById("result10Easy").value = resNum10Easy;
});

function clearFields10() {
    document.getElementById("inputNum10-easy").value = "";
    document.getElementById("result10Easy").value = "";
}
document.getElementById("clear10").addEventListener("click", clearFields10);

// Massiv va funksiyalar:
// N1:
function Num1Difficult(result1difficult) {
    return result1difficult.join(", ");
}

function num1DifFicultres() {
    let num1Difficultres = document.getElementById("inputNum1-difficult").value.trim();
    if (num1Difficultres === "") {
        document.getElementById("result1Difficult").value = "Sonlarni qayta kiriting!";
        return;
    }
    let num1Difficult = num1Difficultres.split(",").map(Number);
    let resnum1Difficultres = num1Difficult.every(num => !isNaN(num)) ?
        Num1Difficult(num1Difficult) : "Sonlarni qayta kiriting!";

    document.getElementById("result1Difficult").value = resnum1Difficultres;
}

document.getElementById("num1-difficult").addEventListener("click", num1DifFicultres);

function clearFields1Difficult() {
    document.getElementById("inputNum1-difficult").value = "";
    document.getElementById("result1Difficult").value = "";
}

document.getElementById("clear1Difficult").addEventListener("click", clearFields1Difficult);

// N2:
function Num2Difficult(result2difficult) {
    let max2Difficult = result2difficult[0];

    for (let i = 2; i < result2difficult.length; i++) {
        if (result2difficult[i] > max2Difficult) {
            max2Difficult = result2difficult[i];
        }
    }
    return max2Difficult;
}

function num2DifFicultres() {
    let num2Difficultres = document.getElementById("inputNum2-difficult").value.trim();
    if (num2Difficultres === "") {
        document.getElementById("result2Difficult").value = "Sonlarni qayta kiriting!";
        return;
    }
    let num2Difficult = num2Difficultres.split(",").map(Number);
    let resnum2Difficultres = num2Difficult.every(num => !isNaN(num)) ?
        Num2Difficult(num2Difficult) : "Sonlarni qayta kiriting!";

    document.getElementById("result2Difficult").value = resnum2Difficultres;
}

document.getElementById("num2-difficult").addEventListener("click", num2DifFicultres);

function clearFields2Difficult() {
    document.getElementById("inputNum2-difficult").value = "";
    document.getElementById("result2Difficult").value = "";
}

document.getElementById("clear2Difficult").addEventListener("click", clearFields2Difficult);

// N3:
function Num3Difficult(result3difficult) {
    return result3difficult.length;
}

function num3DifFicultres() {
    let num3Difficultres = document.getElementById("inputNum3-difficult").value.trim();
    if (num3Difficultres === "") {
        document.getElementById("result3Difficult").value = "Sonlarni qayta kiriting!";
        return;
    }
    let num3Difficult = num3Difficultres.split(",").map(Number);
    let resnum3Difficultres = num3Difficult.every(num => !isNaN(num)) ?
        Num3Difficult(num3Difficult) : "Sonlarni qayta kiriting!";

    document.getElementById("result3Difficult").value = resnum3Difficultres;
}

document.getElementById("num3-difficult").addEventListener("click", num3DifFicultres);

function clearFields3Difficult() {
    document.getElementById("inputNum3-difficult").value = "";
    document.getElementById("result3Difficult").value = "";
}

document.getElementById("clear3Difficult").addEventListener("click", clearFields3Difficult);

// N4:
function Num4Difficult(result4difficult) {
    let sum4Difficult = 0;
    for (let i = 0; i < result4difficult.length; i++) {
        sum4Difficult += result4difficult[i];
    }
    return sum4Difficult;
}

function num4DifFicultres() {
    let num4Difficultres = document.getElementById("inputNum4-difficult").value.trim();
    if (num4Difficultres === "") {
        document.getElementById("result4Difficult").value = "Sonlarni qayta kiriting!";
        return;
    }
    let num4Difficult = num4Difficultres.split(",").map(Number);
    let resnum4Difficultres = num4Difficult.every(num => !isNaN(num)) ?
        Num4Difficult(num4Difficult) : "Sonlarni qayta kiriting!";

    document.getElementById("result4Difficult").value = resnum4Difficultres;
}

document.getElementById("num4-difficult").addEventListener("click", num4DifFicultres);

function clearFields4Difficult() {
    document.getElementById("inputNum4-difficult").value = "";
    document.getElementById("result4Difficult").value = "";
}

document.getElementById("clear4Difficult").addEventListener("click", clearFields4Difficult);

// N5:
function Num5Diffic(arrayNum5, elementNum5) {
    let countNum5 = 0;
    for (let i = 0; i < arrayNum5.length; i++) {
        if (arrayNum5[i] === elementNum5) {
            countNum5++;
        }
    }
    return countNum5;
}

function num5DifFicultres() {
    let num5Difficultres = document.getElementById("inputNum5-difficult").value.trim();
    let searchElement = document.getElementById("searchElement").value.trim();

    if (num5Difficultres === "" || searchElement === "") {
        document.getElementById("result5Difficult").value = "Sonlarni va qidirilayotgan elementni qayta kiriting!";
        return;
    }

    let num5Difficult = num5Difficultres.split(",").map(Number);
    let searchNum = Number(searchElement);

    let resnum5Difficultres = num5Difficult.every(num => !isNaN(num)) ?
        Num5Diffic(num5Difficult, searchNum) : "Sonlarni qayta kiriting!";

    document.getElementById("result5Difficult").value = resnum5Difficultres;
}

document.getElementById("num5-difficult").addEventListener("click", num5DifFicultres);

function clearFields5Difficult() {
    document.getElementById("inputNum5-difficult").value = "";
    document.getElementById("searchElement").value = "";
    document.getElementById("result5Difficult").value = "";
}

document.getElementById("clear5Difficult").addEventListener("click", clearFields5Difficult);

// N6:
function Num6Dific(result6difficult) {
    let NumDific6 = [];
    for (let i = 0; i < result6difficult.length; i++) {
        if (result6difficult[i] % 2 !== 0) {
            NumDific6.push(result6difficult[i]);
        }
    }
    return NumDific6;
}

function num6DifFicultres() {
    let num6Difficultres = document.getElementById("inputNum6-difficult").value.trim();
    if (num6Difficultres === "") {
        document.getElementById("result6Difficult").value = "Sonlarni qayta kiriting!";
        return;
    }
    let num6Difficult = num6Difficultres.split(",").map(Number);
    let resnum6Difficultres = num6Difficult.every(num => !isNaN(num)) ?
        Num6Dific(num6Difficult).join(", ") : "Sonlarni qayta kiriting!";
    document.getElementById("result6Difficult").value = resnum6Difficultres;
}
document.getElementById("num6-difficult").addEventListener("click", num6DifFicultres);

function clearFields6Difficult() {
    document.getElementById("inputNum6-difficult").value = "";
    document.getElementById("result6Difficult").value = "";
}
document.getElementById("clear6Difficult").addEventListener("click", clearFields6Difficult);

// N7:
function Num7Dific(result7difficult) {
    let reversedArrayNum7 = [];
    for (let i = result7difficult.length - 1; i >= 0; i--) {
        reversedArrayNum7.push(result7difficult[i]);
    }
    return reversedArrayNum7;
}

function num7DifFicultres() {
    let num7Difficultres = document.getElementById("inputNum7-difficult").value.trim();
    if (num7Difficultres === "") {
        document.getElementById("result7Difficult").value = "Sonlarni qayta kiriting!";
        return;
    }
    let num7Difficult = num7Difficultres.split(",").map(Number);
    let resnum7Difficultres = num7Difficult.every(num => !isNaN(num)) ?
        Num7Dific(num7Difficult).join(", ") : "Sonlarni qayta kiriting!";
    document.getElementById("result7Difficult").value = resnum7Difficultres;
}
document.getElementById("num7-difficult").addEventListener("click", num7DifFicultres);

function clearFields7Difficult() {
    document.getElementById("inputNum7-difficult").value = "";
    document.getElementById("result7Difficult").value = "";
}
document.getElementById("clear7Difficult").addEventListener("click", clearFields7Difficult);

// N8:
function Num8Dific(result8difficult) {
    let NumDific8 = [];
    for (let i = 0; i < result8difficult.length; i++) {
        if (result8difficult[i] < 0) {
            NumDific8.push(result8difficult[i]);
        }
    }
    return NumDific8;
}

function num8DifFicultres() {
    let num8Difficultres = document.getElementById("inputNum8-difficult").value.trim();
    if (num8Difficultres === "") {
        document.getElementById("result8Difficult").value = "Sonlarni qayta kiriting!";
        return;
    }
    let num8Difficult = num8Difficultres.split(",").map(Number);
    let resnum8Difficultres = num8Difficult.every(num => !isNaN(num)) ?
        Num8Dific(num8Difficult).join(", ") : "Sonlarni qayta kiriting!";
    document.getElementById("result8Difficult").value = resnum8Difficultres;
}
document.getElementById("num8-difficult").addEventListener("click", num8DifFicultres);

function clearFields8Difficult() {
    document.getElementById("inputNum8-difficult").value = "";
    document.getElementById("result8Difficult").value = "";
}
document.getElementById("clear8Difficult").addEventListener("click", clearFields8Difficult);

// N9:
function Num9Dific(result9difficult) {
    result9difficult.pop();
    return result9difficult;
}

function num9DifFicultres() {
    let num9Difficultres = document.getElementById("inputNum9-difficult").value.trim();
    if (num9Difficultres === "") {
        document.getElementById("result9Difficult").value = "Sonlarni qayta kiriting!";
        return;
    }
    let num9Difficult = num9Difficultres.split(",").map(Number);
    let resnum9Difficultres = num9Difficult.every(num => !isNaN(num)) ?
        Num9Dific(num9Difficult).join(", ") : "Sonlarni qayta kiriting!";
    document.getElementById("result9Difficult").value = resnum9Difficultres;
}
document.getElementById("num9-difficult").addEventListener("click", num9DifFicultres);

function clearFields9Difficult() {
    document.getElementById("inputNum9-difficult").value = "";
    document.getElementById("result9Difficult").value = "";
}
document.getElementById("clear9Difficult").addEventListener("click", clearFields9Difficult);

// N10:
function Num10Dific(result10difficult) {
    let numDigitsNum10 = result10difficult[0].toString().length;
    let newElementNum10 = Math.floor(Math.random() * Math.pow(10, numDigitsNum10));
    result10difficult.push(newElementNum10);
    return result10difficult;
}

function num10DifFicultres() {
    let num10Difficultres = document.getElementById("inputNum10-difficult").value.trim();
    if (num10Difficultres === "") {
        document.getElementById("result10Difficult").value = "Sonlarni qayta kiriting!";
        return;
    }
    let num10Difficult = num10Difficultres.split(",").map(Number);
    let resnum10Difficultres = num10Difficult.every(num => !isNaN(num)) ?
        Num10Dific(num10Difficult).join(", ") : "Sonlarni qayta kiriting!";
    document.getElementById("result10Difficult").value = resnum10Difficultres;
}

document.getElementById("num10-difficult").addEventListener("click", num10DifFicultres);

function clearFields10Difficult() {
    document.getElementById("inputNum10-difficult").value = "";
    document.getElementById("result10Difficult").value = "";
}

document.getElementById("clear10Difficult").addEventListener("click", clearFields10Difficult);

// N11:
function Num11Dific(num11dific1, num11dific2) {
    return num11dific1.concat(num11dific2);
}

function num11DifFicultres() {
    let num11Difficultres1 = document.getElementById("inputNum11-difficult1").value.trim();
    let num11Difficultres2 = document.getElementById("inputNum11-difficult2").value.trim();
    if (num11Difficultres1 === "" || num11Difficultres2 === "") {
        document.getElementById("result11Difficult").value = "Ikkita massivni ham qayta kiriting!";
        return;
    }
    let num11Difficult1 = num11Difficultres1.split(",").map(Number);
    let num11Difficult2 = num11Difficultres2.split(",").map(Number);
    let resnum11Difficultres = num11Difficult1.every(num => !isNaN(num)) && num11Difficult2.every(num => !isNaN(num)) ?
        Num11Dific(num11Difficult1, num11Difficult2).join(", ") : "Ikkita massivni ham qayta kiriting!";
    document.getElementById("result11Difficult").value = resnum11Difficultres;
}
document.getElementById("num11-difficult").addEventListener("click", num11DifFicultres);

function clearFields11Difficult() {
    document.getElementById("inputNum11-difficult1").value = "";
    document.getElementById("inputNum11-difficult2").value = "";
    document.getElementById("result11Difficult").value = "";
}
document.getElementById("clear11Difficult").addEventListener("click", clearFields11Difficult);

// N12:
function Num12Dific(num12dific) {
    return num12dific.map(num12dif => num12dif * num12dif);
}

function num12DifFicultres() {
    let num12Difficultres = document.getElementById("inputNum12-difficult").value.trim();
    if (num12Difficultres === "") {
        document.getElementById("result12Difficult").value = "Massivni qayta kiriting!";
        return;
    }
    let num12Difficult = num12Difficultres.split(",").map(Number);
    let resnum12Difficultres = num12Difficult.every(num => !isNaN(num)) ?
        Num12Dific(num12Difficult).join(", ") : "Massivni qayta kiriting!";
    document.getElementById("result12Difficult").value = resnum12Difficultres;
}
document.getElementById("num12-difficult").addEventListener("click", num12DifFicultres);

function clearFields12Difficult() {
    document.getElementById("inputNum12-difficult").value = "";
    document.getElementById("result12Difficult").value = "";
}
document.getElementById("clear12Difficult").addEventListener("click", clearFields12Difficult);

// N13:
function Num13Dific(num13dific) {
    return num13dific.filter(num => num % 2 !== 0);
}

function num13DifFicultres() {
    let num13Difficultres = document.getElementById("inputNum13-difficult").value.trim();
    if (num13Difficultres === "") {
        document.getElementById("result13Difficult").value = "Massivni qayta kiriting!";
        return;
    }
    let num13Difficult = num13Difficultres.split(",").map(Number);
    let resnum13Difficultres = num13Difficult.every(num => !isNaN(num)) ?
        Num13Dific(num13Difficult).join(", ") : "Massivni qayta kiriting!";
    document.getElementById("result13Difficult").value = resnum13Difficultres;
}

document.getElementById("num13-difficult").addEventListener("click", num13DifFicultres);

function clearFields13Difficult() {
    document.getElementById("inputNum13-difficult").value = "";
    document.getElementById("result13Difficult").value = "";
}

document.getElementById("clear13Difficult").addEventListener("click", clearFields13Difficult);

// N14
function Num14Dific(num14dific) {
    return num14dific.map(str => str.toUpperCase());
}

function num14DifFicultres() {
    let num14Difficultres = document.getElementById("inputNum14-difficult").value.trim();
    if (num14Difficultres === "") {
        document.getElementById("result14Difficult").value = "Massivni qayta kiriting!";
        return;
    }
    let num14Difficult = num14Difficultres.split(",").map(str => str.trim());
    let resnum14Difficultres = num14Difficult.every(str => typeof str === 'string') ?
        Num14Dific(num14Difficult).join(", ") : "Massivni qayta kiriting!";
    document.getElementById("result14Difficult").value = resnum14Difficultres;
}

document.getElementById("num14-difficult").addEventListener("click", num14DifFicultres);

function clearFields14Difficult() {
    document.getElementById("inputNum14-difficult").value = "";
    document.getElementById("result14Difficult").value = "";
}

document.getElementById("clear14Difficult").addEventListener("click", clearFields14Difficult);

// N15
function Num15Dific(num15dific) {
    if (num15dific.every(num => typeof num !== 'string')) {
        return "String kiriting!";
    }
    return num15dific.map(str => str.length);
}

function num15DifFicultres() {
    let num15Difficultres = document.getElementById("inputNum15-difficult").value.trim();
    if (num15Difficultres === "") {
        document.getElementById("result15Difficult").value = "Massivni qayta kiriting!";
        return;
    }
    let num15Difficult = num15Difficultres.split(",").map(item => item.trim());
    let resnum15Difficultres = Num15Dific(num15Difficult);
    document.getElementById("result15Difficult").value = resnum15Difficultres === "String kiriting!" ? resnum15Difficultres : resnum15Difficultres.join(", ");
}

document.getElementById("num15-difficult").addEventListener("click", num15DifFicultres);

function clearFields15Difficult() {
    document.getElementById("inputNum15-difficult").value = "";
    document.getElementById("result15Difficult").value = "";
}

document.getElementById("clear15Difficult").addEventListener("click", clearFields15Difficult);

// Qoshimcha vazifa:
// N1:
function difficult1Addition(num1addition) {
    return num1addition * num1addition;
}
document.getElementById("num1-addition").addEventListener("click", () => {
    let num1Addition = Number(document.getElementById("inputNum1-addition").value.trim());
    let res1Addition = isNaN(num1Addition) ?
        "Sonni qayta kiriting!" :
        difficult1Addition(num1Addition);

    document.getElementById("result1Addition").value = res1Addition;
});

function clearFields1add() {
    document.getElementById("inputNum1-addition").value = "";
    document.getElementById("result1Addition").value = "";
}
document.getElementById("clear1add").addEventListener("click", clearFields1add);

// N2:
function filterOutValue(arrAdd2, NumValueToRemoveAdd2) {
    return arrAdd2.filter(item => item !== NumValueToRemoveAdd2);
}

function num2Additionres() {
    let num2Additionres = document.getElementById("inputNum2-addition").value.trim();
    let NumValueToRemoveAdd2 = Number(document.getElementById("valueToRemove").value.trim());

    if (num2Additionres === "") {
        document.getElementById("result2Addition").value = "Massivni qayta kiriting!";
        return;
    }

    let num2Addition = num2Additionres.split(",").map(Number);
    let resnum2Additionres = num2Addition.every(num => !isNaN(num)) ?
        filterOutValue(num2Addition, NumValueToRemoveAdd2).join(", ") : "Massivni qayta kiriting!";

    document.getElementById("result2Addition").value = resnum2Additionres;
}

document.getElementById("num2-addition").addEventListener("click", num2Additionres);

function clearFields2Addition() {
    document.getElementById("inputNum2-addition").value = "";
    document.getElementById("result2Addition").value = "";
    document.getElementById("valueToRemove").value = "";
}

document.getElementById("clear2Addition").addEventListener("click", clearFields2Addition);

// N3