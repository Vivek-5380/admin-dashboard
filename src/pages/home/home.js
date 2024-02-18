import "./home.scss";
import Sidebar from "../../components/sidebar/sidebar";
import Navbar from "../../components/navbar/navbar";
import Widget from "../../components/widget/widget";
import Featured from "../../components/featured/featured";
import Chart from "../../components/chart/chart";
import List from "../../components/table/table";

const Home = () => {
    return (
        <div className="home">
            <Sidebar />
            <div className="homeContainer">
                <Navbar title="Dashboard" />
                <div className="widgets">
                    <Widget type="patients"/>
                    <Widget type="doctors"/>
                    <Widget type="hospitals"/>
                </div>
                <div className="charts">
                    <Featured />
                    <Chart aspect={3 / 1} title="Appointments Per Month" />
                </div>
                <div className="listContainer">
                    <div className="listTitle">
                        Latest Appointments
                    </div>
                    <List />
                </div>
            </div>
        </div>
    );
};

export default Home;