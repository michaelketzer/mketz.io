import Image from 'next/image';
import { ReactElement } from 'react';

interface Props {
  src: string;
  title: string;
}

export default function RecipeCover({ src, title }: Props): ReactElement {
  return (
    <div className={'recipeCover'}>
      <Image src={src} alt={title} width={1080} height={810} />

      <style jsx>{`
        .recipeCover {
          filter: drop-shadow(0 5px 10px rgba(0, 0, 0, 0.2));
        }
      `}</style>
    </div>
  );
}
