import { useMemo, useState } from "react";

export interface Actions {
  setTrue: () => void;
  setFalse: () => void;
  set: (value: boolean) => void;
  toggle: () => void;
}

// https://ahooks.js.org/zh-CN/hooks/use-boolean
const useBoolean = (defaultValue?: boolean): [boolean, Actions] => {
  const [state, setState] = useState(defaultValue || false);

  // 保证返回的函数引用是不变的
  const actions = useMemo(() => {
    return {
      set: (v: boolean) => setState(!!v),
      toggle: () => setState((prev) => !prev),
      setTrue: () => setState(true),
      setFalse: () => setState(false),
    };
  }, []);

  return [state, actions];
};

export default useBoolean;
