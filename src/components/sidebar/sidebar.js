import "./sidebar.scss";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import AdminPanelSettingsOutlinedIcon from '@mui/icons-material/AdminPanelSettingsOutlined';
import MedicalServicesIcon from '@mui/icons-material/MedicalServices';
import InsertChartIcon from "@mui/icons-material/InsertChart";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import PsychologyOutlinedIcon from "@mui/icons-material/PsychologyOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import {Link} from "react-router-dom";


const Sidebar = () => {
    return (
        <div className="sidebar">
            <div className="top">
                <Link to="/" style={{ textDecoration: "none" }}>
                    <span className="logo">Admin</span>
                </Link>
            </div>
            <hr />
            <div className="center">
                <ul>
                    <p className="title">MAIN</p>
                    <Link to="/" style={{ textDecoration: "none" }}>
                        <li>
                            <DashboardIcon className="icon" />
                            <span>Dashboard</span>
                        </li>
                    </Link>
                    <p className="title">LISTS</p>
                    <Link to="/patients" style={{ textDecoration: "none" }}>
                        <li>
                            <PersonOutlineIcon className="icon" />
                            <span>Patients</span>
                        </li>
                    </Link>
                    <Link to="/doctors" style={{ textDecoration: "none" }}>
                        <li>
                            <AdminPanelSettingsOutlinedIcon className="icon" />
                            <span>Doctors</span>
                        </li>
                    </Link>
                    <Link to="/hospitals" style={{ textDecoration: "none" }}>
                        <li>
                            <MedicalServicesIcon className="icon" />
                            <span>Hospitals</span>
                        </li>
                    </Link>
                    <p className="title">USEFUL</p>
                    <Link to="/" style={{ textDecoration: "none" }}>
                        <li>
                            <InsertChartIcon className="icon" />
                            <span>Stats</span>
                        </li>
                    </Link>
                    <p className="title">SERVICE</p>
                    <Link to="/logs" style={{ textDecoration: "none" }}>
                        <li>
                            <PsychologyOutlinedIcon className="icon" />
                            <span>Logs</span>
                        </li>
                    </Link>
                    <p className="title">USER</p>
                    <li>
                        <AccountCircleOutlinedIcon className="icon" />
                        <span>Profile</span>
                    </li>
                    <li>
                        <ExitToAppIcon className="icon" />
                        <span>Logout</span>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Sidebar;