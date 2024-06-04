import React from "react";
import { Input } from "../ui/input";
import { Search } from "lucide-react";

export default function SearchInput({ placeholder = "" }) {
  return (
    <div className="hidden lg:flex relative items-center ml-auto">
      <Input placeholder={placeholder} className="min-w-[380px]" />
      <Search
        color="#026db5"
        className="absolute bottom-2 right-2 cursor-pointer"
      />
    </div>
  );
}
