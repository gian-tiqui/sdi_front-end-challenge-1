import { RiShareForwardLine } from "react-icons/ri";

const ShareButton = () => {
  return (
    <div className="cursor-pointer flex gap-2 items-center">
      <RiShareForwardLine className="h-14" />
      <p className="text-sm">SHARE</p>
    </div>
  );
};

export default ShareButton;
