import "./doctorsList.scss";
import Navbar from "../../components/navbar/navbar";
import Sidebar from "../../components/sidebar/sidebar";
import DataTable from "../../components/datatable/datatable";

const DoctorsList = () => {
    return (
        <div className="doctors-list">
            <Sidebar />
            <div className="DoctorslistContainer">
                <Navbar title="Doctor's List" />
                <DataTable user="doctors" />
            </div>
        </div>
    );
};

export default DoctorsList;