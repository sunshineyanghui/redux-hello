import React from 'react';
import store from '../store';
class CommentBox extends React.Component{
  constructor(){
    super();
    this.state={
      // comments:['yanghui:滴水穿石非一日之功','yoko:邂逅最美的那片海']
      comments:store.getState().comments
    }
  }
  handleSubmit(e){
    e.preventDefault();
    // let val = this.refs.val.value;
    // let comments = this.state.comments;
    // comments.push(val)
    // console.log(val);
    // this.setState({
    //   // comments:[...this.state.comments,val]
    //   comments:comments
    // })


    store.dispatch({type:'ADD_COMMENT',comment:this.refs.val.value})
    this.setState({comments: store.getState().comments});
    this.refs.commentFrom.reset()

  }
  render(){
    let commentList = this.state.comments.map((item,i) => (
      <li key={i} className="comment">{item}</li>
    ))
    return(
      <div className="comment-box">
        <ul>
          {commentList}
        </ul>
        <form ref="commentFrom" onSubmit={this.handleSubmit.bind(this)} className="comment-form">
          <input type="text" ref="val" className="input" />
          <button className="submit">提交</button>
        </form>

      </div>
    )
  }
 }

export default CommentBox;
