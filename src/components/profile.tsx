import Link from 'next/link'

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
      {isExcerpt === false && (
        <h2 className="title">🧑 プロフィール</h2>
      )}
      {isExcerpt === false ? (
        <>
          <p className="text">
            地方のウェブ制作会社で WordPress や EC-CUBE などを扱うフロントエンドエンジニアでした。<br />
            この先どうしていいかわからんうちに退職してしまったので、現代フロントエンドを学びなおしたく巣ごもり学習…。絶賛わからんことだらけ。<br />
            自転車趣味を生かして、噂のお食事の配達パートナーをやってます！🚴<br />
            このサイトではたらたらと日常（LifeLog）やウェブ系の調べたメモ（TechBlog）を書いてます📝。<br />
            Notion Blog というサービスで作っています。カスタマイズは途中！旧ブログも移行中…。
          </p>
          {/* <aside>
            <h2>スキル</h2>
            <ul>
              <li></li>
            </ul>
          </aside> */}
        </>
      ) : (
        <>
          <p className="text"><span className="text__inner"><span className="phrase">たらたらと日常や</span><span className="phrase">ウェブ系の調べたメモを<span className="phrase"></span>書いてます</span></span></p>
          <p className="more"><Link href="/about"><a>もっと知る →</a></Link></p>
        </>
      )}
    </>
  )
}

import styled from 'styled-components'
import BaseSection from './section'

const ProfileComponentDiv = styled(BaseSection.withComponent('div'))` && {
  margin-top: 0;

  .title {
    margin-bottom: 1.5rem;
  }
  aside {
    margin: 3rem 0;
  }
} `

const ProfileComponentSection = styled(BaseSection.withComponent('div'))` && {
  margin-top: 0;

  .text {
    align-items: center;
    display: flex;
    justify-content: center;
    text-align: center;

    &:before {
      content: "🍚～（ ";
    }
    &:after {
      content: " ）～🌏";
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
} `