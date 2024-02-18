import "./navbar.scss";

const Navbar = (props) => {
    return (
        <div className="navbar">
            <div className="wrapper">
                {props.title}
            </div>
        </div>
    );
};

export default Navbar;