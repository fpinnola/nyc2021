import styles from '../styles/Home.module.css'
import Link from 'next/link'
import Socials from './Socials'

function CandidateView({ candidate }) {
    return (
      <div style={{display: 'flex', flexDirection: 'column', padding: 15, alignItems: 'center', backgroundColor: "white", width: '100%', justifyContent: 'center', boxShadow: '0px 4px 8px rgba(0,0,0,0.25)', borderRadius: 12}}>
        <div className={styles.imgZoom} >
          <img src={candidate.imgURL} alt={candidate.name} />
        </div>
        <div style={{flexDirection: 'column', display: 'flex' , alignItems: 'center'}}>
          <label className={styles.nameTitle}>{candidate.name}</label>
          <label className={styles.description}>{candidate.description}</label>
          <Link href={`/candidates/${candidate._id}`}>
              <a>
                <label className={styles.link}>See Full Profile</label>
              </a>
          </Link>
        </div>
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
            <Link href={{ pathname: `/candidates/${candidate.name}`}}>
              <a itemProp={candidate}>
                <label className={styles.link}>See Full Profile</label>
              </a>
          </Link>
            {/* <Socials socials={candidate.socials} /> */}
          </div>
      </div>
    )
  }

  export { CandidateView, MobileCandidateView };