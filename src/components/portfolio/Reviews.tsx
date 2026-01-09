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
  return (
    <div className={styles.reviews}>
      <h3 className={styles.reviewsTitle}>Homeowner reviews of Cal & Fynn</h3>
      <p className={styles.subtitle}>Some reviews are from landscaping clients, some from builds we've done together</p>

      <div className={styles.reviewsGrid}>
        {reviews.map((review, index) => (
          <ReviewCard key={index} review={review} />
        ))}
      </div>
    </div>
  );
}
