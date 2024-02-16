import "./hostpitalsList.scss";
import Navbar from "../../components/navbar/navbar";
import Sidebar from "../../components/sidebar/sidebar";
import DataTable from "../../components/datatable/datatable";


const HostpitalsList = () => {
    return (
        <div className="hospital-list">
            <Sidebar />
            <div className="HospitalslistContainer">
                <Navbar />
                <DataTable user="hospitals" />
            </div>
        </div>
    );
};

export default HostpitalsList;