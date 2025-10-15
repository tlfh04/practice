import React from "react";
import { decrement } from "../store/counterSlice";
import { useDispatch, useSelector } from "react-redux";
export default function CountDecrement() {
  const dispatch = useDispatch();
  const step = useSelector((state) => state.counter.step);
  function handleDecrement() {
    dispatch(decrement());
  }
  return (
    <div>
      <button className="border-2" onClick={() => handleDecrement()}>
        전역 상태 count 감소
      </button>
      <div>현재 단위: {step}</div>
    </div>
  );
}
