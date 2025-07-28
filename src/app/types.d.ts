import { Metadata } from "next";

declare module "next" {
  interface PageProps {
    params: { lang: string };
    searchParams?: { [key: string]: string | string[] | undefined };
  }
}
