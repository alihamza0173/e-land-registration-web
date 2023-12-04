import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

import LandsTable from "./LandsTable";
import Profile from "./Profile";
import AddLand from "./AddLand";
import UsersTable from "./UsersTable";
import { getCollection } from '../../config/firebaseOperations/getDocs';


function TabPanel(props) {
  const { children, value, index, ...other } = props;


  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box
          sx={{ p: 3 }}
        >
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};
function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}

const Dashboard = () => {
  const [value, setValue] = React.useState(0);
  const [rows, setRows] = React.useState({});
  const [rowsLands, setRowsLands] = React.useState({});


  function createData(index, ownerName, landDetails, installmentPlan, societyName) {
    return { index, ownerName, landDetails, installmentPlan, societyName };
  }

  const fetchData = async () => {
    const registeredUsers = await getCollection("users");
    const registeredLands = await getCollection("lands");
    // // console.log("registered users", registeredUsers);
    console.log("fetch data is called -----------------------");

    setRows(
      registeredUsers.map((user, index) => {
        return { index, userName: user.data.name, userEmail: user.data.email, isActive: true }
        //  createData(index, user.data.name, user.data.email);
      }));
    setRowsLands(
      registeredLands.map((user, index) => {
        return { index, ownerName: user.data.ownerName, landId: user.data.landId, landAddress: user.data.landAddress, landDetails: user.data.details, city: user.data.city, installmentPlan: user.data.installmentPlan, zip: user.data.zip, isActive: true }
        //  createData(index, user.data.name, user.data.email);
      }));


    // [
    //   createData('5', "Dinesh", "It is located at the cornor. Near to super market.", 24, 4.0),
    //   createData('4', 237, 9.0, 37, 4.3),
    //   createData('3', 262, 16.0, 24, 6.0),
    //   createData('2', 305, 3.7, 67, 4.3),
    //   createData('1', 356, 16.0, 49, 3.9),
    // ]
  };


  // console.log("rows from registered users", rows);

  React.useEffect(
    () => {
      fetchData();
    }, [value]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  console.log("registered lands", rowsLands);


  return (
    <>
      <br />
      <br /><br />
      <br />
      <Box
        sx={{ flexGrow: 1, bgcolor: 'background.paper', display: 'flex', border: "1px solid white" }}
        className={"user-dashboard col-11 col-md-10 m-auto mt-10"}
      >
        <div className="container">
          <div className="row">
            <div className="col-md-3">
              <Tabs
                orientation="vertical"
                variant="scrollable"
                value={value}
                onChange={handleChange}
                aria-label="Vertical tabs example"
                sx={{ borderRight: 1, borderColor: 'divider' }}
              >
                <Tab label="Profile" {...a11yProps(0)} sx={{ color: "white" }} />
                <Tab label="Users" {...a11yProps(1)} sx={{ color: "white" }} />
                <Tab label="Add Land" {...a11yProps(1)} sx={{ color: "white" }} />
                <Tab label="Lands" {...a11yProps(1)} sx={{ color: "white" }} />
              </Tabs>
            </div>
            <div className="col-md-9 p-0">
              <TabPanel value={value} index={0}>
                <Profile />
              </TabPanel>
              <TabPanel value={value} index={1}>
                <UsersTable users={rows} />
              </TabPanel>
              <TabPanel value={value} index={2}>
                <AddLand />
              </TabPanel>
              <TabPanel value={value} index={3}>
                <LandsTable lands={rowsLands}/>
              </TabPanel>
            </div>
          </div>
        </div>
      </Box>
    </>
  );
};

export default Dashboard;
