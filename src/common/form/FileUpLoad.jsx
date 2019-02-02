import React, { Component } from 'react';
import { Upload, Icon, Button } from 'antd';

class FileUpLoad extends Component {

    render() {
        const { value, onChange, item, form } = this.props;
        const { fileUpLoadOption } = item;
        const { listType } = fileUpLoadOption;
        const fileOnChange = (files) => {
            fileUpLoadOption.onChange(files, form, onChange)
        }
        return (
            <Upload {...fileUpLoadOption} value={value} onChange={fileOnChange} >
                {listType === "picture-card" ?
                    (
                        <div>
                            <Icon type="plus" />
                            <div className="ant-upload-text">选择文件</div>
                        </div>
                    ) : (
                        <Button><Icon type="upload" /> 选择文件</Button>
                    )
                }
            </Upload>
        )
    }
}

export default FileUpLoad;
