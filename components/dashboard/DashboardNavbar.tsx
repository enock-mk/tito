// components/dashboard/DashboardNavbar.tsx
'use client';

import { useState } from 'react';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Menu, Bell, Search, Settings, User, LogOut, HelpCircle } from 'lucide-react';
import { SearchForm } from '@/components/forms/SearchForm';

interface DashboardNavbarProps {
  className?: string;
  onMenuClick?: () => void;
}

export function DashboardNavbar({ className, onMenuClick }: DashboardNavbarProps) {
  const pathname = usePathname();
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  // Get page title from pathname
  const getPageTitle = () => {
    const path = pathname?.split('/').pop() || 'Dashboard';
    return path
      .split('-')
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  };

  const getPageSubtitle = () => {
    const paths: Record<string, string> = {
      dashboard: 'Overview of your business performance',
      bookings: 'Manage all bookings and reservations',
      transport: 'Monitor transport operations and fleet',
      hotels: 'Manage hotel inventory and reservations',
      'car-hire': 'Manage car rental operations',
      fundraising: 'Track fundraising campaigns',
      customers: 'View and manage customer profiles',
      analytics: 'Data insights and analytics',
      payments: 'Track and manage payments',
      reports: 'Generate and view reports',
      settings: 'Configure your dashboard settings',
    };
    return paths[pathname?.split('/').pop() || ''] || '';
  };

  return (
    <header
      className={cn(
        'sticky top-0 z-30 flex h-16 items-center border-b bg-white/80 backdrop-blur-sm dark:border-neutral-800 dark:bg-neutral-950/80',
        className
      )}
    >
      <div className="flex w-full items-center justify-between px-4">
        {/* Left: Menu + Title */}
        <div className="flex items-center gap-4">
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden"
            onClick={onMenuClick}
          >
            <Menu className="h-5 w-5" />
          </Button>

          <div>
            <h1 className="text-lg font-semibold">{getPageTitle()}</h1>
            <p className="hidden text-sm text-neutral-500 dark:text-neutral-400 md:block">
              {getPageSubtitle()}
            </p>
          </div>
        </div>

        {/* Right: Actions */}
        <div className="flex items-center gap-2">
          {/* Search Toggle */}
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsSearchOpen(!isSearchOpen)}
            className="text-neutral-500 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-white"
          >
            <Search className="h-5 w-5" />
          </Button>

          {/* Notifications */}
          <Button
            variant="ghost"
            size="icon"
            className="relative text-neutral-500 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-white"
          >
            <Bell className="h-5 w-5" />
            <span className="absolute -right-0.5 -top-0.5 h-2.5 w-2.5 rounded-full bg-red-500 ring-2 ring-white dark:ring-neutral-950" />
          </Button>

          {/* User Menu */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="ghost"
                className="flex items-center gap-2 px-2"
              >
                <Avatar className="h-8 w-8">
                  <AvatarImage src="/avatars/admin.jpg" alt="Admin" />
                  <AvatarFallback className="bg-primary/10 text-primary">
                    AD
                  </AvatarFallback>
                </Avatar>
                <span className="hidden text-sm font-medium md:block">Admin</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-56">
              <DropdownMenuLabel>
                <div className="flex flex-col space-y-1">
                  <p className="text-sm font-medium">Admin User</p>
                  <p className="text-xs text-neutral-500">admin@tito.com</p>
                </div>
              </DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <User className="mr-2 h-4 w-4" />
                Profile
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Settings className="mr-2 h-4 w-4" />
                Settings
              </DropdownMenuItem>
              <DropdownMenuItem>
                <HelpCircle className="mr-2 h-4 w-4" />
                Help
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem className="text-red-600">
                <LogOut className="mr-2 h-4 w-4" />
                Logout
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>

      {/* Search Overlay */}
      {isSearchOpen && (
        <div className="absolute left-0 right-0 top-full border-b bg-white p-4 shadow-lg dark:border-neutral-800 dark:bg-neutral-950">
          <SearchForm
            variant="compact"
            placeholder="Search bookings, customers, services..."
            onSearch={(query) => {
              console.log('Search:', query);
              setIsSearchOpen(false);
            }}
            autoFocus
            onClose={() => setIsSearchOpen(false)}
          />
        </div>
      )}
    </header>
  );
}