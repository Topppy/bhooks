
import { renderHook } from '@testing-library/react-hooks';
import useUnmount from '..'

describe("useUnmount", () => {
  it("should be defined", () => {
    expect(useUnmount).toBeDefined();
  });

  it("useUnmount should work", () => {
    const fn = jest.fn();
    // 执行一次
    const hook = renderHook(() => useUnmount(fn));
    expect(fn).toBeCalledTimes(0);
    hook.rerender();
    expect(fn).toBeCalledTimes(0);
    hook.unmount();
    expect(fn).toBeCalledTimes(1);

    renderHook(() => useUnmount(fn)).unmount();
    expect(fn).toBeCalledTimes(2);
  });
});
