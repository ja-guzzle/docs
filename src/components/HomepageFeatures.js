import React from 'react';
import styles from './HomepageFeatures.module.css';
import Link from '@docusaurus/Link';

const GetStartList = [
  {
    title: 'What is Guzzle',
    goto: "/Docs/introduction/what%20is%20guzzle",
    description: (
      <>
        Some of the very first questions a new user has are covered in this introduction.
        Some of the very first questions a new user has are covered in this introduction.
      </>
    ),
  },
  {
    title: 'Gettting Started Tutorial',
    goto: "/Docs/introduction/what%20is%20guzzle",
    description: (
      <>
        Some of the very first questions a new user has are covered in this introduction.
        Some of the very first questions a new user has are covered in this introduction.
      </>
    ),
  },
  {
    title: 'Guzzle docs',
    goto: "/Docs/introduction/what%20is%20guzzle",
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
    goto: "/Docs/introduction/what%20is%20guzzle",
    description: (
      <>
        Some of the very first questions a new user has are covered in this introduction.
      </>
    ),
  },
  {
    title: 'How-tos',
    goto: "/Docs/How%20to%20guides/Administration/Environment%20config/Repository%20database",
    description: (
      <>
        Some of the very first questions a new user has are covered in this introduction.
      </>
    ),
  },
  {
    title: 'APIs',
    goto: "/api/api",
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
        <h3 style={{color: "white", fontWeight: "bold"}}>{title}</h3>
        <p>{description}</p>
        <Link
          className="button button--secondary button--md"
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
        <h1><b>Get Started</b></h1>
        <p>If you’re new to Guzzle, explore Guzzle here : </p>
        <div className={`row`}>
          {GetStartList.map((props, index) => 
            <InfoCard key={index} {...props}/>
          )}
        </div>
        <div style={{marginTop: "5%"}}>
          <h1><b>Build your projects</b></h1>
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
