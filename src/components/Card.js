import React from "react";
class Card extends React.Component {
  render() {
    return (
      <div
        style={{ maxHeight: "70%" }}
        className={`bg-white border rounded  col-md-3 col-sm-5 m-2 ${this.props.className}`}
      >
        {this.props.children}
      </div>
    );
  }
}
export default Card;
