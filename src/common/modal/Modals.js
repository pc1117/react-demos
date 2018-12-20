import React, { Component } from 'react';
import { Modal } from 'antd';
import Forms from '../form/Forms';

class Modals extends Component {
    render() {

        const { fieldsList = [], modal = {}, style = {}, formItemLayout = {} } = this.props;
        const onOkFun = ($event) => {
            let forms = this.refs.forms;
            modal.onOk(forms, $event);
        }
        return (
            <Modal {...modal} style={style} onOk={onOkFun}>
                <Forms ref="forms" fieldsList={fieldsList} formItemLayout={formItemLayout} />
            </Modal>
        )
    }
}

export default Modals;
