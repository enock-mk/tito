// components/navigation/SearchDialog.tsx
'use client';

import { useState, useEffect, useRef, useMemo, useCallback } from 'react';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Search, Command, ArrowRight, X, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useRouter } from 'next/navigation';

interface SearchResult {
  id: string;
  title: string;
  description: string;
  href: string;
  category: string;
  icon?: string;
}

// Mock search data - replace with actual data from your app
const searchData: SearchResult[] = [
  // Platform
  { id: 'platform', title: 'Platform Overview', description: 'Learn about TiTO platform features', href: '/platform', category: 'Platform' },
  { id: 'features', title: 'Features', description: 'Explore all platform features', href: '/platform/features', category: 'Platform' },
  { id: 'integrations', title: 'Integrations', description: 'Connect with other tools', href: '/platform/integrations', category: 'Platform' },
  { id: 'security', title: 'Security', description: 'Enterprise-grade security', href: '/platform/security', category: 'Platform' },
  { id: 'pricing', title: 'Pricing', description: 'Choose your plan', href: '/platform/pricing', category: 'Platform' },
  { id: 'mobile-apps', title: 'Mobile Apps', description: 'iOS and Android apps', href: '/platform/mobile-apps', category: 'Platform' },
  { id: 'analytics', title: 'Analytics', description: 'Data-driven insights', href: '/platform/analytics', category: 'Platform' },
  
  // Solutions
  { id: 'transport', title: 'Transport Management', description: 'Manage routes and fleets', href: '/solutions/transport', category: 'Solutions' },
  { id: 'hospitality', title: 'Hospitality Management', description: 'Hotel and guest management', href: '/solutions/hospitality', category: 'Solutions' },
  { id: 'events', title: 'Event Management', description: 'Ticketing and check-in', href: '/solutions/events', category: 'Solutions' },
  { id: 'car-hire', title: 'Car Hire', description: 'Vehicle rental management', href: '/solutions/car-hire', category: 'Solutions' },
  { id: 'fundraising', title: 'Fundraising', description: 'Campaign management', href: '/solutions/fundraising', category: 'Solutions' },
  
  // Industries
  { id: 'hotels', title: 'Hotels', description: 'Hotel industry solutions', href: '/industries/hotels', category: 'Industries' },
  { id: 'bus-operators', title: 'Bus Operators', description: 'Bus transport solutions', href: '/industries/bus-operators', category: 'Industries' },
  { id: 'event-organizers', title: 'Event Organizers', description: 'Event industry solutions', href: '/industries/event-organizers', category: 'Industries' },
  { id: 'churches', title: 'Churches', description: 'Church management solutions', href: '/industries/churches', category: 'Industries' },
  { id: 'ngos', title: 'NGOs', description: 'Non-profit solutions', href: '/industries/ngos', category: 'Industries' },
  { id: 'universities', title: 'Universities', description: 'Education solutions', href: '/industries/universities', category: 'Industries' },
  { id: 'government', title: 'Government', description: 'Government solutions', href: '/industries/government', category: 'Industries' },
  
  // Resources
  { id: 'blog', title: 'Blog', description: 'Latest insights and updates', href: '/blog', category: 'Resources' },
  { id: 'documentation', title: 'Documentation', description: 'Guides and tutorials', href: '/resources/documentation', category: 'Resources' },
  { id: 'faq', title: 'FAQs', description: 'Frequently asked questions', href: '/faq', category: 'Resources' },
  { id: 'help-center', title: 'Help Center', description: 'Get support', href: '/resources/help-center', category: 'Resources' },
  { id: 'case-studies', title: 'Case Studies', description: 'Success stories', href: '/resources/case-studies', category: 'Resources' },
  
  // Company
  { id: 'about', title: 'About', description: 'Learn about TiTO', href: '/about', category: 'Company' },
  { id: 'careers', title: 'Careers', description: 'Join our team', href: '/careers', category: 'Company' },
  { id: 'partners', title: 'Partners', description: 'Partner with TiTO', href: '/partner', category: 'Company' },
  { id: 'contact', title: 'Contact', description: 'Get in touch', href: '/contact', category: 'Company' },
  { id: 'media-kit', title: 'Media Kit', description: 'Press and media resources', href: '/media-kit', category: 'Company' },
];

