
import React from 'react';
import { 
  LayoutGrid, 
  Box, 
  Activity, 
  Target, 
  FileText, 
  Users, 
  ClipboardList, 
  ChevronDown,
  Headphones,
  LogOut
} from 'lucide-react';
import { COMPANY_LOGO } from '../constants/images';

interface SidebarProps {
  isOpen: boolean;
}

const NavItem: React.FC<{ 
  icon: React.ReactNode; 
  label: string; 
  isActive?: boolean; 
  hasDropdown?: boolean 
}> = ({ icon, label, isActive, hasDropdown }) => (
  <div className={`flex items-center justify-between px-6 py-3.5 cursor-pointer transition-colors ${isActive ? 'text-white bg-slate-800/40' : 'text-slate-300 hover:text-white hover:bg-slate-800/30'}`}>
    <div className="flex items-center gap-4">
      <span className={isActive ? 'text-white' : 'text-slate-400'}>{icon}</span>
      <span className="font-semibold text-sm tracking-wide">{label}</span>
    </div>
    {hasDropdown && <ChevronDown size={14} className="opacity-60" />}
  </div>
);

const Sidebar: React.FC<SidebarProps> = ({ isOpen }) => {
  if (!isOpen) return null;

  return (
    <aside className="w-64 bg-[#121b28] flex flex-col h-full overflow-y-auto border-r border-slate-800 shadow-2xl lg:shadow-none">
      {/* Branding / Logo */}
      <div className="p-8 pb-10 flex items-center justify-start pl-10">
        <img 
          src={COMPANY_LOGO} 
          alt="Vajra Logo" 
          className="h-10 w-auto object-contain"
        />
      </div>

      {/* Navigation */}
      <nav className="flex-1 py-2 space-y-1">
        <NavItem icon={<LayoutGrid size={20} strokeWidth={2.5} />} label="Dashboard" />
        <NavItem icon={<Box size={20} strokeWidth={2.5} />} label="Assets" hasDropdown />
        <NavItem icon={<Activity size={20} strokeWidth={2.5} />} label="Incidents" />
        <NavItem icon={<Target size={20} strokeWidth={2.5} />} label="Services" />
        <NavItem icon={<ClipboardList size={20} strokeWidth={2.5} />} label="Request" />
        <NavItem icon={<Users size={20} strokeWidth={2.5} />} label="Users" hasDropdown />
        <NavItem icon={<FileText size={20} strokeWidth={2.5} />} label="Reports" isActive hasDropdown />
        
        {/* Sidebar Footer Buttons */}
        <div className="px-6 pt-10 pb-10 space-y-4">
          <button className="w-full flex items-center justify-center gap-3 px-4 py-2.5 text-slate-200 border border-slate-700 rounded-full text-[13px] font-semibold hover:bg-slate-800 transition-colors">
            <Headphones size={16} />
            Contact us
          </button>
          <button className="w-full flex items-center justify-center gap-3 px-4 py-2.5 text-slate-200 border border-slate-700 rounded-full text-[13px] font-semibold hover:bg-slate-800 transition-colors">
            <LogOut size={16} />
            Log Out
          </button>
        </div>
      </nav>
    </aside>
  );
};

export default Sidebar;
