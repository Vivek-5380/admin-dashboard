import "./datatable.scss";
import { DataGrid } from "@mui/x-data-grid";
import { 
    userColumnsPatients, 
    userRowsPatients ,
    userColumnsDoctors,
    userRowsDoctors,
    userColumnsHospitals,
    userRowsHospitals
} from "../../datatablesource";
import { useState } from "react";
import { Link } from "react-router-dom";

const DataTable = (props) => {
    let userRow , userColumns;
    if(props.user === 'patient'){
        userRow = userRowsPatients;
        userColumns = userColumnsPatients;
    }
    else if (props.user === 'doctor'){
        userRow = userRowsDoctors;
        userColumns = userColumnsDoctors;
    }
    else if(props.user === 'hospital') {
        userRow = userRowsHospitals;
        userColumns = userColumnsHospitals;
    }

    const [data, setData] = useState(userRow);

    const handleDelete = (id) => {
        setData(data.filter((item) => item.id !== id));
    };

    const actionColumn = [
        {
            field: "action",
            headerName: "Action",
            width: 200,
            renderCell: (params) => {
                return (
                    <div className="cellAction">
                        <Link to={`/${props.user}/${params.row.id}`} style={{ textDecoration: "none" }}>
                            <div className="viewButton">View</div>
                        </Link>
                        <div
                            className="deleteButton"
                            onClick={() => handleDelete(params.row.id)}
                        >
                            Delete
                        </div>
                    </div>
                );
            },
        },
    ];

    return (
        <div className="datatable">
            <DataGrid
                className="datagrid"
                rows={data}
                columns={userColumns.concat(actionColumn)}
                pageSize={9}
                rowsPerPageOptions={[9]}
                checkboxSelection
            />
        </div>
    );
};

export default DataTable;