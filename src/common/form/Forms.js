import React, { Component } from 'react';
import { Form } from 'antd';
import FormsItem from './FormsItem';

class Forms extends Component {

    render() {
        const { form, fieldsList = [], formItemLayout = {} } = this.props;
        const { getFieldDecorator } = form;
        const FormItem = Form.Item;
        return (
            <Form>
                {
                    fieldsList.map((item, index) => {
                        return (
                            <FormItem {...formItemLayout} label={item.displayName} key={index}>
                                {
                                    getFieldDecorator(item.name, { initialValue: item.value, rules: item.rules, validateFirst: true })(<FormsItem item={item} form={form} />)
                                }
                            </FormItem>
                        )
                    })
                }
            </Form>
        )
    }
}

export default Form.create()(Forms);
