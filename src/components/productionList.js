/*
 * @Author: kangning1206
 * @Date:   2019-01-10 19:35:08
 * @Last Modified by:   kangning1206
 * @Last Modified time: 2019-01-13 12:51:16
 */

import React, { Component } from 'react';

import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { getProductionList as productionAction } from '../actions/productionAction';

class productionList extends Component {

  componentDidMount() {
    // 获取服务器数据
    this.requestProduction();
  }

  requestProduction() {
    const { productionAction, productionData: { page } } = this.props;
    productionAction({ page });
  }

  loadNextPage = () => {
    this.requestProduction();
  }

  render() {
    const { productionData: { items } } = this.props;
    const total = items.length;
    const productonItems = items.map(item => (
      <li className="item" key={item.id}>
        <a href="#a">
          <img className="img" src={item.img} alt={item.title} />
        </a>
        <div>
          <h3 className="title">{item.title}</h3>
          <div className="line">
            <a href="#/a" className="promo">
              <span>¥</span>
              <em>{(item.price * Math.random()).toFixed(2)}</em>
            </a>
            <a href="#/a" className="price">
              <span>¥</span>
              <em>{item.price}</em>
            </a>
          </div>
        </div>
      </li>
    ));

    return (
      <div className="container">
        <h1 className="hotsale-hd mod-hd bar-hd"><em>猜你喜欢- {total} producton</em></h1>
        <ul className="list">{productonItems}</ul>
        <div className="zan-center"><input type="button" className="zan-btn zan-btn--primary" onClick={this.loadNextPage} value="下一页"/></div>
      </div>
    );
  }
}

// 两属性一方法类型
productionList.propTypes = {
  productionAction: PropTypes.func.isRequired,
  productionData: PropTypes.object.isRequired,
  fooData: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  productionData: state.productionReducer,
  fooData: state.fooReducer
});

// connect 参数1: 给 props 注入属性; 参数2: 给 props注入方法
export default connect(
  mapStateToProps, { productionAction }
)(productionList);
