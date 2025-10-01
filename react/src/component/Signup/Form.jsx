import React, { useState } from "react";

export default function Form() {
  const [form, setForm] = useState({ email: "", password: "", cfpassword: "" });
  const [radio, setRadio] = useState("");
  const levels = [
    { id: 1, value: "신입" },
    { id: 2, value: "주니어" },
    { id: 3, value: "시니어" },
  ];
  function handleChange(e) {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  }
  function handleRadioChange(e) {
    setRadio(e["target"]["value"]);
  }

  return (
    <div className="bg-white p-6 border-gray-400 border-2 rounded-lg flex items-center justify-center py-10">
      <form action="">
        <h1 className="flex justify-center text-2xl font-bold">회원가입</h1>
        <div className="mt-2">
          <label for="email">이메일</label>
          <div>
            <input
              type="email"
              name="email"
              className="border-1"
              value={form.email}
              onChange={(e) => {
                handleChange(e);
              }}
              required
            />
          </div>
        </div>
        <div className="mt-2">
          <label for="password">비밀번호</label>
          <div>
            <input
              type="password"
              name="password"
              className="border-1"
              value={form.password}
              onChange={(e) => {
                handleChange(e);
              }}
              required
            />
          </div>
        </div>
        <div className="mt-2">
          <label for="cfpassword">비밀번호확인</label>
          <div>
            <input
              type="password"
              name="cfpassword"
              className="border-1"
              value={form.cfpassword}
              onChange={(e) => {
                handleChange(e);
              }}
              required
            />
          </div>
        </div>
        <div>
          {levels.map((level) => (
            <label key={level.id}>
              <input
                className="mt-4"
                type="radio"
                name="level"
                value={level.value}
                checked={radio === level.value}
                onClick={(e) => {
                  handleRadioChange(e);
                }}
              />
              {level.value}
            </label>
          ))}
        </div>
        <div className="flex justify-center mg-2">
          <button
            type="submit"
            className="mt-2 h-10 w-45 border-1 bg-blue-500 text-white"
          >
            회원가입
          </button>
        </div>
      </form>
    </div>
  );
}
