//用于标注创建的缓存，也可以根据它来建立版本规范
var cache_name = "pwa-0.0.1";
// 列举要默认缓存的静态资源，一般用于离线使用
var cacheList = ['/', './index.html', './icon.png', './test.js'];

// 安装
self.addEventListener('install', function (e) {
  // e.waitUtil 用于在安装成功之前执行一些预装逻辑
  // 但是建议只做一些轻量级和非常重要资源的缓存，减少安装失败的概率
  // 安装成功后 ServiceWorker 状态会从 installing 变为 installed
  console.log('SW is installed');
  e.waitUntil(
    // 使用 cache API 打开指定的 cache 文件
    caches.open(cache_name).then(function (cache) {
      // 添加要缓存的资源列表
      cache.addAll(cacheList);
    }).then(function () {
      // 安装阶段跳过等待，直接进入 active
      self.skipWaiting();
    })
  )
})

// 激活
self.addEventListener('activate', function (e) {
  e.waitUntil(
    caches.keys().then(function (cacheNames) {
      return Promise.all(
        cacheNames.filter(function (cacheNames) {
          console.log(cacheNames)
          return cacheNames !== cache_name;
        }).map(function (cacheNames) {
          // 清理旧版本
          console.log(caches)
          return caches.delete(cacheNames);
        })
      )
    }).then(function () {
      // 更新客户端
      return self.clients.claim();
    })
  )
})

// 请求
self.addEventListener('fetch', function (e) {
  e.respondWith(
    caches.match(e.request).then(function (response) {
      if (response != null) {
        return response;
      }
      return fetch(e.response);
    })
  )
})
