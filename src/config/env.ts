interface EnvConfig {
  environment: string;
  apiBaseUrl: string;
  countryFlagCdnUrl: string;
}

/**
 * Environment configuration
 * @property {string} environment - Environment
 * @property {string} apiBaseUrl - API base URL
 * @property {string} countryFlagCdnUrl - Country flag CDN URL
 * @returns the environment object with the environment variables
 */
export const env: EnvConfig = {
  environment: process.env.NEXT_PUBLIC_ENVIRONMENT || "development",
  apiBaseUrl: process.env.NEXT_PUBLIC_API_BASE_URL || "",
  countryFlagCdnUrl: process.env.NEXT_PUBLIC_FLAG_CDN_URL || "",
} as const;

// Validate environment variables
if (!env.apiBaseUrl) {
  console.warn("API_URL is not defined");
}

if (!env.countryFlagCdnUrl) {
  console.warn("FLAG_CDN_URL is not defined");
}
