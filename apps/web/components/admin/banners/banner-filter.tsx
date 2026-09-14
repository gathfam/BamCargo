"use client";

import { useRouter, useSearchParams } from "next/navigation";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@bamcargo/ui/select";

interface BannerFilterProps {
  currentFilter?: string;
}

export function BannerFilter({ currentFilter }: BannerFilterProps) {
  const router = useRouter();
  const searchParams = useSearchParams();

  const handleFilterChange = (value: string) => {
    const params = new URLSearchParams(searchParams.toString());
    if (value === "all") {
      params.delete("is_active");
    } else {
      params.set("is_active", value);
    }
    params.delete("page");
    router.push(`/admin/banner?${params.toString()}`);
  };

  return (
    <div className="flex items-center gap-3">
      <span className="text-sm text-muted-foreground">Status:</span>
      <Select
        value={currentFilter || "all"}
        onValueChange={handleFilterChange}
      >
        <SelectTrigger className="w-[180px]">
          <SelectValue />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="all">Semua</SelectItem>
          <SelectItem value="true">Aktif</SelectItem>
          <SelectItem value="false">Nonaktif</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
}