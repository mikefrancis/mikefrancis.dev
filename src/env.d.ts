/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />

interface ImportMetaEnv {
  readonly KV_REST_API_URL: string;
  readonly KV_REST_API_TOKEN: string;
  readonly KV_REST_API_READ_ONLY_TOKEN: string;
}
