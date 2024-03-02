import React, { Component } from "react";

class TableItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPage: 1,
      newsPerPage: 5
    };
  }

  render() {
    const { data, stt } = this.props;
    return (
      <div className="TableItem">
        <tr>
          <td>{stt}</td>
          <td>
            <span>{data.title}</span>
          </td>
        </tr>
      </div>
    );
  }
}
export default TableItem;
