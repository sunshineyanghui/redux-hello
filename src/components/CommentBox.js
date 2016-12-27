import React from 'react';

class CommentBox extends React.Component{
  constructor(){
    super();
    this.state={
      comments:['yanghui:滴水穿石非一日之功','yoko:邂逅最美的那片海']
    }
  }
  handleSubmit(e){
    e.preventDefault();
    let val = this.refs.val.value;
    console.log(val);
    this.setState({
      comments:this.state.comments.concat(val)
    })
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
        <form onSubmit={this.handleSubmit.bind(this)} className="comment-form">
          <input type="text" ref="val" className="input" />
          <button className="submit">提交</button>
        </form>
        
      </div>
    )
  }
 }

export default CommentBox;
