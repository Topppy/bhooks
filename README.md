# ahooks 的实现练习

## 项目结构

```
├── README.md
├── jest.config.js
├── package-lock.json
├── package.json
├── src
│   └── useMemoizedFn
│       ├── __tests__  // 测试
│       └── index.ts   // 源码
└── tsconfig.json
```

## 问题

### testing-library react 18 warning

> Warning: ReactDOM.render is no longer supported in React 18. Use createRoot instead. Until you switch to the new API, your app will behave as if it's running React 17. Learn more: https://reactjs.org/link/switch-to-createroot

https://github.com/testing-library/react-testing-library/issues/509
https://github.com/testing-library/react-hooks-testing-library/pull/655

todo: 升级到支持 react18 的版本

#### 参考文档

[ahooks](https://ahooks.js.org/zh-CN/hooks/use-request/index)
[jest](https://jestjs.io/docs/getting-started)
[test-library](https://testing-library.com/docs/)
