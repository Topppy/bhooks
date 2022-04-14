import { useEffect } from "react";

// 首次渲染后执行约等于 didmount
const useMount = (fn: () => void) => {
  // 开发环境提供报错信息
  if (process.env.NODE_ENV === "development" && typeof fn !== "function") {
    console.error(
      `useMount: parameter \`fn\` expected to be a function, but got "${typeof fn}".`
    );
  }
  useEffect(() => {
    // 边界 无fn
    fn?.();
  }, []);
};

export default useMount;
