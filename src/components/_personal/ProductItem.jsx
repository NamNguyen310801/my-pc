import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";
import Image from "next/image";

export default function ProductItem({ item }) {
  return (
    <div className="w-full flex items-center justify-between float-left border p-4 rounded-sm">
      <Link
        href={item?.href || ""}
        className="w-20 h-20 overflow-hidden rounded-md">
        <Image
          src={
            item?.src ||
            "https://maytinh.sharekhoahoc.vn/wp-content/uploads/2021/12/8530d87af9fc1bf1a3617728d8954b16_63b594ba72d04e3bb9688047fa42ab2f_master-400x400.jpg"
          }
          unoptimized
          alt={item?.name || "Vỏ Máy Tính XIGMATEK XM-10 (EN44252) M-ATX"}
          width={100}
          height={100}
          className="w-full h-full bg-center bg-contain"
        />
      </Link>
      <div className="w-full flex flex-col flex-1 py-2 px-3 text-sm gap-y-2">
        <h4 className="font-bold text-[#222] uppercase">
          {item?.name || "Vỏ Máy Tính XIGMATEK XM-10 (EN44252) M-ATX"}
        </h4>
        <div>
          <span className="text-[#026db5] bg-[#0093623d] font-semibold p-1 rounded-sm">
            {"Còn hàng"}
          </span>
        </div>
        <span className="text-red-600 font-semibold">
          {item?.price || "240.000"}đ
        </span>
      </div>
      <div className="flex items-center justify-end py-4">
        <Button className="bg-red-600 hover:bg-red-500">Chọn</Button>
      </div>
    </div>
  );
}
