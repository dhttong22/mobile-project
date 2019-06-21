import React, { Component, Fragment } from 'react';
import { connect } from "react-redux";

// 1 导入 action
import { num_fruit_add,num_fruit_sub,num_fruit_init } from "./store/actionCreators";
class PlusButton extends Component {

  render() {
    return (
      <button onClick={this.props.num_add}>+</button>
    );
  }
}

class SubstrButton extends Component {
  render() {
    return (
      <button onClick={this.props.num_subStr} >-</button>
    );
  }
}



class App extends Component {
  componentDidMount(){
    // 页面初次渲染完毕 就会执行
    this.props.num_init();
  }
  render() {

    return (
      <Fragment>
        <div> 水果：{this.props.num}</div>
        <hr />
        <div>
          <PlusButton {...this.props}></PlusButton>
          <SubstrButton {...this.props}></SubstrButton>
        </div>
      </Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  console.log(state);
  return {
    // 修改成了对象的形式使用 
    num: state.fruitReducer.num
  }
}
// 1 定义 对象 负责 处理所有的 app中action 
const mapDispatch = (dispatch) => {
  return {
    num_add: () => {
      // 2 创建一个action 负责 增加数据
     
      // 3 开始派发 action
      dispatch(num_fruit_add(10));
      // 4 以上代码执行完毕之后 会触发 store/reducers/index.js 里面的一个函数
    },
    num_subStr: () => {
      // 开始派发
      dispatch(num_fruit_sub());
    },
    // 数量的初始化 方法
    num_init:()=>{
      dispatch(num_fruit_init());
    }
  }
}
export default connect(mapStateToProps, mapDispatch)(App);
