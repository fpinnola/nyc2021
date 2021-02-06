// import './App.css';
import styles from '../styles/Home.module.css'
import { Helmet } from 'react-helmet';
// import facebook from '/facebook';
// import twitter from '/twitter'
import { useEffect, useState } from 'react';
import { CandidateView, MobileCandidateView } from '../components/CandidateView';

import mixpanel from 'mixpanel-browser';
mixpanel.init('0fd31df1844e308889cfdca1d5a475b2');

const candidateStatic = [{"_id":"60188846a9bcf331867efe97","name":"Andrew Yang","imgURL":"https://cdn.ballotpedia.org/images/2/2b/Andrew_Yang.png","socials":{"twitterURL":"https://twitter.com/AndrewYang?s=20","facebookURL":"https://www.facebook.com/andrewyang2020/"},"description":"Entrepreneur"},{"_id":"60188b9ba9bcf331867efe98","name":"Scott Stringer","imgURL":"https://pbs.twimg.com/profile_images/1130583032501604353/DgPPpgdO.png","socials":{"twitterURL":"https://twitter.com/NYCComptroller","facebookURL":"https://www.facebook.com/scottstringernyc/"},"description":"City comptroller"},{"_id":"60188cd8a9bcf331867efe99","name":"Maya Wiley","imgURL":"https://static01.nyt.com/images/2020/07/28/nyregion/28wiley-1/28wiley-1-mediumSquareAt3X.jpg","description":"Social justice professor","socials":{"twitterURL":"https://twitter.com/mayawiley"}},{"_id":"6018bf94a9bcf331867efe9b","name":"Eric Adams","description":"Brooklyn borough president","imgURL":"https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Borough_President_Adams_.jpg/1200px-Borough_President_Adams_.jpg","socials":{"twitterURL":"https://twitter.com/ericadamsfornyc","facebookURL":"https://www.facebook.com/EricAdamsforNYC/"}},{"_id":"6018c05da9bcf331867efe9c","name":"Shaun Donovan","description":"Senior strategist at Harvard University","imgURL":"https://pyxis.nymag.com/v1/imgs/e7b/fa8/11a3df8227c8f418b83fe5444ad90c17a5-Shaun-Donovan.2x.rsquare.w570.jpg","socials":{"twitterURL":"https://twitter.com/ShaunDonovanNYC","facebookURL":"https://shaunfornyc.com/facebook"}},{"_id":"6018c13ea9bcf331867efe9d","name":"Kathryn Garcia","description":"NYC Sanitation commissioner","imgURL":"https://www.aiche.org/sites/default/files/images/bio/garcia_kathryn_pic.jpg","socials":{"twitterURL":"https://twitter.com/kgfornyc","facebookURL":"https://facebook.com/kgfornyc"}},{"_id":"6018c1c3a9bcf331867efe9e","name":"Ray McGuire","description":"Vice-chair of Citigroup","imgURL":"https://static01.nyt.com/images/2020/10/14/nyregion/00nycmayor-mcguire-HFO/00nycmayor-mcguire-HFO-mediumSquareAt3X.jpg","socials":{"twitterURL":"https://twitter.com/RayForMayor","facebookURL":"http://facebook.com/Ray4Mayor"}},{"_id":"6018c299a9bcf331867efe9f","name":"Loree Sutton","description":"NYC Veterans' Services commissioner","imgURL":"https://s3-prod.crainsnewyork.com/Sutton%20Loree%20HS.jpg.jpg","socials":{"twitterURL":"https://twitter.com/LoreeSuttonNYC","facebookURL":"https://www.facebook.com/LoreeSuttonNYC/"}},{"_id":"6018c349a9bcf331867efea0","name":"Carlos Menchaca","description":"City Council member","imgURL":"https://pbs.twimg.com/profile_images/1205211348155740160/pQE4a81H.jpg","socials":{"twitterURL":"https://twitter.com/cmenchaca","facebookURL":"https://www.facebook.com/NYCforCarlos"}},{"_id":"6018c3b8a9bcf331867efea1","name":"Dianne Morales","description":"CEO of Phipps Neighborhoods","imgURL":"https://images.squarespace-cdn.com/content/v1/5df123e63db16b06e400f6bd/1586617742696-S6JY6N7ZUBRK1FS07Z5O/ke17ZwdGBToddI8pDm48kL1WTyVgV0z6xJkXi4s5-qh7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QPOohDIaIeljMHgDF5CVlOqpeNLcJ80NK65_fV7S1UQqj9EYChfze1tWkRskLsA6TjAAAKzEfjCcmFNTgTbZioRwB-dUGsSquCnVTFQcaRg/Dianne%2BM-%2BHallie%2BEasley-8636.png?format=2500w","socials":{"twitterURL":"https://twitter.com/dianne4nyc","facebookURL":"https://www.facebook.com/dianne4nyc/"}}]

function HomeHeader() {
  return (
    <Helmet>
      <title>NYC 2021 Mayoral Race</title>
      <meta name="description" content="Explore the candidates running for NYC Mayor in 2021." />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" key="viewport" />
    </Helmet>
  )
}

function DesktopApp({ candidates }) {
  return (
    <div className={styles.container}>
      <HomeHeader />
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
      <HomeHeader />
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
  let [candidates, setCandidates] = useState(candidateStatic);

  useEffect(() => {
    if (process.env.NODE_ENV === 'production') mixpanel.track('Home Page Viewed');
  }, []);

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
    return <MobileApp candidates={candidates} />
  } else {
    return <DesktopApp candidates={candidates} />
  }
}

export default App;