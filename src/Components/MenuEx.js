import React, { Component } from "react";
import { Input, Menu } from "semantic-ui-react";
import { Link } from "react-router-dom";

export default class MenuEx extends Component {
  state = { activeItem: "home" };

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    const { activeItem } = this.state;

    return (
      <Menu secondary>
        <Menu.Item
          name="home"
          active={activeItem === "home"}
          onClick={this.handleItemClick}
          as={Link}
          to="/"
        />
        <Menu.Item
          name="about"
          active={activeItem === "about"}
          onClick={this.handleItemClick}
          as={Link}
          to="about"
        />
        <Menu.Item
          name="users"
          active={activeItem === "users"}
          onClick={this.handleItemClick}
          as={Link}
          to="users"
        />
        <Menu.Menu position="right">
          <Menu.Item>
            <Input icon="search" placeholder="Search..." />
          </Menu.Item>
          <Menu.Item
            name="login"
            active={activeItem === "login"}
            onClick={this.handleItemClick}
            as={Link}
            to="login"
          />
        </Menu.Menu>
      </Menu>
    );
  }
}
