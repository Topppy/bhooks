import { useRef } from "react";

// 始终返回最新的值，避免闭包
const useLatest = <T>(value: T) => {
  const ref = useRef(value);

  ref.current = value;
  return ref.current;
};

export default useLatest;
