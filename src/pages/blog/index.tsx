import Link from 'next/link'

import Head from '../../components/head'
import Profile from '../../components/profile'
import Own from '../../components/own'

import {
  getBlogLink,
  getDateStr,
  postIsPublished,
} from '../../lib/blog-helpers'
import getBlogIndex from '../../lib/notion/getBlogIndex'
export async function getStaticProps({ preview }) {
  const postsTable = await getBlogIndex()

  const posts: any[] = Object.keys(postsTable)
    .map(slug => {
      const post = postsTable[slug]
      if (!preview && !postIsPublished(post)) {
        return null
      }
      return post
    })
    .filter(Boolean)

  return {
    props: {
      preview: preview || false,
      posts,
    },
    unstable_revalidate: 10,
  }
}

export default ({ posts = [] }) => {
  return (
    <>
      <Head titlePre="日々の出来事（ぶろぐ）" />
      <PostsListComponent>
        {posts.length !== 0 ? (
          <>
            <h1 className="title">📓 日々の出来事（ぶろぐ）</h1>
            <ul className="list">
              {posts.map(post => {
                return (
                  <li className="item" key={post.Slug}>
                    <p className="item__header">
                      <Link href="/blog/[slug]" as={getBlogLink(post.Slug)}>
                        <a className="label">
                          {!post.Published && (
                            <span>（非公開）</span>
                          )}
                          {post.Page}
                        </a>
                      </Link>
                      {post.Category && (
                        <Link href={`/blog/category/[tagName]`} as={`/blog/category/${post.Category}`} passHref prefetch={false}>
                          <a className="category">📁 {post.Category}</a>
                        </Link>
                      )}
                      {post.Tag && (
                        <span className="tag">{post.Tag.split(',').map(tag => {
                          return (
                            <Link href={`/blog/tags/[tagName]`} as={`/blog/tags/${tag}`} passHref prefetch={false} key={tag.trim()}>
                              <a className="tag__label">{tag.trim()}</a>
                            </Link>
                          )
                        })}</span>
                      )}
                    </p>
                    {post.Date && (
                      <time className="posted">{getDateStr(post.Date)}</time>
                    )}
                  </li>
                )
              })}
            </ul>
          </>
        ) : (
          <>
            <h1 className="title">📓 日々の出来事（ぶろぐ）</h1>
            <p>記事がありません！</p>
          </>
        )}
      </PostsListComponent>
    </>
  )
}

import styled from 'styled-components'
import BasePostsList from '../../components/postslist'

const PostsListComponent = styled(BasePostsList)`
`;