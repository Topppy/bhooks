import { renderHook } from "@testing-library/react-hooks";
import useLatest from "..";

const setUp = (val: any) =>
  renderHook((state) => useLatest(state), { initialProps: val });

describe("useLatest", () => {
  it("should be defined", () => {
    expect(useLatest).toBeDefined();
  });

  it("useLatest with basic variable should work", async () => {
    const { result, rerender } = setUp(0);
    rerender(1);
    expect(result.current).toEqual(1);

    rerender(2);
    expect(result.current).toEqual(2);

    rerender(3);
    expect(result.current).toEqual(3);
  });

  it("useLatest with reference variable should work", async () => {
    const { result, rerender } = setUp({});
    expect(result.current).toEqual({});

    rerender([]);
    expect(result.current).toEqual([]);
  });
});
