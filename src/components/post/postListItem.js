import React, { Component } from "react";
import { connect } from "react-redux";
import { getData } from "../../state/actions/index";

 class Post extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    // calling the new action creator
    this.props.getData();
  }

  render() {
      return(
      <ul>
        {this.props.articles.map(el => (
          <li key={el.id}>{el.title}</li>
        ))}
      </ul>     
      );
   
  }
}

function mapStateToProps(state){
    return{
        articles: state.remoteArticles
    };
}

export default connect(
  mapStateToProps,
  { getData }
)(Post);