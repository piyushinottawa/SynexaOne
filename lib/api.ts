export function getBaseUrl() {
  if (process.env.NEXT_PUBLIC_APP_URL) {
    return process.env.NEXT_PUBLIC_APP_URL;
  }

  return "";
}
import { getBaseUrl } from "@/lib/api";

const res = await fetch(
  `${getBaseUrl()}/api/dashboard`,
  {
    cache: "no-store",
  }
);