import styles from '../styles/Home.module.css'

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

  export { CandidateView, MobileCandidateView };