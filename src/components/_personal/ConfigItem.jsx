import React from "react";
import { Button } from "../ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";

import { Input } from "../ui/input";
import { Search } from "lucide-react";
import { ProductItem, ProductSelectedItem } from ".";
export default function ConfigItem({ item }) {
  return (
    <Collapsible>
      <div className="w-full flex flex-col md:flex-row items-center justify-between float-left border p-4 rounded-sm">
        <CollapsibleTrigger asChild>
          <div className="w-full md:w-1/5 text-center md:text-left py-2 px-3 font-bold text-[#222] text-sm uppercase cursor-pointer">
            {item?.name}
          </div>
        </CollapsibleTrigger>
        <div className="w-full md:w-4/5 flex items-center justify-center md:justify-end py-4">
          <Dialog>
            <DialogTrigger asChild>
              <Button className="bg-red-600 hover:bg-red-500 w-full md:w-auto">
                Chọn
              </Button>
            </DialogTrigger>
            <DialogContent className="w-full sm:w-3/5 max-w-[800px] h-auto min-h-[350px] lg:min-h-[450px] 2xl:min-h-[600px] flex flex-col">
              <DialogHeader>
                <DialogTitle>Tìm sản phẩm</DialogTitle>
              </DialogHeader>
              <div className="flex flex-col items-center space-x-2">
                <div className="w-full bg-[#026db5] p-2 flex flex-col lg:flex-row items-center lg:justify-start gap-2">
                  <div className="relative items-center min-w-[280px]">
                    <Input placeholder="Nhập tên sản phẩm bạn cần tìm..." />
                    <Search
                      color="#026db5"
                      className="absolute bottom-2 right-2 cursor-pointer"
                    />
                  </div>
                  <Select>
                    <SelectTrigger className="w-[180px]">
                      <SelectValue placeholder="Lựa chọn tìm kiếm" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        <SelectLabel>Sắp xếp</SelectLabel>
                        <SelectItem value="newest">Mới nhất</SelectItem>
                        <SelectItem value="expensive">
                          Giá cao đến thấp
                        </SelectItem>
                        <SelectItem value="cheap">Giá thấp đến cao</SelectItem>
                        <SelectItem value="alphabet">Từ A -&gt; Z</SelectItem>
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                </div>
                <div className="w-full flex flex-col gap-y-3 max-h-[300px] lg:max-h-[350px] 2xl:max-h-[450px] overflow-y-scroll">
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
      <CollapsibleContent asChild>
        <div>
          <ProductSelectedItem />
        </div>
      </CollapsibleContent>
    </Collapsible>
  );
}
