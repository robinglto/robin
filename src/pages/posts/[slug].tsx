import Head from "next/head";
import Link from "next/link";
import { allPosts } from "contentlayer/generated";
import { GetStaticPropsContext } from "next";
import { ArrowLeftIcon, DotFilledIcon } from "@radix-ui/react-icons";
import Footer from "@/components/Footer";

export async function getStaticPaths() {
  const paths = allPosts.map((post) => post.url);
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }: GetStaticPropsContext) {
  const slug = params?.slug?.toString().toLowerCase();
  if (!slug) {
    return {
      notFound: true,
    };
  }
  const post = allPosts.find(({ _id }) => _id.slice(0, -3) === slug);
  return { props: { post } };
}

const PostLayout = ({ post }: any) => {
  


  


  return (
    <>
      <Head>
        <title>{post.title}</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div>

        <article className="mx-6 sm:mx-auto max-w-2xl py-16">
          <div className="mb-6">
            <h1 className="mb-4 text-3xl font-semibold text-white text-start">
              {post.title}
            </h1>
            <div className="flex justify-between">
              <div className="sm:flex space-x-2 mb-20 sm:justify-start font-medium text-gray-400 text-sm ">
                <div className="flex space-x-1">
                  <p>Saul Perez,</p>
                  <time dateTime={post.date}>{post.date}</time>
                </div>
                <DotFilledIcon className="mt-1 sm:block hidden" />
                <p className="rounded-lg px-1 py-0 border border-gray-600 bg-gray-600 text-gray-200 hover:border-gray-700 hover:bg-gray-700 hover:text-gray-100 cursor-pointer sm:block hidden transition delay-150 duration-500 ease-in-out ">
                  {post.category}
                </p>
              </div>

              <div className="flex space-x-1.5   text-sm  text-gray-100 hover:text-gray-400 hover:underline  transition duration-500 ease-in-out cursor-pointer ">
                <ArrowLeftIcon className="mt-1" />
                <Link href="/blog">Back</Link>
              </div>
            </div>
            

            <h3 className="mb-4 text-lg font-semibold text-white text-start ">
              {post.subtitle}
            </h3>

            <div
              className="text-neutral-200 prose-zinc dark:prose-gray prose   "
              dangerouslySetInnerHTML={{ __html: post.body.html }}
            />
          </div>
        </article>
        <div className="flex justify-around mb-28">
          <Footer />
        </div>
      </div>
    </>
  );
};
export default PostLayout;
