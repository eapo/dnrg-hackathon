import React, { Component } from 'react';
import { Container, Row, Col, InputGroup, InputGroupAddon, InputGroupText, Input } from 'reactstrap';
import ChartComponent from './ChartComponent';
import moment from 'moment';
import './LandingPage.css';

export default class LandingPage extends Component {
    constructor (props) {
        super(props);
        this.state = {
            limitAuto : 32,
            limitHaz : 40,
            megtakNapi : 442,
            megtakHavi: 11200,
            olcsoAr: 34,
            uzenetek: [
                "FIGYELEM! Extra olcsó áram! Ma 22:15-től holnap 06:00-ig az NKM 30 Ft/kWh alatt adja az áramot.",
                "TIPP - Tegye automatikussá eleketromos autója töltését az NKM SmartChargerrel!",
                "TIPP - Spóroljon az áramszámlán, indítsa éjszaka a mosást!"
            ],
            automata: false,
        }     
    }
    componentDidMount() {
        this.setDate();
    }

    handleCarChange = (event) => {
        this.setState({
            limitAuto: Number(event.target.value),
            automata: false,
        });
    }
    handleHazChange = (event) => {
        this.setState({
            limitHaz: Number(event.target.value),
            automata: false,
        });
    }

    handleAutomata = (event) => {
        console.log(event.target.checked);
        this.setState({
            automata: event.target.checked,
        }, () => {
            if(this.state.automata) {
                this.setState({
                    limitAuto: this.state.olcsoAr,
                    limitHaz: this.state.olcsoAr,
                })
            }
        });
        
    }

    setDate = () => {
        const d = new Date();
        const newD = moment().format('YYYY. MM DD. HH:MM');
        this.setState({
            maiDatum: newD
        });
    }

    render () {
        return (
            <div className="LandingPage">
                <Container fluid={true}>
                    <Row>
                        <Col className="plottingArea" xs="12">
                            <ChartComponent 
                                limitAuto={this.state.limitAuto} 
                                limitHaz={this.state.limitHaz}
                                olcsoAr={this.state.olcsoAr} />
                        </Col>
                    </Row>
                    <Row>
                        <Col className="rangeArea" xs={{size: 12, order: 1}} sm={{size: 6, order: 1}}>                        
                            <Row>
                                <Col xs="12">
                                    <h1>Limit</h1>
                                </Col>
            
                                <Col xs="6">
                                    <h3>E-autótöltés</h3>
                                    <input 
                                        id="carRange" type="range" name="carRange" 
                                        min="28" step="1" max="45" 
                                        value={this.state.limitAuto} data-sizing="Ft / kWh" 
                                        list="ticks"
                                        onChange={this.handleCarChange}
                                    />
                                    <br/>
                                    <p className="limitSpan">{this.state.limitAuto} Ft/kWh</p>
                                </Col>
                                <Col xs="6">
                                    <h3>Háztartási eszközök</h3>
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
                                    <br/>
                                    <p className="limitSpan">{this.state.limitHaz} Ft/kWh</p>
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
                            </Row> 
                        </Col>
                        <Col className="savingArea" xs={{size: 12, order: 3}} sm={{size: 6, order: 2}}>
                            <Row>
                                <Col xs="12">
                                    <h1>Megtakarítás</h1>
                                </Col>
                                <Col className="bottomBorder text-left" xs={{size: 5, offset: 1}} >
                                    <h2>Elmúlt 24 <span>óra</span></h2>
                                </Col>
                                <Col className="bottomBorder text-right" xs={{size: 5}}>
                                    <h2>{this.state.megtakNapi} Ft</h2>
                                </Col>
                                <Col className="bottomBorder text-left" xs={{size: 5,  offset: 1}}>
                                    <h2>Elmúlt 30 <span>nap</span></h2>
                                </Col>
                                <Col className="bottomBorder text-right" xs={{size: 5}}>
                                    <h2>{this.state.megtakHavi} Ft</h2>
                                </Col>
                            </Row>
                        </Col>
                
                        <Col className="discountArea" xs={{size: 12, order: 2}} sm={{size: 6, order: 3}}>
                            <h1>Automatikus árazás</h1>
                            <h3 >Az NKM által ajánlott kedvezményes ár:</h3>
                            <h3 >{this.state.olcsoAr} Ft / kWh.</h3> 
                            <p >Érvényes: {this.state.maiDatum}-től ma éjfélig.</p>
                            <InputGroup>
                                <InputGroupAddon addonType="prepend">
                                <InputGroupText>
                                    <Input addon 
                                        type="checkbox" 
                                        onChange={this.handleAutomata} 
                                        checked={this.state.automata} 
                                        name="automata"
                                        aria-label="Automatikus árazás választó gomb." />
                                </InputGroupText>
                                </InputGroupAddon>
                                <Input placeholder="Az automatikus árazást választom." />
                            </InputGroup>
                        </Col>
                        <Col className="messageArea" xs={{size: 12, order: 4}} sm={{size: 6, order: 4}}>
                            <h1>Üzenetek</h1>
                            {this.state.uzenetek.map((u, i) => {
                                return <p className="messageP" key={i}>{u}</p>
                            })}
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}