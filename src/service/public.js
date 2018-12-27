const publics = {

    /* 初始化表单值 */
    initFormList(fieldsList = []) {
        fieldsList.map(v => v.value = v.originValue);
    },

    /* 绑定表单值 */
    bindFormData(item = {}, fieldsList = []) {
        fieldsList.forEach((v, n) => v.value = item[v.name]);
    }
};

export default publics;