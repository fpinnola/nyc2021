export default function Socials({ socials }) {
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