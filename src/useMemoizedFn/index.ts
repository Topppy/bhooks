import { useRef, useMemo } from "react";
// https://ahooks.js.org/zh-CN/hooks/use-memoized-fn
// 同时保证函数地址永远不会变化。
type noop = (this: any, ...args: any[]) => any;

type PickFunction<T extends noop> = (
  this: ThisParameterType<T>,
  ...args: Parameters<T>
) => ReturnType<T>;

const useMemoizedFn = <T extends noop>(fn: T) => {
  // 这里只实现了保存第一次传入的fn的引用
  const ref = useRef(fn);
  // 当传入的fn变化的时候,更新ref的引用
  // why not write `ref.current = fn`?
  // https://github.com/alibaba/hooks/issues/728
  ref.current = useMemo(() => fn, [fn]);
  // 此时ref.current就变化了，所以得创建一个不变的函数引用，里面执行变化的fn引用来得到正确的结果
  const memorizedFn = useRef<PickFunction<T>>(function (this, ...args) {
    return ref.current.apply(this, args);
  });

  // 最后返回不变的函数引用
  return memorizedFn.current;
};

export default useMemoizedFn;
