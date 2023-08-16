import React from "react";
import { Sidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import "../styles/sidebar.css";
import "bootstrap/dist/css/bootstrap.min.css";

const Sidenav = () => {
  return (
    <div>
      <Sidebar>
        <Menu>
          <MenuItem> Home </MenuItem>
          <MenuItem> project Configuration </MenuItem>
          <MenuItem> Test Request </MenuItem>
          <MenuItem> Test Plan </MenuItem>
        </Menu>
      </Sidebar>
    </div>
  );
};

export default Sidenav;
