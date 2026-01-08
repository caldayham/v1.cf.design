import styles from './Purpose.module.css';

export default function PurposeSection() {
  return (
    <section className={styles.about} id="purpose">
      <div className={styles.aboutContainer}>
        <h2 className="section-title">Our Purpose</h2>
        <p className={styles.aboutText}>
          Not every design will work with your space, and not every contractor is right for every job.
          Ambiguity in plans is priced aggressively in construction, and selecting a contractor, negotiating fair terms,
          and managing the build can mean the difference between a seamless transformation and a drawn-out headache.
        </p>
        <p className={`${styles.aboutText} ${styles.aboutHighlight}`}>
          <strong>cf.design exists to eliminate both risks.</strong>
          <br />
          We turn feelings and vibes into precise plans, then guide you through contractor selection
          and negotiation—so you get the outdoor space you envisioned, delivered properly, at a fair price.
        </p>
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
