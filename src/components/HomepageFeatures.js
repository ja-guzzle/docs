import React from 'react';
import styles from './HomepageFeatures.module.css';
import Link from '@docusaurus/Link';

const GetStartList = [
  {
    title: 'What is Guzzle',
    goto: "/Docs/introduction%20to%20guzzle",
    description: (
      <>
        Some of the very first questions a new user has are covered in this introduction.
        Some of the very first questions a new user has are covered in this introduction.
      </>
    ),
  },
  {
    title: 'Gettting Started Tutorial',
    goto: "/Docs/introduction%20to%20guzzle",
    description: (
      <>
        Some of the very first questions a new user has are covered in this introduction.
        Some of the very first questions a new user has are covered in this introduction.
      </>
    ),
  },
  {
    title: 'Guzzle docs',
    goto: "/Docs/introduction%20to%20guzzle",
    description: (
      <>
        Some of the very first questions a new user has are covered in this introduction.
        Some of the very first questions a new user has are covered in this introduction.
      </>
    ),
  },
];

const projects = [
  {
    title: 'Guzzle docs',
    goto: "/Docs/introduction%20to%20guzzle",
    description: (
      <>
        Some of the very first questions a new user has are covered in this introduction.
      </>
    ),
  },
  {
    title: 'How-tos',
    goto: "/Docs/introduction%20to%20guzzle",
    description: (
      <>
        Some of the very first questions a new user has are covered in this introduction.
      </>
    ),
  },
  {
    title: 'APIs',
    goto: "/Api/api",
    description: (
      <>
        Some of the very first questions a new user has are covered in this introduction.
      </>
    ),
  },
];

function InfoCard({title, description, goto}) {
  return (
    <div className="col col--4" style={{margin: `calc(2vh) auto`}}>
      <div className={styles.card}>
        <h2 style={{color: "white", fontWeight: "bold"}}>{title}</h2>
        <p>{description}</p>
        <Link
          className="button button--secondary button--lg"
          to={goto}
        >Learn more</Link>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container" style={{paddingLeft: "5%", paddingRight: "5%"}}>
        <h1>Get Started</h1>
        <p>If you’re new to Guzzle, explore Guzzle here : </p>
        <div className={`row`}>
          {GetStartList.map((props, index) => 
            <InfoCard key={index} {...props}/>
          )}
        </div>
        <div style={{marginTop: "5%"}}>
          <h1>Build your projects</h1>
          <p>If you peeked Guzzle, remember these resources! They’ll help you level up quickly. </p>
          <div className={`row`}>
            {projects.map((props, index) => 
              <InfoCard key={index} {...props}/>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
