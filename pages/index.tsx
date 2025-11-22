// pages/index.tsx
import { builder, BuilderComponent } from '@builder.io/react';

builder.init(process.env.NEXT_PUBLIC_BUILDER_API_KEY!);

export async function getStaticProps({ params }) {
  const urlPath = '/' + (params?.page?.join('/') || '');
  const page = await builder
    .get('page', { userAttributes: { urlPath } })
    .toPromise();

  return {
    props: { page: page || null },
    revalidate: 5,
  };
}

export async function getStaticPaths() {
  return { paths: [], fallback: 'blocking' };
}

export default function BuilderPage({ page }) {
  return <BuilderComponent model="page" content={page} />;
}
