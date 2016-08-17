import React from 'react'
const {Table, Column, Cell} = require('fixed-data-table')
const {} = require('fixed-data-table/dist/fixed-data-table.css')

class MyTextCell extends React.Component {
  render() {
    const {rowIndex, field, data, ...props} = this.props;
    return (
      <Cell {...props}>
        {data[rowIndex][field]}
      </Cell>
    );
  }
}
class MyEmailCell extends React.Component {
  render() {
    const {rowIndex, field, data, ...props} = this.props;
    return (
      <Cell {...props}>
        {data[rowIndex][field]}
      </Cell>
    );
  }
}

export class PolicyTable extends React.Component{
  constructor(props) {
    super(props);
    
    this.state = {
      myTableData: [
        {name: 'Rylan', email: 'Angelita_Weimann42@gmail.com'},
        {name: 'Amelia', email: 'Dexter.Trantow57@hotmail.com'},
        {name: 'Estevan', email: 'Aimee7@hotmail.com'},
        {name: 'Florence', email: 'Jarrod.Bernier13@yahoo.com'},
        {name: 'Tressa', email: 'Yadira1@hotmail.com'},
      ]
    };
  }

  render() {
    return(
      <Table
        rowsCount={this.state.myTableData.length}
        rowHeight={50}
        width={500}
        height={500}
        headerHeight={50}>
        <Column
          header={<Cell>Name</Cell>}
            cell={
              <MyTextCell
                data={this.state.myTableData}
                field="name"
              />
            }
            width={200}
          />
          <Column
            header={<Cell>Email</Cell>}
              cell={
                <MyEmailCell
                  data={this.state.myTableData}
                  field="email"
                />
              }
              width={200}
            />
      </Table>
    )
  }
}

export default PolicyTable
