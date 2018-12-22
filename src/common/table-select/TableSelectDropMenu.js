import React, { Component } from 'react';
import { Table, Input, Spin, Icon } from 'antd';
import http from './../../service/http';
import './table-select.css';
import { message } from 'antd';

const Search = Input.Search;

class TableSelectDropMenu extends Component {

    state = {
        loading: false,
        searchValue: "",
        dataSource: [],
        page: {
            pageSize: 10,
            total: 0,
            current: 1
        }
    };

    /* 数据请求 */
    fetchData = () => {
        console.log("fetchData");
        let { searchValue } = this.state;
        let that = this;
        let { url = "", params = {}, data = null, method = "get", page = {} } = this.props.item.tableOption;
        let defaultPage = this.state.page;
        params["name"] = searchValue;
        params["currentPage"] = page.current || defaultPage.current;
        params["length"] = page.pageSize || defaultPage.pageSize;
        this.setState({ loading: true });
        http.request({
            url: url,
            params: params,
            data: data,
            method: method
        }).then(res => {
            if (res.code === 0) {
                let dataSource = res.data.pagelist;
                let { currentPage, length, totleNum } = res.data.paginator;
                that.setState({
                    dataSource,
                    loading: false,
                    page: {
                        current: currentPage,
                        pageSize: length,
                        total: totleNum
                    }
                });
            } else {
                message.error(res.message);
                that.setState({ loading: false });
            }

        }).catch(err => {
            message.error(err.message);
            that.setState({ loading: false });
        });
    }

    /* 钩子函数 */
    componentDidMount() {
        //this.fetchData();
    }

    componentWillUpdate() {
        return false;
    }

    componentDidUpdate() {
        return false;
    }

    /* 搜索框值双向绑定 */
    searchOnChange = ($event) => {
        this.setState({
            searchValue: $event.target.value
        });
    }

    /* 表格行事件 */
    onRow = (record) => {
        const { tableOnChange } = this.props;
        return {
            onClick: tableOnChange(record),
            onMouseEnter: () => { },
        };
    }

    render() {
        const { item, closeDropMenu } = this.props;
        const { columns } = item.tableOption;
        const { loading, dataSource, searchValue, page } = this.state;
        const { searchOnChange, onRow, fetchData } = this;
        console.log("render has do");
        return (
            <div className="drop-menus">
                <Spin spinning={loading}>
                    <div className="ts-title">
                        <span>请选择{item.displayName}</span>
                        <span className="ts-close" title="点击关闭" onClick={closeDropMenu}><Icon type="close" /></span>
                    </div>
                    <div className="ts-search">
                        <Search value={searchValue} onSearch={fetchData} onChange={searchOnChange} placeholder="请输入关键字进行搜索" />
                    </div>
                    <div className="ts-container">
                        <Table pagination={page} rowKey="Id" columns={columns} dataSource={dataSource} bordered={true} onRow={onRow}></Table>
                    </div>
                </Spin>
            </div>
        )
    }
}

export default TableSelectDropMenu;
