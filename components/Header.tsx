"use client";
import debounce from "lodash.debounce";
import Image from "next/image";
import { MagnifyingGlassIcon, UserCircleIcon } from "@heroicons/react/24/solid";
import Avatar from "react-avatar";
import { useBoardStore } from "@/store/BoardStore";
import { useCallback, useEffect, useMemo, useRef } from "react";
function Header() {
  const [searchString, setSearchString] = useBoardStore((state) => [
    state.searchString,
    state.setSearchString,
  ]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchString(e.target.value);
  };
  const debouncedChangeHandler = useMemo(
    () => debounce(handleChange, 1000),
    [searchString]
  );
  useEffect(() => {
    return () => {
      debouncedChangeHandler.cancel();
    };
  }, []);
  return (
    <header>
      <div
        className="absolute top-0 left-0 w-full h-96 bg-gradient-to-br from-pink-400 to-[#0055D1] rounded-md filter blur-3xl 
        opacity-50 -z-50"
      />

      <div className="flex flex-col md:flex-row items-center p-5 bg-gray-500/10 rounded-b-2xl  ">
        <Image
          src="https://links.papareact.com/c2cdd5"
          alt="Trello logo"
          width={300}
          height={100}
          className="w-44 md:56 pb-10 md:pb-0 object-contain"
        />
        <div className="flex items-center space-x-5 flex-1 justify-end w-full">
          {/* SEARCH */}
          <form
            action=""
            className="flex items-center space-x-5 bg-white rounded-md p-2 shadow-md flex-1 md:flex-initial"
          >
            <MagnifyingGlassIcon className="h-6 w-6 text-gray-500" />
            <input
              onChange={debouncedChangeHandler}
              type="text"
              placeholder="search"
              className="flex-1 outline-none p-2 "
            />
            <button hidden type="submit"></button>
          </form>
          {/* AVATAR */}
          <Avatar name="Mahmoud Qadurra" round color="#0055D1" size="50" />
        </div>
      </div>

      <div className="flex items-center justify-center px-5 py-2 md:py-5 ">
        <p className="flex items-center text-sm font-light p-5  shadow-xl rounded-xl w-fit bg-white italic max-w-3xl text-[#0055D1]">
          <UserCircleIcon className="inline-block h-10 w-10 text-[#0055D1] mr-1 " />
          GPT is summarizing your tasks...
        </p>
      </div>
    </header>
  );
}

export default Header;
