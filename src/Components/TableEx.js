import React from "react";
import { Table } from "semantic-ui-react";

const TableEx = props => {
  return (
    <Table unstackable>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell>Name</Table.HeaderCell>
          <Table.HeaderCell>E-Mail</Table.HeaderCell>
          <Table.HeaderCell textAlign="right">Website</Table.HeaderCell>
        </Table.Row>
      </Table.Header>

      <Table.Body>
        {props.userList.map(item => {
          return (
            <Table.Row key={item.id}>
              <Table.Cell>{item.name}</Table.Cell>
              <Table.Cell>{item.email}</Table.Cell>
              <Table.Cell textAlign="right">{item.website}</Table.Cell>
            </Table.Row>
          );
        })}
      </Table.Body>
    </Table>
  );
};

export default TableEx;
