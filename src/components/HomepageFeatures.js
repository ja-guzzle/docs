import React from 'react';
import styles from './HomepageFeatures.module.css';
import Link from '@docusaurus/Link';

const GetStartList = [
  {
    title: 'What is Guzzle',
    goto: "/Docs/introduction/overview",
    description: (
      <>
        Some of the very first questions you may have on Guzzle are covered in this introduction. 
      </>
    ),
  },
  {
    title: 'Gettting Started Tutorial',
    goto: "/docs/Tutorials/overview",
    description: (
      <>
        The tuorials are designed to provide end to end steps of designing and running a data pipeline.
      </>
    ),
  },
  {
    title: 'How-tos',
    goto: "/Docs/how_to_guides/ingest_data/working_with_delimited_files",
    description: (
      <>
        The detail How To Guides provides deep dive on individual features and configurations
      </>
    ),
  },
];

const projects = [
  {
    title: 'Guzzle docs',
    goto: "/Docs/introduction/overview",
    description: (
      <>
        Some of the very first questions a new user has are covered in this introduction.
      </>
    ),
  },
  {
    title: 'How-tos',
    goto: "/Docs/how_to_guides/administration/environment_config/repository_database",
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
      </div>
    </section>
  );
}
