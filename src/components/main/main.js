import React, {Component} from 'react';
import './main.css';
import PostListItems from '../post/postListItem';
import LeftAside from '../side/side';
import withAuth from '../../services/withAuth';

 class Main extends Component {
   

    
  render () {
    return (
      <section className="mainContent">
<LeftAside className="left-aside"/>
       <PostListItems className="post-list-items"/>
      </section>
    );
  }
}
export default withAuth(Main) ;