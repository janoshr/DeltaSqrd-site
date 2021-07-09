import Layout from '../../components/layout'
import Date from '../../components/date'
import Head from 'next/head'
import Link from 'next/link'

import { getSortedPostsData } from '../../lib/posts'

// retrieve post data
export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}

export default function Blog({ allPostsData }: any) {
  return (
    <Layout>
      <Head>
        <title>DeltaSqrd | Blog</title>
      </Head>
      <h1 className="display-2 text-center">
        Blog
      </h1>
      <div className="row row-cols-1 row-cols-md-3 g-4">
        {allPostsData.map(({ id, title, date }: any) => {
          return (
            <div className="col" key={id}>
              <div className="card mb-3">
                <div className="card-body">
                  <h5 className="card-title">
                    <Link href={`/posts/${id}`}>
                      <a>{title}</a>
                    </Link>
                  </h5>
                </div>
                <div className="card-footer">
                  <Date dateString={date} />
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </Layout>
  )
}