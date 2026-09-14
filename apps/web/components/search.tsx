import * as React from "react";
import { useDebounce } from "use-debounce";
import { useQuery } from "@tanstack/react-query";

import {
  Command,
  CommandInput,
  CommandItem,
  CommandList,
} from "@bamcargo/ui/command";
import { Check } from "lucide-react";
import { cn } from "@bamcargo/core/lib/utils";
import { DestinationService } from "@bamcargo/core";
import { RegionData } from "@bamcargo/core/types/destination-types";

interface SearchProps {
  selectedResult?: RegionData;
  onSelectResult: (region: RegionData) => void;
}

export function Search({ selectedResult, onSelectResult }: SearchProps) {
  const [searchQuery, setSearchQuery] = React.useState("");

  const handleSelectResult = (city: RegionData) => {
    onSelectResult(city);
  };

  return (
    <Command
      shouldFilter={false}
      className="h-auto w-full rounded-lg border border-b-0 shadow-md"
    >
      <CommandInput
        value={searchQuery}
        onValueChange={setSearchQuery}
        placeholder="Cari Kota"
        className=""
      />

      <SearchResults
        query={searchQuery}
        selectedResult={selectedResult}
        onSelectResult={handleSelectResult}
      />
    </Command>
  );
}

interface SearchResultsProps {
  query: string;
  selectedResult: SearchProps["selectedResult"];
  onSelectResult: SearchProps["onSelectResult"];
}

function SearchResults({
  query,
  selectedResult,
  onSelectResult,
}: SearchResultsProps) {
  const [debouncedSearchQuery] = useDebounce(query, 500);

  const enabled = !!debouncedSearchQuery;

  const {
    data,
    isLoading: isLoadingOrig,
    isError,
  } = useQuery({
    queryKey: ["search", debouncedSearchQuery],
    queryFn: () => DestinationService.search(debouncedSearchQuery),    enabled,
  });

  const isLoading = enabled && isLoadingOrig;

  if (!enabled) return null;

  return (
    <CommandList>
      {isLoading && <div className="p-4 text-sm">Mencari Kota...</div>}
      {!isError && !isLoading && (!data || Object.keys(data).length === 0) && (
        <div className="p-4 text-sm">Kota tidak ditemukan</div>
      )}
      {isError && <div className="p-4 text-sm">Something went wrong</div>}

      {Object.entries(data || {}).map((data) => {
        const [cityCode, cityName] = data;
        const code = cityCode as string;
        const name = cityName as string;

        return (
          <CommandItem
            key={code}
            onSelect={() => onSelectResult({ code, name })}
            value={code}
            className="w-full min-h-12"
          >
            <Check
              className={cn(
                "mr-2 h-4 w-4",
                selectedResult?.code === code ? "opacity-100" : "opacity-0",
              )}
            />
            {name}
          </CommandItem>
        );
      })}
    </CommandList>
  );
}
