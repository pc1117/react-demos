import React, { Component } from 'react';
import './table-select.css';
import { Input } from 'antd';
import TableSelectDropMenu from './TableSelectDropMenu';

class TableSelect extends Component {

    state = {
        show: false
    }

    render() {
        const { value, onChange, item } = this.props;
        const { show } = this.state;
        const myOnClick = () => {
            this.setState(preState => ({ show: !preState.show }));
        }
        return (
            <div className="table-select">
                <Input value={value} onChange={onChange} readOnly onClick={myOnClick} />
                {
                    show ? <TableSelectDropMenu item={item} tableOnChange={onChange} /> : ""
                }

            </div>
        )
    }
}

export default TableSelect
