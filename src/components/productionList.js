/*
 * @Author: kangning1206
 * @Date:   2019-01-10 19:35:08
 * @Last Modified by:   kangning1206
 * @Last Modified time: 2019-01-12 18:15:05
 */

import React, { Component } from 'react';

import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { getProductionList as productionAction } from '../actions/productionAction';

class productionList extends Component {
  componentDidMount() {
    this.props.productionAction();
  }

  render() {
    const { productionData: { items, total } } = this.props;
    const productonItems = items.map(item => (
      <li key={item.id} className="item">
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
      </div>
    );
  }
}

productionList.propTypes = {
  productionAction: PropTypes.func.isRequired,
  productionData: PropTypes.object.isRequired,
  fooData: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  productionData: state.productionReducer,
  fooData: state.fooReducer
});

export default connect(
  mapStateToProps, { productionAction }
)(productionList);
