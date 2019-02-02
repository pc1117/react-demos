import React, { Component } from 'react';
import { Upload, Icon, Button } from 'antd';

class FileUpLoad extends Component {

    render() {
        const { value, onChange, item, form } = this.props;
        const { fileUpLoadOption } = item;
        const fileOnChange = (files) => {
            fileUpLoadOption.onChange(files, form)
        }
        return (
            <Upload {...fileUpLoadOption} value={value} onChange={fileOnChange} >
                <Button>
                    <Icon type="upload" /> 选择文件
                </Button>
            </Upload>
        )
    }
}

export default FileUpLoad;
