import Link from 'next/link'
import ExtLink from './ext-link'

export default ({ isExcerpt = true }) => {
  return (
    <>
      {isExcerpt === false ? (
        <ProfileComponentDiv>
          <ProfileDetail isExcerpt={isExcerpt} />
        </ProfileComponentDiv>
      ) : (
        <ProfileComponentSection>
          <ProfileDetail isExcerpt={isExcerpt} />
        </ProfileComponentSection>
      )}
    </>
  )
}

const ProfileDetail = ({ isExcerpt = true }) => {
  return (
    <>
      {isExcerpt === false && <h2 className="title">🧑 プロフィール</h2>}
      {isExcerpt === false ? (
        <>
          <p className="text">
            地方のウェブ制作会社で WordPress や EC-CUBE
            などを扱うフロントエンド寄りのエンジニアでした。
            <br />
            現在退職中。ウェブサイトのコーディング（HTML、CSS、JavaScript、PHP）を10年頑張りました。
            <br />
            実績はお問い合わせ（
            <ExtLink className="label" href="https://twitter.com/aottwenty">
              @aottwenty
            </ExtLink>
            ）ください！
            <br />
            <br />
            このサイトは Notion というツールを知り、さらにそれで Blog
            が作れるということで手を出してみた、という感じの場所です。
            <br />
            触れる機会が少なかった Next や React
            などを勉強しつつ、日々の出来事を毎日書くことを実践中。
            <ExtLink className="label" href="https://techblog.mhkkr.me/">
              旧ブログ
            </ExtLink>
            の内容をここに転載予定。
            <br />
            自転車趣味を生かして、ときどきウーバーイーツの配達パートナーをやってます！🚴
          </p>
        </>
      ) : (
        <>
          <p className="text">
            <span className="text__inner">
              <span className="phrase">たらたらと日常や</span>
              <span className="phrase">
                ウェブ系の調べたメモを<span className="phrase"></span>書いてます
              </span>
            </span>
          </p>
          <p className="more">
            <Link href="/about">
              <a>もっと知る →</a>
            </Link>
          </p>
        </>
      )}
    </>
  )
}

import styled from 'styled-components'
import BaseSection from './section'

const ProfileComponentDiv = styled(BaseSection.withComponent('div'))`
  && {
    margin-top: 0;

    .title {
      margin-bottom: 1.5rem;
    }
    aside {
      margin: 3rem 0;
    }
  }
`

const ProfileComponentSection = styled(BaseSection.withComponent('div'))`
  && {
    margin-top: 0;

    .text {
      align-items: center;
      display: flex;
      justify-content: center;
      text-align: center;

      &:before {
        content: '🍚～（ ';
      }
      &:after {
        content: ' ）～🌏';
      }

      // .text__inner
      &__inner {
        flex: 0 1 auto;
      }
    }
    .phrase {
      @media (max-width: 559px) {
        display: block;
      }
    }
  }
`
