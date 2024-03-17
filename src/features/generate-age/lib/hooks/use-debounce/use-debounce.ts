import { useEffect } from "react";

function debounce<A = unknown, R = void>(
  fn: (args: A) => R,
  delay: number,
): [(args: A) => Promise<R>, () => void] {
  let timer: NodeJS.Timeout | undefined;

  const debouncedFn = (args: A): Promise<R> =>
    new Promise((resolve) => {
      if (timer) {
        clearTimeout(timer);
      }

      timer = setTimeout(() => {
        resolve(fn(args));
      }, delay);
    });

  const teardown = () => clearTimeout(timer);

  return [debouncedFn, teardown];
}

export const useDebounce = <A = unknown, R = void>(
  fn: (args: A) => R,
  delay: number,
): ((args: A) => Promise<R>) => {
  const [debouncedFn, teardown] = debounce<A, R>(fn, delay);

  useEffect(() => {
    () => teardown();
  });

  return debouncedFn;
};
