"use strict";
function extrairSubconjunto(data, start, end) {
    return data.slice(start, end + 1);
}
console.log("Entrada: \"typescript\", 0, 3\  \nSaída: " +
    extrairSubconjunto("typescript", 0, 3) +
    "\n"); // "type"
console.log("Entrada: [10, 20, 30, 40, 50], 1, 3 \nSaída: " +
    extrairSubconjunto([10, 20, 30, 40, 50], 1, 3) +
    "\n"); // [20, 30, 40]
