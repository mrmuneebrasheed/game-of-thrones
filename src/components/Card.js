import React from "react";
import styled from "styled-components";
class Card extends React.Component {
  render() {
    const Div = styled.div`
      color: ${this.props.color ? "red" : "white"};
      background-color: ${this.props.color ? "red" : "blue"};
      border: 1px solid black;
      border-radius: ${this.props.color ? "20px" : "10px"};
    `;
    return (
      <Div
        className={`col-md-3 col-sm-5 m-2 flex-wrap overflow-auto ${this.props.className}`}
        style={{ maxHeight: "70%" }}
      >
        {this.props.children}
      </Div>
    );
  }
}
export default Card;
