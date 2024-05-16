import logo from './logo.svg';
import './App.css';
import SideNav from './component/SideNav';
import PatientDetail from './PatientDetail/PatientDetail';
import Topbar from './component/TopBar';

const App = () => {
  return (
    <div className="flex">
      <SideNav />
      <div className="flex-grow">
        <Topbar />
        <PatientDetail />
      </div>
    </div>
  );
};

export default App;
