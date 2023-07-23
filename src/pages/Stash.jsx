import React from "react"
import Box from '@mui/material/Box';
import Sidenav from "../Sidenav";

export default function Stash() {
  return (
	<>
	 <Box sx={{ display: 'flex' }}>
	  <Sidenav />
	  <Box component="main" sx={{ flexGrow: 1, p: 3}}>
	   <h1>Stash</h1>
	  </Box>
	 </Box>
   </>
  );
}


