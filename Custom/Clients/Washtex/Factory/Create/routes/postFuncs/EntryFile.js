import express from 'express';

var router = express.Router();

import {
    PostFunc, PostFuncGenUuId, PostWithCheckAndGenPkFunc, PostSendMailGenUuIdFunc, PostSendMailFunc,
    FromBranchScanFunc
} from '../../controllers/postFuncs/EntryFile.js';

// Post - it's check foreign and unique check and it's collect Max pk and generate UuId And pk also
// router.post('/', PostFunc);
// router.post('/GenUuId', PostFuncGenUuId);
// router.post('/WithCheckAndGenPk', PostWithCheckAndGenPkFunc);
// router.post('/SendMailGenUuId', PostSendMailGenUuIdFunc);
//router.post('/SendMail', PostSendMailFunc);
router.post('/FromBranchScan', FromBranchScanFunc);
router.post('/CancelScan', FromBranchScanFunc);



export { router };