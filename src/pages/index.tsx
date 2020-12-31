import Link from 'next/link'

import Head from '../components/head'
import Profile from '../components/profile'
import Own from '../components/own'

import {
  getBlogLink,
  getDateStr,
  postIsPublished,
} from '../lib/blog-helpers'
import getBlogIndex from '../lib/notion/getBlogIndex'
export async function getStaticProps({ preview }) {
  const postsTable = await getBlogIndex()

  const posts: any[] = Object.keys(postsTable)
    .map(slug => {
      const post = postsTable[slug]
      if (!preview && postIsPublished(post)) {
        return post
      }
      return null
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
      <Head />
      <Profile isExcerpt={true} />

      {posts.length !== 0 && (
        <PostsWallComponent>
          <PostsListComponent>
            <h2 className="title">📖 日記</h2>
            <ul className="list">
              {posts.map(post => {
                return (
                  <li className="item" key={post.Slug}>
                    <Link href="/blog/[slug]" as={getBlogLink(post.Slug)}>
                      <a className="label">
                        {!post.Published && ( <span>（非公開）</span> )}
                        {post.Page}
                      </a>
                    </Link>
                    <p className="item__header">
                      {post.Tag && (
                        <span className="tag">{post.Tag.split(',').map(tag => {
                          return (
                            <Link href={`/blog/tags/[tagName]`} as={`/blog/tags/${tag}`} passHref prefetch={false} key={tag.trim()}>
                              <a className="tag__label">{tag.trim()}</a>
                            </Link>
                          )
                        })}</span>
                      )}
                      {post.Category && (
                        <Link href={`/blog/category/[tagName]`} as={`/blog/category/${post.Category}`} passHref prefetch={false}>
                          <a className="category" data-category={post.Category}>📂 {post.Category}</a>
                        </Link>
                      )}
                      <time className="posted">{getDateStr(post.Date)}</time>
                    </p>
                  </li>
                )
              })}
            </ul>
          </PostsListComponent>
          <IconsComponent>
            <li><IconHtml /></li>
            <li><IconCss /></li>
            <li><IconSass /></li>
            <li><IconJs /></li>
            <li><IconJquery /></li>
            <li><IconPhp /></li>
            <li><IconSql /></li>
            <li><IconWordpress /></li>
            <li><IconEccube /></li>
            <li><IconMovabletype /></li>
            <li><IconSymfony /></li>
            <li><IconSmarty /></li>
            <li><IconTwig /></li>
            <li><IconHugo /></li>
          </IconsComponent>
        </PostsWallComponent>
      )}

      <Own />
    </>
  )
}

import styled from 'styled-components'
import BasePostsList from '../components/postslist'
import IconHtml from '../components/icon-html'
import IconCss from '../components/icon-css'
import IconSass from '../components/icon-sass'
import IconJs from '../components/icon-js'
import IconJquery from '../components/icon-jquery'
import IconPhp from '../components/icon-php'
import IconSql from '../components/icon-sql'
import IconWordpress from '../components/icon-wordpress'
import IconEccube from '../components/icon-eccube'
import IconMovabletype from '../components/icon-movabletype'
import IconSymfony from '../components/icon-symfony'
import IconSmarty from '../components/icon-smarty'
import IconTwig from '../components/icon-twig'
import IconHugo from '../components/icon-hugo'

const PostsWallComponent = styled.div`
  background-color: rgb(47, 52, 55);
  color: #fff;
  margin: 6rem 0;
  overflow: hidden;
  position: relative;
  z-index: 1;
`

const IconsComponent = styled.ul`
  position: absolute; left: 50%; top: 50%;
  transform: translate(-50%, -50%);
  width: calc(75rem + 14em);
  z-index: -1;

  li {
    font-size: 2em;
    margin: 1em 0;

    &:nth-child(even) {
      overflow: hidden;
      
      span {
        float: right;
      }
    }
  }
`

const PostsListComponent = styled(BasePostsList)`

  a {
    color: #fff;
  }

  .title {
    margin-bottom: 2.5rem;
  }

  .list {
  }
  .item {
    display: flex;

    &:nth-child(n+2) {
      border-top: 1px dashed #999;
      margin-top: 1.5rem;
      padding-top: 1.5rem;
    }
  }
  .item__header {
    align-items: center;
    flex: 0 0 auto;
    display: flex;
    line-height: 1;
  }
  .label {
    flex: 0 1 auto;
    margin-right: auto;
  }
  .category {
    margin-left: 1rem;

    &[data-category="LifeLog"] {
      color: rgb(255, 115, 105);
    }
    &[data-category="TechBlog"] {
      color: rgb(82, 156, 202);
    }
  }
  .tag {
    margin-left: .5rem;

    // .tag__label
    &__label {
      background-color: rgb(80, 85, 88);
      border-radius: .25em;
      color: #fff;
      display: inline-block;
      font-size: .75em;
      margin-left: .5rem;
      padding: .375em .5em .377em;
      vertical-align: top;
    }
  }
  .posted {
    color: #999;
    margin-left: 1rem;
  }
`;