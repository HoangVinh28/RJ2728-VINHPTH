import { useState } from "react";
import Styles from "./Tabs.module.css";

function Tabs() {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index: number) => {
    setToggleState(index);
  };

  return (
    <div className={Styles.container}>
      <div className={Styles.bloc_tabs}>
        <button
          className={
            toggleState === 1
              ? `${Styles.active_tabs}`
              : `${Styles.unactive_tabs}`
          }
          onClick={() => toggleTab(1)}
        >
          HISTORY
        </button>
        <button
          className={
            toggleState === 2
              ? `${Styles.active_tabs}`
              : `${Styles.unactive_tabs}`
          }
          onClick={() => toggleTab(2)}
        >
          APPROACH
        </button>
        <button
          className={
            toggleState === 3
              ? `${Styles.active_tabs}`
              : `${Styles.unactive_tabs}`
          }
          onClick={() => toggleTab(3)}
        >
          CULTURE
        </button>
      </div>

      <div className={Styles.content_tabs}>
        <div
          className={
            toggleState === 1
              ? `${Styles.active_content}`
              : `${Styles.unactive_content}`
          }
        >
          <p>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo inventore veritatis et quasi architecto beatae vitae
            dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
            aspernatur aut odit aut fugit, sed quia consequuntur magni dolores.
          </p>
        </div>

        <div
          className={
            toggleState === 2
              ? `${Styles.active_content}`
              : `${Styles.unactive_content}`
          }
        >
          <p>
            At vero eos et accusamus et iusto odio dignissimos ducimus qui
            blanditiis praesentium voluptatum deleniti atque corrupti quos
            dolores et quas molestias excepturi sint occaecati cupiditate non
            provident, similique sunt in culpa qui officia deserunt mollitia
            animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis
            est.
          </p>
        </div>

        <div
          className={
            toggleState === 3
              ? `${Styles.active_content}`
              : `${Styles.unactive_content}`
          }
        >
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos sed
            nostrum rerum laudantium totam unde adipisci incidunt modi alias!
            Accusamus in quia odit aspernatur provident et ad vel distinctio
            recusandae totam quidem repudiandae omnis veritatis nostrum
            laboriosam architecto optio rem, dignissimos voluptatum beatae
            aperiam voluptatem atque. Beatae rerum dolores sunt.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Tabs;
