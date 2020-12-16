import Layout from '../components/Layout'
import React from "react";
import List from "../components/List";

const missions: any[] = []

const IndexPage = () => (
  <Layout>
      <h1>Missions</h1>
      <List items={missions} />
  </Layout>
)

export default IndexPage
