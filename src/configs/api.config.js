

const serviceConfig = JSON.parse(localStorage.getItem('scmp-web'));
const rewrite = {
    //项目代理路径【做前后端分离时，需要在Nginx中配置这个做为代理解决跨域，本地测试时，需要在package.json中配置proxy】
    //scmp:'scmp.api',
    scmp: process.env.NODE_ENV !== 'production' ? '/scmp.api' : serviceConfig.scmpApi,
    file: process.env.NODE_ENV !== 'production' ? '/file.api' : serviceConfig.ecmpFile,

};

/* API接口应用访问地址 */
export const apiConfig = {
    residentManage: {
        findAll: rewrite.scmp + '/scmp/residentManagement/page',
        add: rewrite.scmp + '/scmp/residentManagement/add',
        update: rewrite.scmp + '/scmp/residentManagement/update',
        deletePhysical: rewrite.scmp + '/scmp/residentManagement/delete/physical',
        deleteLogic: rewrite.scmp + '/scmp/residentManagement/delete/logic',
        addBatch: rewrite.scmp + '/scmp/residentManagement/addEntitiesForImport',
        residentImport: rewrite.scmp + '/scmp/residentManagement/import'
    },
    community: {
        findAll: rewrite.scmp + '/scmp/community/page',
        add: rewrite.scmp + '/scmp/community/add',
        update: rewrite.scmp + '/scmp/community/update',
        deletePhysical: rewrite.scmp + '/scmp/community/delete/physical',
        deleteLogic: rewrite.scmp + '/scmp/community/delete/logic',
        findCascade: rewrite.scmp + '/scmp/community/findCascade'
    },
    commodityManage: {
        findAll: rewrite.scmp + '/scmp/commodityManagement/find/page',
        add: rewrite.scmp + '/scmp/commodityManagement/add',
        update: rewrite.scmp + '/scmp/commodityManagement/update',
        deletePhysical: rewrite.scmp + '/scmp/commodityManagement/delete/physical',
        deleteLogic: rewrite.scmp + '/scmp/commodityManagement/delete/logic',
        exchangeRecord: rewrite.scmp + '/scmp/exchangeRecord/page/admin',
        findDataById: rewrite.scmp + '/scmp/commodityManagement'
    },
    integralRule: {
        findAll: rewrite.scmp + '/scmp/integralRule/page',
        add: rewrite.scmp + '/scmp/integralRule/add',
        update: rewrite.scmp + '/scmp/integralRule/update',
        deletePhysical: rewrite.scmp + '/scmp/integralRule/delete/physical',
        deleteLogic: rewrite.scmp + '/scmp/integralRule/delete/logic'
    },
    integralRuleType: {
        findAll: rewrite.scmp + '/scmp/integralRuleType/page',
        add: rewrite.scmp + '/scmp/integralRuleType/add',
        update: rewrite.scmp + '/scmp/integralRuleType/update',
        deletePhysical: rewrite.scmp + '/scmp/integralRuleType/delete/physical',
        deleteLogic: rewrite.scmp + '/scmp/integralRuleType/delete/logic'
    },
    integralRecord: {
        findAll: rewrite.scmp + '/scmp/integralRecord/page',
        findPersonRecord: rewrite.scmp + '/scmp/integralRecord/record/page',
        findPeoplePage: rewrite.scmp + '/scmp/integralRecord/find/integral/page'
    },
    thirdPartyOrganization: {
        findAll: rewrite.scmp + '/scmp/thirdPartyOrganization/page',
        add: rewrite.scmp + '/scmp/thirdPartyOrganization/add',
        update: rewrite.scmp + '/scmp/thirdPartyOrganization/update',
        deletePhysical: rewrite.scmp + '/scmp/thirdPartyOrganization/delete/byPhysical',
        deleteLogic: rewrite.scmp + '/scmp/thirdPartyOrganization/delete/byLogic'
    },
    vehicle: {
        findAll: rewrite.scmp + '/scmp/vehicle/page',
        add: rewrite.scmp + '/scmp/vehicle/add',
        update: rewrite.scmp + '/scmp/vehicle/update',
        deletePhysical: rewrite.scmp + '/scmp/vehicle/delete/physical',
        deleteLogic: rewrite.scmp + '/scmp/vehicle/delete/logic'
    },
    street: {
        findAll: rewrite.scmp + '/scmp/street/page',
        add: rewrite.scmp + '/scmp/street/add',
        update: rewrite.scmp + '/scmp/street/update',
        deletePhysical: rewrite.scmp + '/scmp/street/delete/physical',
        deleteLogic: rewrite.scmp + '/scmp/street/delete/logic'
    },
    incidentReport: {
        getTodoStatusTask: rewrite.scmp + '/scmp/incidentReport/getTodoStatusTask',
        getWorkerStatusTask: rewrite.scmp + '/scmp/incidentReport/getWorkerStatusTask',
        incidentReportVerify: rewrite.scmp + '/scmp/incidentReportVerify/reassignTask',
        verifyTask: rewrite.scmp + '/scmp/incidentReportVerify/verifyTask',
        processTask: rewrite.scmp + '/scmp/incidentReportVerify/processTask',

    },
    vote: {
        findAll: rewrite.scmp + '/scmp/voting/findAll',
        add: rewrite.scmp + '/scmp/voting/add',
        update: rewrite.scmp + '/scmp/voting/update',
        deleteLogic: rewrite.scmp + '/scmp/voting/delete',
        operate: rewrite.scmp + '/scmp/voting/operate',
        findVotingResult: rewrite.scmp + '/scmp/votingAnswer/findVotingResult',
    },
    communityPoliceInfo: {
        findAll: rewrite.scmp + '/scmp/communityPoliceInfo/page',
        findById: rewrite.scmp + '/scmp/communityPoliceInfo',
        add: rewrite.scmp + '/scmp/communityPoliceInfo/add',
        update: rewrite.scmp + '/scmp/communityPoliceInfo/update',
        deletePhysical: rewrite.scmp + '/scmp/communityPoliceInfo/delete/physical',
        deleteLogic: rewrite.scmp + '/scmp/communityPoliceInfo/delete/logic',
        findCourtyardByPoliceId: rewrite.scmp + '/scmp/communityPoliceInfo/findCourtyardByPoliceId'
    },
    courtyard: {
        findAll: rewrite.scmp + '/scmp/courtyard/page',
        add: rewrite.scmp + '/scmp/courtyard/add',
        update: rewrite.scmp + '/scmp/courtyard/update',
        deletePhysical: rewrite.scmp + '/scmp/courtyard/delete/physical',
        deleteLogic: rewrite.scmp + '/scmp/courtyard/delete/logic',
        findCascade: rewrite.scmp + '/scmp/courtyard/findCascade'
    },
    banner: {
        findAll: rewrite.scmp + '/scmp/bannerLocation/page',
        addBannerLocation: rewrite.scmp + '/scmp/bannerLocation/addBannerLocation',
        updateBannerLocation: rewrite.scmp + '/scmp/bannerLocation/updateBannerLocation',
        deleteBannerLocation: rewrite.scmp + '/scmp/bannerLocation/delete/physical',
        findBanner: rewrite.scmp + '/scmp/bannerManage/page',
        getAllBannerLocation: rewrite.scmp + '/scmp/bannerLocation/getAllBannerLocation',
        getBannerType: rewrite.scmp + '/scmp/bannerManage/getBannerType',
        addBannerManage: rewrite.scmp + '/scmp/bannerManage/addBannerManage',
        updateBannerManage: rewrite.scmp + '/scmp/bannerManage/updateBannerManage',
        deleteBannerManage: rewrite.scmp + '/scmp/bannerManage/delete/physical',
        getBannerLocation: rewrite.scmp + '/scmp/bannerLocation/page'
    },
    buildings: {
        findAll: rewrite.scmp + '/scmp/buildings/page',
        add: rewrite.scmp + '/scmp/buildings/add',
        update: rewrite.scmp + '/scmp/buildings/update',
        deletePhysical: rewrite.scmp + '/scmp/buildings/delete/physical',
        deleteLogic: rewrite.scmp + '/scmp/buildings/delete/logic',
        findCascade: rewrite.scmp + '/scmp/buildings/findCascade'
    },
    house: {
        findAll: rewrite.scmp + '/scmp/house/page',
        add: rewrite.scmp + '/scmp/house/add',
        update: rewrite.scmp + '/scmp/house/update',
        deletePhysical: rewrite.scmp + '/scmp/house/delete/physical',
        deleteLogic: rewrite.scmp + '/scmp/house/delete/logic',
        findResidentByHouseId: rewrite.scmp + '/scmp/house/findCascade',
        findResidentById: rewrite.scmp + '/scmp/house/findResidentByHouseId',
        findDataById: rewrite.scmp + '/scmp/house'
    },
    completely: {
        findAll: rewrite.scmp + '/scmp/deliberation/page',
        update: rewrite.scmp + '/scmp/deliberation/update',
        deletePhysical: rewrite.scmp + '/scmp/deliberation/delete/physical',
        deleteLogic: rewrite.scmp + '/scmp/deliberation/delete/logic',
        deliberationContextPhysical: rewrite.scmp + '/scmp/deliberationContext/delete/physical',
        deliberationContextLogic: rewrite.scmp + '/scmp/deliberationContext/delete/logic',
        findByDeliberationId: rewrite.scmp + '/scmp/deliberationContext/findByDeliberationId'
    },
    communityGrid: {
        findAll: rewrite.scmp + '/scmp/communityGridManage/page',
        add: rewrite.scmp + '/scmp/communityGridManage/add',
        update: rewrite.scmp + '/scmp/communityGridManage/update',
        deletePhysical: rewrite.scmp + '/scmp/communityGridManage/delete/physical',
        deleteLogic: rewrite.scmp + '/scmp/communityGridManage/delete/logic'
    },
    communityWorker: {
        findAll: rewrite.scmp + '/scmp/communityWorker/page',
        add: rewrite.scmp + '/scmp/communityWorker/add',
        update: rewrite.scmp + '/scmp/communityWorker/update',
        deletePhysical: rewrite.scmp + '/scmp/communityWorker/delete/physical',
        deleteLogic: rewrite.scmp + '/scmp/communityWorker/delete/logic',
        registerPlatfrom: rewrite.scmp + '/scmp/communityWorker/registerPlatform',
        findByPlatformUserId: rewrite.scmp + '/scmp/communityWorker/findByPlatformUserId',
        findDataById: rewrite.scmp + '/scmp/communityWorker'
    },
    // 这里暂时写死地址
    fileUpload: {
        upload: rewrite.file + '/upload/id',
        delete: rewrite.file + '/delete/',
        viwer: rewrite.file + '/views/'
    },
    organizeMember: {
        findBySource: rewrite.scmp + '/scmp/organizeMember/find/source',
        findAllById: rewrite.scmp + '/scmp/organizeMember/find/page',
        findAll: rewrite.scmp + '/scmp/organizeMember/page',
        add: rewrite.scmp + '/scmp/organizeMember/add',
        update: rewrite.scmp + '/scmp/organizeMember/update',
        addMember: rewrite.scmp + '/scmp/organizeMember/com/add',
        deletePhysical: rewrite.scmp + '/scmp/organizeMember/delete/physical',
        deleteLogic: rewrite.scmp + '/scmp/organizeMember/delete/logic'
    },
    column: {
        findTree: rewrite.scmp + '/scmp/columnManage/find/all',
        findParent: rewrite.scmp + '/scmp/columnManage/find/parent',
        findSourceTree: rewrite.scmp + '/scmp/voting/getSourceTree',
        findAll: rewrite.scmp + '/scmp/columnManage/find/page',
        add: rewrite.scmp + '/scmp/columnManage/add',
        update: rewrite.scmp + '/scmp/columnManage/update',
        deletePhysical: rewrite.scmp + '/scmp/columnManage/delete/physical',
        deleteLogic: rewrite.scmp + '/scmp/columnManage/delete/logic'
    },
    information: {
        findAll: rewrite.scmp + '/scmp/informationRelease/find/page',
        findById: rewrite.scmp + '/scmp/informationRelease/',
        add: rewrite.scmp + '/scmp/informationRelease/add',
        update: rewrite.scmp + '/scmp/informationRelease/update',
        deletePhysical: rewrite.scmp + '/scmp/informationRelease/delete/physical',
        deleteLogic: rewrite.scmp + '/scmp/informationRelease/delete/logic',
        findDataById: rewrite.scmp + '/scmp/informationRelease/'
    },
    circle: {
        findAll: rewrite.scmp + '/scmp/communityCircle/find/admin/page',
        create: rewrite.scmp + '/scmp/communityCircle/auto/create',
        add: rewrite.scmp + '/scmp/communityCircle/add',
        update: rewrite.scmp + '/scmp/communityCircle/update',
        deletePhysical: rewrite.scmp + '/scmp/communityCircle/delete/physical',
        deleteLogic: rewrite.scmp + '/scmp/communityCircle/delete/logic',
        delete: rewrite.scmp + '/scmp/communityCircle/delete'//一并删除文章，成员
    },
    circleMember: {
        findAll: rewrite.scmp + '/scmp/circleMember/find/page',
        delete: rewrite.scmp + '/scmp/circleMember/delete',
        addMember: rewrite.scmp + '/scmp/circleMember/auto/addMember',
        deleteOrUpdate: rewrite.scmp + '/scmp/circleMember/batch/deleteOrUpdate'
    },
    circleArticle: {
        findAll: rewrite.scmp + '/scmp/circleArticle/page',
        add: rewrite.scmp + '/scmp/circleArticle/add',
        update: rewrite.scmp + '/scmp/circleArticle/update',
        deletePhysical: rewrite.scmp + '/scmp/circleArticle/delete/physical',
        deleteLogic: rewrite.scmp + '/scmp/circleArticle/delete/logic',
        delete: rewrite.scmp + '/scmp/circleArticle/delete',//一并删除文章评论,
        findComment: rewrite.scmp + '/scmp/circleComment/find/page',
        deleteComment: rewrite.scmp + '/scmp/circleComment/delete/logic',
    },
    resourceApplyRecord: {
        findAll: rewrite.scmp + '/scmp/resourceApplyRecord/page',
        findById: rewrite.scmp + '/scmp/resourceApplyRecord/find/page',
        add: rewrite.scmp + '/scmp/resourceApplyRecord/add',
        update: rewrite.scmp + '/scmp/resourceApplyRecord/update',
        deletePhysical: rewrite.scmp + '/scmp/resourceApplyRecord/delete/physical',
        deleteLogic: rewrite.scmp + '/scmp/resourceApplyRecord/delete/logic'
    },
    publicResource: {
        findAll: rewrite.scmp + '/scmp/publicResource/page',
        add: rewrite.scmp + '/scmp/publicResource/add',
        update: rewrite.scmp + '/scmp/publicResource/update',
        deletePhysical: rewrite.scmp + '/scmp/publicResource/delete/byPhysical',
        deleteLogic: rewrite.scmp + '/scmp/publicResource/delete/byLogic'
    },
    volunteer: {
        findAll: rewrite.scmp + '/scmp/volunteer/page',
        add: rewrite.scmp + '/scmp/volunteer/add',
        update: rewrite.scmp + '/scmp/volunteer/update',
        deletePhysical: rewrite.scmp + '/scmp/volunteer/delete/physical',
        deleteLogic: rewrite.scmp + '/scmp/volunteer/delete/logic'
    },
    volunteerTeam: {
        findAll: rewrite.scmp + '/scmp/volunteerTeam/page',
        findById: rewrite.scmp + '/scmp/volunteerTeam',
        add: rewrite.scmp + '/scmp/volunteerTeam/add',
        update: rewrite.scmp + '/scmp/volunteerTeam/update',
        deletePhysical: rewrite.scmp + '/scmp/volunteerTeam/delete/physical',
        deleteLogic: rewrite.scmp + '/scmp/volunteerTeam/delete/logic',
        findVolunteerByVolunteerTeamId: rewrite.scmp + '/scmp/volunteerTeam/findVolunteerByVolunteerTeamId'
    },
    serviceInfo: {
        findAll: rewrite.scmp + '/scmp/serviceInfo/page',
        add: rewrite.scmp + '/scmp/serviceInfo/add',
        update: rewrite.scmp + '/scmp/serviceInfo/update',
        deletePhysical: rewrite.scmp + '/scmp/serviceInfo/delete/physical',
        deleteLogic: rewrite.scmp + '/scmp/serviceInfo/delete/logic'
    },
    voting: {
        findAll: rewrite.scmp + '/scmp/voting/findAll',
        findById: rewrite.scmp + '/scmp/voting/findById',
        add: rewrite.scmp + '/scmp/voting/add',
        update: rewrite.scmp + '/scmp/voting/update',
        delete: rewrite.scmp + '/scmp/voting/delete',
    },
    partyOrganization: {
        findTree: rewrite.scmp + '/scmp/partyOrganization/getTreeList',
        findAll: rewrite.scmp + '/scmp/partyOrganization/findAll',
        add: rewrite.scmp + '/scmp/partyOrganization/add',
        update: rewrite.scmp + '/scmp/partyOrganization/update',
        deleteLogic: rewrite.scmp + '/scmp/partyOrganization/delete',
        findMember: rewrite.scmp + '/scmp/partyOrganization/findMember'
    },
    communityProgram: {
        findAll: rewrite.scmp + '/scmp/communityProgram/page',
        add: rewrite.scmp + '/scmp/communityProgram/add',
        update: rewrite.scmp + '/scmp/communityProgram/update',
        deletePhysical: rewrite.scmp + '/scmp/communityProgram/delete/physical',
        deleteLogic: rewrite.scmp + '/scmp/communityProgram/delete/logic'
    },
    communityCapital: {
        findCapital: rewrite.scmp + '/scmp/communityCapital/capital/page',
        addCapital: rewrite.scmp + '/scmp/communityCapital/addCommunityCapital',
        updateCapital: rewrite.scmp + '/scmp/communityCapital/updateCommunityCapital',
        deleteCapital: rewrite.scmp + '/scmp/communityCapital/capital/delete/logic',
        findDetail: rewrite.scmp + '/scmp/communityCapital/detail/page',
        addDetail: rewrite.scmp + '/scmp/communityCapital/addCapitalDetail',
        updateDetail: rewrite.scmp + '/scmp/communityCapital/updateCapitalDetail',
        deleteDetail: rewrite.scmp + '/scmp/communityCapital/detail/delete/logic'
    },
    partyMember: {
        findAll: rewrite.scmp + '/scmp/partyMember/page',
        add: rewrite.scmp + '/scmp/partyMember/add',
        update: rewrite.scmp + '/scmp/partyMember/update',
        deletePhysical: rewrite.scmp + '/scmp/partyMember/delete/physical',
        deleteLogic: rewrite.scmp + '/scmp/partyMember/delete/logic'
    },
    residentVehicleHouseQuery: {
        findAll: rewrite.scmp + '/scmp/residentVehicleHouseQuery/findAll'
    },
    messageBox: {
        getList: rewrite.scmp + '/scmp/message/getList',
        reply: rewrite.scmp + '/scmp/message/addMessageReply',
        replyList: rewrite.scmp + '/scmp/message/getReplyList',
        complete: rewrite.scmp + '/scmp/message/complete',
        delete: rewrite.scmp + '/scmp/message/delete',
        deleteReply: rewrite.scmp + '/scmp/message/deleteReply'
    },
    indexPage: {
        getStatisticsCount: rewrite.scmp + '/scmp/index/getIndexStatisticalData',
        getTodoTask: rewrite.scmp + '/scmp/incidentReport/getTodoTask',
        findByStatus: rewrite.scmp + '/scmp/deliberation/findByStatus'
    },
    lifeService: {
        findAll: rewrite.scmp + '/scmp/lifeService/page',
        add: rewrite.scmp + '/scmp/lifeService/add',
        update: rewrite.scmp + '/scmp/lifeService/update',
        deletePhysical: rewrite.scmp + '/scmp/lifeService/delete/physical',
        deleteLogic: rewrite.scmp + '/scmp/lifeService/delete/logic'
    },
    eSafety: {
        vehicleBaseInfo: rewrite.scmp + '/scmp/safetyVehicle/page',
        enterVehicleInfo: rewrite.scmp + '/scmp/safetyVehicleEntryInfo/page',
        getCountInfo: rewrite.scmp + '/scmp/safetyEntranceGuard/getCount',
        findAllForEntranceGuard: rewrite.scmp + '/scmp/safetyEntranceGuard/page',
        findAllForVideo: rewrite.scmp + '/scmp/safetyVideo/page',
        findAllForFire: rewrite.scmp + '/scmp/safetyFire/page',
        findAllForHealth: rewrite.scmp + '/scmp/safetyHealth/page',
        findAllForHealthDetail: rewrite.scmp + '/scmp/safetyHealthPluse/page',
        findAllForCovers: rewrite.scmp + '/scmp/safetyCovers/page',
        findAllForAlarmCovers: rewrite.scmp + '/scmp/safetyCoversAlarmInfo/page',
    }


};