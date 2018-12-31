import Mock from 'mockjs';

const mainDataSource = () => {
    let pagelist = [];
    for (let i = 0; i < 10; i++) {
        pagelist.push(Mock.mock({
            'Id|+1': 1,
            'Email': '@EMAIL',
            "Name": "@NAME",
            "Sex|1-2": 1,
            "HouseGradePathName": "@CITY"
        }))
    }
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
            pagelist
        },
        "length": 10
    }
}
Mock.mock("http://101.201.114.116:10200/api/gw/api/foundation/api/foundation/residentlist?currentPage=1&length=10&name=&personType=1", 'get', mainDataSource);