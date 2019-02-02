import React, { Component } from 'react';
import { Input, Select, Radio, Checkbox } from 'antd';
import TableSelect from '../table-select/TableSelect';
import { InputNumber } from 'antd';
import FileUpLoad from './FileUpLoad';

class FormsItem extends Component {

    render() {
        const { item, value, onChange, form } = this.props;
        return ((item) => {
            switch (item.editor) {
                case "normal":
                    return <Input value={value} onChange={onChange} />
                case "number":
                    return <InputNumber value={value} onChange={onChange} max={item.range ? item.range[1] : ""} min={item.range ? item.range[0] : ""} />
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
                case "table-select":
                    return <TableSelect item={item} form={form} value={value} onChange={onChange} />
                case "file-upload":
                    return <FileUpLoad item={item} form={form} value={value} onChange={onChange} />
                default:
                    return <Input value={value} onChange={onChange} />
            }
        })(item)
    }
}

export default FormsItem;
