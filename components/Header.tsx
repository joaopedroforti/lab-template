import Link from 'next/link'
import Image from 'next/image'

export default function Header() {
  return (
    <header style={styles.header}>
      <div style={styles.container}>
        <div style={styles.logoContainer}>
          <Image 
            src="/images/logo.png" 
            alt="Laboratório Saúde+" 
            width={50} 
            height={50}
            style={styles.logoImage}
          />
          <strong style={styles.logoText}>Laboratório Saúde+</strong>
        </div>

        <nav style={styles.nav}>
          <Link href="/" style={styles.link}>Início</Link>
          <Link href="/sobre" style={styles.link}>Sobre</Link>
          <Link href="/servicos" style={styles.link}>Serviços</Link>
          <Link href="/contato" style={styles.link}>Contato</Link>
        </nav>
      </div>
    </header>
  )
}

const styles = {
  header: {
    background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)',
    color: '#fff',
    padding: '20px 0',
    boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
  },
  container: {
    maxWidth: '1100px',
    margin: '0 auto',
    padding: '0 20px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  logoContainer: {
    display: 'flex',
    alignItems: 'center',
    gap: '15px',
  },
  logoImage: {
    borderRadius: '8px',
  },
  logoText: {
    fontSize: '1.3rem',
    fontWeight: '600',
  },
  nav: {
    display: 'flex',
    gap: '30px',
  },
  link: {
    transition: 'color 0.3s ease',
    fontWeight: '500',
  } as React.CSSProperties,
}