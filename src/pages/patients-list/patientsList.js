import Navbar from "../../components/navbar/navbar";
import Sidebar from "../../components/sidebar/sidebar";
import DataTable from "../../components/datatable/datatable";
import "./patientsList.scss";

const PatientsList = () => {
    return (
        <div className="patient-list">
            <Sidebar />
            <div className="PatientlistContainer">
                <Navbar />
                <DataTable user="patient" />
            </div>
        </div>
    );
};

export default PatientsList;