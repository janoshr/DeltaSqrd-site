import Layout from "../../components/layout";
import Head from 'next/head';

import { getAllPostIds, getPostData } from '../../lib/posts'

export async function getStaticProps({ params }:any) {
  const postData = await getPostData(params.id)
  return {
    props: {
      postData
    }
  }
}

export async function getStaticPaths() {
  const paths = getAllPostIds()
  return {
    paths,
    fallback: false
  }
}

export default function Posts({ postData }:any){
  return (
    <Layout>
      <Head>
        <title>DeltaSqrd | {postData.title}</title>
      </Head>
      <h1>{postData.title}</h1>
      <br />
      <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
    </Layout>
  );
}

