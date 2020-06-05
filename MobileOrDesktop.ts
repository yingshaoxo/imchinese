import { raw_useragent } from './Utils'

const contains = function (str: string, subString: string) {
    return str.indexOf(subString) != -1
};

const matchUserAgent = function (str: string) {
    var userAgent = raw_useragent
    return contains(userAgent.toLowerCase(), str.toLowerCase())
};

const isMobile = function () {
    return !isTablet() &&
        (matchUserAgent('iPod') ||
            matchUserAgent('iPhone') ||
            matchUserAgent('Android') ||
            matchUserAgent('IEMobile'));
};

const isTablet = function () {
    return matchUserAgent('iPad') ||
        (matchUserAgent('Android') &&
            !matchUserAgent('Mobile')) ||
        matchUserAgent('Silk');
};

const isDesktop = function () {
    return !isMobile() &&
        !isTablet();
};

export { isMobile, isTablet, isDesktop }