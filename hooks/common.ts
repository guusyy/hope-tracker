import { useEffect, useState } from "react";

export function useDebounce<T>(value: T, delay: number) {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(timeout);
    };
  }, [value, delay]);

  return debouncedValue;
}

export function useLoaderWithMinimumTime(
  isFetching: boolean,
  minimumTime: number
) {
  const [loaderVisible, setLoaderVisible] = useState(false);
  const [fetchingStarted, setFetchingStarted] = useState(false);

  useEffect(() => {
    if (isFetching) {
      setFetchingStarted(true);
      setLoaderVisible(true);
      const timer = setTimeout(() => {
        setLoaderVisible(false);
      }, minimumTime);

      return () => clearTimeout(timer);
    } else if (fetchingStarted) {
      // If fetching is done before the minimum time, we wait until the timer
      // completes before hiding the loader
      const timer = setTimeout(() => {
        setLoaderVisible(false);
      }, minimumTime);

      return () => clearTimeout(timer);
    }
  }, [isFetching, fetchingStarted, minimumTime]);

  return loaderVisible;
}