export function SearchDialog() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState('');
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const inputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();

  // Use useMemo to calculate results based on query - no state updates in effects
  const results = useMemo(() => {
    if (!query.trim()) {
      return [];
    }
    
    const filtered = searchData.filter((item) =>
      item.title.toLowerCase().includes(query.toLowerCase()) ||
      item.description.toLowerCase().includes(query.toLowerCase()) ||
      item.category.toLowerCase().includes(query.toLowerCase())
    );
    return filtered;
  }, [query]);

  // Reset selected index when results change - using useMemo to derive value
  // Instead of setting state in an effect, we derive the selected index from results
  const effectiveSelectedIndex = useMemo(() => {
    if (selectedIndex >= results.length) {
      return -1;
    }
    return selectedIndex;
  }, [selectedIndex, results.length]);

  // Keyboard shortcut to open/close
  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === 'k' && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((open) => !open);
        if (!open) {
          setTimeout(() => inputRef.current?.focus(), 100);
        }
      }
      if (e.key === 'Escape' && open) {
        setOpen(false);
      }
    };
    document.addEventListener('keydown', down);
    return () => document.removeEventListener('keydown', down);
  }, [open]);

  const handleSelect = useCallback((result: SearchResult) => {
    setOpen(false);
    setQuery('');
    setSelectedIndex(-1);
    router.push(result.href);
  }, [router]);

  const handleKeyDown = useCallback((e: React.KeyboardEvent) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setSelectedIndex((prev) => (prev + 1) % (results.length || 1));
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setSelectedIndex((prev) => (prev - 1 + (results.length || 1)) % (results.length || 1));
    } else if (e.key === 'Enter' && effectiveSelectedIndex >= 0 && results[effectiveSelectedIndex]) {
      e.preventDefault();
      handleSelect(results[effectiveSelectedIndex]);
    } else if (e.key === 'Enter' && results.length === 1) {
      e.preventDefault();
      handleSelect(results[0]);
    }
  }, [results, effectiveSelectedIndex, handleSelect]);

  const getCategoryColor = (category: string) => {
    const colors: Record<string, string> = {
      Platform: 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400',
      Solutions: 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400',
      Industries: 'bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400',
      Resources: 'bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-400',
      Company: 'bg-neutral-100 text-neutral-700 dark:bg-neutral-800 dark:text-neutral-400',
    };
    return colors[category] || 'bg-neutral-100 text-neutral-700 dark:bg-neutral-800 dark:text-neutral-400';
  };

  const handleClear = useCallback(() => {
    setQuery('');
    setSelectedIndex(-1);
    inputRef.current?.focus();
  }, []);

  const handlePopularSearch = useCallback((term: string) => {
    setQuery(term);
    setSelectedIndex(-1);
    inputRef.current?.focus();
  }, []);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className="relative text-neutral-500 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-white"
          onClick={() => {
            setOpen(true);
            setTimeout(() => inputRef.current?.focus(), 100);
          }}
        >
          <Search className="h-4 w-4" />
          <span className="sr-only">Search</span>
          <kbd className="absolute -right-1 -top-1 hidden rounded bg-neutral-100 px-1 py-0.5 text-[10px] font-medium text-neutral-500 dark:bg-neutral-800 sm:inline-flex">
            ⌘K
          </kbd>
        </Button>
      </DialogTrigger>

      <DialogContent className="sm:max-w-[650px] p-0 overflow-hidden border-0 shadow-2xl">
        <div className="flex flex-col">
          {/* Search Input */}
          <div className="flex items-center gap-3 border-b px-4 py-3 dark:border-neutral-800">
            <Search className="h-5 w-5 text-neutral-400" />
            <Input
              ref={inputRef}
              placeholder="Search documentation, features, solutions..."
              className="flex-1 border-0 shadow-none focus-visible:ring-0 text-base placeholder:text-neutral-400"
              value={query}
              onChange={(e) => {
                setQuery(e.target.value);
                setSelectedIndex(-1);
              }}
              onKeyDown={handleKeyDown}
              autoFocus
            />
            {query && (
              <Button
                variant="ghost"
                size="icon"
                className="h-8 w-8 rounded-full"
                onClick={handleClear}
              >
                <X className="h-4 w-4" />
              </Button>
            )}
            <kbd className="hidden rounded bg-neutral-100 px-2 py-1 text-xs text-neutral-500 dark:bg-neutral-800 sm:inline-flex">
              <Command className="mr-1 h-3 w-3" />
              K
            </kbd>
          </div>

          {/* Results */}
          <AnimatePresence>
            {results.length > 0 ? (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="max-h-[400px] overflow-y-auto p-2"
              >
                {results.map((result, index) => (
                  <motion.button
                    key={result.id}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.02 }}
                    className={`flex w-full items-center justify-between rounded-lg p-3 text-left transition-all ${
                      effectiveSelectedIndex === index
                        ? 'bg-primary/10 dark:bg-primary/20'
                        : 'hover:bg-neutral-50 dark:hover:bg-neutral-800'
                    }`}
                    onClick={() => handleSelect(result)}
                    onMouseEnter={() => setSelectedIndex(index)}
                  >
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2">
                        <span className="font-medium">{result.title}</span>
                        <span className={`rounded-full px-2 py-0.5 text-[10px] font-medium ${getCategoryColor(result.category)}`}>
                          {result.category}
                        </span>
                      </div>
                      <p className="mt-0.5 text-sm text-neutral-500 dark:text-neutral-400 truncate">
                        {result.description}
                      </p>
                    </div>
                    <ArrowRight className={`ml-3 h-4 w-4 flex-shrink-0 text-neutral-400 transition-all ${
                      effectiveSelectedIndex === index ? 'translate-x-1 text-primary' : ''
                    }`} />
                  </motion.button>
                ))}
              </motion.div>
            ) : query ? (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="flex flex-col items-center justify-center p-8 text-center"
              >
                <Search className="h-10 w-10 text-neutral-300" />
                <p className="mt-3 font-medium">No results found</p>
                <p className="text-sm text-neutral-500">
                  Try searching for: `&quot;`bookings`&quot;`, `&quot;`payments`&quot;`, `&quot;`hotels`&quot;`, `&quot;`transport`&quot;`
                </p>
              </motion.div>
            ) : (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="p-6"
              >
                <div className="flex items-center gap-2 text-sm text-neutral-500">
                  <Sparkles className="h-4 w-4" />
                  <span>Popular searches:</span>
                </div>
                <div className="mt-3 flex flex-wrap gap-2">
                  {['Bookings', 'Payments', 'Hotels', 'Transport', 'Events', 'Pricing'].map((term) => (
                    <button
                      key={term}
                      className="rounded-full border px-3 py-1 text-sm transition-colors hover:border-primary hover:bg-primary/5 dark:border-neutral-700"
                      onClick={() => handlePopularSearch(term)}
                    >
                      {term}
                    </button>
                  ))}
                </div>
                <div className="mt-6 grid grid-cols-2 gap-2 text-xs text-neutral-400">
                  <div className="flex items-center gap-1">
                    <kbd className="rounded bg-neutral-100 px-1.5 py-0.5 dark:bg-neutral-800">↑↓</kbd>
                    <span>Navigate</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <kbd className="rounded bg-neutral-100 px-1.5 py-0.5 dark:bg-neutral-800">Enter</kbd>
                    <span>Select</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <kbd className="rounded bg-neutral-100 px-1.5 py-0.5 dark:bg-neutral-800">⌘K</kbd>
                    <span>Open</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <kbd className="rounded bg-neutral-100 px-1.5 py-0.5 dark:bg-neutral-800">Esc</kbd>
                    <span>Close</span>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Footer */}
          <div className="border-t px-4 py-2 text-xs text-neutral-400 dark:border-neutral-800">
            <span>Search TiTO platform, solutions, and resources</span>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}