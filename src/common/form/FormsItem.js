import React, { Component } from 'react';
import { Input, Select, Radio, Checkbox } from 'antd';

class FormsItem extends Component {
    render() {

        const { item, value, onChange } = this.props;
        return ((item) => {
            switch (item.editor) {
                case "normal":
                    return <Input value={value} onChange={onChange} />
                case "select":
                    return (
                        <Select value={value} onChange={onChange}>
                            {
                                item.opts.map((item, index) => <Select.Option key={index} value={item.Id}>{item.Name}</Select.Option>)
                            }
                        </Select>
                    )
                case "radio":
                    return (
                        <Radio.Group value={value} onChange={onChange}>
                            {
                                item.opts.map((item, index) => <Radio key={index} value={item.Id}>{item.Name}</Radio>)
                            }
                        </Radio.Group >
                    )
                case "texarea":
                    return <Input.TextArea value={value} onChange={onChange} />
                case "checkbox":
                    return (
                        <Checkbox.Group value={value} onChange={onChange}>
                            {
                                item.opts.map((item, index) => <Checkbox key={index} value={item.Id}>{item.Name}</Checkbox>)

                            }
                        </Checkbox.Group>
                    )
                case "normal":
                    return <Input />
                case "normal":
                    return <Input />
            }
        })(item)
    }
}

export default FormsItem;
