import React from "react";

function About() {
  return (
    <div className="bg-brown flex flex-col justify-center items-center mobile:py-0 tablet:py-10 desktop:py-20">
      <section
        style={{
          background: "url('/hcc_banner.png')",
          backgroundSize: "cover",
        }}
        className="banner-image-section w-full tablet:w-10/12 desktop:w-11/12 tablet:rounded-lg mobile:rounded-none h-72 mobile:h-96 rounded-lg justify-center items-center flex"
      >
        <h1 className="font-bold text-7xl text-white">About Us</h1>
      </section>

      <section className="about-section bg-white tablet:w-9/12 w-full rounded-0 mobile:p-10 p-5 mobile:-translate-y-20 mobile:rounded-lg">
        <div className="about-description flex flex-col gap-3">
          <h3 className="text-orange tablet:text-3xl desktop:text-5xl text-center font-semibold">
            Our Story, so far
          </h3>
          <p className="text-sm tablet:text-sm desktop:text-lg text-justify font-light">
            From feeding over 200 children in Mathare to providing safe spaces
            for young minds, empowering the youth through skill development, and
            supporting elderly women in Migori, our impact resonates through
            transformative actions that span across generations.
          </p>
        </div>
        <div className="about-story flex flex-col gap-5 py-10">
          <h4 className="text-orange text-2xl desktop:text-3xl font-semibold">
            The Genesis
          </h4>
          <div className="flex flex-col-reverse tablet:flex-col desktop:flex-row gap-4 tablet:gap-2 mobile:gap-20">
            <img
              className="w-full mobile:w-5/12 tablet:w-full tablet:h-[25vh] rounded-md h-72 object-cover mobile:h-96"
              src="/story.png"
              alt=""
            />
            <p className="text-sm tablet:text-sm mobile:text-lg text-justify font-light">
              The journey started when Kelvin Otieno was in university. He had a
              habit of coming to Mathare frequently to give sweets to the
              children and play with them. On one particular day as he was doing
              the usual, a child approached him and asked him for food instead
              of sweets. This was very unusual to him, so he decided to visit
              the child’s home. Upon arriving, he found the mother, the sole
              breadwinner of the family,   very sick lying on the floor
              languishing in deep poverty as she could not afford to provide
              food for her family for two days. <br />
              <br />
              This experience touched Kelvin's heart to the core and this is
              where his passion to help the community was conceived. He realized
              that the problems he grew up with years ago in Mathare were still
              faced by children till date. Kelvin himself was born and brought
              up in Mathare slums and was not immune to challenges. He himself
              has been through a lot; going to bed hungry, insecurity in the
              area, violence, extreme poverty and lack, struggling to pay his
              own fees.
              <br />
              <br />
              With the little savings he had and help from friends in the
              university, he started a feeding program in 2017. He would prepare
              porridge and serve children to at least curb the hunger issues.
              That’s when Hope Compassion Center was born. So far more than 200
              children have benefitext-sm mobile:text-lg text-justify font-lightted
              from this program.
            </p>
          </div>
          <div className="flex flex-col-reverse desktop:flex-row-reverse gap-20 mobile:py-10">
            <img
              className="w-full tablet:w-full desktop:w-6/12 rounded-md h-52 desktop:h-3/4 object-cover"
              src="/fire.png"
              alt=""
            />
            <div className="flex flex-col gap-10 w-full desktop:w-6/12 items-start">
              <p className="text-sm desktop:text-lg text-justify font-light">
                Mathare slums suffer frequent mysterious fires which pose
                prevalent risk to properties and the lives of people, children
                being the most affected. On one of the occasions, 7 children
                were burnt in a span of 3 months. The basis of this is because
                there is no safe space where children can be left while parents
                go to search for the daily needs of the family. Some parents
                lock their children in the house. This poses a great risk for
                the children. This again became a burden for Kelvin and he was
                determined to do something about it.
              </p>
              <img
                className="w-full object-cover rounded-md h-52 mobile:h-96 "
                src="/vaccine.png"
                alt=""
              />
            </div>
          </div>

          <h4 className="text-orange text-2xl desktop:text-3xl font-semibold">
            More Help is Found
          </h4>
          <div className="flex flex-col desktop:flex-row  gap-20">
            <div className="flex w-full desktop:w-1/2 flex-col gap-5 items-start">
              <p className="text-sm desktop:text-lg text-justify font-light">
                In 2020, Kelvin met Sandra Van Dyke, a passionate philanthropist
                whose heart was in Africa. She sponsored the building of a safe
                space for kids, where we call it the kids hub; which consists of
                a daycare , and montessori education program for children aged
                between 9 months to 3 years. This center exists to provide a
                safe and secured place for children where they are well taken
                care of by a highly-trained and loving team.
              </p>
              <img
                className="w-full object-cover rounded-md h-52 desktop:h-96"
                src="/construction.png"
                alt=""
              />
            </div>
            <img
              className="w-full desktop:w-1/2 rounded-md h-52 desktop:h-96 object-cover"
              src="/vandyke.png"
              alt=""
            />
          </div>

          <h4 className="text-orange font-semibold pt-10 text-3xl">
            The Initiative Grows, and so does its Impact
          </h4>
          <div className="flex flex-col desktop:flex-row  gap-20">
            <p className="text-sm desktop:text-lg text-justify font-light">
              You will come to realize that the more you engage in community
              work, the more you identify the many gaps that need to be filled
              and that you are inspired to do even more and to transform the
              community at large. This urge has led us to aim at inspiring,
              empowering and transforming the community holistically; the
              youths, women, and the elderly in Migori.   <br />
              <br />
              Having recognized the need in the society, we were motivated to
              start a youth empowering initiative. This program brings together
              25 youths who meet every Thursday. With very few resources to
              survive in the city, and no skills at all has sabotaged our
              youths.  The delinquencies among the youth have contributed to
              stigma in the community. This hinders them from prospering and
              excelling in life. The project seeks to instill and ingrain the
              social norms and values in delinquent youth groups by developing a
              sense of responsibility and mindset shift in them.
            </p>
            <img
              className="w-full object-cover desktop:w-5/12 rounded-md h-72"
              src="/football.png"
              alt=""
            />
          </div>
          <div className="flex flex-col-reverse desktop:flex-row gap-3 desktop:gap-20">
            <img
              className="w-full object-cover desktop:w-5/12 rounded-md h-72"
              src="/farming.png"
              alt=""
            />
            <p className="text-sm desktop:text-lg text-justify font-light">
              Understanding, caring, and supporting the needs of the elderly is
              at the core of our values as well. In Migori we are supporting a
              group of more than 40 elderly women who had lost all hope in life
              and wished to die, due to hunger, oppression, and lack. We empower
              them through farming initiatives in the village. <br />
              <br />
              In Mathare we empower a group of more than 25 women to improve
              their livelihood through financial literacy training, savings and
              skills training. So far, they have been trained on liquid soap
              making, candle making, and jelly making.
            </p>
          </div>

          <h4 className="text-orange text-xl text-center desktop:text-start desktop:text-3xl font-semibold pt-10">
            Where we are now and where we aim to grow to
          </h4>
          <p className="text-sm desktop:text-lg text-justify font-light">
            Over the years we have fed more than 200 children through the
            feeding program The livelihood of the women has improved through the
            skills training, financial mentorship, and economic empowerment
            programs.  In six months, we have offered safe space for more than
            33 young children In six months, we have reached more than 25 youths
            through our youth empowerment initiative. We have empowered them
            through skills training, financial literacy training, mindset shift
            training, and offering them space to nurture their talents. Our
            youths are progressing well, and we managed to take one to school
            where he will be graduating in April 2024. Amongst them we have
            painters and artists who have excelled and through training and
            support they are able to make a living out of their talent. Through
            the years, more than 40 elderly women in the village have been
            supported through the feeding program and farming initiative in the
            village.
          </p>

          <div className="flex flex-col tablet:flex-row gap-10 desktop:gap-0 desktop:flex-row justify-between">
            <div className="flex flex-col w-full desktop:w-1/2 items-start justify-center">
              <img
                className="w-full desktop:w-11/12 rounded-md h-52 desktop:h-96 object-cover"
                src="/childcare.png"
                alt=""
              />
              <small>The Childcare Center, finally complete</small>
            </div>

            <div className="flex flex-col w-full desktop:w-1/2 items-start justify-center">
              <img
                className="w-full desktop:w-11/12 rounded-md h-52 desktop:h-96 object-cover"
                src="/partners.png"
                alt=""
              />
              <small>Some of our partners coming to visit</small>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
