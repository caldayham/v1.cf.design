import styles from './Reviews.module.css';

interface Review {
  src: string;
  alt: string;
  location: string;
  height: number;
  width: number;
}

// Reviews using mobile-optimized images
const reviews: Review[] = [
  { src: '/imgs/mobile-review-imgs/Kerstin-S-nextdoor-review-2.jpg', alt: 'Review from Kerstin about patio', location: 'Palo Alto', height: 1286, width: 1136 },
  { src: '/imgs/mobile-review-imgs/Kathy-L-nextdoor-review.jpg', alt: 'Review from Kathy about projects', location: 'Palo Alto', height: 712, width: 1134 },
  { src: '/imgs/mobile-review-imgs/Kerstin-S-nextdoor-review-1.jpg', alt: 'Review from Kerstin about patio', location: 'Palo Alto', height: 656, width: 1126 },
  { src: '/imgs/mobile-review-imgs/Staci-MF-nextdoor-review.jpg', alt: 'Review from Staci', location: 'Palo Alto', height: 588, width: 1132 },
  { src: '/imgs/mobile-review-imgs/Sara-F-nextdoor-review.jpg', alt: 'Review from Sara about bike area', location: 'Menlo Park', height: 788, width: 1144 },
  { src: '/imgs/mobile-review-imgs/Marsha-D-nextdoor-review.jpg', alt: 'Review from Marsha about excluder', location: 'Palo Alto', height: 992, width: 1126 },
  { src: '/imgs/mobile-review-imgs/Yuet-B-nextdoor-review.jpg', alt: 'Review from Yuet about fence', location: 'Palo Alto', height: 782, width: 1116 },
  { src: '/imgs/mobile-review-imgs/Leslie-M-nextdoor-review.jpg', alt: 'Review from Leslie about fence', location: 'Palo Alto', height: 544, width: 1120 },
  { src: '/imgs/mobile-review-imgs/Michelle-DB-nextdoor-review.jpg', alt: 'Review from Michelle about garden box', location: 'Palo Alto', height: 622, width: 1128 },
  { src: '/imgs/mobile-review-imgs/Glenn-F-nextdoor-review.jpg', alt: 'Review from Glenn about shed', location: 'Palo Alto', height: 502, width: 1120 },
  { src: '/imgs/mobile-review-imgs/Peggy-nextdoor-review-1.jpg', alt: 'Review from Peggy about gate', location: 'Palo Alto', height: 500, width: 1114 },
  { src: '/imgs/mobile-review-imgs/Perry-R-nextdoor-review.jpg', alt: 'Review from Perry', location: 'Palo Alto', height: 464, width: 1134 },
  { src: '/imgs/mobile-review-imgs/Ruthellen-D-nextdoor-review.jpg', alt: 'Review from Ruthellen about garden box', location: 'Palo Alto', height: 462, width: 1130 },
  { src: '/imgs/mobile-review-imgs/Peggy-H-nextdoor-review-2.jpg', alt: 'Review from Peggy about fence', location: 'Palo Alto', height: 460, width: 1134 },
  { src: '/imgs/mobile-review-imgs/Karen-L-nextdoor-review.jpg', alt: 'Review from Karen about gate', location: 'Palo Alto', height: 458, width: 1140 },
  { src: '/imgs/mobile-review-imgs/Michele-K-nextdoor-review.jpg', alt: 'Review from Michele about tables', location: 'Palo Alto', height: 426, width: 1134 },
  { src: '/imgs/mobile-review-imgs/Suzi-L-nextdoor-review.jpg', alt: 'Review from Suzi', location: 'Palo Alto', height: 350, width: 1130 },
];

function ReviewCard({ review }: { review: Review }) {
  return (
    <div className={styles.reviewCard}>
      <img
        src={review.src}
        alt={review.alt}
        className={styles.reviewImage}
      />
    </div>
  );
}

export default function Reviews() {
  return (
    <div className={styles.reviews}>
      <h3 className={styles.reviewsTitle}>Homeowner reviews of Cal & Fynn</h3>
      <p className={styles.subtitle}></p>
      <p className={styles.subtitle}>Some reviews are from landscaping clients, some are from our carpentry business. <br/>
      This section is less about landscaping and more that Cal & Fynn are committed to excelent communication and final results.</p>

      <div className={styles.reviewsGrid}>
        {reviews.map((review, index) => (
          <ReviewCard key={index} review={review} />
        ))}
      </div>
    </div>
  );
}
