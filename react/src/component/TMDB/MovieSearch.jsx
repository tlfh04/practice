import { useState } from "react";
import axios from "axios";
import Movie from "./Movie";

// BASE_URL 과 API_KEY 를 선언하고, 적절한 값을 할당한다
const BASE_URL = `https://api.themoviedb.org/3`;
const API_KEY = import.meta.env["VITE_TMDB_API_KEY"];

export default function MovieSearch() {
  // 검색 결과와 검색어를 관리할 적절한 상태를 생성한다
  const [movies, setMovie] = useState([]);
  const [keywords, setKeywords] = useState("");
  // onSubmit 이벤트와 onChange 이벤트의 핸들러 함수를 정의한다
  function handleChange(e) {
    const data = e.target["value"];
    setKeywords(data);
  }
  async function onSubmit(e) {
    e.preventDefault();
    const config = {
      method: "GET",
      url: `${BASE_URL}/search/movie`, // API 요청 URL
      // 요청 헤더
      headers: {
        "Content-Type": "application/json",
        accept: "application/json",
        Authorization: `Bearer ${API_KEY}`,
      },
      // 요청 쿼리 파라미터
      params: {
        query: keywords,
        language: "ko-KR",
      },
    };
    const res = await axios(config);
    const data = res["data"]["results"];

    setMovie(data);
    console.log(data);
  }
  return (
    <div>
      <form
        onSubmit={(e) => {
          // form 태그의 onSubmit 속성에서 실행할 함수를 정의하고, 호출한다
          onSubmit(e);
        }}
      >
        <input
          className="border-1"
          type="text"
          placeholder="영화 이름"
          onChange={(e) => {
            // input 태그의 onChange 속성에서 실행할 함수를 정의하고, 호출한다
            handleChange(e);
          }}
          value={keywords}
        />
        <input className="border-1" type="submit" value="검색" />
      </form>
      <ul>
        {/* Movie 컴포넌트를 활용하여 검색된 영화 데이터를 반복 생성하여 표시 */}
        {movies.map((ele) => {
          return <Movie key={ele["id"]} movie={ele}></Movie>;
        })}
      </ul>
    </div>
  );
}
