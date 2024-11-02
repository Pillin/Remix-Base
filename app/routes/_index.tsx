import type { MetaFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import type { SanityDocument } from "@sanity/client";
import Page from "../components/Page";
import { loadQuery } from "../../studio/loader.server";
import { PAGE_QUERY } from "../../studio/queries";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export const loader = async () => {
  const { data } = await loadQuery<SanityDocument>(PAGE_QUERY, {slug: 'home'});
  console.log({ data })
  return { data };
};

export default function Index() {
  const { data } = useLoaderData<typeof loader>();
  return (
    <div className="flex h-screen items-center justify-center">
     <Page page={data} />
    </div>
  );
}
