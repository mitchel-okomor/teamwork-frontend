import React, {Component} from 'react';
import './postListItem.css';
import {connect} from 'react-redux';
import {getData} from '../../state/actions/index';
class Post extends Component {
  constructor (props) {
    super (props);
  }

  componentDidMount () {
    // calling the new action creator
    this.props.getData ();
  }

  render () {
    if (this.props.articles) {
      return (
        <section className="post-item">
          {this.props.articles.map (el => {
            if (el.img_url) {
              return(    <div>
                <img />
                <h1 />
              </div>)
          
            } else {
              return(<article key={el.id}>
                <div><h2> {el.title}</h2>  </div>
                <p>
                  <a href="#">{el.tag}</a>
                  <span> <em>{el.date_created}</em></span>
                </p>

                <p>{el.body}</p>
              </article>)
              
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

function mapStateToProps (state) {
  return {
    articles: state.remoteArticles,
  };
}

export default connect (mapStateToProps, {getData}) (Post);
