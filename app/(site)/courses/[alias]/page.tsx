import { getMenu, getPage } from '@/helpers/requests';

export const generateStaticParams = async (): Promise<
 {
  alias: string;
 }[]
> => {
 const menu = await getMenu(0);
 return menu.flatMap((item) => item.pages.map((page) => ({ alias: page.alias })));
};

const PageProducts = async ({ params }: { params: { alias: string } }): Promise<JSX.Element> => {
 const page = await getPage(params.alias);

 return <div>{page.title}</div>;
};
export default PageProducts;
