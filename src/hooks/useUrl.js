import { useSearchParams } from "react-router-dom";

export const useUrl = (name) => {
  const [searchParams, setSearchParams] = useSearchParams();

  const handler = (value) => {
    searchParams.set(name, value);
    setSearchParams(searchParams);
  };

  return { handler, searchParams };
};
