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
import { TimeRange, TimeSeries, Index } from 'pondjs';
import moment from 'moment';

// a day ago
// let ta = moment().subtract(1,"day");
// let tb = moment();
// const timerange1 = new TimeRange(ta, tb);

const importedJSON = require('./fakepricedata.json');

const points = importedJSON.widget[0].data.map(([d, value]) => [Index.getIndexString("1h", new Date(d)), value]);
console.log({points})
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
        stroke: "steelblue",
        strokeWidth: 1,
        opacity: 0.5
    },
    label: {
        fill: "steelblue"
    }
};

const baselineStyleExtraLite = {
    line: {
        stroke: "steelblue",
        strokeWidth: 1,
        opacity: 0.2,
        strokeDasharray: "1,1"
    },
    label: {
        fill: "steelblue"
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
            <ChartContainer 
            title="Villamosenergia ára az elmúlt 24 órában"    
            timeRange={series.range()} 
                width={800} 
                >
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
        )
    }
}