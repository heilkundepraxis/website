export type LayoutProps = {
  children: React.ReactNode;
};

export type PageProps = {
  params: { slug?: string };
  searchParams: { [key: string]: string | string[] | undefined };
};
