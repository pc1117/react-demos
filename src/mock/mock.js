import Mock from 'mockjs';

const mainDataSource = () => {
    let pagelist = [];
    for (let i = 0; i < 10; i++) {
        pagelist.push(Mock.mock({
            'Id': i + 1,
            'Email': '@EMAIL',
            "Name": "@NAME",
            "Sex|1-2": 1,
            "City": "@CITY"
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
Mock.mock("/api/courtyardlist", 'get', mainDataSource);
Mock.mock("/api/companylist?name=&currentPage=1&length=5", 'get', conpanyDataSource);