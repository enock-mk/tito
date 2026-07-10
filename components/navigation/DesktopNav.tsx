// components/navigation/DesktopNav.tsx
'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { LayoutDashboard, LogIn } from 'lucide-react';
import { NavItem } from './NavItem';
import { MegaMenu } from './MegaMenu';
import { Dropdown } from './Dropdown';
import { mainNavItems } from '@/data/navigation';

export function DesktopNav() {
  const [activeMegaMenu, setActiveMegaMenu] = useState<string | null>(null);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const handleMegaMenuEnter = (label: string) => {
    setActiveMegaMenu(label);
  };

  const handleMegaMenuLeave = () => {
    setActiveMegaMenu(null);
  };

  const handleDropdownToggle = (label: string) => {
    setActiveDropdown(activeDropdown === label ? null : label);
  };

  return (
    <nav className="hidden items-center gap-8 lg:flex">
      <div className="relative" onMouseLeave={handleMegaMenuLeave}>
        <div className="flex items-center gap-1 p-1">
          {mainNavItems.map((item) => (
            <div key={item.label} className="relative">
              {item.megaMenu ? (
                <NavItem
                  item={item}
                  isActive={activeMegaMenu === item.label}
                  onMouseEnter={() => handleMegaMenuEnter(item.label)}
                />
              ) : item.dropdown ? (
                <div
                  onMouseEnter={() => handleDropdownToggle(item.label)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <NavItem
                    item={item}
                    onClick={() => handleDropdownToggle(item.label)}
                  />
                  <Dropdown
                    items={item.items || []}
                    isOpen={activeDropdown === item.label}
                    onClose={() => setActiveDropdown(null)}
                  />
                </div>
              ) : (
                <NavItem item={item} />
              )}
            </div>
          ))}
        </div>

        {activeMegaMenu && (
          <MegaMenu
            activeMenu={activeMegaMenu}
            onClose={handleMegaMenuLeave}
          />
        )}
      </div>

      <div className="flex items-center gap-2 border-l pl-6 dark:border-neutral-800">
          {/*<Button variant="ghost" size="sm">
        <Link href="/auth/login">
            <LogIn className="mr-2 h-4 w-4" />
            Login
          </Button>
        </Link>*/}

        <Link href="/partner">
          <Button size="sm">Become a Partner</Button>
        </Link>

        <Link href="/demo">
          <Button variant="outline" size="sm">
            Book a Demo
          </Button>
        </Link>
      </div>
    </nav>
  );
}