# ctfile.Workers
使用cloudflare workers提供城通网盘的直连解析服务  

## 使用方法
复制workers.js到cloudflare workers内  
记得修改password变量为你的[默认自定义密码](https://home.ctfile.com/#item-settings/action-passcode)  

##### 提供了一个琴梨梨自建的服务[ctdirect.qinlili.bid](https://ctdirect.qinlili.bid)

## 支持接口
### directlink
参数：file（分享链接`/f/`之后的部分，如`8067059-498942848-21cb26`)，pass（文件密码，不传入则使用内置默认密码）  
该接口将生成一个302跳转到直连地址  
示例：`https://ctdirect.qinlili.bid/directlink?file=8067059-498942848-21cb26`  
### proxylink
参数：file（分享链接`/f/`之后的部分，如`8067059-498942848-21cb26`)，pass（文件密码，不传入则使用内置默认密码）  
该接口将直接代理下载地址，可用于国外加（jian）速下载  
示例：`https://ctdirect.qinlili.bid/proxylink?file=8067059-498942848-21cb26`  
### getlink
参数：file（分享链接`/f/`之后的部分，如`8067059-498942848-21cb26`)，pass（文件密码，不传入则使用内置默认密码）  
该接口将以文本返回直连地址    
示例：`https://ctdirect.qinlili.bid/proxylink?file=8067059-498942848-21cb26`  

## 暂未实现的功能/TODO
支持更多参数读取  

#### 需要用户友好的网页界面？[看看这个网页版](https://github.com/qinlili23333/ctfileGet/)  
#### 需要更快的国内访问？试试[腾讯云版](https://github.com/qinlili23333/ctfile.TencentCloud/)  
