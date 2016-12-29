import React from 'react';
import { connect } from 'react-redux';
class PostBody extends React.Component{
  constructor(){
    super();
  }
  render(){
    return(
      <div className="post-body">
        <div className="comment-num">
          { this.props.comments.length }
        </div>
      </div>
    )
  }
 }
const mapStateToProps = (state) =>({
  comments:state
});
export default connect (mapStateToProps)(PostBody);
