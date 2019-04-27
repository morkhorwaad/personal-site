import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'

const AboutPage = () => (
    <Layout>
        <SEO title="About" keywords={[]} />

        <header className="page_header">
            <h1>A little about me</h1>
        </header>

        <p>This is the about page</p>
    </Layout>
)

export default AboutPage