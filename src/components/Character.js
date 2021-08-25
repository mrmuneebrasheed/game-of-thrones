import React from "react";
import Card from "./Card";
class Characters extends React.Component {
  render() {
    return (
      <ul
        style={{ height: "80vh" }}
        className="d-flex flex-wrap justify-content-evenly overflow-auto"
      >
        {this.props.characters.map((character) => {
          if (this.props.characters === [])
            return <div className="h2">No Characters to show</div>;
          return (
            <Card key={character.id}>
              <img
                className="mt-3 mx-auto d-block"
                alt="character Img"
                style={{ objectFit: "contain" }}
                src={character.imageUrl}
                width="90%"
                height="250px"
              ></img>
              <div className="h4 text-center mt-1 p-1 text-primary">
                {character.firstName} {character.lastName}
              </div>
              <div className="h5 text-center p-1 text-danger">
                {character.title}
              </div>
              <div className="d-flex justify-content-center p-3">
                <button
                  id={character.id}
                  onClick={this.props.handleFavorite}
                  className="btn btn-primary"
                >
                  Mark Favorite
                </button>
              </div>
            </Card>
          );
        })}
      </ul>
    );
  }
}
export default Characters;
