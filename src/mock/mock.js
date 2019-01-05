import Mock from 'mockjs';

const mainDataSource = {
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
        ...Mock.mock({
            'pagelist|10': [{
                'Id|+1': 1,
                'Email': '@EMAIL',
                "Name": "@NAME",
                "Unit|1-2": 1,
                "Sex|1-2": 1,
                "Nation|1-2": 1,
                "City": "@CITY"
            }]
        })
    },
    "length": 10
}

const conpanyDataSource = {
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
        ...Mock.mock({
            'pagelist|1-5': [{
                'Id|+1': 1,
                "Name": "@CITY"
            }]
        })
    },
    "length": 10
}

Mock.mock("/api/courtyardlist", 'get', mainDataSource);
Mock.mock("/api/companylist?name=&currentPage=1&length=5", 'get', conpanyDataSource);