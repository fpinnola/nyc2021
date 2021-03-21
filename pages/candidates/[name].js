import Layout from '../../components/layout'
import { useRouter } from 'next/router'
import { route } from 'next/dist/next-server/server/router'
import { useEffect, useState } from 'react'
import styles from '../../styles/Home.module.css'
import Socials from '../../components/Socials'


function PolicyView() {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', width: '100%' }}>
            <label style={{ color: '#007aff', fontSize: '1.60rem', fontWeight: 400}} >COVID-19 Response</label>
            <div style={{ display: 'flex', flexDirection: 'column', padding: '15px', backgroundColor: 'white', boxShadow: '0px 5px 5px rgba(126, 155, 200, 0.25)', width: '90%', borderRadius: 12 }}>
                <h4>hello</h4>
                <h4>hello</h4>
                <h4>hello</h4>
                <div style={{ width: '100%', display: 'flex', justifyContent: 'flex-end'}}>
                    <a>Full details</a>
                </div>
            </div>
        </div>

    )
}

export default function Post() {
    const [candidate, setCandidate] = useState(null)
    const router = useRouter()
    const { name } = router.query

    useEffect(() => {
        if (name != undefined) {
            fetch(`https://nyc2021backend.herokuapp.com/candidates/${name}`)
            .then((res) => res.json())
            .then((result) => setCandidate(result))
            .catch((err) => console.log(err))
        }
    }, [name])

    if (candidate != null && candidate != {}) {
        return (
            <div className={styles.container}>
                <main className={styles.main}>
                    <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
                        <div>
                            <div className={styles.imgZoom} >
                                <img src={candidate.imgURL} alt={candidate.name} />
                            </div>
                            <h1 className={styles.nameTitle}>{candidate.name}</h1>
                            <label className={styles.description}>{candidate.description}</label>
                            <Socials socials={candidate.socials} />
                        </div>
                        <label className={styles.description}>{candidate.bio}</label>
                    </div>
                    <div style={{ display: 'flex', width: '100%', justifyContent: 'center', marginTop: '15px'}}>
                        <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', width: '90%'}}>
                            <PolicyView />
                            <PolicyView />
                            <PolicyView />
                        </div>
                    </div>



                </main>

            </div>
        )
    }

    return <Layout>Loading...</Layout>
}