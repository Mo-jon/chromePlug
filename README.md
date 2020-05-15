# chromePlug
This is a plug-in of chrome,  It's just an infrastructure for development.
这是一个chrome浏览器插件，只是开发的基础结构


一切从 manifest.json 配置文件开始

{

  "name": "mojon", // 插件名
  
  "description": "Chrome Extension of mojon", // 插件描述
  
  "version": "1.0",  // 插件版本
  
  "manifest_version": 2, // 清单版本
  
  // 插件开发文件 -----------------------------
  
  "browser_action": {
  
    "default_popup": "index.html", // html开发文件
    "default_icon": "favicon.ico"  // 插件图标
  },
  
  "background": {
  
    "scripts": ["background.js"],  // JavaScript开发文件
    "persistent": false
  },
  
  // 获取权限 ----------------------------------
  
  "permissions": [
  
    "activeTab",
    "declarativeContent",
    "storage"
  ],
  
  // 插件注入文件--------------------------------
  
  "content_scripts": [
    {
    
      "matches": ["https://www.bilibili.com/*"], // 注入域名列表 * 
      "css": ["contentCss.css"], // 注入样式
      "js": ["contentScript.js"] // 注入JavaScript
    }
  ]
}
