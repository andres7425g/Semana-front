import React from "react";

class NewsList extends React.Component {
  render() {  
    return<button type="button" className="btn btn-primary">{this.props.name}</button> ;
  }
}

export default NewsList;