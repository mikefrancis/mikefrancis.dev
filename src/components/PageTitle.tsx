import { ElementType, PropsWithChildren, AllHTMLAttributes } from 'react';

const PageTitle = ({
  as = 'h1',
  children,
  ...props
}: PropsWithChildren<{ as?: ElementType }> & AllHTMLAttributes<any>) => {
  const As = as;

  return (
    <As
      className={`text-4xl md:text-5xl lg:text-6xl tracking-tight lg:leading-tight font-black ${props.className}`}
    >
      {children}
    </As>
  );
};

export default PageTitle;
