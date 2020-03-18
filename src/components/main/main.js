import React, {Component} from 'react';
import PostListItems from '../post/postListItem';
import './main.css';

export default class Main extends Component {
   

    
  render () {
    return (
      <section className="mainContent">
       <PostListItems />
      </section>
    );
  }
}
