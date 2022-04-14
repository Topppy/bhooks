import { act, renderHook } from "@testing-library/react-hooks";
import useBoolean from "..";

describe("useBoolean", () => {
  it("should be defined", () => {
    expect(useBoolean).toBeDefined();
  });

  const setUp = (defaultValue?: boolean) =>
    renderHook(() => useBoolean(defaultValue));
  it("useBoolean should work", () => {
    const { result } = setUp();
    expect(result.current[0]).toBe(false);
    act(() => {
      result.current[1].setTrue();
    });
    expect(result.current[0]).toBe(true);
    act(() => {
      result.current[1].setFalse();
    });
    expect(result.current[0]).toBe(false);
    act(() => {
      result.current[1].toggle();
    });
    expect(result.current[0]).toBe(true);
    act(() => {
      result.current[1].toggle();
    });
    expect(result.current[0]).toBe(false);
    act(() => {
      result.current[1].set(false);
    });
    expect(result.current[0]).toBe(false);
    act(() => {
      result.current[1].set(true);
    });
    expect(result.current[0]).toBe(true);
    act(() => {
      // @ts-ignore
      result.current[1].set(0);
    });
    expect(result.current[0]).toBe(false);
    act(() => {
      // @ts-ignore
      result.current[1].set("a");
    });
    expect(result.current[0]).toBe(true);
  });

  it("useBoolean defaultValue should work", () => {
    const { result } = setUp(true);
    expect(result.current[0]).toBe(true);
  });
});
