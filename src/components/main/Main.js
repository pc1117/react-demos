import React, { Component } from 'react'
import { Spin, Table, Row, Divider, Icon, Button, message } from 'antd';
import './main.css';
import Modals from '../../common/modal/Modals';
import publics from './../../service/public';
import http from '../../service/http';
import { apiConfig } from './../../configs/api.config';

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
		modalsLoading: false,
		defaultFileList: [{
			uid: '-1',
			name: 'xxx.png',
			status: 'done',
			url: 'http://www.baidu.com/xxx.png',
		}]
	};

	/* 表单列 */
	columns = [{
		dataIndex: 'name',
		key: 'name',
		title: '姓名',
	}, {
		dataIndex: 'sex',
		key: 'sex',
		title: '性别',
		render: (text) => text === 1 ? "男" : "女"
	}, {
		dataIndex: 'nativePlace',
		key: 'nativePlace',
		title: '城市',
	}, {
		dataIndex: 'nation',
		key: 'nation',
		title: '民族',
		render: (text) => text === 1 ? "汉族" : "少数民族"
	}, {
		dataIndex: 'unit',
		key: 'unit',
		title: '楼栋单元',
		render: (text) => text === 1 ? "一单元" : "二单元"
	}, {
		dataIndex: 'action',
		key: 'action',
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
		name: "City", displayName: "城市", editor: "table-select", value: "", originValue: "成都市",
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
			},
			multipleSelection: true
		},
		rules: [{
			required: true,
			message: "请选择城市"
		}]
	},
	{ name: "name", displayName: "姓名", editor: "normal", value: "", originValue: "赵星星", rules: [{ required: true, message: "请输入姓名" }] },
	{ name: "Unit", displayName: "楼栋单元", editor: "select", value: "", originValue: 1, opts: [{ Id: 1, Name: "一单元" }, { Id: 2, Name: "二单元" }] },
	{ name: "sex", displayName: "性别", opts: [{ Id: 1, Name: "男" }, { Id: 2, Name: "女" }], editor: "radio", value: "", originValue: 2 },
	{ name: "nation", displayName: "民族", opts: [{ Id: 1, Name: "汉族" }, { Id: 2, Name: "少数民族" }], editor: "radio", value: "", originValue: 1, rules: [{ required: true, message: "请选择民族" }] },
	{ name: "Phone", displayName: "手机", editor: "normal", value: "", originValue: "", rules: [{ required: false, message: "请输入手机" }] },
	{
		name: "File",
		displayName: "附件上传",
		editor: "file-upload",
		value: "",
		originValue: 1,
		fileUpLoadOption: {
			headers: {
				"Authorization": "Bearer VO-GS08faU6v25ft4bC_pdEQGx0EisZ2BOPu0LxdYtNg_HbWh9ioXJFZvsdAZKIinlh7ajnZDkpK6LJcTv6reTZfsNoweslVuFQTHygspAy33j1i-ZESeR2xRvbCo3JWPy0L7Quu-JZ_GoxQZk448uBrd4d7jUBRjoEuGq8QCNJITgFpg1AaKre0VozAqfD0v6CZb8xuC91VWQFKgU9w_wT984ZDZwqA_hgWy7_NNQEoDxbH"
			},
			listType: "picture-card",
			onChange: (info, form, onChange) => {
				if (info.file.status === "done") {
					let fileList = info.fileList;
					let value = fileList.map(file => file.response.Content && file.response.Content[0].Id).join(",");
					onChange(value);
				}
			},
			action: 'http://101.201.114.116:20100/res/gw/res/media/mediafile/api/upload',
			defaultFileList: [],
			multiple: true
		},
		rules: [{ required: false, message: "请选择附件" }]
	}];


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
		});
		http.request({
			method: "get",
			url: apiConfig.residentManage.findAll,
			params: {},
		}).then(res => {
			if (res.code === 200) {
				let dataSource = res.data.rows;
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
	};

	/* 弹框ok事件 */
	onOk = (form, $event) => {
		let that = this;
		let { create } = this.state;
		$event.preventDefault();
		form.validateFields((errors, values) => {
			if (errors) return;
			this.setState({
				modalsLoading: true
			});
			console.log(values);
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
				<div className="pc-tbct">
					<Table dataSource={lists} bordered={true} rowKey={"id"} columns={columns} />
				</div>
				<Modals modal={modal} modalsLoading={modalsLoading} fieldsList={fieldsList} formItemLayout={formItemLayout} />
			</Spin>
		)
	}
}

export default Main;
