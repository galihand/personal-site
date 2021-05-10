import Image from "next/image";
import Card from "../components/Card";
import Layout from "../components/Layout";
import styles from "../styles/Introduction.module.scss"

export default function Introduction() {
  return (
    <Layout>
      <div className={styles.profileContainer}>
        <Card>
          <div className={styles.profileContainer_body}>
            <div className={styles.profileContainer_body_left}>
              <h2 className={styles.profile_name}>Galih Andyan Anindita</h2>
              <div className={styles.profile_header}>
                <h4>Full Stack Developer at Lomlom Indonesia</h4>
                <h4>Industrial Trainer at Glints Academy</h4>
              </div>
              <div className={styles.profile_summary}>
                <h3 className={styles.profile_summary_title}>Summary</h3>
                <p className={styles.profile_summary_body}>
                  Hi there! You can call me Galih. Currently I'm working as a Full Stack Developer at Lomlom Indonesia
                  and I'm also have a part-time job in Glints Academy as an Industrial Trainer.
                  I'm decided to start career as a programmer in January 2020. Starting from taking the Back End Developer course
                  in Glints Academy intensive bootcamp and also I'm learning on my own to get more experiences.
                  And now I don't regret that decision, it has been an amazing journey in my life.
                  I'll always ready for the next stage of this journey!
                </p>
              </div>
            </div>
            <div className={styles.profileContainer_body_right}>
              <Image
                priority
                className={styles.profile_image}
                src="/images/photo_2021-01-26_14-08-28.jpg"
                width={96 + 96 + 96}
                height={128 + 128 + 128}
              // sizes="100w"
              // layout='responsive'
              />
            </div>
          </div>
        </Card>
      </div>
    </Layout>
  )
}
