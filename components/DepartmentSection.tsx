
import React from 'react';
import { ChevronRight } from 'lucide-react';
import { DepartmentData, AssetCardProps } from '../types';

const AssetCard: React.FC<AssetCardProps> = ({ name, code, startDate, clearDate }) => (
  <div className="bg-white border border-slate-200 rounded-[12px] p-5 shadow-sm hover:shadow-md transition-shadow relative">
    {/* Arrow Button at Top Right as seen in Screenshot */}
    <button className="absolute top-3 right-3 w-8 h-8 bg-slate-200/80 rounded-[6px] flex items-center justify-center text-slate-700 hover:bg-slate-300 transition-colors">
      <ChevronRight size={18} />
    </button>
    
    <div className="space-y-2 pr-6">
      <div className="flex items-center gap-1.5">
        <span className="text-[13px] text-slate-500 font-medium">Asset name :</span>
        <span className="text-[13px] font-bold text-slate-800">{name}</span>
      </div>
      <div className="flex items-center gap-1.5">
        <span className="text-[13px] text-slate-500 font-medium">Asset code :</span>
        <span className="text-[13px] font-bold text-slate-800">{code}</span>
      </div>
      <div className="flex items-center gap-1.5">
        <span className="text-[13px] text-slate-500 font-medium">Start Date :</span>
        <span className="text-[13px] font-bold text-slate-800">{startDate}</span>
      </div>
      <div className="flex items-center gap-1.5">
        <span className="text-[13px] text-slate-500 font-medium">Clear Date :</span>
        <span className="text-[13px] font-bold text-slate-800">{clearDate}</span>
      </div>
    </div>
  </div>
);

interface ExtendedDepartmentProps {
  data: DepartmentData;
  isLast: boolean;
  type: 'Incident' | 'Work order';
  isCompact?: boolean;
}

const DepartmentSection: React.FC<ExtendedDepartmentProps> = ({ data, type, isCompact }) => {
  const isNavy = type === 'Work order';
  
  return (
    <div className="bg-white rounded-[16px] border border-slate-200 overflow-hidden shadow-sm mb-6">
      {/* Header matching screenshot styling */}
      <div className={`
        ${isNavy ? 'bg-[#1a367c]' : 'bg-[#60a5fa]'} 
        p-5 md:px-8 text-white flex flex-col md:flex-row justify-between items-start md:items-center gap-4
      `}>
        {/* Left Side: Title & Department */}
        <div className="space-y-1">
          {!isCompact && (
            <h3 className="text-[15px] md:text-[17px] font-bold tracking-tight">
              {type} Reported per department
            </h3>
          )}
          <div className="flex items-center gap-2">
            <span className="text-[15px] md:text-[16px] font-medium opacity-90">Department :</span>
            <span className="text-[15px] md:text-[16px] font-bold">{data.name}</span>
          </div>
        </div>

        {/* Right Side Stats - Only show if not compact */}
        {!isCompact && (
          <div className="space-y-1 text-[13px] md:text-[14px] w-full md:w-auto">
            <div className="flex justify-between md:justify-start md:gap-4 items-center">
              <span className="font-semibold text-white/90">Incidents Reported :</span>
              <span className="font-bold w-12 text-right md:text-left">{data.incidentsReported}</span>
            </div>
            <div className="flex justify-between md:justify-start md:gap-4 items-center">
              <span className="font-semibold text-white/90">Incidents Open :</span>
              <span className="font-bold w-12 text-right md:text-left">{data.incidentsOpen}</span>
            </div>
            <div className="flex justify-between md:justify-start md:gap-4 items-center">
              <span className="font-semibold text-white/90">Total Downtime :</span>
              <span className="font-bold text-right md:text-left whitespace-nowrap">{data.totalDowntime}</span>
            </div>
          </div>
        )}
      </div>

      {/* Asset Cards container */}
      <div className="p-5 md:p-6 bg-slate-50/20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {data.assets.map((asset, idx) => (
            <AssetCard key={idx} {...asset} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default DepartmentSection;
