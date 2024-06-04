import React from "react";
import { Button } from "@/components/ui/button";
import { ConfigItem } from "@/components/_personal";
import { configList } from "@/app/_utils/data/data";

export default function BuildConfig() {
  return (
    <div className="container flex flex-col p-5 lg:py-10 gap-y-4">
      <h2 className="text-[#026db5] text-2xl font-bold w-full text-center py-4">
        Xây dựng cấu hình PC
      </h2>
      <div className="w-full flex flex-col gap-y-4 xl:gap-y-8">
        <div className="flex w-full items-center justify-start">
          <Button className="bg-red-600 hover:bg-red-500 uppercase">
            Làm mới cấu hình
          </Button>
        </div>
        <div className="w-full flex flex-col gap-y-4">
          {configList?.map((item, index) => (
            <ConfigItem item={item} key={index} />
          ))}
        </div>
        <div className="flex w-full items-center justify-between py-5">
          <Button className="bg-red-600 hover:bg-red-500 uppercase">
            Thêm tất cả vào giỏ hàng
          </Button>
          <div className="flex items-center gap-x-2 ">
            <strong className="uppercase">Tổng cộng : </strong>
            <span className="text-red-600 text-2xl font-semibold">0Đ</span>
          </div>
        </div>
      </div>
    </div>
  );
}
