import "./patients.scss";
import Sidebar from "../../components/sidebar/sidebar";
import Navbar from "../../components/navbar/navbar";
import Chart from "../../components/chart/chart";
import List from "../../components/table/table";

const Patients = () => {
    return (
        <div className="patients">
            <Sidebar />
            <div className="patientsContainer">
                <Navbar />
                <div className="top">
                    <div className="left">
                        <h1 className="title">Patients Information</h1>
                        <div className="item">
                            <img
                                src="https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
                                alt=""
                                className="itemImg"
                            />
                            <div className="details">
                                <h1 className="itemTitle">Jane Doe</h1>
                                <div className="detailItem">
                                    <span className="itemKey">Email:</span>
                                    <span className="itemValue">janedoe@gmail.com</span>
                                </div>
                                <div className="detailItem">
                                    <span className="itemKey">Phone:</span>
                                    <span className="itemValue">+91 2345 67 89</span>
                                </div>
                                <div className="detailItem">
                                    <span className="itemKey">Address:</span>
                                    <span className="itemValue">
                                        630, Gnan Marg , Satyavedu
                                    </span>
                                </div>
                                <div className="detailItem">
                                    <span className="itemKey">Age:</span>
                                    <span className="itemValue">65</span>
                                </div>
                                <div className="detailItem">
                                    <span className="itemKey">Recent Disease:</span>
                                    <span className="itemValue">Common Cold</span>
                                </div>
                                <div className="detailItem">
                                    <span className="itemKey">Last Appointment Date:</span>
                                    <span className="itemValue">16-02-2024</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="right">
                        <Chart aspect={3 / 1} title="Jane Doe's Appointments ( Last 1 Year)" />
                    </div>
                </div>
                <div className="bottom">
                    <h1 className="title">Latest Appointments</h1>
                    <List />
                </div>
            </div>
        </div>
    );
};

export default Patients;