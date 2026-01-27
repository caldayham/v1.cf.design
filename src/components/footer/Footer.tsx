'use client';

export default function Footer() {
  return (
    <footer style={{
      padding: '2rem',
      textAlign: 'center',
      borderTop: '1px solid #e5e5e5',
      marginTop: '2rem',
      color: '#666',
      fontSize: '0.9rem',
    }}>
      <p>
        © 2026 Cal and Fynn Design Services —{' '}
        <a
          href="mailto:info@cf.design"
          style={{ color: '#666', textDecoration: 'underline' }}
        >
          info@cf.design
        </a>
      </p>
    </footer>
  );
}
