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
          <strong>Baystone exists to eliminate both risks.</strong>
          <br />
          We turn feelings and vibes into precise plans, then guide you through contractor selection
          and negotiation—so you get the outdoor space you envisioned, delivered properly, at a fair price.
        </p>
        <div className={styles.videoContainer}>
          <iframe
            src="https://www.youtube.com/embed/QG-UfcS7l3k?start=13"
            title="Baystone Landscape Design"
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
                  24 years old, Sc.B. in Cell Biology from UMN, raised in Palo Alto. Cal is driven by systems thinking,
                  functional design, and precise craftsmanship. He thrives on building genuine connections with clients
                  and bringing their visions to life.
                </p>
                <p className={styles.memberBio}>
                  In 2024–2025, Cal worked as a Design Consultant at System Pavers, where he was immersed in hardscaping,
                  lighting, drainage, decking, pergolas, and outdoor kitchens—building relationships with quality local
                  contractors and material suppliers along the way. He was drawn to landscaping for its faster pace than
                  home construction, the massive breadth of design possibilities, and the opportunity to work outdoors
                  meeting great people.
                </p>
                <p className={styles.memberBio}>
                  Over the summer, he and Fynn launched a local carpentry business, serving 40+ neighbors with fences,
                  garden boxes, and small decks—getting their hands dirty and mastering the design-to-build process firsthand.
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
                  20 years old, studying Mechanical Engineering. Like Cal, Fynn grew up in a workshop and developed
                  an early passion for building things that work. He specializes in CAD design and 3D printing,
                  taking on much of the team&apos;s 3D modeling work.
                </p>
                <p className={styles.memberBio}>
                  Fynn brings a highly functional, pragmatic viewpoint to every design session—ensuring that creative
                  ideas translate into buildable, practical solutions. His engineering mindset helps the team anticipate
                  challenges before they become problems on site.
                </p>
              </div>
            </div>
          </div>

          {/* Philosophy */}
          <div className={styles.teamPhilosophy}>
            <p>
              Cal and Fynn don&apos;t expect you to sign over the future of your Bay Area home&apos;s outdoor aesthetics on a whim.
              This site exists to communicate two things: the brothers care deeply about every project they engage in,
              and they have lived experience in design and contractor management that makes a free consultation genuinely
              valuable for anyone looking to revamp their space.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
