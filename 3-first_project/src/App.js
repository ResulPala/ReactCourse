import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import Agencies from './Agencies';
import News from './News';
import {Route, Routes} from 'react-router-dom'

export default class App extends Component {
  state = {
    news: [],
    currentAgency: "",
    lastKey: 0
  };

  componentDidMount() {
    this.getNews();
  }

  getNews = () => {

    fetch("https://api.collectapi.com/news/getNews?country=tr&tag=general", {
      headers: {
        "content-type": "application/json",
        "authorization": "apikey 4OtP6sIsRfDnGinUUSfZTG:78vbunVFClZG4HVB2HedTB"
      }
    })
      .then((response) => response.json())
      .then((data) => {
        const existingList = this.state.news;
        const listToAdd = data.result;
        for (let i = 0; i < listToAdd.length; i++) {
          listToAdd[i].key = this.state.lastKey + 1;
          this.setState({lastKey : listToAdd[i].key})
          existingList.push(listToAdd[i]);
        }
        this.setState({ news : existingList });
    });
    console.log(this.state.news);
  };

      

  changeAgency = (agency) => {
    this.setState({ currentAgency: agency });
  };

  render() {
    return (
      <Container>
        <Row>
          <Col xs="3">
            <Agencies
              changeAgency={this.changeAgency}
              currentAgency={this.state.currentAgency}
            />
          </Col>
          <Col xs="9">
            
            <News
              news={this.state.news}
              currentAgency = {this.state.currentAgency}
            />
          </Col>
        </Row>
      </Container>
    );
  }
}