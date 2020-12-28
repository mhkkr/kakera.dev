import ExtLink from './ext-link'

import GoogleAnalytics from './svgs/googleanalytics'
import Instagram from './svgs/instagram'
import NicoVideo from './svgs/nicovideo'
import Twitter from './svgs/twitter'
import Github from './svgs/github'

import {
  getDateStr,
} from '../lib/blog-helpers'

const projects: { service: string; Icon: any; label: string; status: string; url: string; comment: string; since: string }[] = [
  {
    service: 'Google Analytics',
    Icon: GoogleAnalytics,
    label: 'Google Analytics オーガニック検索ソース 自動登録ブックマークレット',
    status: '継続',
    url: 'https://github.mhkkr.me/Google-Analytics-Organic-Search/',
    comment: 'オーガニック検索ソースの登録をワンクリックで完結できるブックマークレット。',
    since: '2015/04/26'
  },
]

const accounts: { service: string; Icon: any; label: string; status: string; url: string; comment: string; since: string }[] = [
  {
    service: 'Twitter',
    Icon: Twitter,
    label: 'つぶやき',
    status: '継続',
    url: 'https://twitter.com/aottwenty',
    comment: '日常を低頻度につぶやき。リアル繋がり、ゲーム繋がり、ごっちゃごちゃ！',
    since: '2009/10/13'
  },
  {
    service: 'Instagram',
    Icon: Instagram,
    label: '写真庫',
    status: '継続',
    url: 'https://instagram.com/mokuhen',
    comment: '平日はほぼ毎日、今日のアイス（#かけらあいす）をしてました。最近は自転車系。',
    since: '2011/01/28'
  },
  {
    service: 'ニコニコ動画',
    Icon: NicoVideo,
    label: '飛天online（投稿動画）',
    status: '終了',
    url: 'https://nicovideo.jp/mylist/29806361',
    comment: 'むか～し昔サービスされていたゲーム「飛天online」の動画',
    since: '2008/04/09'
  },
  {
    service: 'ニコニコ動画',
    Icon: NicoVideo,
    label: 'PSO2（投稿動画）',
    status: '停滞',
    url: 'https://nicovideo.jp/mylist/45256169',
    comment: 'へっぽこぴーなりにPSO2のレンジャー動画を上げていく！',
    since: '2014/04/20'
  },
  {
    service: 'Github',
    Icon: Github,
    label: 'Github',
    status: '継続',
    url: 'https://github.com/mhkkr',
    comment: '実績はこれからだ…。',
    since: '2013/09/09'
  },
  // {
  //   service: 'はてなブログ',
  //   Icon: null,
  //   label: 'PSO2（ゲーム日記）',
  //   status: '終了',
  //   url: 'https://mhkkr.hatenablog.jp',
  //   comment: '出遅れゲーム日記',
  //   since: '2013/07/02'
  // },
]

export default () => {
  return (
    <>
      <OwnComponent>
        <h2 className="title">🎨 作ったもの</h2>
        <ul className="list">
          {projects.map(({ service, Icon, label, status, url, comment, since }) => (
            <li className="item" key={label} data-service={service}>
              <ExtLink className="label" href={url}><Icon className="icon" />{label}</ExtLink>
              <span className="status" title={status}></span>
              <p className="comment">{comment}</p>
              <p className="since">{service} {getDateStr(since)} から</p>
            </li>
          ))}
        </ul>
      </OwnComponent>
      <OwnComponent>
        <h2 className="title">📛 アカウント達</h2>
        <ul className="list">
          {accounts.map(({ service, Icon, label, status, url, comment, since }) => (
            <li className="item" key={label} data-service={service}>
              <ExtLink className="label" href={url}><Icon className="icon" />{label}</ExtLink>
              <span className="status" title={status}></span>
              <p className="comment">{comment}</p>
              <p className="since">{service} {getDateStr(since)} から</p>
            </li>
          ))}
        </ul>
      </OwnComponent>
    </>
  )
}

import styled from 'styled-components'
import BaseSection from './section'

const OwnComponent = styled(BaseSection)`
  .list {
    display: flex;
    flex-wrap: wrap;
  }
  .item {
    background-color: #fff;
    flex: 0 1 50%;
    padding: 1.25rem 1.25rem 1.25rem calc(1.25rem + 1.5em);
    
    border-right: 1px solid #ccc;
    border-bottom: 1px dashed #aaa;
    &:first-child,
    &:nth-child(2) {
      border-top: 1px solid #ccc;
    }
    &:nth-child(odd) {
      border-left: 1px solid #ccc;
    }
    
    &:nth-child(odd):not(:last-child) {
      border-right-color: #aaa;
      border-right-style: dashed;
    }
    &:nth-last-child(2),
    &:last-child {
      border-bottom-color: #ccc;
      border-bottom-style: solid;
    }

    &:first-child {
      border-top-left-radius: 8px 8px;
    }
    &:nth-child(2),
    &:first-child:last-child {
      border-top-right-radius: 8px 8px;
    }
    &:nth-last-child(2):nth-child(odd),
    &:last-child:nth-child(odd) {
      border-bottom-left-radius: 8px 8px;
    }
    &:nth-last-child(2):nth-child(even),
    &:last-child {
      border-bottom-right-radius: 8px 8px;
    }

    position: relative;
    transition: background-color .3s, box-shadow .3s, z-index 0s .3s;
    &:hover {
      transition-delay: 0s;
      background-color: rgba(47, 52, 55, .02);
      box-shadow: 0 0 10px 5px rgba(0, 0, 0, .2);
      z-index: 1;
    }
  }
  .label {
    font-weight: 700;
    margin-left: -1.5em;
  }
  .icon {
    color: var(--color-font);
    height: 1em;
    margin-right: .5em;
    vertical-align: -.125em;
    width: 1em;

    transition: .3s;
  }
  .item:hover .icon {
    transform: scale(1.1);
  }
  .item[data-service="Google Analytics"]:hover .icon { fill: var(--color-googleanalytics); }
  .item[data-service="Twitter"]:hover .icon { fill: var(--color-twitter); }
  .item[data-service="Instagram"]:hover .icon { fill: var(--color-instagram); }
  .item[data-service="ニコニコ動画"]:hover .icon { stroke: var(--color-nicovideo); stroke-width: 2px; fill: transparent; }
  .item[data-service="Github"]:hover .icon { stroke: var(--color-github); stroke-width: 2px; fill: transparent; }

  .status {
    margin-left: .5rem;
    vertical-align: .065em;

    &::before {
      background-color: #ccc;
      border-radius: 50%;
      display: inline-block;
      content: "";
      height: .5em;
      width: .5em;
    }
    &[title*="継続"]::before { background-color: #265f32; }
    &[title*="停滞"]::before { background-color: #91801f; }
    &[title*="終了"]::before { background-color: #999; }
  }
  .comment {
    font-size: .95em;
    margin-top: .5rem;
  }
  .since {
    color: #999;
    font-size: .75em;
    margin-top: .6rem;

    transition: .3s;
  }
  .item[data-service="Google Analytics"]:hover .since { color: var(--color-googleanalytics); }
  .item[data-service="Twitter"]:hover .since { color: var(--color-twitter); }
  .item[data-service="Instagram"]:hover .since { color: var(--color-instagram); }
  .item[data-service="ニコニコ動画"]:hover .since { color: var(--color-nicovideo); }
  .item[data-service="Github"]:hover .since { color: var(--color-github); }
`;