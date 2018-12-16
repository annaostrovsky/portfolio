import React, { Component } from "react";
import MenuItem from "./menu-item";

class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menuItems: [
        { title: "Store", key: "store", pathName: "/" },
        { title: "Contact", key: "contact", pathName: "/contact" },
        { title: "About", key: "about", pathName: "/about" }
      ]
    };
  }

  render() {
    return (
      <div>
        {this.state.menuItems.map((item, index) => {
          return (
            <MenuItem title={item.title} pathName={item.pathName} key={index} />
          );
        })}
      </div>
    );
  }
}

export default Menu;
