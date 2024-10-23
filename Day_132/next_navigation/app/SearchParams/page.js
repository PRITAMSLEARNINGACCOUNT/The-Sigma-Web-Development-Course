"use client";

import { useSearchParams } from "next/navigation";

const SearchParams = () => {
  const SearchParameters = useSearchParams();
  return (
    <div>
      Search Parameters Are &apos;{SearchParameters.get("param")}&apos; and{" "}
      &apos;{SearchParameters.get("hello")}&apos;
    </div>
  );
};

export default SearchParams;
