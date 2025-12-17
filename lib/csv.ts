export type CsvRecord = Record<string, string>;

export function parseCsv(content: string): CsvRecord[] {
  if (!content.trim()) return [];
  const lines = content.trim().split(/\r?\n/);
  const headers = lines.shift()?.split(",");
  if (!headers) return [];

  return lines
    .filter(Boolean)
    .map((line) => line.split(","))
    .map((values) =>
      headers.reduce<CsvRecord>((acc, header, idx) => {
        acc[header.trim()] = values[idx]?.trim() ?? "";
        return acc;
      }, {})
    );
}
