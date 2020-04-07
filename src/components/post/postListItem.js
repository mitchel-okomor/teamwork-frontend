import React, { Component } from "react";
import "./postListItem.css";
import { connect } from "react-redux";
import { getData } from "../../state/actions/index";
class Post extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading : true,
      article : ""
    }
  }

  componentDidMount() {
    //getting article data and saving to state
    this.props.getData();
  }

  render() {
    if (this.props.articles) {
      return (
        <section className="post-item">
          {this.props.articles.map((el) => {
            if (el.img_url != null) {
              return (
                <article key={el.id} className="card">
                  <div className="card-header">
                    <div>
                      <h3>{el.author}</h3>
                      <em>
                        {el.tag} <span> {el.date_created} </span>
                      </em>
                    </div>
                     </div>
                    <div className="card-container">
                      <h4>
                        <b>{el.title}</b>
                      </h4>
                      <p>{el.body}</p>
                    </div>
                 
                </article>
              );
            } else {
              return (
                <article key={el.id} className="card">
                  <div className="card-header">
                    <img src={`${el.img_url}`} />
                    <div>
                      <h3>{el.author}</h3>
                      <em>
                        {el.tag} <span> {el.date_created} </span>
                      </em>
                    </div>
                  </div>
                  <div className="card-container">
                    <h4>
                      <b>{el.title}</b>
                    </h4>
                    <p>{el.body}</p>
                    <div className="extras">
                      <div><img src={require("../../assets/like.png") }></img> <span><b>likes</b></span>  </div>
                      <div><img src={require("../../assets/comment.PNG")}></img> <span><b>comments</b></span> </div>

                    </div>
                  </div>
                
                </article>
              );
            }
          })}
        </section>
      );
    } else {
      return (
        <article>
          <h1>Error</h1>
          <p>No articles to display 1</p>
        </article>
      );
    }
  }
}

function mapStateToProps(state) {
  return {
    articles: state.remoteArticles,
  };
}

export default connect(mapStateToProps, { getData })(Post);
