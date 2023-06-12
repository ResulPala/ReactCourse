import React, { Component } from "react";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardGroup,
  CardTitle,
  Button,
  Col,
} from "reactstrap";

export default class News extends Component {

    filterNewsByAgency = (newsList, agencyName) => {
        const filteredNewsList = newsList.filter((item) => item.source === agencyName);
        return filteredNewsList;
    }; 
  
   

    render() {
        const { news,currentAgency } = this.props;
        const filteredNews = this.filterNewsByAgency(news, currentAgency);
        return (
        <div>
            <h2>{this.props.currentAgency}</h2>
            <CardGroup>
            {filteredNews.map((newPara) => (
                <Col xs="3">
                <Card
                    style={{ marginLeft: "10px", marginRight: "10px" }}
                    key={newPara.id}
                >
                    <CardImg
                    top
                    width="100%"
                    src={newPara.image}
                    />
                    <CardBody>
                    <CardTitle>{newPara.name}</CardTitle>
                    
                    
                        
                
                    </CardBody>
                </Card>
                </Col>
            ))}
            </CardGroup>
        </div>
        );
    }
}
