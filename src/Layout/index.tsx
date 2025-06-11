import { Box } from "@mui/material";
import { ReactNode } from "react";
import SideBar from "../components/SideBar";

interface LayoutProps {
    children : ReactNode | React.ReactNode[]
}


const Layout = ({children}:LayoutProps) => {
  return (
    <Box 
        sx = {{
            backgroundColor:"#10141F",
            display:"flex",
            flexDirection:{
                xs:"column",
                lg:"row"
            },
            color:"white",
            padding:3,
            gap:3,
            overflow:"hidden",
             height: "99vh"
        }}
    >
        <SideBar />
        <Box sx={{width:"100%", overflowY:"auto", marginBottom:'30px',marginTop:'30px',
             "&::-webkit-scrollbar-track": {
                boxShadow: "inset 0 0 5px grey",
                borderRadius: 10,
              },
              "&::-webkit-scrollbar-thumb": {
                backgroundColor: "#888",
                borderRadius: 10,
              },
              "&::-webkit-scrollbar-thumb:hover": {
                backgroundColor: "#555",
              },
          
              // Optional: Hide scrollbar in Firefox but keep scroll
              scrollbarWidth: "thin", // Firefox
              scrollbarColor: "#888 #171616", // Firefox
        }} >{children}</Box>
    </Box>
    
  )
}

export default Layout