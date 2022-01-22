import {useState, useRef} from 'react';
enum Operations {
  Add,
  Substraction,
  Multiply,
  Divide,
}

export const useCalculator = () => {
  const [lastNumber, setLastNumber] = useState('0');
  const [number, setNumber] = useState('0');

  const lastOperation = useRef<Operations>();

  const handleNumber = (value: string): void => {
    if (number.includes('.') && value === '.') {
      return;
    }
    if (number === 'Error') {
      console.log('asd');
      setNumber(value);
      return;
    }
    if (number.startsWith('0') || number.startsWith('-0')) {
      if (value === '.') {
        setNumber(number + value);
      } else if (value === '0' && number.includes('.')) {
        setNumber(number + value);
      } else if (value !== '0' && !number.includes('.')) {
        setNumber(value);
      } else if (number !== '0' && value === '0') {
        return;
      }
    } else {
      setNumber(number + value);
    }
  };
  const del = (): void => {
    if (number === 'Error') {
      setNumber('0');
    } else if (number.length === 2 && number.includes('-')) {
      setNumber('0');
    } else if (number.length === 1) {
      setNumber('0');
    } else {
      setNumber(number.slice(0, number.length - 1));
    }
  };

  const clean = (): void => {
    setNumber('0');
    setLastNumber('0');
  };
  const changeSymbol = (): void => {
    if (number !== '0') {
      if (number.includes('-')) {
        setNumber(number.replace('-', ''));
      } else {
        setNumber('-' + number);
      }
    }
  };

  const changeLastNumber = (): void => {
    if (number.endsWith('.')) {
      setLastNumber(number.slice(0, number.length - 1));
    } else if (number === 'Error') {
      setLastNumber('0');
    } else {
      setLastNumber(number);
    }
    setNumber('0');
  };

  const btnAdd = () => {
    changeLastNumber();
    lastOperation.current = Operations.Add;
  };
  const btnSubstraction = () => {
    changeLastNumber();
    lastOperation.current = Operations.Substraction;
  };
  const btnMultiply = () => {
    changeLastNumber();
    lastOperation.current = Operations.Multiply;
  };
  const btnDivide = () => {
    changeLastNumber();
    lastOperation.current = Operations.Divide;
  };

  const calculate = (): void => {
    const num1 = Number(number);
    const num2 = Number(lastNumber);
    switch (lastOperation.current) {
      case Operations.Add:
        setNumber(`${num1 + num2}`);
        break;
      case Operations.Substraction:
        setNumber(`${num2 - num1}`);
        break;
      case Operations.Multiply:
        setNumber(`${num1 * num2}`);
        break;
      case Operations.Divide:
        if (num1 !== 0 && num2 !== 0) {
          setNumber(`${num2 / num1}`);
        } else {
          setNumber('Error');
        }
        break;
      default:
        break;
    }
    setLastNumber('0');
  };

  return {
    handleNumber,
    del,
    clean,
    changeSymbol,
    btnAdd,
    btnSubstraction,
    btnMultiply,
    btnDivide,
    calculate,
    lastNumber,
    number,
  };
};
