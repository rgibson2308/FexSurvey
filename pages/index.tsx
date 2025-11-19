// pages/index.tsx
import { builder, BuilderComponent } from '@builder.io/react';
import type { GetStaticProps } from 'next';

// Your Builder.io space ID
builder.init('8a6b0454e24748259b112cb302d9c5f8');

type Props = {
  content: any;
};

export const getStaticProps: GetStaticProps<Props> = async () => {
  const content = await builder
    .get('page', {
      // This should match the URL you set in Builder
      userAttributes: { urlPath: '/' },
    })
    .toPromise();

  return {
    props: {
      content: content || null,
    },
    // Rebuild page every 5 seconds if there are changes in Builder
    revalidate: 5,
  };
};

export default function HomePage({ content }: Props) {
  //
