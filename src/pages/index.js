import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';

const features = [
  {
    title: 'Easy to Use',
    imageUrl: 'img/undraw_happy_announcement_ac67.svg',
    description: (
      <div className="card">
        <div className="card__footer">
          The core Whirl binary was designed to be easy and quick to install.
          All have to do is download (or build) the Whirl server binary,
          generate a config, and enjoy!
        </div>
        <div className="card__footer">
          <button className="button button--primary button--block disabled">
            Get Started
          </button>
        </div>
      </div>
    ),
  },
  {
    title: 'Customizable',
    imageUrl: 'img/undraw_personalization_triu.svg',
    description: (
      <div className="card">
        <div className="card__footer">
          Whirl provides simple and fast customizability, zero fiddling
          required! Want to be a host or an admin in-game? done!
          <br /><br />

          <b>YOU</b> rule <b>YOUR</b> server.
        </div>
        <div className="card__footer">
          <a href="/docs/whirl/configuration" target="_blank">
            <button className="button button--primary button--block">
              Explore Configuration Options
            </button>
          </a>
        </div>
      </div>
    ),
  },
  {
    title: 'Built to last',
    imageUrl: 'img/undraw_building_blocks_n0nc.svg',
    description: (
      <div className="card">
        <div className="card__footer">
          Much of Whirl has been built in <a href="https://www.rust-lang.org/">Rust</a>,
          a lightning fast, memory-safe, and maintainable modern language. Gone are the days
          of having to maintain legacy code or having to keep fixing bugs in
          software that wasn't written to be read, and it's all open-source!
        </div>
        <div className="card__footer">
          <a href="https://github.com/Whirlsplash/whirl" target="_blank">
            <button className="button button--primary button--block">
              View Source Code
            </button>
          </a>
        </div>
      </div>
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

export default function Home() {
  const context = useDocusaurusContext();
  const { siteConfig = {}, } = context;
  return (
    <Layout title={"Home"}>
      <header className={clsx('hero hero--primary', styles.heroBanner)}>
        <div className="container">
          <h1 className="hero__title">{siteConfig.title}</h1>
          <p className="hero__subtitle">{siteConfig.tagline}</p>

          <div>
            <a href="https://discord.com/invite/8hn6padWF6">
              <img
                src="https://img.shields.io/discord/821938182274154506?style=for-the-badge&logo=appveyor"
                alt="Discord" />
            </a>&nbsp;
            <a href="https://www.codefactor.io/repository/github/whirlsplash/whirl">
              <img
                src="https://www.codefactor.io/repository/github/whirlsplash/whirl/badge?style=for-the-badge&logo=appveyor"
                alt="CodeFactor" />
            </a>&nbsp;
            <a href="https://saythanks.io/to/fuwnzy@gmail.com">
              <img src="https://img.shields.io/badge/Say%20Thanks-!-1EAEDB.svg?style=for-the-badge&logo=appveyor" alt="Say Thanks" />
            </a>&nbsp;
            <a href="https://github.com/Whirlsplash/whirl/blob/master/LICENSE">
              <img
                src="https://img.shields.io/github/license/Whirlsplash/whirl?style=for-the-badge&logo=appveyor"
                alt="License" />
            </a>
          </div>

          {/* <div className={styles.buttons}>
            <Link className={
              clsx('button button--secondary button--lg', styles.getStarted)
            } to={useBaseUrl('docs/')}>Get Started</Link>
          </div> */}
        </div>
      </header>

      <main>
        {/* features && */ features.length > 0 && (
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
  )
}
