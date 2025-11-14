import Image from "next/image";

interface SwapButtonProps {
  onClick: () => void;
}

export default function SwapButton({ onClick }: SwapButtonProps) {
  return (
    <div
      onClick={onClick}
      className="flex items-center justify-center w-12 h-12 bg-white rounded-full cursor-pointer transition-all hover:shadow-lg hover:scale-105 active:scale-95"
      style={{
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
      }}
    >
      <Image
        src="/swap.svg"
        alt="Swap"
        width={19}
        height={18}
        style={{ width: "19px", height: "18px" }}
      />
    </div>
  );
}
