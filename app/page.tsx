'use client';

import { Navbar} from '@/components/layout/navbar';
import {Footer} from '@/components/layout/footer';
import { Downloads } from '@/components/sections/download-view';
import { Services } from '@/components/sections/services';
import { Contact } from '@/components/sections/contact';
import { Hero } from '@/components/sections/hero';
import { Getstarted } from '@/components/sections/get-started';
import { Features } from '@/components/sections/features';


export default function Home() {


  return (
    <div className="relative overflow-hidden bg-slate-50 text-slate-900 dark:bg-slate-950 dark:text-slate-100">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-72 bg-[radial-gradient(circle_at_top_left,_rgba(59,130,246,0.18),_transparent_45%)]" />
      <div className="pointer-events-none absolute right-0 top-64 h-80 w-80 rounded-full bg-[radial-gradient(circle,_rgba(99,102,241,0.16),_transparent_60%)]" />
      <Navbar />
      <main>
        <Hero/>
        <Services/>
        <Features/>        
        <Downloads/>
        <Contact/>
        <Getstarted/>
      </main>
      <Footer/>
    </div>
  );
}
