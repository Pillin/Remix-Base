import type { SanityDocument } from "@sanity/client";

export default function Page({ page }: { page: SanityDocument }) {
  console.log({ page })
  return (
    <main className="container mx-auto grid grid-cols-1 divide-y divide-blue-100">
      PAGE
    </main>
  );
}
