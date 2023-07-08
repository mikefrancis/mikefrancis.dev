import Link, { LinkProps } from 'next/link';
import { ElementType, PropsWithChildren } from 'react';

const Button = ({
  children,
  as = 'button',
  ...props
}: PropsWithChildren<{ as?: ElementType | typeof Link } | LinkProps>) => {
  const As = as as any;

  return (
    <As
      className={`group bg-gray-200 text-black hover:bg-gray-100 dark:bg-gray-900 dark:text-white dark:hover:bg-gray-700 text-sm rounded-md inline-flex items-center px-4 py-2 font-bold`}
      {...props}
    >
      {children}
    </As>
  );
};

export default Button;
