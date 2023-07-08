import { ElementType, PropsWithChildren } from 'react';

const PageTitle = ({
  as = 'h1',
  children,
}: PropsWithChildren<{ as?: ElementType }>) => {
  const As = as;

  return (
    <As className="text-3xl md:text-5xl md:leading-tight font-black">
      {children}
    </As>
  );
};

export default PageTitle;
