// import './App.css';
import styles from '../styles/Home.module.css'
import { Helmet } from 'react-helmet';
// import facebook from '/facebook';
// import twitter from '/twitter'
import { useEffect, useState } from 'react';

function CandidateView({ candidate }) {
  return (
    <div style={{display: 'flex', flexDirection: 'row', padding: 7.5, alignItems: 'flex-start'}}>
      <div className={styles.imgZoom} >
        <img src={candidate.imgURL} alt={candidate.name} />
      </div>
      <div style={{flexDirection: 'column', display: 'flex' , alignItems: 'flex-start'}}>
        <label className={styles.nameTitle}>{candidate.name}</label>
        <label className={styles.description}>{candidate.description}</label>
      </div>
      <Socials socials={candidate.socials} />
    </div>
  )
}

function MobileCandidateView({ candidate }) {
  return (
    <div style={{flexDirection: 'column', display: 'flex' , alignItems: 'center', marginBottom: 15}}>
      <div style={{display: 'flex', flexDirection: 'row', padding: 7.5, alignItems: 'center'}}>
        <div className={styles.imgZoom} >
          <img src={candidate.imgURL} alt={candidate.name} />
        </div>
      </div>
        <div style={{flexDirection:'column', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
          <label className={styles.nameTitle}>{candidate.name}</label>
          <label className={styles.description}>{candidate.description}</label>
          <Socials socials={candidate.socials} />
        </div>
    </div>
  )
}

function Socials({ socials }) {
  return (
    <div>
      {
      socials.twitterURL !== undefined ?
       (<a href={socials.twitterURL} target="_blank" rel="noopener noreferrer">
        <img alt="twitter icon" style={{ width: 24, height: 24, marginLeft: 5 }} src="/twitter.png"/>
       </a>)  : null
      }
      {
      socials.facebookURL !== undefined ?
       (<a href={socials.facebookURL} target="_blank" rel="noopener noreferrer">
        <img alt="facebook icon" style={{ width: 24, height: 24, marginLeft: 5 }} src="/facebook.png"/>
       </a>)  : null
      }
    </div>
  )
}

function DesktopApp({ candidates }) {
  return (
    <div className={styles.container}>
      <Helmet>
        <title>NYC 2021</title>
      </Helmet>
      <main className={styles.main}>
        <h1>NYC 2021 Mayoral Election</h1>
        <label className={styles.description} style={{ fontSize: '1.5rem' }}>Candidates</label>
        {candidates.map((c) => <CandidateView key={c._id} candidate={c} /> )}
      </main>
      <footer className={styles.footer}>
        <label className={styles.footerText}>Built by Frank Pinnola</label>
      </footer>
    </div>
  );
}

function MobileApp({ candidates }) {
  return (
    <div className={styles.container}>
      <Helmet>
        <title>NYC 2021</title>
      </Helmet>
      <main className={styles.mainMobile}>
        <h1>NYC 2021 Mayoral Election</h1>
        <label className={styles.description} style={{ fontSize: '1.5rem' }}>Candidates</label>
        {candidates.map((c) => <MobileCandidateView key={c._id} candidate={c} /> )}
      </main>
      <footer className={styles.footer}>
        <label className={styles.footerText}>Built by Frank Pinnola</label>
      </footer>
    </div>
  );
}


function App() {
  const [width, setWidth] = useState(1000);
  const breakpoint = 620;
  let [candidates, setCandidates] = useState([]);

  useEffect(() => {
    setWidth(window.innerWidth);
    const handleWindowResize = () => setWidth(window.innerWidth)
    window.addEventListener("resize", handleWindowResize);

    //Remove event listener on cleanup
    return () => window.removeEventListener("resize", handleWindowResize);
  }, []);

  useEffect(() => {
    fetch('https://nyc2021backend.herokuapp.com/candidates')
    .then(res => res.json())
    .then(
      (result) => {
        setCandidates(result);

      }
    )
  }, [])
  if (width < breakpoint) {
    console.log('Mobile')
    return <MobileApp candidates={candidates} />
  } else {
    console.log('Desktop')
    return <DesktopApp candidates={candidates} />
  }

  // return (
  //   <div className={styles.container}>
  //     <Helmet>
  //       <title>NYC 2021</title>
  //     </Helmet>
  //     <main className={styles.main}>
  //       <h1>NYC 2021 Mayoral Election</h1>
  //       <label className={styles.description} style={{ fontSize: '1.5rem' }}>Candidates</label>
  //       {candidates.map((c) => <CandidateView key={c._id} candidate={c} /> )}
  //     </main>
  //     <footer className={styles.footer}>
  //       <label className={styles.footerText}>Built by Frank Pinnola</label>
  //     </footer>
  //   </div>
  // );
}

export default App;







// import Head from 'next/head'
// import Image from 'next/image'

// const candidates = [
//   {key: 0, name: "Andrew Yang", imgURL: "https://s.yimg.com/ny/api/res/1.2/eQM9HMC4Rz9SkPLKcFfRYw--/YXBwaWQ9aGlnaGxhbmRlcjt3PTk2MDtoPTY0MC4zMTI1/https://s.yimg.com/os/creatr-uploaded-images/2021-01/9fef20a0-5685-11eb-bf9f-7d3348ab25a2"},
//   {key: 1, name: "Scott Stringer", imgURL: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/NLN_Scott_Stringer.jpg/440px-NLN_Scott_Stringer.jpg"},
//   {key: 2, name: "Maya Wiley", imageURL: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/Maya_Wiley_2.jpg/440px-Maya_Wiley_2.jpg"}


// ]

// const candidatesList = candidates.map((c) => {
//     return (
//       <div className={styles.item}>
//         <div style={{ height: 48, width: 48, overflow: "hidden", borderRadius: 24, backgroundColor: "red", justifyContent: 'center', alignItems: "center" }}>
//         </div>
//         <label>{c.name}</label>
//       </div>
//     )
// })

// export default function Home() {
//   return (
//     <div className={styles.container}>
//       <Head>
//         <title>NYC 2021</title>
//         <link rel="icon" href="/favicon.ico" />
//       </Head>

//       <main className={styles.main}>
//         <h1 className={styles.title}>
//           2021 NYC Mayorial Election
//         </h1>
//         <ul>{candidatesList}</ul>

//         <div className={styles.grid}>
//           <a href="https://nextjs.org/docs" className={styles.card}>
//             <h3>Documentation &rarr;</h3>
//             <p>Find in-depth information about Next.js features and API.</p>
//           </a>

//           <a href="https://nextjs.org/learn" className={styles.card}>
//             <h3>Learn &rarr;</h3>
//             <p>Learn about Next.js in an interactive course with quizzes!</p>
//           </a>

//           <a
//             href="https://github.com/vercel/next.js/tree/master/examples"
//             className={styles.card}
//           >
//             <h3>Examples &rarr;</h3>
//             <p>Discover and deploy boilerplate example Next.js projects.</p>
//           </a>

//           <a
//             href="https://vercel.com/import?filter=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
//             className={styles.card}
//           >
//             <h3>Deploy &rarr;</h3>
//             <p>
//               Instantly deploy your Next.js site to a public URL with Vercel.
//             </p>
//           </a>
//         </div>
//       </main>

//       <footer className={styles.footer}>
//         <label>Built by Frank Pinnola</label>
//       </footer>
//     </div>
//   )
// }
