import { useGlobalStates } from "@/states";
import { HomeIcon } from "@radix-ui/react-icons";

export function HomeButton() {
  const { resetViewSrc } = useGlobalStates();
  const onClick = () => {
    console.log("rest");
    resetViewSrc();
  };

  return (
    <button onClick={onClick}>
      <HomeIcon className="h-4 w-4" />
    </button>
  );
}
