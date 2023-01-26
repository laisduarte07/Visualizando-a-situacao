import "./App.css";
import gif from "../public/gif.gif";
import imge from "../public/nbalogo.png";

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
          <img src={imge} />
          <details>
            <summary>Quais os 10 Times com mais Vitórias na Temporada?</summary>
            <div>
              <p className="copie">
                SELECT DISTINCT * from rankin where SEASON_ID= '2018'ORDER BY W
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
                '2018'ORDER BY HOME_RECORD DESC;
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
                '2018'ORDER BY ROAD_RECORD DESC;
              </p>
              <button className="button-cp" onClick={copiar}>
                Copiar
              </button>
            </div>
          </details>

          <details>
            <summary>Quais os Jogaores dos Times?</summary>
            <div>
              <p>
                SELECT jog.PLAYER_NAME, jog.TEAM_ID, t.NICKNAME FROM jogadores
                jog INNER JOIN team t ON t.TEAM_ID = jog.TEAM_ID;
              </p>
              <button className="button-cp" onClick={copiar}>
                Copiar
              </button>
            </div>
          </details>

          <details>
            <summary> Quais os Times com Maiores WINRATE?</summary>
            <div>
              <p>
                SELECT DISTINCT team,W,L from rankin WHERE SEASON_ID="2018" order by W DESC;
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
