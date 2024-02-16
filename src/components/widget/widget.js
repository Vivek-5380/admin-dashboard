import "./widget.scss";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import AdminPanelSettingsOutlinedIcon from '@mui/icons-material/AdminPanelSettingsOutlined';
import MedicalServicesIcon from '@mui/icons-material/MedicalServices';
// import StickyNote2OutlinedIcon from '@mui/icons-material/StickyNote2Outlined';

const Widget = ({ type }) => {
    let data;

    //temporary
    const amount = 100;
    const diff = 20;

    switch (type) {
        case "patients":
            data = {
                title: "PATIENTS",
                link: "See All Patients",
                icon: (
                    <PersonOutlinedIcon
                        className="icon"
                        style={{
                            color: "crimson",
                            backgroundColor: "rgba(255, 0, 0, 0.2)",
                        }}
                    />
                ),
            };
            break;

        case "doctors":
            data = {
                title: "DOCTORS",
                link: "View All Doctors",
                icon: (
                    <AdminPanelSettingsOutlinedIcon
                        className="icon"
                        style={{
                            backgroundColor: "rgba(218, 165, 32, 0.2)",
                            color: "goldenrod",
                        }}
                    />
                ),
            };
            break;

        case "hospitals":
            data = {
                title: "HOSPITALS",
                link: "View All Hospitals",
                icon: (
                    <MedicalServicesIcon
                        className="icon"
                        style={{ backgroundColor: "rgba(0, 128, 0, 0.2)", color: "green" }}
                    />
                ),
            };
            break;

        default:
            break;
    };

    return (
        <div className="widget">
            <div className="left">
                <span className="title">{data.title}</span>
                <span className="counter">{data.isAppointment && "#"} {amount}</span>
                <span className="link">{data.link}</span>
            </div>
            <div className="right">
                <div className="percentage positive">
                    <KeyboardArrowUpIcon />
                    +{diff} %
                </div>
                {data.icon}
            </div>
        </div>
    );
};

export default Widget;