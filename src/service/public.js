const publics = {
    initFormList(fieldsList = []) {
        fieldsList.map(v => v.value = v.originValue);
    },
    bindFormData(item = {}, fieldsList = []) {
        fieldsList.forEach((v, n) => v.value = item[v.name]);
    }
};

export default publics;