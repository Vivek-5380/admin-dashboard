import "./doctorsList.scss";
import Navbar from "../../components/navbar/navbar";
import Sidebar from "../../components/sidebar/sidebar";
import DataTable from "../../components/datatable/datatable";

const DoctorsList = () => {
    return (
        <div className="doctors-list">
            <Sidebar />
            <div className="DoctorslistContainer">
                <Navbar />
                <DataTable user="doctor" />
            </div>
        </div>
    );
};

export default DoctorsList;