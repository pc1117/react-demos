import React, { Component } from 'react';
import { Table, Input, Spin, Icon, Button } from 'antd';
import http from './../../service/http';
import './table-select.css';
import { message } from 'antd';

const Search = Input.Search;

class TableSelectDropMenu extends Component {

    state = {
        loading: false,
        searchValue: "",
        dataSource: [],
        selectedRowKeys: [],
        selectedRecords: [],
        page: {
            size: "small",
            pageSize: 5,
            total: 0,
            current: 1
        }
    };

    /* 数据请求 */
    fetchData = (_params = {}) => {
        let { searchValue } = this.state;
        let that = this;
        let { url = "", params = {}, data = null, method = "get", page = {} } = this.props.item.tableOption;
        let defaultPage = this.state.page;
        params["name"] = searchValue;
        params["currentPage"] = page.current || defaultPage.current;
        params["length"] = page.pageSize || defaultPage.pageSize;
        params = Object.assign(params, _params);
        that.setState({ loading: true }, () => {
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
                            size: "small",
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
        });

    }

    /* 钩子函数 */
    componentWillMount() {
        this.fetchData();
    }

    /* 搜索框值双向绑定 */
    searchOnChange = ($event) => {
        this.setState({
            searchValue: $event.target.value
        });
    }

    /* 表格行事件 */
    onRow = (record, index) => {
        let { tableOnChange, form, closeDropMenu } = this.props;
        return {
            onClick: () => {
                let { renderName, callback, multipleSelection } = this.props.item.tableOption;
                if (multipleSelection) {
                    return;
                } else {
                    tableOnChange(record[renderName]);
                    closeDropMenu();
                    callback && callback(form, record);
                }

            },
            onMouseEnter: () => { },
        };
    }

    /* 表格翻页事件 */
    onChange = (currentPage, length) => {
        let params = {
            length: length,
            currentPage: currentPage
        }
        this.fetchData(params);
    }

    /* 分页变化事件 */
    onShowSizeChange = (currentPage, length) => {
        let params = {
            length: length,
            currentPage: currentPage
        };
        this.fetchData(params);
    }

    /*表格多选onChange事件*/
    onSelectChange = (selectedRowKeys, selectedRecords) => {
        this.setState({
            selectedRowKeys, selectedRecords
        });
    }

    /* 多选提交 */
    multiSubmit = (selectedRowKeys, selectedRecords) => {
        let { tableOnChange, form, closeDropMenu, item } = this.props;
        let { renderName, callback } = item.tableOption;
        let values = (selectedRecords.map((v, i) => v[renderName])).join(",");
        values && tableOnChange(values);
        closeDropMenu();
        callback && callback(form, selectedRecords, selectedRowKeys);
    }

    render() {
        const { item, closeDropMenu } = this.props;
        const { columns, scroll = {}, multipleSelection = false } = item.tableOption;
        const { loading, dataSource, searchValue, page, selectedRowKeys, selectedRecords } = this.state;
        const { searchOnChange, onRow, fetchData, onShowSizeChange, onChange, onSelectChange, multiSubmit } = this;
        const rowSelection = multipleSelection ? {
            selectedRowKeys,
            onChange: onSelectChange
        } : null;
        return (
            <div className="drop-menus">
                <Spin spinning={loading}>
                    <div className="ts-title">
                        <span>请选择{item.displayName}</span>
                        <span className="ts-close" title="点击关闭" onClick={closeDropMenu}><Icon type="close" /></span>
                    </div>
                    <div className="ts-search">
                        {multipleSelection ? <Button className="ts-sl" size="small" type="primary" onClick={multiSubmit.bind(this, selectedRowKeys, selectedRecords)}>确定</Button> : ""}
                        <Search className="ts-sr" value={searchValue} onSearch={fetchData} onChange={searchOnChange} placeholder="请输入关键字进行搜索" />
                    </div>
                    <div className="ts-container">
                        <Table scroll={scroll} columns={columns} dataSource={dataSource} rowKey="Id" size="small" bordered={true} onRow={onRow}
                            pagination={{
                                ...page,
                                onShowSizeChange: onShowSizeChange,
                                onChange: onChange,
                                showSizeChanger: true,
                            }} rowSelection={rowSelection} >
                        </Table>
                    </div>
                </Spin>
            </div>
        )
    }
}

export default TableSelectDropMenu;
