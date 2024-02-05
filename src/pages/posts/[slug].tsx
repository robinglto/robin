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

      <div className="bg-gray-50 dark:bg-black/95">
        <article className="mx-6 sm:mx-auto max-w-2xl py-16">
          <div className="mb-6">
            <h1 className="mb-4 sm:text-2xl text-xl font-semibold text-black dark:text-white text-start">
              {post.title}
            </h1>
            <div className="flex justify-between mb-20">
              <div className="sm:flex space-x-2 mb-2 sm:justify-start font-medium text-gray-700 dark:text-gray-50 text-sm ">
                <div className="flex space-x-1">
                  <p>Saul Perez,</p>
                  <time dateTime={post.date}>{post.date}</time>
                </div>
                <div>
                  <DotFilledIcon className="mt-1 sm:block hidden" />
                </div>
                <div className="flex">
                  <p
                    className="dark:border-gray-50 dark:bg-gray-50 text-gray-800 dark:hover:border-gray-200 
                    dark:hover:bg-gray-200 hover:text-gray-900
                    hover:bg-gray-300 hover:border-gray-300 bg-gray-200 border-gray-200
                rounded-lg px-1 py-0 border cursor-pointer sm:block hidden transition delay-150 duration-500 ease-in-out "
                  >
                    {post.category}
                  </p>
                </div>
              </div>
              <div>
                {" "}
                <Link
                  href="/blog"
                  className="underline underline-offset-2 text-sm"
                >
                  Back
                </Link>
              </div>
            </div>
            {/* <div className="font-medium text-sm text-gray-900 hover:text-gray-600 dark:text-white hover:dark:text-gray-300 hover:underline  transition duration-500 ease-in-out cursor-pointer">
              <Link href="/blog">Back</Link>
            </div> */}

            <h3 className="mb-4 text-lg font-semibold text-gray-800 dark:text-gray-50  text-start ">
              {post.subtitle}
            </h3>

            <div
              className=" prose-zinc  prose text-black dark:text-gray-200  "
              dangerouslySetInnerHTML={{ __html: post.body.html }}
            />
          </div>
        </article>
        <div className="flex justify-around pb-28">
          <Footer />
        </div>
      </div>
    </>
  );
};
export default PostLayout;
