import React from "react";
import {
  Calendar,
  Download,
  ChevronLeft,
  ChevronRight,
  MapPin,
  Activity,
} from "lucide-react";
import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  LabelList,
} from "recharts";
import DepartmentSection from "./DepartmentSection";
import { DepartmentData } from "../types";
import { DASHBOARD_COMPANY_LOGO } from "../constants/images";

const Dashboard: React.FC = () => {
  const donutData = [
    { name: "Working Assets", value: 75, color: "#1a367c" },
    { name: "Not working Assets", value: 18, color: "#c56577" },
    { name: "Discarded", value: 10, color: "#60a5fa" },
  ];

  const verticalStackedData = [
    {
      name: "Incidents",
      open: 35,
      closed: 20,
      openLabel: "35",
      closedLabel: "20",
    },
    {
      name: "Work Order",
      open: 15,
      closed: 0,
      openLabel: "15",
      closedLabel: "",
    },
    {
      name: "Check outs",
      open: 16,
      closed: 7,
      openLabel: "16",
      closedLabel: "7",
    },
  ];

  const horizontalChartData = [
    { name: "Neonatal intensive care unit", open: 20, closed: 7 },
    { name: "Radiology", open: 6, closed: 8 },
    { name: "Nursing Department", open: 10, closed: 9 },
    { name: "Trauma and Emergency care", open: 6, closed: 4 },
    { name: "Oncology", open: 2, closed: 3 },
  ];

  const workOrderChartData = [
    { name: "Neonatal intensive care unit", open: 20, closed: 7 },
    { name: "Radiology", open: 6, closed: 8 },
    { name: "Nursing Department", open: 10, closed: 9 },
    { name: "Trauma and Emergency care", open: 6, closed: 4 },
    { name: "Oncology", open: 2, closed: 3 },
  ];

  const departments: (DepartmentData & {
    type: "Incident" | "Work order";
    isCompact?: boolean;
  })[] = [
    {
      name: "Anesthesiology",
      type: "Incident",
      incidentsReported: 5,
      incidentsOpen: 20,
      totalDowntime: "7 min 22 sec",
      assets: [
        {
          name: "Strecher",
          code: "A001234",
          startDate: "21-08-2025",
          clearDate: "26-08-2025",
        },
        {
          name: "Strecher",
          code: "A001234",
          startDate: "21-08-2025",
          clearDate: "26-08-2025",
        },
        {
          name: "Strecher",
          code: "A001234",
          startDate: "21-08-2025",
          clearDate: "26-08-2025",
        },
        {
          name: "CT scan",
          code: "A001234",
          startDate: "18-06-2025",
          clearDate: "19-06-2025",
        },
      ],
    },
    {
      name: "Radiology",
      type: "Incident",
      isCompact: true,
      incidentsReported: 5,
      incidentsOpen: 20,
      totalDowntime: "7 min 22 sec",
      assets: [
        {
          name: "Strecher",
          code: "A001234",
          startDate: "21-08-2025",
          clearDate: "26-08-2025",
        },
        {
          name: "Strecher",
          code: "A001234",
          startDate: "21-08-2025",
          clearDate: "26-08-2025",
        },
        {
          name: "Strecher",
          code: "A001234",
          startDate: "21-08-2025",
          clearDate: "26-08-2025",
        },
        {
          name: "CT scan",
          code: "A001234",
          startDate: "18-06-2025",
          clearDate: "19-06-2025",
        },
      ],
    },
    {
      name: "Dermatology",
      type: "Work order",
      incidentsReported: 5,
      incidentsOpen: 20,
      totalDowntime: "7 min 22 sec",
      assets: [
        {
          name: "Strecher",
          code: "A001234",
          startDate: "21-08-2025",
          clearDate: "26-08-2025",
        },
        {
          name: "Strecher",
          code: "A001234",
          startDate: "21-08-2025",
          clearDate: "26-08-2025",
        },
        {
          name: "Strecher",
          code: "A001234",
          startDate: "21-08-2025",
          clearDate: "26-08-2025",
        },
        {
          name: "CT scan",
          code: "A001234",
          startDate: "18-06-2025",
          clearDate: "19-06-2025",
        },
      ],
    },
    {
      name: "Gynacology",
      type: "Work order",
      isCompact: true,
      incidentsReported: 5,
      incidentsOpen: 20,
      totalDowntime: "7 min 22 sec",
      assets: [
        {
          name: "Strecher",
          code: "A001234",
          startDate: "21-08-2025",
          clearDate: "26-08-2025",
        },
        {
          name: "Strecher",
          code: "A001234",
          startDate: "21-08-2025",
          clearDate: "26-08-2025",
        },
        {
          name: "Strecher",
          code: "A001234",
          startDate: "21-08-2025",
          clearDate: "26-08-2025",
        },
        {
          name: "CT scan",
          code: "A001234",
          startDate: "18-06-2025",
          clearDate: "19-06-2025",
        },
      ],
    },
  ];

  const ticks = [0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30];

  return (
    <div className="space-y-6 max-w-[1400px] mx-auto pb-12 px-1">
      {/* Monthly Report Header - Improved layout for responsiveness */}
      <div className="bg-white rounded-[14px] shadow-sm border border-slate-200 px-4 md:px-6 py-4 flex flex-col lg:flex-row items-center justify-between gap-6 overflow-hidden">
        <div className="flex items-center flex-shrink-0">
          <img
            src={DASHBOARD_COMPANY_LOGO}
            alt="Vajra Logo"
            className="h-8 md:h-10 w-auto object-contain"
          />
        </div>
        <h2 className="text-xl md:text-[22px] font-bold text-slate-900 text-center lg:flex-1">
          Monthly Report
        </h2>
        <div className="flex flex-wrap items-center justify-center gap-3 md:gap-4 flex-shrink-0">
          <div className="flex items-center bg-white border border-slate-300 rounded-full px-3 py-1.5 gap-2">
            <button className="text-slate-400 p-1 hover:text-slate-600">
              <ChevronLeft size={16} />
            </button>
            <span className="text-[13px] font-bold text-slate-800 min-w-[70px] text-center">
              June 2025
            </span>
            <Calendar size={16} className="text-slate-800" />
            <button className="text-slate-400 p-1 hover:text-slate-600">
              <ChevronRight size={16} />
            </button>
          </div>
          <button className="bg-[#4285f4] hover:bg-blue-600 text-white rounded-[8px] px-5 py-2.5 flex items-center gap-2 text-[13px] font-bold transition-colors">
            Download PDF
            <Download size={16} />
          </button>
        </div>
      </div>

      {/* Top Section Grid - Synchronized height with responsiveness */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
        {/* Institution Card */}
        <div className="bg-[#002b5c] text-white p-6 md:p-8 rounded-[24px] flex flex-col justify-between min-h-[200px] lg:h-[280px] shadow-sm">
          <div className="flex items-start gap-5 md:gap-6">
            <div className="bg-white/10 p-3 rounded-[12px] flex-shrink-0 flex items-center justify-center w-12 h-12 md:w-14 md:h-14">
              <div className="relative w-8 h-8 md:w-10 md:h-10 flex items-center justify-center">
                <div className="absolute inset-0 border-[2px] md:border-[3px] border-white/60 rounded-[4px]"></div>
                <div className="absolute w-4 md:w-6 h-[2px] md:h-[3px] bg-white/80"></div>
                <div className="absolute w-[2px] md:w-[3px] h-4 md:h-6 bg-white/80"></div>
                {/* Fix: removed invalid md:size prop, added responsive classes */}
                <Activity
                  size={12}
                  className="z-10 text-white stroke-[3px] md:w-3.5 md:h-3.5"
                />
              </div>
            </div>
            <h3 className="text-lg md:text-[21px] font-medium leading-[1.3] mt-0.5">
              Sri siddhartha institute of medical science
            </h3>
          </div>
          <div className="flex items-center gap-5 md:gap-6">
            <div className="bg-white/10 p-3 rounded-[12px] flex-shrink-0 flex items-center justify-center w-12 h-12 md:w-14 md:h-14">
              <MapPin
                className="w-6 h-6 md:w-8 md:h-8 text-white/90"
                strokeWidth={1.5}
              />
            </div>
            <span className="text-lg md:text-[21px] font-medium">
              Vijayanagar
            </span>
          </div>
        </div>

        {/* Donut Chart Card */}
        <div className="bg-white p-6 rounded-[24px] border border-slate-100 min-h-[250px] lg:h-[280px] flex flex-col md:flex-row items-center justify-around shadow-sm relative overflow-hidden">
          <div className="w-full md:w-[60%] h-48 md:h-full flex items-center justify-center relative">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={donutData}
                  cx="50%"
                  cy="50%"
                  innerRadius={55}
                  outerRadius={85}
                  dataKey="value"
                  stroke="none"
                >
                  {donutData.map((e, i) => (
                    <Cell key={i} fill={e.color} />
                  ))}
                </Pie>
              </PieChart>
            </ResponsiveContainer>
            <div className="absolute bottom-2 md:bottom-[20%] left-1/2 -translate-x-1/2 md:left-[25%] md:translate-x-0">
              <div className="bg-black text-white text-[10px] md:text-[11px] px-3 py-1.5 rounded-lg shadow-xl flex items-center gap-2 whitespace-nowrap">
                <div className="w-2.5 h-2.5 rounded-full bg-[#c56577]"></div>
                Not Working Assets - 7
              </div>
            </div>
          </div>
          <div className="flex md:flex-col flex-wrap justify-center gap-4 pl-0 md:pl-4 w-full md:w-[40%] mt-4 md:mt-0">
            {donutData.map((item) => (
              <div key={item.name} className="flex items-center gap-2 md:gap-3">
                <div
                  className="w-3.5 h-3.5 md:w-4 md:h-4 rounded-[4px] flex-shrink-0"
                  style={{ backgroundColor: item.color }}
                ></div>
                <span className="text-xs md:text-[13px] font-bold text-slate-700 leading-tight">
                  {item.name}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Vertical Stacked Bar Chart */}
        <div className="bg-white p-6 rounded-[24px] border border-slate-100 min-h-[280px] lg:h-[280px] shadow-sm relative flex flex-col">
          <div className="flex justify-end gap-3 md:gap-4 mb-4">
            <div className="flex items-center gap-1.5">
              <div className="w-3 h-3 md:w-3.5 md:h-3.5 rounded-[3px] bg-[#1a367c]"></div>
              <span className="text-[11px] md:text-[12px] font-bold">Open</span>
            </div>
            <div className="flex items-center gap-1.5">
              <div className="w-3 h-3 md:w-3.5 md:h-3.5 rounded-[3px] bg-[#60a5fa]"></div>
              <span className="text-[11px] md:text-[12px] font-bold">
                Closed
              </span>
            </div>
          </div>
          <div className="flex-1 min-h-[180px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                data={verticalStackedData}
                margin={{ top: 10, right: 10, left: -25, bottom: 0 }}
              >
                <CartesianGrid vertical={false} stroke="#f1f5f9" />
                <XAxis
                  dataKey="name"
                  axisLine={false}
                  tickLine={false}
                  tick={{ fontSize: 11, fontWeight: 700, fill: "#475569" }}
                />
                <YAxis
                  axisLine={false}
                  tickLine={false}
                  tick={{ fontSize: 10, fill: "#94a3b8" }}
                  domain={[0, 60]}
                  ticks={[0, 15, 30, 45, 60]}
                />
                <Bar dataKey="closed" stackId="a" fill="#60a5fa" barSize={30}>
                  <LabelList
                    dataKey="closedLabel"
                    position="center"
                    fill="#fff"
                    style={{ fontSize: "11px", fontWeight: 800 }}
                  />
                </Bar>
                <Bar
                  dataKey="open"
                  stackId="a"
                  fill="#1a367c"
                  barSize={30}
                  radius={[4, 4, 0, 0]}
                >
                  <LabelList
                    dataKey="openLabel"
                    position="center"
                    fill="#fff"
                    style={{ fontSize: "11px", fontWeight: 800 }}
                  />
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      {/* Total Asset Hero Section */}
      <div className="bg-[#f43f5e] p-6 md:p-8 rounded-[24px] text-white relative overflow-hidden shadow-sm h-[120px] md:h-[140px] flex flex-col justify-center max-w-full sm:max-w-[380px]">
        <div className="absolute top-0 right-0 h-full w-2/3 pointer-events-none">
          <div className="absolute top-[-40px] right-[-30px] w-64 h-64 border border-white opacity-20 rounded-full"></div>
          <div className="absolute top-[20px] right-[-10px] w-48 h-48 bg-white opacity-10 rounded-full"></div>
        </div>
        <h2 className="text-lg md:text-[20px] font-bold tracking-wide">
          Total Asset
        </h2>
        <p className="text-3xl md:text-[42px] font-bold leading-none mt-2">
          200
        </p>
      </div>

      {/* Summary Statistics Row */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        <div className="bg-white rounded-[14px] border border-slate-200 overflow-hidden shadow-sm">
          <div className="bg-[#dbeafe] px-5 py-3 border-b border-slate-200/50">
            <h3 className="text-base md:text-[17px] font-bold text-slate-900">
              Check outs
            </h3>
          </div>
          <div className="p-5 md:p-6 space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-sm md:text-[15px] font-bold">
                Checked In
              </span>
              <span className="text-sm md:text-[15px]">0</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm md:text-[15px] font-bold">
                Checked Out
              </span>
              <span className="text-sm md:text-[15px]">25</span>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-[14px] border border-slate-200 overflow-hidden shadow-sm">
          <div className="bg-[#dbeafe] px-5 py-3 border-b border-slate-200/50">
            <h3 className="text-base md:text-[17px] font-bold text-slate-900">
              Incidents
            </h3>
          </div>
          <div className="p-5 md:p-6 space-y-2">
            <div className="flex justify-between">
              <span className="text-sm md:text-[15px] font-bold">
                Incidents
              </span>
              <span className="text-sm md:text-[15px]">22 Reported</span>
            </div>
            <div className="flex justify-between">
              <span className="text-sm md:text-[15px] font-bold">
                Total Downtime
              </span>
              <span className="text-sm md:text-[15px]">12 mins 10 sec</span>
            </div>
            <div className="flex justify-between">
              <span className="text-sm md:text-[15px] font-bold">Closed</span>
              <span className="text-sm md:text-[15px]">19</span>
            </div>
            <div className="flex justify-between">
              <span className="text-sm md:text-[15px] font-bold">Open</span>
              <span className="text-sm md:text-[15px]">3</span>
            </div>
            <div className="flex justify-between items-center pt-4 border-t border-slate-100 mt-2">
              <span className="text-sm md:text-[15px] font-bold">
                Budget spent
              </span>
              <span className="text-sm md:text-[15px] font-bold text-[#10b981]">
                ₹ 3,00,000
              </span>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-[14px] border border-slate-200 overflow-hidden shadow-sm">
          <div className="bg-[#dbeafe] px-5 py-3 border-b border-slate-200/50">
            <h3 className="text-base md:text-[17px] font-bold text-slate-900">
              Work Order
            </h3>
          </div>
          <div className="p-5 md:p-6 space-y-2">
            <div className="flex justify-between">
              <span className="text-sm md:text-[15px] font-bold">
                Work order
              </span>
              <span className="text-sm md:text-[15px]">17 requested</span>
            </div>
            <div className="flex justify-between">
              <span className="text-sm md:text-[15px] font-bold">Closed</span>
              <span className="text-sm md:text-[15px]">14</span>
            </div>
            <div className="flex justify-between">
              <span className="text-sm md:text-[15px] font-bold">Open</span>
              <span className="text-sm md:text-[15px]">3</span>
            </div>
            <div className="flex justify-between items-center pt-4 border-t border-slate-100 mt-4">
              <span className="text-sm md:text-[15px] font-bold">
                Budget spent
              </span>
              <span className="text-sm md:text-[15px] font-bold text-[#10b981]">
                ₹ 3,00,000
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Horizontal Bar Charts with overflow-x-auto to prevent label clipping on mobile */}
      <div className="space-y-6">
        <div className="bg-white p-6 md:p-8 rounded-[24px] border border-slate-200 shadow-sm relative overflow-hidden">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-8 gap-4">
            <h2 className="text-lg md:text-[20px] font-bold text-slate-900">
              Incident Reported - 12
            </h2>
            <div className="flex gap-4 md:gap-6 text-[11px] font-bold text-slate-500">
              <div className="flex items-center gap-1.5">
                <div className="w-3.5 h-3.5 rounded-[3px] bg-[#60a5fa]"></div>{" "}
                Open
              </div>
              <div className="flex items-center gap-1.5">
                <div className="w-3.5 h-3.5 rounded-[3px] bg-[#dbeafe]"></div>{" "}
                Closed
              </div>
            </div>
          </div>
          <div className="h-[400px] overflow-x-auto overflow-y-hidden">
            <div className="min-w-[600px] h-full">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  layout="vertical"
                  data={horizontalChartData}
                  margin={{ left: 10, right: 30, bottom: 40, top: 0 }}
                >
                  <CartesianGrid horizontal={false} stroke="#f1f5f9" />
                  <XAxis
                    type="number"
                    domain={[0, 30]}
                    ticks={ticks}
                    axisLine={false}
                    tickLine={false}
                    tick={{ fontSize: 10, fill: "#94a3b8" }}
                    label={{
                      value: "Total No.of.Incidents",
                      position: "bottom",
                      offset: 20,
                      fontSize: 12,
                      fontWeight: 700,
                      fill: "#1e293b",
                    }}
                  />
                  <YAxis
                    type="category"
                    dataKey="name"
                    axisLine={false}
                    tickLine={false}
                    width={240}
                    tick={{
                      textAnchor: "start",
                      fill: "#1e293b",
                      fontSize: 11,
                      fontWeight: 600,
                      dx: -230,
                    }}
                  />
                  <Bar dataKey="open" stackId="b" fill="#60a5fa" barSize={26}>
                    <LabelList
                      dataKey="open"
                      position="center"
                      fill="#fff"
                      style={{ fontSize: "10px", fontWeight: 800 }}
                    />
                  </Bar>
                  <Bar
                    dataKey="closed"
                    stackId="b"
                    fill="#dbeafe"
                    barSize={26}
                    radius={[0, 4, 4, 0]}
                  >
                    <LabelList
                      dataKey="closed"
                      position="center"
                      fill="#1e293b"
                      style={{ fontSize: "10px", fontWeight: 800 }}
                    />
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 md:p-8 rounded-[24px] border border-slate-200 shadow-sm relative overflow-hidden">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-8 gap-4">
            <h2 className="text-lg md:text-[20px] font-bold text-slate-900">
              Work Order Reported - 12
            </h2>
            <div className="flex gap-4 md:gap-6 text-[11px] font-bold text-slate-500">
              <div className="flex items-center gap-1.5">
                <div className="w-3.5 h-3.5 rounded-[3px] bg-[#1a367c]"></div>{" "}
                Open
              </div>
              <div className="flex items-center gap-1.5">
                <div className="w-3.5 h-3.5 rounded-[3px] bg-[#b0bdfa]"></div>{" "}
                Closed
              </div>
            </div>
          </div>
          <div className="h-[400px] overflow-x-auto overflow-y-hidden">
            <div className="min-w-[600px] h-full">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  layout="vertical"
                  data={workOrderChartData}
                  margin={{ left: 10, right: 30, bottom: 40, top: 0 }}
                >
                  <CartesianGrid horizontal={false} stroke="#f1f5f9" />
                  <XAxis
                    type="number"
                    domain={[0, 30]}
                    ticks={ticks}
                    axisLine={false}
                    tickLine={false}
                    tick={{ fontSize: 10, fill: "#94a3b8" }}
                    label={{
                      value: "Total No.of.Work order",
                      position: "bottom",
                      offset: 20,
                      fontSize: 12,
                      fontWeight: 700,
                      fill: "#1e293b",
                    }}
                  />
                  <YAxis
                    type="category"
                    dataKey="name"
                    axisLine={false}
                    tickLine={false}
                    width={240}
                    tick={{
                      textAnchor: "start",
                      fill: "#1e293b",
                      fontSize: 11,
                      fontWeight: 600,
                      dx: -230,
                    }}
                  />
                  <Bar dataKey="open" stackId="c" fill="#1a367c" barSize={26}>
                    <LabelList
                      dataKey="open"
                      position="center"
                      fill="#fff"
                      style={{ fontSize: "10px", fontWeight: 800 }}
                    />
                  </Bar>
                  <Bar
                    dataKey="closed"
                    stackId="c"
                    fill="#b0bdfa"
                    barSize={26}
                    radius={[0, 4, 4, 0]}
                  >
                    <LabelList
                      dataKey="closed"
                      position="center"
                      fill="#1e293b"
                      style={{ fontSize: "10px", fontWeight: 800 }}
                    />
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      </div>

      {/* Asset List Sections */}
      <div className="space-y-6 pt-10">
        {departments.map((dept, idx) => (
          <DepartmentSection
            key={`${dept.name}-${idx}`}
            data={dept}
            isLast={idx === departments.length - 1}
            type={dept.type}
            isCompact={dept.isCompact}
          />
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
