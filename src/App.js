import Home from "./pages/home/home";

import PatientsList from "./pages/patients-list/patientsList";
import Patients from "./pages/patients/patients";

import DoctorsList from "./pages/doctors-list/doctorsList";
import Doctors from "./pages/doctors/doctors";

import Hospitals from "./pages/hospitals/hostpitals";
import HospitalsList from "./pages/hospitals-list/hostpitalsList"

import {BrowserRouter , Routes , Route} from "react-router-dom";

function App() {
  return (
    <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path="/">
              <Route index element={<Home />} />

              <Route path="patients">
                <Route index element={<PatientsList />} />
                <Route path=":patientId" element={<Patients />} />
              </Route>

              <Route path="doctors">
                <Route index element={<DoctorsList/>} />
                <Route path=":doctorId" element={<Doctors />} />
              </Route>

              <Route path="hospitals">
                <Route index element={<HospitalsList/>} />
                <Route path=":hospitalId" element={<Hospitals />} />
              </Route>

            </Route>
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
