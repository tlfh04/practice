import React from "react";
import { useState } from "react";
export default function Calculator() {
  const [result, setResult] = useState(0);
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);

  function add() {
    console.log("x + y");
    // 상태 업데이트 로직
    const result = x + y;
    setResult(result);
  }

  function subtract() {
    console.log("x - y");
    // 상태 업데이트 로직
    const result = x - y;
    setResult(result);
  }

  function multiply() {
    console.log("x * y");
    // 상태 업데이트 로직
    const result = x * y;
    setResult(result);
  }

  function divide() {
    console.log("x / y");
    // 상태 업데이트 로직
    const result = x / y;
    setResult(result);
  }

  function handleChange(event) {
    const { name, value } = event.target;
    if (name === "x") {
      setX(Number(value));
    } else if (name === "y") {
      setY(Number(value));
    }
  }

  return (
    <div className="flex flex-col items-center">
      <h2 className="text-4xl font-bold text-gray-800 mb-8">
        결과 값 : {result}
      </h2>
      <div>
        <input
          type="number"
          onChange={handleChange}
          name="x"
          className="w-full p-2 mb-3 border"
          placeholder="x"
        />
        <input
          type="number"
          onChange={handleChange}
          name="y"
          className="w-full p-2 mb-3 border"
          placeholder="y"
        />
      </div>
      <div className="flex gap-4">
        <button
          onClick={() => {
            add();
          }}
          className="bg-blue-500 text-white px-6 py-2 cursor-pointer"
        >
          더하기 +
        </button>
        <button
          onClick={() => {
            subtract();
          }}
          className="bg-blue-500 text-white px-6 py-2 cursor-pointer"
        >
          빼기 -
        </button>
        <button
          onClick={() => {
            multiply();
          }}
          className="bg-blue-500 text-white px-6 py-2 cursor-pointer"
        >
          곱하기 *
        </button>
        <button
          onClick={() => {
            divide();
          }}
          className="bg-blue-500 text-white px-6 py-2 cursor-pointer"
        >
          나누기 /
        </button>
      </div>
    </div>
  );
}
