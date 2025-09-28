export function getSalesforceUrl(ambiente: string): string {
  if (!ambiente) return '';
  const env = ambiente.toLowerCase();
  return `https://c----------${env}.---------`;
}
