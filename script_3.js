// Pyramide de Mario

let totalLigne = prompt("Salut, bienvenue dans ma super pyramide ! Combien d'étages veux-tu ?")

pyramide1 = []
pyramide2 = []
pyramide = []

for(let i = totalLigne - 1; i >= 0; i--) {
  pyramide1.push(" ".repeat(i))
}

for(let j = 0; j < totalLigne; j++) {
  pyramide2.push("#".repeat(j + 1))
}

for(k = 0; k < pyramide2.length; k++) {
  pyramide.push(pyramide1[k] + "" + pyramide2[k])
  console.log(pyramide[k])
}


