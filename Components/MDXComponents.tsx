import { AnchorHTMLAttributes, DetailedHTMLProps, ReactElement } from 'react';

import Image from 'next/image';
import Link from 'next/link';

const CustomLink = ({
  href,
  children,
  ...props
}: DetailedHTMLProps<AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement>): ReactElement => {
  const isInternalLink = href && (href.startsWith('/') || href.startsWith('#'));

  if (isInternalLink) {
    return (
      <Link href={href}>
        <a {...props}>{children}</a>
      </Link>
    );
  }

  return (
    <a target="_blank" rel="noopener noreferrer" {...props}>
      {children}
    </a>
  );
};

const MDXComponents = {
  Image,
  a: CustomLink,
};

export default MDXComponents;
