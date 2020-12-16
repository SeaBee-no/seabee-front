import React, { ReactNode } from 'react'
import Head from 'next/head'

import styled from '@emotion/styled'

const Header = styled.header`
    width: 100%;
    height: 30px;
    position: fixed;
    background-color: #ffa;
    border-bottom: 1px solid #ccc;
    z-index: 3;
`;

const Content = styled.div`
    max-width: 1024px;
    margin: auto;
`

type Props = {
  children?: ReactNode
  title?: string
}

const Layout = ({ children, title = 'SeeBee' }: Props) => (

  <>
      <Head>
          <title>{title}</title>
          <meta charSet="utf-8" />
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      <Header>
          <Content>
              Header
          </Content>
      </Header>
      <div style={{ height: '50px' }} />

      <Content>
          {children}
      </Content>

      <footer>
          <Content>
              footer
          </Content>
      </footer>
  </>
)

export default Layout
