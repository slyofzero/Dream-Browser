import { FormEvent, useRef } from "react";
import { useGlobalStates } from "../states";
import { urlRegex } from "../utils";

interface SearchBoxProps {
  className?: string;
}

export function SearchBox({ className }: SearchBoxProps) {
  className ||= "rounded-md w-full bg-main-4 px-4 py-2 outline-none text-sm";
  const searchInputRef = useRef<HTMLInputElement>(null);
  const { setViewSrc } = useGlobalStates();

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    const inputTarget = searchInputRef.current;

    if (inputTarget) {
      const { value } = inputTarget;
      const isUrl = urlRegex.test(value);

      if (isUrl) {
        setViewSrc(value);
      } else {
        const googleSearchURL = "https://www.google.com/search?q=" + encodeURIComponent(value);
        setViewSrc(googleSearchURL);
      }
    }
  };

  return (
    <form onSubmit={onSubmit}>
      <input
        id="searchBox"
        ref={searchInputRef}
        type="text"
        placeholder="Search the web privately..."
        className={className}
      />
    </form>
  );
}
