import React from "react";
import { useState } from "react";

export default function ObjectState() {
  const [user, setUser] = useState({ name: "홍길동", age: 25 });
  function updateName() {
    console.log("이름 업데이트");
    // 상태 업데이트 로직
    let newObject = { ...user, name: "김철수" };
    setUser(newObject);
  }

  function increaseAge() {
    console.log("나이 증가");
    // 상태 업데이트 로직
    let newObject = { ...user, age: user.age + 1 };
    setUser(newObject);
  }

  function resetUser() {
    console.log("사용자 정보 초기화");
    // 상태 업데이트 로직
    let newObject = { name: "홍길동", age: 25 };
    setUser(newObject);
  }

  return (
    <div className="flex flex-col items-center p-6 border rounded-lg">
      <h2 className="text-2xl font-bold mb-4">객체 상태 관리</h2>
      <div className="text-center mb-4">
        <p className="text-lg">이름: {user.name}</p>
        <p className="text-lg">나이: {user.age}</p>
      </div>
      <div className="flex gap-2 flex-wrap justify-center">
        <button
          onClick={() => {
            updateName();
          }}
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          이름을 "김철수"로 업데이트
        </button>
        <button
          onClick={() => {
            increaseAge();
          }}
          className="bg-green-500 text-white px-4 py-2 rounded"
        >
          나이 +1
        </button>
        <button
          onClick={() => {
            resetUser();
          }}
          className="bg-gray-500 text-white px-4 py-2 rounded"
        >
          초기화
        </button>
      </div>
    </div>
  );
}
