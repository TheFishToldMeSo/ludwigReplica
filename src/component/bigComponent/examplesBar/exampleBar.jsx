//import React to use return component function
import React from "react";
import ExampleChunks from "../../smallComponent/exampleChunks/exampleChunks";
import "./exampleBar.scss";

export default class ExampleBar extends React.Component {
  render() {
    return (
      <div className="example">
        <div className="exampleWrapper">
          <div className="contentWrapper">
            <div className="exampleContent">
              <div className="exampleHeader">
                <div className="exampleHeaderWrapper">
                  <div className="headerSituation">
                    What can you do with Ludwig
                  </div>
                  <span className="headerSolutionWrapper">
                    <span className="headerSolution">Try the examples</span>
                  </span>
                </div>
              </div>

              <div className="examples">
                <ExampleChunks
                  firstWord="Find"
                  situationGiven="your sentence in the best contexts"
                  beforeHighlight="several options are on the table"
                ></ExampleChunks>

                <ExampleChunks
                  firstWord="Translate "
                  situationGiven="in English in the smartest way"
                  hasHighlight="false"
                  beforeHighlight="provare per credere"
                ></ExampleChunks>

                <ExampleChunks
                  firstWord="Get "
                  situationGiven="definitions, synonyms and examples"
                  hasHighlight="false"
                  beforeHighlight="epiphany"
                ></ExampleChunks>

                <ExampleChunks
                  firstWord="Compare"
                  situationGiven="the frequency of two sentences"
                  hasHighlight="false"
                  beforeHighlight="sincerely yours "
                  highlight="VS"
                  afterHighlight=" best regards"
                ></ExampleChunks>

                <ExampleChunks
                  firstWord="Discover "
                  situationGiven="the missing word"
                  hasHighlight="true"
                  beforeHighlight="find the "
                  highlight="*"
                  afterHighlight=" word"
                ></ExampleChunks>

                <ExampleChunks
                  firstWord="Paraphrase "
                  situationGiven="your sentence"
                  hasHighlight="true"
                  beforeHighlight="the "
                  highlight="_aim"
                  afterHighlight=" of this paper"
                ></ExampleChunks>

                <ExampleChunks
                  firstWord="Compare"
                  situationGiven="the frequency of words"
                  hasHighlight="true"
                  highlight="[have take]"
                  afterHighlight=" a shower"
                ></ExampleChunks>

                <ExampleChunks
                  firstWord="Order "
                  situationGiven="a group of words"
                  hasHighlight="true"
                  highlight="{right order the in}"
                ></ExampleChunks>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
