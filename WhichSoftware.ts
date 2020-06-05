import { raw_useragent } from './Utils'
import { isMobile, isTablet, isDesktop } from './MobileOrDesktop'

const contains = function (str: string, subString: string) {
    return str.indexOf(subString) != -1
};

const matchUserAgent = function (str: string) {
    var userAgent = raw_useragent
    return contains(userAgent.toLowerCase(), str.toLowerCase())
};

const isWechat = function () {
    if (isMobile()) {
        var ua = raw_useragent.toLowerCase();
        let match: RegExpMatchArray | null = ua.match(/MicroMessenger/i)
        if (match != null) {
            return true
        }
    }
    return false
};

const isBaidu = function () {
    var ua = raw_useragent.toLowerCase();
    let match: RegExpMatchArray | null = ua.match(/baidu/i)
    if (match != null) {
        return true
    }
    return false
};

const isQQ = function () {
    var ua = raw_useragent.toLowerCase();
    let match: RegExpMatchArray | null = ua.match(/qqbrowser/i)
    if (match != null) {
        return true
    }
    return false
};

const isUC = function () {
    var ua = raw_useragent.toLowerCase();
    let match: RegExpMatchArray | null = ua.match(/ucbrowser/i)
    if (match != null) {
        return true
    }
    return false
};

const isQuark = function () {
    var ua = raw_useragent.toLowerCase();
    let match: RegExpMatchArray | null = ua.match(/quark/i)
    if (match != null) {
        return true
    }
    return false
};

const isSogou = function () {
    var ua = raw_useragent.toLowerCase();
    let match: RegExpMatchArray | null = ua.match(/sogou/i)
    if (match != null) {
        return true
    }
    return false
};

const isHuawei = function () {
    var ua = raw_useragent.toLowerCase();
    let match: RegExpMatchArray | null = ua.match(/huawei/i)
    if (match != null) {
        return true
    }
    return false
};

export { isWechat, isBaidu, isQQ, isUC, isQuark, isSogou, isHuawei }