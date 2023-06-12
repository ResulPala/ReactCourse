import React, { Component } from "react";
import { ListGroup, ListGroupItem } from "reactstrap";
import { connect, bindActionCreators, } from "react-redux";
import categoryActions from '../redux/actions/categoryActions'

class Categories extends Component {

  componentDidMount() {
    this.props.actions.getCategories();
  }

  selectCategory = (category) => {
    this.props.actions.chanceCategory(category);
    this.props.actions.getProducts(category.id);
  }

  render() {
    return (
      <div>
        <ListGroup>
          {this.state.categories.map((category) => (
            <ListGroupItem
              active={
                category.categoryName === this.props.currentCategory.categoryName
                  ? true
                  : false
              }
              onClick={() => this.props.selectCategory(category)}
              key={category.id}
            >
              {category.categoryName}
            </ListGroupItem>
          ))}
        </ListGroup>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    currentCategory: state.chanceCategoryReducer,
    categories: state.categories,
  }
}

function mapDispatchToProps(dispatch) {
  return{
    getCategories: bindActionCreators(
      categoryActions.getCategories,
      dispatch
    ),
    chanceCategory: bindActionCreators(
      categoryActions.changeCategory,
      dispatch
    ),
    getProducts: bindActionCreators(
      categoryActions.getProducts,
      dispatch
    ),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Categories);