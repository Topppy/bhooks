import { useCallback, useState } from "react";

// 类似component的合并setState方法
export type SetState<S extends Record<string, any>> = <K extends keyof S>(
  state: Pick<S, K> | null | ((prevState: Readonly<S>) => Pick<S, K> | S | null)
) => void;

const useSetState = <T extends Record<string, any>>(
  initialState: T | (() => T)
): [T, SetState<T>] => {
  const [s, setS] = useState<T>(initialState);

  // 合并set
  const setMergeState: SetState<T> = useCallback((v) => {
    setS((prev: T) => {
      // 判断是否是函数set，函数set则传入prevState，使用返回值作为新的值
      const newState = typeof v === "function" ? v(prev) : v;
      // 判断newState是否可以展开
      return newState ? { ...prev, ...newState } : prev;
    });
  }, []);

  return [s, setMergeState];
};

export default useSetState;
