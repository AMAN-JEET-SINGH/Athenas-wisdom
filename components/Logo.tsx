import Image from "next/image";

export function Logo({ size = 44 }: { size?: number }) {
  return (
    <Image
      src="/logo.png"
      alt="AthenaLab"
      width={size}
      height={size}
      className="flex-shrink-0 drop-shadow-[0_0_10px_rgba(124,92,240,0.5)]"
      style={{ width: size, height: size }}
    />
  );
}
