import "./App.css";
import gif from "../public/Design sem nome (1).gif";

function App() {
  function copiar(event) {
    const button = event.target;
    const summary = button.parentNode;
    const details = summary.parentNode;
    const content = details.querySelector("p");
    navigator.clipboard.writeText(content.textContent);
  }
  return (
    <div className="App">
      <div className="video">
        <img className="gif" src={gif} />

        <div className="detalhes">
          <img src="public\nba-logo-png-33606.png" />
          <details>
            <summary>Quais os 10 Times com mais Vitórias na Temporada?</summary>
            <div>
              <p className="copie">
                SELECT DISTINCT * from rankin where SEASON_ID= '22018'ORDER BY W
                DESC;
              </p>
              <button className="button-cp" onClick={copiar}>
                Copiar
              </button>
            </div>
          </details>

          <details>
            <summary>Quais os Times que tem mais Vitórias em casa?</summary>
            <div>
              <p>
                SELECT DISTINCT HOME_RECORD, TEAM FROM rankin where SEASON_ID=
                '22018'ORDER BY HOME_RECORD DESC;
              </p>
              <button className="button-cp" onClick={copiar}>
                Copiar
              </button>
            </div>
          </details>

          <details>
            <summary>
              Quais são os Times com Mais Vitórias Fora de Casa?
            </summary>
            <div>
              <p>
                SELECT DISTINCT ROAD_RECORD, TEAM FROM rankin WHERE SEASON_ID=
                '22018'ORDER BY ROAD_RECORD DESC;
              </p>
              <button className="button-cp" onClick={copiar}>
                Copiar
              </button>
            </div>
          </details>

          <details>
            <summary>Qual time tem mais assistência na SEASON?</summary>
            <div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit Quibusda
                m dicta sapiente totam libero non repellat natus, ducimus,
                soluta veritatis inventore reprehenderit maiores maxime corrupti
                Voluptatibus nisi explicabo ab tempore obcaecati?
              </p>
              <button className="button-cp" onClick={copiar}>
                Copiar
              </button>
            </div>
          </details>

          <details>
            <summary> Qual jogador tem mais assistência na SEASON?</summary>
            <div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit Quibusda
                m dicta sapiente totam libero non repellat natus, ducimus,
                soluta veritatis inventore reprehenderit maiores maxime corrupti
                Voluptatibus nisi explicabo ab tempore obcaecati?
              </p>
              <button className="button-cp" onClick={copiar}>
                Copiar
              </button>
            </div>
          </details>

          <details>
            <summary> Qual jogador fez mais rebote na SEASON?</summary>
            <div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit Quibusda
                m dicta sapiente totam libero non repellat natus, ducimus,
                soluta veritatis inventore reprehenderit maiores maxime corrupti
                Voluptatibus nisi explicabo ab tempore obcaecati?
              </p>
              <button className="button-cp" onClick={copiar}>
                Copiar
              </button>
            </div>
          </details>

          <details>
            <summary> Qual time fez mais rebote na SEASON?</summary>
            <div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit Quibusda
                m dicta sapiente totam libero non repellat natus, ducimus,
                soluta veritatis inventore reprehenderit maiores maxime corrupti
                Voluptatibus nisi explicabo ab tempore obcaecati?
              </p>
              <button className="button-cp" onClick={copiar}>
                Copiar
              </button>
            </div>
          </details>
        </div>
      </div>
    </div>
  );
}

export default App;
