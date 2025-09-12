console.log("main.js");
(() => {
  console.log("Here we are!");

  window.addEventListener("load", () => {
    const selectId = document.getElementById("operation");
    const multiplier = document.getElementById("multiplier");
    const multiplicand = document.getElementById("multiplicand");
    const product = document.getElementById("product");

    const update = () => {
      const val1 = parseFloat(multiplier.value) || 0;
      const val2 = parseFloat(multiplicand.value) || 0;
      const operation = selectId.options[selectId.selectedIndex].value;

      let result;
      switch (operation) {
        case "add":
          result = val1 + val2;
          break;
        case "subtract":
          result = val1 - val2;
          break;
        case "multiply":
          result = val1 * val2;
          break;
        case "divide":
          result = val2 !== 0 ? val1 / val2 : "∞"; // prevent division by zero
          break;
        default:
          result = "";
      }

      product.innerHTML = result;
    };

    // update when inputs change
    multiplier.addEventListener("input", update);
    multiplicand.addEventListener("input", update);

    // update when operation changes
    selectId.addEventListener("change", update);

    // initial calculation
    update();
  });
})();
