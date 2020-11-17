import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';

const features = [
  {
    title: 'Joseph Paul',
    imageUrl: 'https://avatars3.githubusercontent.com/u/58673176?s=400&v=4',
    description: (
      <>Project Manager, Database Programmer, Application Programmer, Tester</>
    ),
  },
  {
    title: 'Zach Grimaldi',
    imageUrl: 'https://avatars3.githubusercontent.com/u/58673176?s=400&v=4',
    description: (
      <>GUI Programmer, Application Programmer</>
    ),
  },
  {
    title: 'Dominic Karras',
    imageUrl: 'https://avatars1.githubusercontent.com/u/69974367?s=460&v=4',
    description: (
      <>Document Specialist, Salesperson</>
    ),
  },
  {
    title: 'Faaris Ismail',
    imageUrl: 'https://avatars1.githubusercontent.com/u/63711786?s=400&v=4',
    description: (
      <>Document Specialist, GUI Programmer, Salesperson</>
    ),
  },
  {
    title: 'Mike Voit',
    imageUrl: 'https://avatars0.githubusercontent.com/u/43452279?s=400&v=4',
    description: (
      <>Database Programmer, Application Programmer, Tester</>
    ),
  },
];

function Feature({imageUrl, title, description}) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div className={clsx('col col--4', styles.feature)}>
      {imgUrl && (
        <div className="text--center">
          <img className={styles.featureImage} src={imgUrl} alt={title} />
        </div>
      )}
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

function Home() {
  const context = useDocusaurusContext();
  const {siteConfig = {}} = context;
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="A help site for our social networking app.">
      <header className={clsx('hero hero--primary', styles.heroBanner)}>
        <div className="container">
          <h1 className="hero__title">{siteConfig.title}</h1>
          <p className="hero__subtitle">{siteConfig.tagline}</p>
          <div className={styles.buttons}>
            <Link
              className={clsx(
                'button button--secondary button--lg',
                styles.getStarted,
              )}
              to={useBaseUrl('docs/')}>
              Get Started
            </Link>
          </div>
        </div>
      </header>
      <main>
        {features && features.length > 0 && (
          <section className={styles.features}>
            <div className="container">
              <div className="row">
                {features.map((props, idx) => (
                  <Feature key={idx} {...props} />
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
    </Layout>
  );
}

export default Home;
