import React, { Component } from 'react';
import './table-select.css';
import { Input } from 'antd';
import TableSelectDropMenu from './TableSelectDropMenu';

class TableSelect extends Component {

    state = {
        show: false
    }

    /* 关闭弹出窗口 */
    closeDropMenu = () => {
        this.setState({
            show: false
        })
    }

    /* 点击切换下拉框显示状态 */
    myOnClick = () => {
        this.setState(preState => ({ show: !preState.show }));
    }

    render() {
        const { value, onChange, item, form } = this.props;
        const { closeDropMenu, myOnClick } = this;
        const { show } = this.state;
        return (
            <div className="table-select">
                <Input value={value} onChange={onChange} readOnly onClick={myOnClick} />
                {
                    show ? <TableSelectDropMenu item={item} form={form} tableOnChange={onChange} closeDropMenu={closeDropMenu} /> : ""
                }

            </div>
        )
    }
}

export default TableSelect
