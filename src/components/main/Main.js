import React, { Component } from 'react'
import { Spin, Table, Row, Divider, Icon, Button, message } from 'antd';
import './main.css';
import Modals from '../../common/modal/Modals';
import publics from './../../service/public';

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
        centered: true
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
        dataIndex: 'HouseGradePathName',
        key: 'HouseGradePathName',
        title: '楼栋单元',
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
    fieldsList = [
        { name: "Corporation", displayName: "公司", editor: "table-select", value: "", originValue: "", rules: [{ required: false, message: "请选择公司" }] },
        { name: "Name", displayName: "姓名", editor: "normal", value: "", originValue: "", rules: [{ required: true, message: "请输入姓名" }] },
        { name: "HouseGradePathName", displayName: "楼栋单元", editor: "select", value: "", originValue: 1, opts: [{ Id: 1, Name: "一单元" }, { Id: 2, Name: "二单元" }] },
        { name: "Sex", displayName: "性别", opts: [{ Id: 1, Name: "男" }, { Id: 2, Name: "女" }], editor: "radio", value: "", originValue: 1 },
        { name: "Aihao", displayName: "其他", opts: [{ Id: 1, Name: "男" }, { Id: 2, Name: "女" }], editor: "checkbox", value: "", originValue: [1] },
        { name: "Describe", displayName: "描述", editor: "texarea", value: "", originValue: "", rules: [{ required: true, message: "请输入描述" }] },
    ];

    /* 钩子函数 */
    componentDidMount() {
        this.fetchData();
    }

    /* 新增 */
    createOne = ($event) => {
        publics.initFormList(this.fieldsList);
        this.setState({
            create: true,
            visible: true
        });
    };

    /* 编辑行 */
    editItem(item, $event) {
        this.setState({
            create: false
        });
        publics.bindFormData(item, this.fieldsList);
        this.setState({
            visible: true
        });
    };

    /* 删除行 */
    deleteItem(item, $event) {
        console.log($event);
    };

    /* 获取数据 */
    fetchData = () => {
        const that = this;
        this.setState({
            loading: true
        }, () => {
            fetch("http://101.201.114.116:10200/api/gw/api/foundation/api/foundation/residentlist?currentPage=1&length=10&name=&personType=1").then(res => res.json()).then(res => {
                that.setState({
                    loading: false,
                    lists: res.Content.pagelist
                });
            }).catch(err => {
                message(err);
                this.setState({ loading: false });
            })
        });
    };

    /* 弹框ok事件 */
    onOk = (form, $event) => {
        $event.preventDefault();
        form.validateFields((errors, values) => {
            console.log(values);
        });
        /*  this.setState({
             visible: false
         }); */
    };

    /* 弹框cancel事件 */
    onCancel = () => {
        this.setState({
            visible: false
        });
    };

    render() {
        let { loading, lists, title, visible, destroyOnClose, cancelText, okText, maskClosable, centered, create } = this.state;
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
                <Modals modal={modal} fieldsList={fieldsList} formItemLayout={formItemLayout} />
            </Spin>
        )
    }
}

export default Main;
