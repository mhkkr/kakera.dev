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
      <p className="text">
        地方のウェブ制作会社で WordPress や EC-CUBE などを扱うフロントエンドエンジニアでした。<br />
        現代フロントエンドを学びなおしたく巣ごもり学習を選択。絶賛わからんことだらけ。<br />
        その合間に、趣味の自転車欲と生活費のため、噂のお食事の配達パートナーをやってます！🚴
      </p>
      {isExcerpt === false && (
        <aside>
          <h2>スキル</h2>
          <ul>
            <li></li>
          </ul>
        </aside>
      )}
      {isExcerpt === false ? (
        <p className="text">
          さらに詳しく。書く。
        </p>
      ) : (
        <p className="more"><Link href="/about"><a>もっと知る →</a></Link></p>
      )}
    </>
  )
}

import styled from 'styled-components'
import BaseSection from './section'

const ProfileComponentDiv = styled(BaseSection.withComponent('div'))`
  .title {
    margin-bottom: 1.5rem;
  }
  aside {
    margin: 3rem 0;
  }
`;
const ProfileComponentSection = styled(BaseSection)`
  margin-top: 5rem;
`;