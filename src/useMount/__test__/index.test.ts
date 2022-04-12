
import { renderHook } from '@testing-library/react-hooks';
import useMount from '../'

describe("useMount", () => {
  it("should be defined", () => {
    expect(useMount).toBeDefined();
  });

  it("useMount should work", () => {
    const fn = jest.fn();
    // 执行一次
    const hook = renderHook(() => useMount(fn));
    expect(fn).toBeCalledTimes(1);
    hook.rerender();
    expect(fn).toBeCalledTimes(1);
    hook.unmount();
    expect(fn).toBeCalledTimes(1);

    renderHook(() => useMount(fn)).unmount();
    expect(fn).toBeCalledTimes(2);
  });
});
