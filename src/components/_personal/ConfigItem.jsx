import React from "react";
import { Button } from "../ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "../ui/input";
import { Search } from "lucide-react";
import { ProductItem } from ".";
export default function ConfigItem({ item }) {
  return (
    <div className="w-full flex items-center justify-between float-left border p-4 rounded-sm">
      <div className="w-1/5 float-left py-2 px-3 font-bold text-[#222] text-sm uppercase">
        {item?.name}
      </div>
      <div className="w-4/5 flex items-center justify-end py-4">
        <Dialog>
          <DialogTrigger asChild>
            <Button className="bg-red-600 hover:bg-red-500">Chọn</Button>
          </DialogTrigger>
          <DialogContent className="w-3/5 max-w-[800px] h-auto min-h-[350px] flex flex-col">
            <DialogHeader>
              <DialogTitle>Tìm sản phẩm</DialogTitle>
            </DialogHeader>
            <div className="flex flex-col items-center space-x-2">
              <div className="w-full bg-[#026db5] p-2 flex items-center justify-start">
                <div className="relative items-center min-w-[280px]">
                  <Input placeholder="Nhập tên sản phẩm bạn cần tìm..." />
                  <Search
                    color="#026db5"
                    className="absolute bottom-2 right-2 cursor-pointer"
                  />
                </div>
              </div>
              <div className="w-full flex flex-col gap-y-3 max-h-[300px] overflow-y-scroll">
                <ProductItem />
                <ProductItem />
                <ProductItem />
                <ProductItem />
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
}
