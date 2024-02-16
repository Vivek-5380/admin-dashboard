import "./featured.scss";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpOutlinedIcon from "@mui/icons-material/KeyboardArrowUpOutlined";

const Featured = () => {
    return (
        <div className="featured">
            <div className="top">
                <h1 className="title">
                    Percentage Change In Appointment
                </h1>
                <MoreVertIcon fontSize="small" />
            </div>
            <div className="bottom">
                <div className="featuredChart">
                    <CircularProgressbar 
                        value={70} 
                        text={"70%"} 
                        strokeWidth={5}
                        styles={{
                            path: {
                                stroke: '#36ffbc',
                            },
                            text: {
                                fill: '#36ffbc',
                            }
                        }}
                    />
                </div>
                <p className="title">Total Appointment</p>
                <p className="amount">242</p>
                <p className="desc">
                    Previous Appointment Processing. 
                    <br />
                    Last Appointment May Not Be Included.
                </p>
                <div className="summary">
                    <div className="item">
                        <div className="itemTitle">Today</div>
                        <div className="itemResult negative">
                            <KeyboardArrowDownIcon fontSize="small" />
                            <div className="resultAmount">#0</div>
                        </div>
                    </div>
                    <div className="item">
                        <div className="itemTitle">This Month</div>
                        <div className="itemResult positive">
                            <KeyboardArrowUpOutlinedIcon fontSize="small" />
                            <div className="resultAmount">#10</div>
                        </div>
                    </div>
                    <div className="item">
                        <div className="itemTitle">Last Month</div>
                        <div className="itemResult positive">
                            <KeyboardArrowUpOutlinedIcon fontSize="small" />
                            <div className="resultAmount">#50</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Featured;