"use client";
import { SearchInput } from "@/components/_personal";
import { Input } from "@/components/ui/input";
import { CircleUserRound, Search, ShoppingCart } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();
  const showHeader =
    pathname === "/sign-in" || pathname === "/create-account" ? false : true;
  return (
    <header className={`${!showHeader && "hidden"} w-full bg-[#026db5]`}>
      <div className="flex container items-center justify-between py-2 xl:py-4 gap-x-4">
        <Link href={"/"}>
          <Image
            src={"/logo.png"}
            width={260}
            height={96}
            alt="logo"
            className="w-[200px] h-full xl:w-[260px]"
          />
        </Link>
        <div></div>
        <SearchInput placeholder="Hôm nay bạn muốn mua gì?" />
        <div className="flex items-center gap-x-4 ml-8">
          <Link
            className="flex flex-col items-center px-3 gap-y-1"
            href={"/my-account"}>
            <CircleUserRound color="#ffffff" size={32} />
            <span className="text-[13px] font-medium text-white w-full text-center">
              Tài khoản
            </span>
          </Link>
          <Link
            className="flex flex-col items-center px-3 gap-y-1"
            href={"/cart"}>
            <ShoppingCart color="#ffffff" size={32} />
            <span className="text-[13px] font-medium text-white w-full text-center">
              Giỏ hàng
            </span>
          </Link>
        </div>
      </div>
    </header>
  );
}
