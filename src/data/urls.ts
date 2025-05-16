export function getSalesforceUrl(ambiente: string): string {
  if (!ambiente) return '';
  const env = ambiente.toLowerCase();
  return `https://clarosfi--${env}.sandbox.my.salesforce.com/`;
}
