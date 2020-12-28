import Link from 'next/link'

import Head from '../components/head'
import Profile from '../components/profile'
import Own from '../components/own'

export default ({ posts = [] }) => {
  return (
    <>
      <Head titlePre="あばうと" />
      <Profile isExcerpt={false} />
      <Own />
    </>
  )
}