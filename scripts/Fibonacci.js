// Questão 2
export default function Fibonacci(num) {
    let fib1 = 0;
    let fib2 = 1;
    while (fib2 < num) {
      [fib1, fib2] = [fib2, fib1 + fib2];
    }
    return fib2 === num;
  }
  
  const numberInput = document.getElementById('numberInput');
  const buttonCheck = document.getElementById('buttonCheck');
  const result = document.getElementById('result');
  
  buttonCheck.addEventListener('click', () => {
    const num = parseInt(numberInput.value);
    if (isNaN(num)) {
      result.textContent = 'Digite um número válido';
    } else if (Fibonacci(num)) {
      result.textContent = `${num} faz parte da sequência de Fibonacci`;
    } else {
      result.textContent = `${num} não faz parte da sequência de Fibonacci`;
    }
  });