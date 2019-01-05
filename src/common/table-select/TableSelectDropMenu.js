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
    onRow = (record) => {
        const { tableOnChange, form, closeDropMenu } = this.props;
        return {
            onClick: () => {
                let { renderName, callback } = this.props.item.tableOption;
                tableOnChange(record[renderName]);
                closeDropMenu();
                callback && callback(form, record);
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

    render() {
        const { item, closeDropMenu } = this.props;
        const { columns, scroll = {} } = item.tableOption;
        const { loading, dataSource, searchValue, page } = this.state;
        const { searchOnChange, onRow, fetchData, onShowSizeChange, onChange } = this;
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
                        <Table scroll={scroll} columns={columns} dataSource={dataSource} rowKey="Id" size="small" bordered={true} onRow={onRow}
                            pagination={{
                                ...page,
                                onShowSizeChange: onShowSizeChange,
                                onChange: onChange,
                                showSizeChanger: true,
                            }} >
                        </Table>
                    </div>
                </Spin>
            </div>
        )
    }
}

export default TableSelectDropMenu;
