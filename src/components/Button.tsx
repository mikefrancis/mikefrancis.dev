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
      className="bg-gray-100 hover:bg-gray-200 dark:bg-gray-700 dark:hover:bg-gray-600 text-sm rounded-md inline-flex items-center px-3 py-2 font-bold"
      {...props}
    >
      {children}
    </As>
  );
};

export default Button;
