function FindProxyForURL(url, host) {
  // 默认全部直连：PC/v2rayN 关闭时国内 App 与所有站点秒开，不受影响
  // 仅下列境外域名走 PC 代理(混合端口10808)；PC关时自动回退直连
  if (shExpMatch(host, "*.google.com") ||
      shExpMatch(host, "*.googleapis.com") ||
      shExpMatch(host, "*.gstatic.com") ||
      shExpMatch(host, "*.youtube.com") ||
      shExpMatch(host, "*.googlevideo.com") ||
      shExpMatch(host, "*.ytimg.com") ||
      shExpMatch(host, "*.ggpht.com") ||
      shExpMatch(host, "*.twitter.com") ||
      shExpMatch(host, "*.x.com") ||
      shExpMatch(host, "*.facebook.com") ||
      shExpMatch(host, "*.instagram.com") ||
      shExpMatch(host, "*.fbcdn.net") ||
      shExpMatch(host, "*.openai.com") ||
      shExpMatch(host, "*.chatgpt.com") ||
      shExpMatch(host, "*.oaistatic.com") ||
      shExpMatch(host, "*.wikipedia.org") ||
      shExpMatch(host, "*.mediawiki.org") ||
      shExpMatch(host, "*.github.com") ||
      shExpMatch(host, "*.githubusercontent.com") ||
      shExpMatch(host, "*.githubassets.com") ||
      shExpMatch(host, "*.discord.com") ||
      shExpMatch(host, "*.reddit.com") ||
      shExpMatch(host, "*.redditstatic.com") ||
      shExpMatch(host, "*.netflix.com") ||
      shExpMatch(host, "*.spotify.com") ||
      shExpMatch(host, "*.medium.com") ||
      shExpMatch(host, "*.substack.com") ||
      shExpMatch(host, "*.telegram.org") ||
      shExpMatch(host, "*.t.me") ||
      shExpMatch(host, "*.whatsapp.net") ||
      shExpMatch(host, "*.anthropic.com") ||
      shExpMatch(host, "*.cloudflare.com") ||
      shExpMatch(host, "*.figma.com") ||
      shExpMatch(host, "*.notion.so") ||
      shExpMatch(host, "*.steamcommunity.com") ||
      shExpMatch(host, "*.twitch.tv") ||
      shExpMatch(host, "*.vimeo.com") ||
      shExpMatch(host, "*.epicgames.com")) {
    return "PROXY 192.168.124.7:10808; DIRECT";
  }
  // 其余一律直连（国内 App、国内站点、以及未列出的境外站）
  return "DIRECT";
}
