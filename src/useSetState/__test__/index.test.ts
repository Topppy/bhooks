import { act, renderHook } from "@testing-library/react-hooks";
import useSetState from "../";

describe("useSetState", () => {
  it("should be defined", () => {
    expect(useSetState).toBeDefined();
  });

  // 执行一次
  const setUp = <T extends object>(initialValue: T) =>
    renderHook(() => {
      const [state, setState] = useSetState<T>(initialValue);
      return {
        state,
        setState,
      } as const;
    });

  it("should support initialValue", () => {
    const hook = setUp({ hello: "world" });
    expect(hook.result.current.state).toEqual({ hello: "world" });
  });

  it("should support object", () => {
    const hook = setUp<any>({ hello: "world" });
    act(() => {
      hook.result.current.setState({ foo: "bar" });
    });
    expect(hook.result.current.state).toEqual({ hello: "world", foo: "bar" });
  });

  it("should support function update", () => {
    const hook = setUp<any>({ count: 0 });
    act(() => {
      hook.result.current.setState((prev: any) => ({ count: prev.count + 1 }));
    });
    expect(hook.result.current.state).toEqual({ count: 1 });
  });
});
