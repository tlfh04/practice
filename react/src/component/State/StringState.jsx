import React from "react";
import { useState } from "react";

export default function StringState() {
  const [stringState, setStringState] = useState("");
  function addText() {
    console.log("텍스트 추가");
    // 상태 업데이트 로직

    let newString = `${stringState}안녕`;
    setStringState(newString);
  }

  function clearText() {
    console.log("텍스트 초기화");
    // 상태 업데이트 로직
    setStringState("");
  }

  return (
    <div className="flex flex-col items-center p-6 border rounded-lg">
      <h2 className="text-2xl font-bold mb-4">문자열 상태 관리</h2>
      <p className="text-lg mb-4 min-h-6">현재 텍스트: {stringState}</p>
      <div className="flex gap-4">
        <button
          onClick={() => {
            addText();
          }}
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          "안녕" 추가
        </button>
        <button
          onClick={() => {
            clearText();
          }}
          className="bg-red-500 text-white px-4 py-2 rounded"
        >
          텍스트 초기화
        </button>
      </div>
    </div>
  );
}
