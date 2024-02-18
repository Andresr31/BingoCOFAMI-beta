function generateBoard() {
  const board = document.getElementById("board");
  board.innerHTML = "";
  // Generar B
  let B = generateUniqueNumbers(1, 15, 5);
  const bc = document.createElement("div");
  bc.classList.add("cell");
  bc.textContent = "B";
  bc.classList.add("bg-primary");
  bc.classList.add("text-light");
  board.appendChild(bc);

  // Generar I
  let I = generateUniqueNumbers(16, 30, 5);
  const ic = document.createElement("div");
  ic.classList.add("cell");
  ic.textContent = "I";
  ic.classList.add("bg-primary");
  ic.classList.add("text-light");
  board.appendChild(ic);

  // Generar N
  let N = generateUniqueNumbers(31, 45, 5);
  const nc = document.createElement("div");
  nc.classList.add("cell");
  nc.textContent = "N";
  nc.classList.add("bg-primary");
  nc.classList.add("text-light");
  board.appendChild(nc);

  // Generar G
  let G = generateUniqueNumbers(46, 60, 5);
  const gc = document.createElement("div");
  gc.classList.add("cell");
  gc.classList.add("bg-primary");
  gc.classList.add("text-light");
  gc.textContent = "G";
  board.appendChild(gc);

  // Generar O
  let O = generateUniqueNumbers(61, 75, 5);
  const oc = document.createElement("div");
  oc.classList.add("cell");
  oc.textContent = "O";
  oc.classList.add("bg-primary");
  oc.classList.add("text-light");
  board.appendChild(oc);

  for (let i = 0; i < 5; i++) {
    for (let j = 0; j < 5; j++) {
      const cell = document.createElement("div");
      cell.addEventListener("click", function () {
        if (cell.classList.contains("bg-warning")) {
          this.classList.remove("bg-warning");
        } else {
          this.classList.add("bg-warning");
        }
      });
      cell.classList.add("cell");
      if (i === 2 && j === 2) {
        cell.textContent = "FREE";
        cell.style.backgroundColor = "#ccc";
      } else {
        switch (j) {
          case 0:
            cell.textContent = B[i];
            break;
          case 1:
            cell.textContent = I[i];
            break;
          case 2:
            cell.textContent = N[i];
            break;
          case 3:
            cell.textContent = G[i];
            break;
          case 4:
            cell.textContent = O[i];
            break;
          default:
            break;
        }
      }
      board.appendChild(cell);
    }
  }
}

function generateUniqueNumbers(min, max, count) {
  if (max - min + 1 < count) {
    throw new Error(
      "No hay suficientes números únicos en el rango especificado"
    );
  }

  const uniqueNumbers = new Set();

  while (uniqueNumbers.size < count) {
    const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
    uniqueNumbers.add(randomNumber);
  }

  return Array.from(uniqueNumbers);
}
