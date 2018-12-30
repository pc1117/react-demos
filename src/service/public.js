const publics = {

    /* 初始化表单值 */
    initFormList(fieldsList = []) {
        fieldsList.map(v => v.value = v.originValue);
    },

    /* 绑定表单值 */
    bindFormData(item = {}, fieldsList = []) {
        fieldsList.forEach((v, n) => v.value = item[v.name]);
    },
    /* 冒泡排序法 */
    sortBubbling(arr = []) {
        let count = 0;
        for (let i = 0; i < arr.length - 1; i++) {
            for (let j = 0; j < arr.length - i - 1; j++) {
                if (arr[j] > arr[j + 1]) {
                    let swap = arr[j + 1];
                    arr[j + 1] = arr[j];
                    arr[j] = swap;
                }
                count++;
            }
        }
        console.log(count);
        return arr;
    },
    /* 快速排序法 */
    sortQuick(arr = []) {
        for (let a in arguments) {
            console.log(a);
        }
        // let length = arr.length;
        // if (length <= 1) {
        //     return arr;
        // }
        // let pivotIndex = Math.floor(length / 2);
        // let pivot = arr.splice(pivotIndex, 1)[0];
        // let leftArr = [];
        // let rightArr = [];
        // for (let i = 0; i < length - 1; i++) {
        //     if (arr[i] < pivot) {
        //         leftArr.push(arr[i]);
        //     } else {
        //         rightArr.push(arr[i]);
        //     }
        // }
        // return this.sortQuick(leftArr).concat([pivot], this.sortQuick(rightArr));
    }

};

export default publics;