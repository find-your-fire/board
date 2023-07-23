import React from "react"
import Box from '@mui/material/Box';
import Sidenav from "../Sidenav";

export default function Jira() {
  return (
	<>
	 <Box sx={{ display: 'flex' }}>
	  <Sidenav />
	  <Box component="main" sx={{ flexGrow: 100, p: 3}}>
	   <h1>Jira</h1>
	  </Box>
	 </Box>
   </>
  );
}


