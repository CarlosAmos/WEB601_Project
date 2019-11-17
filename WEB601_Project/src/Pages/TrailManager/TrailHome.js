import React, { Component } from 'react';
import DeleteIcon from '@material-ui/icons/Delete';
import AddIcon from '@material-ui/icons/Add';
import EditIcon from '@material-ui/icons/Edit';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import { Container, Col, Row } from 'react-bootstrap';
import './TrailHome.css';
import { IconButton } from '@material-ui/core';



export class TrailHome extends Component {

    render() {
        return (
            <div id="background">
                <Container>
                    <br />
                    <Row>

                        <Col md='4' xs='12'>
                            <div id="Trailbox">

                                <div id="IconBox">
                                    <IconButton id="Icon" size="large" aria-label="delete" href={'/TrailManager/AddTrails'}>
                                        <AddIcon />
                                        Add a Trail
                                </IconButton>
                                </div>

                            </div>
                        </Col>

                        <Col md='4' xs='12'>
                            <div id="Trailbox">

                                <div id="IconBox">
                                    <IconButton id="Icon" size="large" aria-label="delete" href={'/TrailManager/ManageTrails'}>
                                        <EditIcon />
                                        Edit a Trail
                                    </IconButton>
                                </div>

                            </div>
                        </Col>

                        <Col md='4' xs='12'>
                            <div id="Trailbox">

                                <div id="IconBox">
                                    <IconButton id="Icon" size="large" aria-label="delete" href={'/TrailManager/DeleteTrails'}>
                                        <DeleteIcon />
                                        Delete a Trail
                                    </IconButton>
                                </div>

                            </div>
                        </Col>

                    </Row>
                </Container>
            </div>
        )
    }
}