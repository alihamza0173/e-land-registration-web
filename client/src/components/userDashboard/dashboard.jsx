import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

import LandsTable from "./LandsTable";
import Profile from "./Profile"


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

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

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
                <Tab label="Owned Lands" {...a11yProps(1)} sx={{ color: "white" }} />
              </Tabs>
            </div>
            <div className="col-md-9 p-0">
              <TabPanel value={value} index={0}>
                <Profile />
              </TabPanel>
              <TabPanel value={value} index={1}>
                <LandsTable />
              </TabPanel>
            </div>
          </div>
        </div>
      </Box>
    </>
  );
};

export default Dashboard;
