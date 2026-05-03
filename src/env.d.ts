/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />

declare module "@fontsource-variable/dm-sans";

interface ImportMetaEnv {
  readonly KV_REST_API_URL: string;
  readonly KV_REST_API_TOKEN: string;
  readonly KV_REST_API_READ_ONLY_TOKEN: string;
}
