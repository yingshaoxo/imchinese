import { raw_useragent } from './Utils'
import { isMobile, isTablet, isDesktop } from './MobileOrDesktop'
import { isWechat, isBaidu, isQQ, isUC, isQuark, isSogou, isHuawei } from './WhichSoftware'
import useragent from 'useragent'

var info = {
    os: useragent.parse(raw_useragent).os.family,
    browser: useragent.is(raw_useragent),
    language: navigator.language.toLowerCase(),
}

let imchinese = false
if (isWechat()) {
    imchinese = true
} else if (isBaidu()) {
    imchinese = true
} else if (isQQ()) {
    imchinese = true
} else if (isUC()) {
    imchinese = true
} else if (isQuark()) {
    imchinese = true
} else if (isSogou()) {
    imchinese = true
} else if (isHuawei()) {
    imchinese = true
}
// I also want to put 360 into this list, but 360 don't have any symbols that we can track...

export {
    imchinese,
    info,
    isMobile,
    isTablet,
    isDesktop,
    isWechat,
    isBaidu,
    isQQ,
    isUC,
    isQuark,
    isSogou,
    isHuawei,
    raw_useragent as raw
}
export default imchinese
