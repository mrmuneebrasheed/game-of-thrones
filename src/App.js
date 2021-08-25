import React from "react";
import Characters from "./components/Character";
import Card from "./components/Card";
import "bootstrap/dist/css/bootstrap.min.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      activeTab: "",
      characters: [],
      favorites: [],
      continents: [],
    };
  }
  componentDidMount() {
    fetch("https://thronesapi.com/api/v2/Characters").then((result) =>
      result.json().then((result) => this.setState({ characters: result }))
    );
    fetch("https://thronesapi.com/api/v2/Continents").then((result) =>
      result.json().then((result) => {
        this.setState({ continents: [...result] });
      })
    );
  }
  handleFavoriteClick(e) {
    // console.log(e.target.id);
    const favorites = [
      ...this.state.favorites,
      ...this.state.characters.filter(
        (character) => character.id === +e.target.id
      ),
    ];

    this.setState({ favorites: favorites });
  }
  showFavorites() {
    this.setState({ activeTab: "favorites" });
  }

  showAll() {
    this.setState({ activeTab: "character" });
  }
  showContinents() {
    this.setState({ activeTab: "continents" });
    console.log(this.state.continents);
  }
  modify() {
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title: "React POST Request Example" }),
    };
    fetch("https://thronesapi.com/api/v2/Characters", requestOptions);
  }
  render() {
    return (
      <div className="container col-8 bg-light">
        <h1 className="text-center bg-primary text-light p-3 mt-4">
          Game of Thrones
        </h1>
        <div className="d-flex justify-content-center p-3">
          <button
            onClick={this.showAll.bind(this)}
            className="btn btn-primary mx-2"
          >
            Show All Characters
          </button>
          <button
            onClick={this.showFavorites.bind(this)}
            className="btn btn-primary mx-2"
          >
            Show Favorites
          </button>
          <button
            onClick={this.showContinents.bind(this)}
            className="btn btn-primary mx-2"
          >
            Show Continents
          </button>
          <button
            onClick={this.modify.bind(this)}
            className="btn btn-primary mx-2"
          >
            Modify
          </button>
        </div>
        {this.state.activeTab === "character" && (
          <Characters
            handleFavorite={this.handleFavoriteClick.bind(this)}
            characters={this.state.characters}
          />
        )}
        {this.state.activeTab === "favorites" && (
          <Characters
            handleFavorite={this.handleFavoriteClick.bind(this)}
            characters={this.state.favorites}
          />
        )}
        {this.state.activeTab === "continents" &&
          this.state.continents.map((continent) => (
            <Card
              key={continent.id}
              className="d-flex flex-wrap justify-content-evenly"
            >
              <div className="h1 ">{continent.name}</div>
            </Card>
          ))}
      </div>
    );
  }
}

export default App;
