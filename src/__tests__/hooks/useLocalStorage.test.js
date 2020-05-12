import { renderHook, cleanup } from "@testing-library/react-hooks";
import useLocalStorage from "../../hooks/useLocalStorage";

afterEach(cleanup);

test("when call useLocalStorage", () => {
  const { result } = renderHook(() => useLocalStorage("key", "value"));
  expect(result.current).toBeDefined();
});

test("set value to local storage by key", () => {
  const key = "id";
  const value = "123456";

  const { result } = renderHook(() => useLocalStorage(key, value));
  const setValueMock = jest.fn();
  setValueMock.mockResolvedValue(value);

  expect(setValueMock(key)).resolves.toBe(value);
  expect(result.current[0]).toEqual(value);
});
