import React, { Component } from 'react'
import { connect } from 'react-redux'
import { loadPostsAction } from '../actions/post'
class PostList extends Component {
  constructor(props) {
    super(props)
    console.log(props)
  }

  componentWillMount () {
    // this.props.dispatch1(loadPostsAction)
  }

  render() {
    const { list } = this.props.post;
    // const posts = list.map(post => {
    //   return (<li key={post.id}>
    //     {post.title}
    //   </li>)
    // })
    return (
      <div>
        <p onClick={() => this.props.dispatch1(loadPostsAction)}>123</p>
        <ul>
          {/* {
            posts
          } */}
        </ul>
        {
          console.log(this.props.post.name)
        }
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    post: state.post
  }
}

const mapDispatchToAction = (dispatch) => {
  return {
    dispatch1: (loadPostsAction) => {
      dispatch(loadPostsAction)
    }
  }
}

// 通过connect让子组件跟redux产生关系
export default connect(mapStateToProps, mapDispatchToAction)(PostList)