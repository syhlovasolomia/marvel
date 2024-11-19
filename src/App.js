import { Component } from "react";
import AppHeader from "../AppHeader/AppHeader";
import RandomChar from "../RandomChar/RandomChar";
import CharList from "../CharList/CharList";
import CharInfo from "../CharInfo/CharInfo";
import ErrorBoundary from "./components/ErrorBoundary/ErrorBoundary";

import decoration from '../../resources/img/vision.png'

class App extends Component {

  state = {
    selectedChar: null
  }

  onCharSelected = (id) => {
    this.setState({
      selectedChar: id
    })
  }

  render() {
    return (
      <div className="App">
        <AppHeader />
        <main>
          <ErrorBoundary>
            <RandomChar />
          </ErrorBoundary>
          <div className="char__content">
            <ErrorBoundary>
              <CharList onCharSelected={this.onCharSelected} />
            </ErrorBoundary>
            <ErrorBoundary>
              <CharInfo charId={this.state.selectedChar} />
            </ErrorBoundary>
          </div>
          <img className="bg-decoration" src={decoration} alt="vision" />
        </main>
      </div>
    )
  }
}

export default App;