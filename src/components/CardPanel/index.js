/**
 * Card group for demonstration
 */

import './style.scss';

import React from 'react';
import PropTypes from 'prop-types';
import { 
  Row, 
  Col, 
  Card, 
  CardImg, 
  CardBody, 
  CardSubtitle, 
  CardText, 
  CardTitle 
} from 'reactstrap';

const CardPanel = (props) => (
  <Row>
    <Col xs="12" sm="12" md="5">
      <Card>
        <CardImg top width="100%" src="" />
        <CardBody>
          <CardTitle>Movie name</CardTitle>
          <CardSubtitle>Release date: 11/11/2017</CardSubtitle>
          <CardText>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit culpa adipisci porro, similique nostrum molestias voluptate ut? Quo, voluptates dolores cupiditate voluptatibus, ex, quis rem libero voluptate minus pariatur nesciunt.</CardText>
        </CardBody>
      </Card>
    </Col>
    <Col xs="12" sm="12" md="7">
      <Row>
        <Col xs="12" sm="6">
          <Card>
            <CardImg top width="100%" src="" />
            <CardBody>
              <CardTitle>Movie name</CardTitle>
              <CardSubtitle>Release date: 11/11/2017</CardSubtitle>
              <CardText>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit culpa adipisci porro, similique nostrum molestias voluptate ut? Quo, voluptates dolores cupiditate voluptatibus, ex, quis rem libero voluptate minus pariatur nesciunt.</CardText>
            </CardBody>
          </Card>
        </Col>
        <Col xs="12" sm="6">
          <Card>
            <CardImg top width="100%" src="" />
            <CardBody>
              <CardTitle>Movie name</CardTitle>
              <CardSubtitle>Release date: 11/11/2017</CardSubtitle>
              <CardText>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit culpa adipisci porro, similique nostrum molestias voluptate ut? Quo, voluptates dolores cupiditate voluptatibus, ex, quis rem libero voluptate minus pariatur nesciunt.</CardText>
            </CardBody>
          </Card>
        </Col>
      </Row>
      <Row>
        <Col xs="12" sm="6">
          <Card>
            <CardImg top width="100%" src="" />
            <CardBody>
              <CardTitle>Movie name</CardTitle>
              <CardSubtitle>Release date: 11/11/2017</CardSubtitle>
              <CardText>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit culpa adipisci porro, similique nostrum molestias voluptate ut? Quo, voluptates dolores cupiditate voluptatibus, ex, quis rem libero voluptate minus pariatur nesciunt.</CardText>
            </CardBody>
          </Card>
        </Col>
        <Col xs="12" sm="6">
          <Card>
            <CardImg top width="100%" src="" />
            <CardBody>
              <CardTitle>Movie name</CardTitle>
              <CardSubtitle>Release date: 11/11/2017</CardSubtitle>
              <CardText>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit culpa adipisci porro, similique nostrum molestias voluptate ut? Quo, voluptates dolores cupiditate voluptatibus, ex, quis rem libero voluptate minus pariatur nesciunt.</CardText>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </Col>
  </Row>
);

export default CardPanel