
import React from 'react';
import { ArrowLeft, Bell, LayoutGrid, ChevronDown, Menu } from 'lucide-react';

interface HeaderProps {
  onMenuToggle: () => void;
}

const Header: React.FC<HeaderProps> = ({ onMenuToggle }) => {
  return (
    <header className="h-auto min-h-[64px] lg:h-20 bg-white border-b border-slate-200 flex flex-wrap items-center justify-between px-4 md:px-6 sticky top-0 z-30 shadow-sm py-2 lg:py-0">
      {/* Left Section: Menu Toggle (Mobile) + Breadcrumbs */}
      <div className="flex items-center gap-2 md:gap-5 flex-1 min-w-0">
        <button 
          onClick={onMenuToggle}
          className="lg:hidden p-2 text-slate-600 hover:bg-slate-100 rounded-md transition-colors flex-shrink-0"
        >
          <Menu size={24} />
        </button>

        <button 
          onClick={() => window.history.back()} 
          className="hidden sm:flex w-9 h-9 md:w-10 md:h-10 items-center justify-center rounded-full bg-white border border-slate-100 shadow-sm text-blue-500 hover:bg-slate-50 transition-colors flex-shrink-0"
        >
          {/* Fix: removed invalid md:size prop, added responsive classes */}
          <ArrowLeft size={18} className="md:w-5 md:h-5" strokeWidth={2.5} />
        </button>
        
        <div className="flex items-center text-base md:text-2xl font-bold tracking-tight truncate min-w-0">
          <span className="text-slate-800 hidden md:inline">Reports</span>
          <span className="mx-2 md:mx-3 text-blue-500 font-light hidden md:inline">/</span>
          <span className="text-blue-500 truncate">Bio Medical</span>
        </div>
      </div>

      {/* Right Section: Actions */}
      <div className="flex items-center gap-2 md:gap-4 flex-shrink-0">
        {/* Non Bio Medical Pill - Hidden on small mobile */}
        <div className="hidden lg:flex items-center bg-white border border-slate-200 rounded-full pl-1 pr-4 py-1 gap-2.5 shadow-sm">
          <div className="w-8 h-8 bg-[#1e293b] rounded-full flex items-center justify-center text-[10px] text-white font-bold">
            NB
          </div>
          <span className="text-[13px] text-slate-700 font-semibold whitespace-nowrap">Non Bio Medical</span>
        </div>

        {/* Location Dropdown - Hidden on mobile */}
        <div className="hidden sm:flex items-center bg-white border border-slate-200 rounded-xl px-3 md:px-4 py-1.5 md:py-2 gap-2 md:gap-4 lg:gap-8 shadow-sm cursor-pointer hover:bg-slate-50">
          <span className="text-xs md:text-sm text-slate-600 font-medium whitespace-nowrap">Vijayanagar</span>
          {/* Fix: removed invalid md:size prop, added responsive classes */}
          <ChevronDown size={16} className="text-slate-400 md:w-[18px] md:h-[18px]" />
        </div>

        {/* Icon Group */}
        <div className="flex items-center gap-2 md:gap-3">
          <button className="hidden sm:flex w-9 h-9 md:w-10 md:h-10 items-center justify-center bg-white border border-slate-100 rounded-full shadow-sm text-slate-600 hover:bg-slate-50 transition-colors">
            {/* Fix: removed invalid md:size prop, added responsive classes */}
            <LayoutGrid size={18} className="md:w-5 md:h-5" />
          </button>
          
          <button className="w-9 h-9 md:w-10 md:h-10 flex items-center justify-center bg-white border border-slate-100 rounded-full shadow-sm text-slate-600 hover:bg-slate-50 transition-colors relative">
            <Bell size={18} />
            <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full"></span>
          </button>
          
          <button className="w-9 h-9 md:w-10 md:h-10 bg-[#1e293b] rounded-full flex items-center justify-center text-white font-bold shadow-md">
            A
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
