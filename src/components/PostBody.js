import React from 'react';
import { connect } from 'react-redux';
class PostBody extends React.Component{
  constructor(){
    super();
  }
  render(){
    return(
      <div className="post-body">
        {this.props.id}
        <div className="comment-num">
          { this.props.comments[this.props.id].length }
        </div>
      </div>
    )
  }
 }
const mapStateToProps = (state) =>({
  comments:state.comments
});
export default connect (mapStateToProps)(PostBody);
