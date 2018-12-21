import React, { Component } from 'react';
import { Table, Input } from 'antd';
import './table-select.css';
import { Spin } from 'antd';

const Search = Input.Search;

class TableSelectDropMenu extends Component {

    state = {
        loading: false
    };

    render() {
        const { item, tableOnChange } = this.props;
        const { loading } = this.state;
        const onRow = (record) => {
            return {
                onClick: tableOnChange(record),
                onMouseEnter: () => { },
            };
        }
        return (
            <div className="drop-menus">
                <Spin spinning={loading}>
                    <div className="ts-title">
                        <span>请选择{item.displayName}</span>
                        <span>关闭</span>
                    </div>
                    <div className="ts-search">
                        <Search />
                    </div>
                    <div className="ts-container">
                        <Table bordered={true} onRow={onRow}></Table>
                    </div>
                </Spin>
            </div>
        )
    }
}

export default TableSelectDropMenu;
