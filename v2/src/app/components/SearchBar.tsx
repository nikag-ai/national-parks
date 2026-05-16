import { Search, SlidersHorizontal, Plane } from "lucide-react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { HUBS } from "../data/parks";

interface SearchBarProps {
  searchQuery: string;
  onSearchChange: (query: string) => void;
  selectedHub: string;
  onHubChange: (hub: string) => void;
  onFilterClick: () => void;
}

export function SearchBar({
  searchQuery,
  onSearchChange,
  selectedHub,
  onHubChange,
  onFilterClick,
}: SearchBarProps) {
  return (
    <div className="flex flex-col md:flex-row gap-4 max-w-4xl mx-auto">
      {/* Search Input */}
      <div className="relative flex-1">
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
        <Input
          type="text"
          placeholder="Search by park name or state..."
          value={searchQuery}
          onChange={(e) => onSearchChange(e.target.value)}
          className="pl-12 pr-4 py-6 bg-card border-2 border-border/50 rounded-2xl focus:border-primary transition-all"
          style={{ fontFamily: 'var(--font-sans)' }}
        />
      </div>

      {/* Hub Selector */}
      <div className="flex gap-3">
        <Select value={selectedHub} onValueChange={onHubChange}>
          <SelectTrigger className="w-[200px] py-6 bg-card border-2 border-border/50 rounded-2xl">
            <div className="flex items-center gap-2">
              <Plane className="w-4 h-4" />
              <SelectValue />
            </div>
          </SelectTrigger>
          <SelectContent>
            {HUBS.map(hub => (
              <SelectItem key={hub.code} value={hub.code}>
                {hub.name} ({hub.code})
              </SelectItem>
            ))}
          </SelectContent>
        </Select>

        {/* Filter Button */}
        <Button
          onClick={onFilterClick}
          variant="outline"
          className="px-6 py-6 rounded-2xl border-2 border-border/50 hover:border-primary transition-all"
        >
          <SlidersHorizontal className="w-5 h-5" />
        </Button>
      </div>
    </div>
  );
}
