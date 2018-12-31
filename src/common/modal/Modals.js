import React, { Component } from 'react';
import { Modal } from 'antd';
import Forms from '../form/Forms';
import { Spin } from 'antd';

class Modals extends Component {
    render() {

        const { fieldsList = [], modal = {}, style = {}, formItemLayout = {}, modalsLoading = false } = this.props;
        const onOkFun = ($event) => {
            let forms = this.refs.forms;
            modal.onOk(forms, $event);
        }
        return (
            <Modal {...modal} style={style} onOk={onOkFun}>
                <Spin spinning={modalsLoading}>
                    <Forms ref="forms" fieldsList={fieldsList} formItemLayout={formItemLayout} />
                </Spin>
            </Modal >
        )
    }
}

export default Modals;
