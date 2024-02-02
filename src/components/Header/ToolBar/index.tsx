import {
  ArrowLeftIcon,
  ArrowRightIcon,
  SymbolIcon,
  BookmarkIcon,
  DotsVerticalIcon,
} from "@radix-ui/react-icons";
import { SearchBox } from "@/components/SearchBox";
import { HomeButton } from "./HomeButton";
import { AiChat } from "@/components/AiChat";
import { Wallet } from "@/components/Wallet";

export function ToolBar() {
  return (
    <div className="grid grid-cols-12 py-2 px-4 bg-main-2">
      <div className="flex items-center gap-6 col-span-2">
        <button>
          <ArrowLeftIcon className="h-5 w-5" />
        </button>

        <button>
          <ArrowRightIcon className="h-5 w-5" />
        </button>

        <button>
          <SymbolIcon className="h-4 w-4" />
        </button>

        <HomeButton />
      </div>

      <div className="col-span-8">
        <SearchBox />
      </div>

      <div className="flex items-center justify-end gap-6 col-span-2">
        <AiChat />
        <Wallet />

        <button className="mdl-button mdl-js-button mdl-button--icon mdl-js-ripple-effect">
          <BookmarkIcon className="h-4 w-4" />
        </button>

        <div className="flex items-center">
          <button id="hdrbtn">
            <DotsVerticalIcon className="h-4 w-4" />
          </button>
          {/* <ul
              className="mdl-menu mdl-js-menu mdl-js-ripple-effect mdl-menu--bottom-right"
              aria-controls="hdrbtn"
            >
              <li id="console" className="mdl-menu__item">
                DevTools
              </li>
              <li id="list" className="mdl-menu__item">
                Bookmarks
              </li>
            </ul> */}
        </div>
      </div>
    </div>
  );
}
