import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';

export default class LandingPage extends Component {
    constructor (props) {
        super(props);
        this.state = {
            limitAuto : 36,
            limitHaz : 36,
            megtakNapi : 442,
            megtakHavi: 11200,
            olcsoAr: 30,
            uzenetek: [
                "FIGYELEM! A kedvezményes időszak ma 22:15-kor kezdődik.",
                "TIPP - Automatikus e-autótöltés az NKM SmartChargerrel",

            ]
        }     
    }
    componentDidMount() {
        this.setDate();
    }

    handleCarChange = (event) => {
        this.setState({limitAuto: event.target.value});
    }
    handleHazChange = (event) => {
        this.setState({limitHaz: event.target.value});
    }


    setDate = () => {
        const d = new Date();
        let result = `${d.getFullYear()}-${d.getMonth()+1}-${d.getDate()}`;
        this.setState({
            maiDatum: result
        });

    }

    render () {
        return (
            <div className="LandingPage">
                <Container>
                    <Row>
                        <Col className="plottingArea" xs="12">
                            Plotting area
                        </Col>
                    </Row>
                    <Row>
                        <Col className="rangeArea" xs="12" sm="6">                        
                            <Col xs="12">
                                <h1>Limit</h1>
                            </Col>
                            <Col xs="12">
                                <h3>E-autótöltés</h3>
                            </Col>
                            <Col xs="12">
                                <input 
                                    id="carRange" type="range" name="carRange" 
                                    min="28" step="1" max="45" 
                                    value={this.state.limitAuto} data-sizing="Ft / kWh" 
                                    list="ticks"
                                    onChange={this.handleCarChange}
                                />
                                <span>{this.state.limitAuto} Ft/kWh</span>
                            </Col>
                            <Col xs="12">
                                <h3>Háztartási eszközök</h3>
                            </Col>
                            <Col xs="12">
                                <input 
                                    id="hazRange" 
                                    type="range" 
                                    name="hazRange" 
                                    min="28" 
                                    max="45" 
                                    step="1" 
                                    value={this.state.limitHaz} 
                                    data-sizing="Ft / kWh" 
                                    list="ticks"
                                    onChange={this.handleHazChange}
                                />
                                <span>{this.state.limitHaz} Ft/kWh</span>
                            </Col>
                            <datalist id="ticks">
                                <option value="28" label="28 Ft"></option>
                                <option value="29"></option>
                                <option value="30"></option>
                                <option value="31"></option>
                                <option value="32"></option>
                                <option value="33"></option>
                                <option value="34"></option>
                                <option value="35"></option>
                                <option value="36" label="35 Ft"></option>
                                <option value="37"></option>
                                <option value="38"></option>
                                <option value="39"></option>
                                <option value="40"></option>
                                <option value="41"></option>
                                <option value="42"></option>
                                <option value="43"></option>
                                <option value="44"></option>
                                <option value="45" label="45 Ft"></option>
                            </datalist> 
                        </Col>
                        <Col className="priceArea" xs="12" sm="6">
                            <Row>
                                <Col xs="12">
                                    <h1>Megtakarítás</h1>
                                </Col>
                                <Col xs="6">
                                    <h2>24 <span>óra</span></h2>
                                </Col>
                                <Col xs="6">
                                    <h2>30 <span>nap</span></h2>
                                </Col>
                                <Col xs="6">
                                    <h3>{this.state.megtakNapi} Ft</h3>
                                </Col>
                                <Col xs="6">
                                    <h3>{this.state.megtakHavi} Ft</h3>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs="6">
                            <h1>Kedvezményes ár</h1>
                            <h2>{this.state.olcsoAr} Ft / kWh</h2>
                            <p>{this.state.maiDatum}</p>
                        </Col>
                        <Col xs="6">
                            <h1>Üzenetek</h1>
                            {this.state.uzenetek.map((u, i) => {
                                return <p key={i}>{u}</p>
                            })}
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}