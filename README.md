# imchinese
Help you to detect if the client is in a Chinese browser.

### Installation
```
npm i imchinese

or

yarn add imchinese
```

### Basic Usage
```
import { imchinese } from 'imchinese'

console.log(imchinese) 
```
It'll return `true` if it's in a chinese browser.

### Check if it's Mobile or Desktop
```
import { isMobile, isTablet, isDesktop } from 'imchinese'

console.log(isMobile())
```
It'll return `true` if it's in mobile.

### Check if it's in Wechat
```
import { isWechat } from 'imchinese'

console.log(isWechat())
```
It'll return `true` if it's in wechat.
We also implemented `isBaidu, isQQ, isUC, isQuark, isSogou, isHuawei`.
> I also want to put 360 into this list, but 360 doesn't have any symbols that we can track...

### Get More Details
```
import { info } from 'imchinese'

console.log(info)
```
```
{
    "os": "iOS",
    "browser": {
        "chrome": false,
        "firefox": false,
        "ie": false,
        "mobile_safari": true,
        "mozilla": false,
        "opera": false,
        "safari": true,
        "webkit": true,
        "android": false,
        "version": "604.1.34"
    },
    "language": "en-us"
}
```

### In The End
**Contribution is welcomed!**
