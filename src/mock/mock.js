import Mock from 'mockjs';

const mainDataSource = () => {
    return {
        "State": {
            "Code": 0,
            "Message": "success"
        },
        "Action": null,
        "Content": {
            "paginator": {
                "length": 0,
                "totleNum": 0,
                "currentPage": 1,
                "totlePages": 1
            },
            "pagelist": [{}, {}]
        },
        "length": 10
    }
}

console.log(mainDataSource());
Mock.mock("http://101.201.114.116:10200/api/gw/api/foundation/api", "get", mainDataSource);