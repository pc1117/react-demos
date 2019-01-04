import React, { Component } from 'react'
import { Spin, Table, Row, Divider, Icon, Button, message } from 'antd';
import './main.css';
import Modals from '../../common/modal/Modals';
import publics from './../../service/public';
import http from '../../service/http';

export class Main extends Component {

    state = {
        loading: false,
        create: true,
        lists: [],
        title: "居民信息",
        visible: false,
        destroyOnClose: true,
        okText: "确定",
        cancelText: "取消",
        maskClosable: false,
        centered: true,
        modalsLoading: false
    };

    /* 表单列 */
    columns = [{
        dataIndex: 'Name',
        key: 'Name',
        title: '姓名',
    }, {
        dataIndex: 'Sex',
        key: 'Sex',
        title: '性别',
        render: (text) => text === 1 ? "男" : "女"
    }, {
        dataIndex: 'City',
        key: 'City',
        title: '城市',
    }, {
        dataIndex: 'Action',
        key: 'Action',
        title: '操作',
        render: (text, record, index) => (
            <div>
                <a href="javascript:void(0);" onClick={this.editItem.bind(this, record)}>编辑</a>
                <Divider type="vertical" />
                <a href="javascript:void(0);" onClick={this.deleteItem.bind(this, record)}>删除</a>
            </div>
        )
    }];

    /* 表单项目列 */
    fieldsList = [{
        name: "Corporation", displayName: "城市", editor: "table-select", value: "", originValue: "成都市",
        tableOption: {
            method: "get",
            url: "/api/companylist",
            params: {},
            columns: [{
                dataIndex: 'Name',
                key: 'Name',
                title: '姓名',
            }, {
                dataIndex: 'Id',
                key: 'Id',
                title: 'ID',
            }],
            renderName: "Name",
            renderValue: "Id",
            callback: (form, record) => {
                console.log(form, record);
            }
        },
        rules: [{
            required: true,
            message: "请选择城市"
        }]
    },
    { name: "Name", displayName: "姓名", editor: "normal", value: "", originValue: "王小媛", rules: [{ required: true, message: "请输入姓名" }] },
    { name: "HouseGradePathName", displayName: "楼栋单元", editor: "select", value: "", originValue: 1, opts: [{ Id: 1, Name: "一单元" }, { Id: 2, Name: "二单元" }] },
    { name: "Sex", displayName: "性别", opts: [{ Id: 1, Name: "男" }, { Id: 2, Name: "女" }], editor: "radio", value: "", originValue: 2 },
    { name: "Aihao", displayName: "民族", opts: [{ Id: 1, Name: "汉族" }, { Id: 2, Name: "其他少数民族" }], editor: "radio", value: "", originValue: 1, rules: [{ required: true, message: "请选择民族" }] },
    { name: "Phone", displayName: "手机", editor: "normal", value: "", originValue: "", rules: [{ required: false, message: "请输入手机" }] }];

    /* 钩子函数 */
    componentDidMount() {
        this.fetchData();
    }

    /* 新增 */
    createOne = ($event) => {
        publics.initFormList(this.fieldsList);
        this.setState({
            create: true,
            visible: true,
            modalsLoading: false
        });
    };

    /* 编辑行 */
    editItem(item, $event) {
        publics.bindFormData(item, this.fieldsList);
        this.setState({
            create: false,
            visible: true,
            modalsLoading: false
        });
    };

    /* 删除行 */
    deleteItem(item, $event) {
        console.log(item);
    };

    /* 获取数据 */
    fetchData = () => {
        let that = this;
        this.setState({
            loading: true
        }, () => {
            http.request({
                method: "get",
                url: "/api/courtyardlist",
                params: {},
            }).then(res => {
                if (res.code === 0) {
                    let dataSource = res.data.pagelist;
                    that.setState({
                        loading: false,
                        lists: dataSource
                    });
                } else {
                    message.error(res.message);
                    that.setState({ loading: false });
                }
            }).catch(err => {
                message(err.message);
                this.setState({ loading: false });
            })
        });
    };

    /* 弹框ok事件 */
    onOk = (form, $event) => {
        let that = this;
        let { create } = this.state;
        $event.preventDefault();
        form.validateFields((errors, values) => {
            let isNull = false;
            for (let v in errors) {
                if (errors[v].errors) {
                    isNull = true;
                }
            }
            if (isNull) return;
            this.setState({
                modalsLoading: true
            });
            setTimeout(() => {
                message.success((create ? "新增" : "修改") + "操作成功!");
                that.setState({
                    visible: false,
                    modalsLoading: true
                });
            }, 500)
        });
    };

    /* 弹框cancel事件 */
    onCancel = () => {
        this.setState({
            visible: false,
            modalsLoading: false
        });
    };

    render() {
        let { loading, lists, title, visible, destroyOnClose, cancelText, okText, maskClosable, centered, create, modalsLoading } = this.state;
        let { columns, fetchData, onOk, onCancel, createOne, fieldsList } = this;
        let modal = { title: (create ? "新增" : "修改") + title, visible, destroyOnClose, cancelText, okText, centered, onOk, onCancel, maskClosable }
        let formItemLayout = {
            labelCol: {
                xs: { span: 24 },
                sm: { span: 6 },
            },
            wrapperCol: {
                xs: { span: 24 },
                sm: { span: 18 },
            },
        }
        return (
            <Spin spinning={loading}>
                <Row className="pc-title">
                    <Button type="primary" onClick={fetchData}><Icon type="undo" /> 刷新</Button>
                    <Divider type="vertical" />
                    <Button type="default" onClick={createOne}><Icon type="new-file" /> 新增</Button>
                </Row>
                <Table dataSource={lists} bordered={true} rowKey={"Id"} columns={columns} />
                <Modals modal={modal} modalsLoading={modalsLoading} fieldsList={fieldsList} formItemLayout={formItemLayout} />
            </Spin>
        )
    }
}

export default Main;
