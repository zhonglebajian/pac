function FindProxyForURL(url, host) {
  // 直连：本机、局域网、国内常见域名
  if (isPlainHostName(host) ||
      shExpMatch(host, "localhost") ||
      shExpMatch(host, "*.local") ||
      shExpMatch(host, "127.*") ||
      shExpMatch(host, "10.*") ||
      shExpMatch(host, "172.16.*") ||
      shExpMatch(host, "192.168.*") ||
      shExpMatch(host, "169.254.*") ||
      shExpMatch(host, "*.cn") ||
      shExpMatch(host, "*.baidu.com") ||
      shExpMatch(host, "*.qq.com") ||
      shExpMatch(host, "*.weixin.qq.com") ||
      shExpMatch(host, "*.taobao.com") ||
      shExpMatch(host, "*.jd.com") ||
      shExpMatch(host, "*.bilibili.com") ||
      shExpMatch(host, "*.weibo.com") ||
      shExpMatch(host, "*.163.com") ||
      shExpMatch(host, "*.sina.com.cn") ||
      shExpMatch(host, "*.aliyun.com") ||
      shExpMatch(host, "*.tencent.com") ||
      shExpMatch(host, "*.163.com") ||
      shExpMatch(host, "*.360.com") ||
      shExpMatch(host, "*.youku.com") ||
      shExpMatch(host, "*.iqiyi.com")) {
    return "DIRECT";
  }
  // 其余走 PC 代理（混合端口10808，HTTP/SOCKS5皆可）；
  // PC 关机或未开 v2rayN 时自动直连（关键兜底，免去手动关代理）
  return "PROXY 192.168.124.7:2080; DIRECT";
}
