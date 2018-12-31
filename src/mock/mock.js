import Mock from 'mockjs';

const mainDataSource = () => {
    let pagelist = [];
    for (let i = 0; i < 10; i++) {
        pagelist.push(Mock.mock({
            'Id': i + 1,
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

const conpanyDataSource = () => {
    let pagelist = [];
    for (let i = 0; i < 5; i++) {
        pagelist.push(Mock.mock({
            'Id': i + 1,
            "Name": "@CITY"
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
Mock.mock("/api/courtyardlist?currentPage=1&length=10&name=&personType=1", 'get', mainDataSource);
Mock.mock("/api/companylist?buildingid=603&courtyardid=561&currentPage=1&length=5&name=&unitid=659", 'get', conpanyDataSource);