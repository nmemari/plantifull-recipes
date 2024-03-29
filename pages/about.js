import Head from 'next/head'
import Image from 'next/image'
import styles from '@/styles/About.module.css'
import missionSprout from '@/public/logos/ourMission.svg'
import solutionSprout from '@/public/logos/ourSolution.svg'
import Navbar from '@/components/Navbar'
import Navid from '@/components/Navid'
import Thamasha from '@/components/Thamasha'
import Lauryn from '@/components/Lauryn'
import VeganDish1 from '@/public/pictures/vegan-Pho.jpeg'
import VeganDish2 from '@/public/pictures/vegan-salad.jpeg'
import Pescatarian from '@/public/pictures/pescatarian-option.jpeg'
import OvoVegetarian from '@/public/pictures/ovo-vegetarian-option.jpeg'
import LactoOvoVegetarian from '@/public/pictures/lacto-ovo-vegetarian-option.jpeg'
import Link from 'next/link'

export default function About() {
  return (
    <>
      <Head>
        <title>Our Team</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.svg" />
      </Head>
      <main className={styles.main}>
        <Navbar/>
        <div className={styles.container}>

          <h1 className={styles.header}>About Us</h1>

          <section className={styles.mission}>

            <h2 className={styles.subhead}>Our Mission</h2>

            <section className={styles.missionSprout}>
              <Image src={missionSprout} width={200} height={300}/>
            </section>

            <p className={styles.bodyCopy}>
              Here at Plantifull Recipes our goal is to help support and grow the Vegan and Vegetarian community. We believe in not only helping the planet but eating healthier in a funny and tasty manner! We hope that we can help encourage curious eaters to try our vegan and vegetarian recipes and break the stigma that plant based meals aren’t delicious or can’t make for a filling meal. 
            </p>

            <p className={styles.bodyCopy}>
              By cutting down on the amount of meat product we consume, we can also save millions of animals from being slaughtered every year in unethically practiced slaughter houses and farms.
            </p>

          </section>

       
          <section className={styles.solution}>

            <h2 className={styles.subhead}>Our Solution</h2>

            <section className={styles.solutionSprout}>
              <Image src={solutionSprout} width={250} height={350}/>
            </section>

            <p className={styles.bodyCopy}>
              When we asked ourselves what was stopping people from converting vegan or vegetarian diets, we found that a lot of people had misconceptions about vegan and vegetarianism. One of them being that, Vegan and Vegetarian food is limited in cuisine variety. 
            </p>

            <p className={styles.bodyCopy}>
              This is incorrect, and in order to prove that Vegan and Vegetarian dishes span a wide variety of cuisines, we researched recipes from around the world including from East Asia, South Asia, Europe and North America so that anyone can enjoy a recipe that suits their taste. 
            </p>

            <div className={styles.foodImages}>
              <Image  class={styles.veganDish1}src={VeganDish1} width={160} height={140}/>
              <Image className={styles.veganDish2} src={VeganDish2} width={160} height={140}/>
            </div>

            <p className={styles.bodyCopy}>
              The second other reason why people are reluctant to switch is due to them missing meat. This is not a problem! We know the transition from meat to a completely plant based diet isn’t an easy one and that not everyone has the same dietary needs.
            </p>

            <p className={styles.bodyCopy}>
              So we’ve included a wide range of recipes that cater to sub-groups of Vegetarianism including:
            </p>

            <div className={styles.pescatarianInfo}>
              <h2 className={styles.sectionhead}>Pescatarianism</h2>

              <Image class={styles.pescatarianImage} src={Pescatarian} width={350} height={200}/>

              <p className={styles.bodyCopy}>
                Pescatarian is a sub practice that incorporates fish and other seafood products into their diet. Pescetarians avoids red meats such as beef, poultry and pork. Additionally, according to research, this diet has proven to provide many health benefits including, reduced risk of diabetes and heart disease.
              </p>
            </div>

            <div className={styles.ovoVegetarianInfo}>
              <h2 className={styles.sectionhead}>Ovo Vegetarianism</h2>

              <Image className={styles.ovoImage} src={OvoVegetarian} width={350} height={200}/>

              <p className={styles.bodyCopy}>
                Ovo-Vegetarianism is a sub practice that incorporates eggs into their diet. All other animal by-products are excluded. In this way, Ovo-vegetarianism is similar to Veganism, which completely avoids animal by-products. Eggs are an “eggcellent” source of vitamin B and other healthy compounds.
              </p>
            </div>

            <div className={styles.LactoOvoVegetarianInfo}>
              <h2 className={styles.sectionhead}>Lacto Ovo Vegetarianism</h2>

              <Image className={styles.lactoImage} src={LactoOvoVegetarian} width={350} height={200}/>

              <p className={styles.bodyCopy}>
                Lacto Ovo Vegetarianism is an extension of Ovo Vegetarianism, in which all meat based products are excluded except animal by-products such as eggs and dairy. This type of diet is a great way of reducing animal meat consumption. Adopting this kind of diet is proven to reduce risk of cancer and support healthy weight loss. 
              </p>
            </div>

          </section>


          <section className={styles.team}>
            <h1 className={styles.subhead}>Our Team</h1>

            <div className={styles.teamCards}>
              <Navid/>
            </div>

            <div className={styles.teamCards}>
              <Thamasha/>
            </div>

            <div className={styles.teamCards}>
              <Lauryn/>
            </div>
          </section>
        </div>
        <Link className={styles.btn} href='home'>Back to Home</Link>
      </main>
    </>
  )
}


