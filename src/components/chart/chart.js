import "./chart.scss";
import {
    AreaChart,
    Area,
    XAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
} from "recharts";

const data = [
    { name: "Jan", Total: 12 },
    { name: "Feb", Total: 21 },
    { name: "March", Total: 80 },
    { name: "April", Total: 16 },
    { name: "May", Total: 9 },
    { name: "June", Total: 17 },
    { name: "July", Total: 11 },
    { name: "Aug", Total: 100 },
    { name: "Sep", Total: 27 },
    { name: "Oct", Total: 54 },
    { name: "Nov", Total: 8 },
    { name: "Dec", Total: 34 },
];

const Chart = () => {
    return (
        <div className="chart">
            <div className="title">Appointments Per Month</div>
            <ResponsiveContainer width="100%" aspect={3 / 1}>
                <AreaChart
                    width={730}
                    height={250}
                    data={data}
                    margin={{ top: 10, right: 20, left: 20, bottom: 0 }}
                >
                    <defs>
                        <linearGradient id="total" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#36ffbc" stopOpacity={0.8} />
                            <stop offset="95%" stopColor="#36ffbc" stopOpacity={0} />
                        </linearGradient>
                    </defs>
                    <XAxis dataKey="name" stroke="gray" />
                    <CartesianGrid strokeDasharray="3 3" className="chartGrid" />
                    <Tooltip />
                    <Area
                        type="monotone"
                        dataKey="Total"
                        stroke="#36ffbc"
                        fillOpacity={1}
                        fill="url(#total)"
                    />
                </AreaChart>
            </ResponsiveContainer>
        </div>
    );
};

export default Chart;