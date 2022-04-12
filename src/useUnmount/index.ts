import { useEffect, useRef } from "react";
import useLatest from "../useLatest";

const useUnmount = (fn: () => void) => {
  // 开发环境提供报错信息
  if (process.env.NODE_ENV === "development" && typeof fn !== "function") {
    console.error(
      `useMount: parameter \`fn\` expected to be a function, but got "${typeof fn}".`
    );
  }
  const refFn = useLatest(fn);

  useEffect(() => {
    return () => {
      refFn?.();
    };
  }, []);
};

export default useUnmount;
