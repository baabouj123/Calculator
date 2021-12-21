let calculator = document.getElementsByName("calculator");
calculator.operation = calculator.operation ? calculator.operation : "";

const onClick = (num) => {
  calculator.operation += num;
  let content = document.getElementById("calc-operations");
  content.innerText = calculator.operation;
};

const calculate = () => {
  if (calculator.operation) {
    let result = document.getElementById("calc-result");
    try {
      result.innerText = eval(calculator.operation);
      let content = document.getElementById("calc-operations");
      content.style.opacity = 0.6;
    } catch {
      result.innerText = "Syntax Error";
    }
  }
};
