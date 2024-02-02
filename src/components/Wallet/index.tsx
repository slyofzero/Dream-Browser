import { useState } from "react";
import { ShowWhen } from "../ShowWhen";
import { ChevronDownIcon } from "@radix-ui/react-icons";

export function Wallet() {
  const [showWallet, setShowWallet] = useState(false);
  const onClick = () => setShowWallet((prev) => !prev);

  const walletPopup = (
    <div className="z-10 h-[500px] w-72 absolute top-20 right-28 bg-main-3/80 backdrop-blur rounded-md flex flex-col text-xs justify-between">
      <div className="bg-main-3 p-4 flex justify-between items-center">
        <button className="bg-main-2/80 backdrop-blur py-2 px-4 rounded-full w-fit flex gap-2 text-[0.7rem] items-center">
          Ethereum Mainnet <ChevronDownIcon className="h-3 w-3" />
        </button>

        <img src="logos/logo-transparent.png" alt="logo" className="w-8" draggable={false} />
      </div>

      <div className="flex flex-col items-center justify-center flex-grow gap-4 px-8">
        <img src="logos/logo-transparent.png" alt="logo" className="w-36" draggable={false} />

        <div className="flex flex-col items-center">
          <h1 className="text-2xl font-bold">Welcome Back!</h1>
          <h6 className="text-gray-300">The decentralized web awaits</h6>
        </div>

        <form className="mt-4 w-full flex flex-col gap-4">
          <input
            type="password"
            className="border-b-[1px] border-white bg-transparent pb-2 w-full "
            placeholder="Password"
          />

          <button type="submit" className="bg-main-3 rounded-full p-3">
            Unlock
          </button>

          <span className="mx-auto text-[0.7rem]">Forgot Password?</span>
        </form>

        <h6 className="mt-6">
          Need help? Contact <span className="text-violet-500">Dream Support</span>
        </h6>
      </div>
    </div>
  );

  return (
    <>
      <button onClick={onClick}>
        <img src="logos/logo-transparent.png" alt="logo" className="w-8" draggable={false} />
      </button>

      <ShowWhen show={walletPopup} when={showWallet} />
    </>
  );
}
