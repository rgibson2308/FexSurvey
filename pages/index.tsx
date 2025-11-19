// pages/index.tsx
import { builder, BuilderComponent } from '@builder.io/react';
import type { GetStaticProps } from 'next';

// Your Builder.io Space ID
builder.init('8a6b0454e24748259b112cb302d9c5f8');

type Props = {
  content: any;
};

export const getStaticProps: GetStaticProps<Props> = async () => {
  const content = await builder
    .get('page', {
      userAttributes: { urlPath: '/' },
    })
    .toPromise();

  return {
    props: {
      content: content || null,
    },
    // Regenerate page every 5 seconds if updated in Builder
    revalidate: 5,
  };
};

export default function HomePage({ content }: Props) {
  return (
    <div>
      <BuilderComponent model="page" content={content} />
    </div>
  );
}
