export type LineChartProps = {
  height?: number;
  min?: number | undefined;
  max?: number | undefined;
  volume?: number | undefined;
  average?: number | undefined;
  isDaily?: boolean;
  series: number[] | undefined;
  categories: string[] | number[] | undefined;
};