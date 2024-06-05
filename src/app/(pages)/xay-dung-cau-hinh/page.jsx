"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import { ConfigItem } from "@/components/_personal";
import { configList } from "@/app/_utils/data/data";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { toast } from "sonner";

export default function BuildConfig() {
  const onRefresh = () => {
    toast("Làm mới cấu hình thành công!");
  };
  const onOk = () => {
    toast("Tất cả sản phẩm đã được thêm vào giỏ hàng!");
  };
  return (
    <div className="container flex flex-col p-5 lg:py-10 gap-y-4">
      <h2 className="text-[#026db5] text-2xl font-bold w-full text-center py-4">
        Xây dựng cấu hình PC
      </h2>
      <div className="w-full flex flex-col gap-y-4 xl:gap-y-8">
        <div className="flex w-full items-center justify-start">
          <AlertDialog>
            <AlertDialogTrigger asChild>
              <Button className="bg-red-600 hover:bg-red-500 uppercase">
                Làm mới cấu hình
              </Button>
            </AlertDialogTrigger>
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle>
                  Bạn có chắc muốn làm mới tất cả cấu hình?
                </AlertDialogTitle>
                <AlertDialogDescription>
                  Tất cả cấu hình bạn đã thêm sẽ bị làm mới. Vui lòng xác nhận
                  để hoàn thành thao tác.
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel>Hủy</AlertDialogCancel>
                <AlertDialogAction className="bg-blue-500" onClick={onRefresh}>
                  Đồng ý
                </AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        </div>
        <div className="w-full flex flex-col gap-y-4">
          {configList?.map((item, index) => (
            <ConfigItem item={item} key={index} />
          ))}
        </div>
        <div className="flex flex-col md:flex-row w-full items-center justify-between py-5">
          <AlertDialog>
            <AlertDialogTrigger asChild>
              <Button className="bg-red-600 hover:bg-red-500 uppercase">
                Thêm tất cả vào giỏ hàng
              </Button>
            </AlertDialogTrigger>
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle>
                  Bạn có chắc chắn thêm tất cả?
                </AlertDialogTitle>
                <AlertDialogDescription>
                  Tất cả sản phẩm sẽ được thêm vào giỏ hàng. Vui lòng xác nhận
                  để hoàn thành thao tác.
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel>Hủy</AlertDialogCancel>
                <AlertDialogAction className="bg-blue-500" onClick={onOk}>
                  Đồng ý
                </AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>

          <div className="flex items-center gap-x-2 ">
            <strong className="uppercase">Tổng cộng : </strong>
            <span className="text-red-600 text-2xl font-semibold">0Đ</span>
          </div>
        </div>
      </div>
    </div>
  );
}
