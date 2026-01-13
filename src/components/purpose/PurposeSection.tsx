import styles from './Purpose.module.css';

export default function PurposeSection() {
  return (
    <section className={styles.about} id="purpose">
      <div className={styles.aboutContainer}>
        <h2 className="section-title">Our Purpose</h2>

        {/* Section 1: Heritage/Background Story */}
        <div className={styles.heritageSection}>
          <div className={styles.heritageImage}>
            <img
              src="/imgs/general-site-imgs/cal-fynn-tina-pottingstation.JPG"
              alt="Cal and Fynn working on a project"
            />
          </div>
          <div className={styles.heritageContent}>
            <p>My brother Fynn and I grew up in construction, working for established contractors, working for themselves as carpenters and masons during the summers, and countless hours in their grandfathers, fathers, and university workshops.</p>
          </div>
        </div>

        {/* Section 2: Core Principle Card */}
        <div className={styles.principleCard}>
          <p className={styles.principleText}>
            At the core of any successful project is a <strong className={styles.principleEmphasis}>thoughtful plan</strong> and a <strong className={styles.principleEmphasis}>committed executor</strong> whose skillset encompasses what is demanded in the plan.
          </p>
          <p className={styles.simpleStatement}>Simple enough.</p>
        </div>

        {/* Section 3: The Challenge Section */}
        <div className={styles.challengeSection}>
          <p className={styles.challengeIntro}>The only issue is that as projects grow more complex:</p>
          <div className={styles.challengeList}>
            <p><strong>Planning away deadly ambiguity</strong> becomes difficult,</p>
            <p><strong>Filtering through hundreds of material options</strong> for one you know you'll love for decades becomes tedious,</p>
            <p>And there's a <strong>sea of contractors with their own biases and self-preservation tactics</strong>—a nightmare that often leaves you with the best talker, not the best builder.</p>
          </div>
          <p className={styles.challengeDetail}>
            Not every design will work with your space, and not every contractor is right for every job.
            Ambiguity in plans is priced aggressively in construction, and selecting a contractor, negotiating fair terms,
            and managing the build can mean the difference between a seamless transformation and a drawn-out headache.
          </p>
        </div>

        {/* Section 4: Solution Highlight */}
        <div className={styles.solutionSection}>
          <p className={styles.solutionIntro}>
            It is obviously possible though—there are millions of 5 star reviews on Yelp for lots of great contractors. So how do you find them?
          </p>
          <div className={styles.solutionHighlight}>
            <p className={styles.solutionHeadline}>
              <strong>cf.design exists to eliminate both risks.</strong>
            </p>
            <p className={styles.solutionText}>
              We turn feelings and vibes into precise plans, then guide you through contractor selection
              and negotiation—so you get the outdoor space you envisioned, delivered properly, at a fair price.
            </p>
          </div>
        </div>
        <div className={styles.videoContainer}>
          <iframe
            src="https://www.youtube.com/embed/QG-UfcS7l3k?start=13"
            title="cf.design Landscape Design"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>

        {/* Meet the Team Section */}
        <div className={styles.teamSection}>
          <h3 className={styles.teamTitle}>Meet the Team</h3>

          <div className={styles.teamGrid}>
            {/* Cal */}
            <div className={styles.teamMember}>
              <div className={styles.memberImageWrapper}>
                <img
                  src="/imgs/general-site-imgs/cal-perry-irrigationbox.JPG"
                  alt="Cal working on an irrigation system"
                  className={styles.memberImage}
                />
              </div>
              <div className={styles.memberInfo}>
                <h4 className={styles.memberName}>Cal</h4>
                <p className={styles.memberRole}>Design & Project Management</p>
                <p className={styles.memberBio}>
                  Former Design Consultant at System Pavers, specializing in hardscaping, lighting, drainage, and outdoor structures.
                </p>
                <p className={styles.memberBio}>
                  Built relationships with quality local contractors and suppliers throughout the Bay Area.
                </p>
                <p className={styles.memberBio}>
                  Launched a carpentry business with Fynn, serving 40+ neighbors with fences, garden boxes, and decks.
                </p>
              </div>
            </div>

            {/* Fynn */}
            <div className={styles.teamMember}>
              <div className={styles.memberImageWrapper}>
                <img
                  src="/imgs/general-site-imgs/fynn-digging-ruthellen.jpg"
                  alt="Fynn on a job site"
                  className={styles.memberImage}
                />
              </div>
              <div className={styles.memberInfo}>
                <h4 className={styles.memberName}>Fynn</h4>
                <p className={styles.memberRole}>3D Design & Engineering</p>
                <p className={styles.memberBio}>
                  Mechanical Engineering student specializing in CAD and 3D modeling.
                </p>
                <p className={styles.memberBio}>
                  Ensures every design is buildable and practical before it leaves the drawing board.
                </p>
                <p className={styles.memberBio}>
                  Hands-on experience from a summer building fences, garden boxes, and decks for local clients.
                </p>
              </div>
            </div>
          </div>

          {/* Philosophy Callout */}
          <div className={styles.philosophyCallout}>
            <div className={styles.philosophyImage}>
              <img
                src="/imgs/cal-fynn-construction/cal-fynn-robin-deck.JPG"
                alt="Cal and Fynn on a completed deck project"
              />
            </div>
            <div className={styles.philosophyContent}>
              <h4 className={styles.philosophyHeadline}>No pressure. Just expertise.</h4>
              <p className={styles.philosophyText}>
                We don&apos;t expect you to sign over the future of your home&apos;s outdoor space on a whim.
              </p>
              <p className={styles.philosophyText}>
                We care deeply about every project we take on, and our hands-on experience in design and contractor management makes a free consultation genuinely valuable for anyone looking to transform their space.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
