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
        stroke: "#a02c2c",
        opacity: 0.2
    }
};

const baselineStyleLite = {
    line: {
        stroke: "crimson",
        strokeWidth: 2,
        opacity: 0.5
    },
    label: {
        fill: "crimson"
    }
};

const baselineStyleExtraLite = {
    line: {
        stroke: "darkgreen",
        strokeWidth: 2,
        opacity: 0.5,
        strokeDasharray: "1,1"
    },
    label: {
        fill: "darkgreen"
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
        const { limitAuto, limitHaz } = this.props;
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
                                style={baselineStyleLite} />
                            <Baseline 
                                axis="axis1"
                                value={limitHaz}
                                label="Háztartás"
                                position="left"
                                style={baselineStyleExtraLite} />
                        </Charts>
                    </ChartRow>
                </ChartContainer>
            </Resizable>
        )
    }
}