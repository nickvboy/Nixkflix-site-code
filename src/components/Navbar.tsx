import { Search, MapPin, Film, User } from "lucide-react";
import { Button } from "./ui/button";

export function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 bg-bg-300/95 backdrop-blur-sm border-b border-primary-200/20 z-[var(--z-sticky)]">
      <div className="max-w-[1400px] mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo and primary navigation */}
          <div className="flex items-center gap-8">
            <a href="/" className="flex items-center gap-2">
              <Film className="w-8 h-8 text-accent-200" />
              <span className="text-h3 text-text-100 font-bold">NICKFLIX</span>
            </a>
            <div className="hidden md:flex items-center gap-6">
              <a href="/movies" className="text-text-100 hover:text-accent-200 transition-colors">
                Movies
              </a>
              <a href="/coming-soon" className="text-text-100 hover:text-accent-200 transition-colors">
                Coming Soon
              </a>
              <a href="/genres" className="text-text-100 hover:text-accent-200 transition-colors">
                Genres
              </a>
            </div>
          </div>

          {/* Secondary navigation */}
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon" className="text-text-100 hover:text-accent-200">
              <Search className="w-5 h-5" />
            </Button>
            <div className="hidden md:flex items-center gap-2 text-text-100">
              <MapPin className="w-5 h-5 text-accent-200" />
              <span className="text-small">FL, Edison Mall</span>
            </div>
            <Button variant="ghost" size="icon" className="text-text-100 hover:text-accent-200">
              <User className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
}