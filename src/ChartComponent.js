import React from 'react';
import {
    Charts,
    ChartContainer,
    ChartRow,
    YAxis,
    LineChart,
    Baseline,
    Resizable
} from "react-timeseries-charts";
import { TimeSeries, Index } from 'pondjs';

// fake price data for two days
const importedJSON = require('./fakepricedata.json');

// map JSON to [Index, value] format --> TimeSeries
const points = importedJSON.widget[0].data.map(([d, value]) => [Index.getIndexString("1h", new Date(d)), value]);

// construct TimeSeries object
const data = {
    name : "price",
    columns : ["index", "value"],
    points,
}
const series = new TimeSeries(data);

const style = {
    value: {
        stroke: "#2098ff",
        opacity: 0.2,
        strokeWidth: 2,
    }
};

const baselineStyleAuto = {
    line: {
        stroke: "#350b72",
        strokeWidth: 2,
        opacity: 0.5,
        strokeDasharray: "1,1"
    },
    label: {
        fill: "#350b72"
    }
};

const baselineStyleHaz = {
    line: {
        stroke: "#ff7c2b",
        strokeWidth: 2,
        opacity: 0.5,
        strokeDasharray: "1,1"
    },
    label: {
        fill: "#ff7c2b"
    }
};

const baselineStyleNvm = {
    line: {
        stroke: "#ff7c2b",
        strokeWidth: 3,
        opacity: 0.5,
    },
    label: {
        fill: "#red"
    }
};

export default class ChartComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            tracker: null,
            timerange: series.range(),
        };
    }
    
    render() {
        const { limitAuto, limitHaz, olcsoAr } = this.props;
        return (
            <Resizable>
                <ChartContainer 
                title="Villamosenergia ára az elmúlt 24 órában"    
                timeRange={series.range()}>
                    <ChartRow height="400">
                        <YAxis id="axis1" label="Ft / kWh" min={28} max={45} width="60"  />
                        <Charts>
                            <LineChart axis="axis1" series={series} columns={["value"]} style={style}/>
                            <Baseline 
                                axis="axis1"
                                value={limitAuto}
                                label="E-autó"
                                position="right"
                                style={baselineStyleAuto} />
                            <Baseline 
                                axis="axis1"
                                value={limitHaz}
                                label="Háztartás"
                                position="right"
                                style={baselineStyleHaz} />
                            <Baseline 
                                axis="axis1"
                                value={olcsoAr}
                                label="NKM automatikus ár"
                                position="left"
                                style={baselineStyleNvm} />
                        </Charts>
                    </ChartRow>
                </ChartContainer>
            </Resizable>
        )
    }
}