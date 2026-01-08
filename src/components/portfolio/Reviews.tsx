import styles from './Reviews.module.css';

interface Review {
  src: string;
  alt: string;
  location: string;
  height: number;
  width: number;
}

// Reviews with their actual dimensions for proper sizing
const reviews: Review[] = [
  { src: '/imgs/review-imgs/Kerstin-patio-review-2.jpg', alt: 'Review from Kerstin about patio', location: 'Palo Alto', height: 1286, width: 1136 },
  { src: '/imgs/review-imgs/marsha-excluder-review.jpg', alt: 'Review from Marsha about excluder', location: 'Palo Alto', height: 992, width: 1126 },
  { src: '/imgs/review-imgs/sara-bike-area-review.jpg', alt: 'Review from Sara about bike area', location: 'Menlo Park', height: 788, width: 1144 },
  { src: '/imgs/review-imgs/yuet-fence-review.jpg', alt: 'Review from Yuet about fence', location: 'Palo Alto', height: 782, width: 1116 },
  { src: '/imgs/review-imgs/Kathy-projects-review.jpg', alt: 'Review from Kathy about projects', location: 'Palo Alto', height: 712, width: 1134 },
  { src: '/imgs/review-imgs/kerstin-patio-review-1.jpg', alt: 'Review from Kerstin about patio', location: 'Palo Alto', height: 656, width: 1126 },
  { src: '/imgs/review-imgs/michelle-gardenbox-review.jpg', alt: 'Review from Michelle about garden box', location: 'Palo Alto', height: 622, width: 1128 },
  { src: '/imgs/review-imgs/kaymarie-excluder-review.jpg', alt: 'Review from Kaymarie about excluder', location: 'Palo Alto', height: 588, width: 1132 },
  { src: '/imgs/review-imgs/leslie-fence-review.jpg', alt: 'Review from Leslie about fence', location: 'Palo Alto', height: 544, width: 1120 },
  { src: '/imgs/review-imgs/glenn-shed-review.jpg', alt: 'Review from Glenn about shed', location: 'Palo Alto', height: 502, width: 1120 },
  { src: '/imgs/review-imgs/peggy-gate-review.jpg', alt: 'Review from Peggy about gate', location: 'Palo Alto', height: 500, width: 1114 },
  { src: '/imgs/review-imgs/perry-library-review.jpg', alt: 'Review from Perry', location: 'Palo Alto', height: 464, width: 1134 },
  { src: '/imgs/review-imgs/ruthellen-gardenbox-review.jpg', alt: 'Review from Ruthellen about garden box', location: 'Palo Alto', height: 462, width: 1130 },
  { src: '/imgs/review-imgs/peggy-fence-review.jpg', alt: 'Review from Peggy about fence', location: 'Palo Alto', height: 460, width: 1134 },
  { src: '/imgs/review-imgs/karen-gate-review.jpg', alt: 'Review from Karen about gate', location: 'Palo Alto', height: 458, width: 1140 },
  { src: '/imgs/review-imgs/michelle-tables-review.jpg', alt: 'Review from Michelle about tables', location: 'Palo Alto', height: 426, width: 1134 },
  { src: '/imgs/review-imgs/suzi-review-library.jpg', alt: 'Review from Suzi', location: 'Palo Alto', height: 350, width: 1130 },
];

// Group reviews into columns - tall ones standalone, shorter ones stacked
function organizeIntoColumns(reviews: Review[]): (Review | [Review, Review])[] {
  const tall: Review[] = [];
  const stackable: Review[] = [];

  // Separate tall reviews (>700px) from stackable ones
  reviews.forEach(review => {
    if (review.height > 700) {
      tall.push(review);
    } else {
      stackable.push(review);
    }
  });

  // Sort stackable by height descending to pair tall-ish with short
  stackable.sort((a, b) => b.height - a.height);

  const columns: (Review | [Review, Review])[] = [];

  // Pair stackable reviews: one from start (taller), one from end (shorter)
  let left = 0;
  let right = stackable.length - 1;

  while (left < right) {
    columns.push([stackable[left], stackable[right]]);
    left++;
    right--;
  }

  // If odd number, the middle one goes as standalone
  if (left === right) {
    columns.push(stackable[left]);
  }

  // Interleave tall reviews throughout
  const result: (Review | [Review, Review])[] = [];
  let tallIndex = 0;
  let pairIndex = 0;

  // Distribute tall reviews evenly among paired columns
  const ratio = columns.length > 0 ? Math.ceil(columns.length / (tall.length + 1)) : 1;

  while (pairIndex < columns.length || tallIndex < tall.length) {
    // Add some paired columns
    for (let i = 0; i < ratio && pairIndex < columns.length; i++) {
      result.push(columns[pairIndex]);
      pairIndex++;
    }
    // Add a tall review
    if (tallIndex < tall.length) {
      result.push(tall[tallIndex]);
      tallIndex++;
    }
  }

  return result;
}

function ReviewCard({ review }: { review: Review }) {
  return (
    <div className={styles.reviewCard}>
      <img
        src={review.src}
        alt={review.alt}
        className={styles.reviewImage}
      />
      <span className={styles.locationBadge}>{review.location}</span>
    </div>
  );
}

export default function Reviews() {
  const columns = organizeIntoColumns(reviews);

  return (
    <div className={styles.reviews}>
      <h3 className={styles.reviewsTitle}>Client Reviews</h3>
      <p className={styles.scrollHint}>Scroll to explore reviews →</p>

      <div className={styles.carouselWrapper}>
        <div className={styles.carousel}>
          <div className={styles.cap} aria-hidden="true" />
          {columns.map((column, index) => (
            Array.isArray(column) ? (
              <div key={index} className={styles.stackedColumn}>
                <ReviewCard review={column[0]} />
                <ReviewCard review={column[1]} />
              </div>
            ) : (
              <div key={index} className={styles.singleColumn}>
                <ReviewCard review={column} />
              </div>
            )
          ))}
          <div className={styles.cap} aria-hidden="true" />
        </div>
      </div>
    </div>
  );
}
