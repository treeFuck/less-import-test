# 对比
```bash
├── node_modules
|    ├── less-A @1.0.0
|    │    └── index.less            →   background-color: #f40;       
|    |
|    └── less-B
|        ├── index.less             →   @import url("less-A/index.less");
|        └── node_modules
|             └── less-A @2.0.0   
|                  └── index.less   →   background-color: #000;
|
├── vite-test
|    └── index.less                 →   @import url("less-B/index.less");   →  background-color = '#000'
|
└── webpack-test
     └── index.less                 →   @import url("less-B/index.less");   →  background-color = '#f40'

```


after `npm run vite-dev`, open `http://localhost:8089/vite-test/index.html`, the  background color of `.test` dom is `#000`;

after `npm run webpack-build`, open `./webpack-test/dist/index.html`, the  background color of `.test` dom is `#f40`;
