import { useState } from "react";
import rimmo from "./assets/rimmo.png";
import "./App.css";

function App() {
  const [count, setCount] = useState(27);
  const collatz = (n: number) => (n % 2 === 0 ? n / 2 : n * 3 + 1);

  const socials = [
    {
      social: "X",
      url: "https://x.com/nishinoyama0312",
    },
    {
      social: "GitHub",
      url: "https://github.com/nishinoyama",
    },
    {
      social: "atcoder",
      url: "https://atcoder.jp/users/nishinoyama",
    },
    {
      social: "YouTube",
      url: "https://www.youtube.com/@nishinoyama0264",
    },
    {
      social: "note",
      url: "https://note.com/nishinoyama0312",
    },
  ];

  return (
    <>
      <section id="center">
        <div>
          <img src={rimmo} width={120} alt="" />
        </div>
        <div>
          <h1>nishinoyama</h1>
          <p>nishinoyama ポートフォリオ</p>
        </div>
        <button
          type="button"
          className="counter"
          onClick={() => setCount(collatz)}
        >
          Count is {count}
        </button>
      </section>
      <section id="next-steps">
        <div id="social">
          <h2>Socials</h2>
          <ul>
            {socials.map((s) => (
              <li key={s.social}>
                {s.social}
                <a href={s.url} target="_blank" rel="noopener noreferrer">
                  {s.url}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}

export default App;
