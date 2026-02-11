"use client";

import * as React from "react";
import { ChevronsUpDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Search } from "@/components/search";
import { RegionData } from "@/types/api";

const POPOVER_WIDTH = "w-full";

interface RegionSearchProps {
  value?: RegionData;
  onChange: (region: RegionData) => void;
  placeholder?: string;
}

export function RegionSearch({ value, onChange, placeholder = "Pilih Kota" }: RegionSearchProps) {
  const [open, setOpen] = React.useState(false);

  const handleSetActive = React.useCallback((region: RegionData) => {
    onChange(region);
    setOpen(false);
  }, [onChange]);

  const displayName = value ? value.name : placeholder;

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          className={cn("justify-between h-12", POPOVER_WIDTH)}
        >
          {displayName}
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>

      <PopoverContent side="bottom" className={cn("p-0 w-full! max-w-180", POPOVER_WIDTH)}>
        <Search selectedResult={value} onSelectResult={handleSetActive} />
      </PopoverContent>
    </Popover>
  );
}