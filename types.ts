
export interface AssetCardProps {
  name: string;
  code: string;
  startDate: string;
  clearDate: string;
}

export interface DepartmentData {
  name: string;
  incidentsReported: number;
  incidentsOpen: number;
  totalDowntime: string;
  assets: AssetCardProps[];
}

export interface SummaryStat {
  label: string;
  value: string | number;
  color?: string;
}
