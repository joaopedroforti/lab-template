import Link from 'next/link'

export default function Home() {
  return (
    <div className="container">
      {/* Hero Section */}
      <section style={styles.hero}>
        <h1 style={styles.heroTitle}>Bem-vindo ao Laboratório Saúde+</h1>
        <p style={styles.heroSubtitle}>
          Realizamos exames laboratoriais com tecnologia moderna,
          agilidade nos resultados e atendimento humanizado.
        </p>
        <Link href="/servicos" style={styles.ctaButton}>
          Conheça nossos serviços
        </Link>
      </section>

      {/* Diferenciais */}
      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>Nossos Diferenciais</h2>
        <div style={styles.cardGrid}>
          <div style={styles.card}>
            <div style={styles.icon}>⚡</div>
            <h3 style={styles.cardTitle}>Resultados Rápidos</h3>
            <p style={styles.cardText}>
              A maioria dos exames com resultado em até 24 horas
            </p>
          </div>

          <div style={styles.card}>
            <div style={styles.icon}>👨‍⚕️</div>
            <h3 style={styles.cardTitle}>Profissionais Qualificados</h3>
            <p style={styles.cardText}>
              Equipe especializada e experiente para seu atendimento
            </p>
          </div>

          <div style={styles.card}>
            <div style={styles.icon}>🔬</div>
            <h3 style={styles.cardTitle}>Tecnologia de Ponta</h3>
            <p style={styles.cardText}>
              Equipamentos modernos garantindo precisão nos diagnósticos
            </p>
          </div>

          <div style={styles.card}>
            <div style={styles.icon}>🏥</div>
            <h3 style={styles.cardTitle}>Ambiente Acolhedor</h3>
            <p style={styles.cardText}>
              Espaço confortável e seguro para todos os pacientes
            </p>
          </div>
        </div>
      </section>

      {/* Exames Populares */}
      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>Exames Mais Procurados</h2>
        <div style={styles.examGrid}>
          <div style={styles.examCard}>✓ Hemograma Completo</div>
          <div style={styles.examCard}>✓ Glicemia</div>
          <div style={styles.examCard}>✓ Colesterol Total e Frações</div>
          <div style={styles.examCard}>✓ TSH e T4 Livre</div>
          <div style={styles.examCard}>✓ Vitamina D</div>
          <div style={styles.examCard}>✓ PSA (Próstata)</div>
        </div>
        <div style={{ textAlign: 'center', marginTop: '30px' }}>
          <Link href="/servicos" style={styles.linkButton}>
            Ver todos os exames →
          </Link>
        </div>
      </section>

      {/* Call to Action */}
      <section style={styles.ctaSection}>
        <h2 style={styles.ctaTitle}>Agende seu exame agora</h2>
        <p style={styles.ctaText}>
          Entre em contato conosco e garanta sua saúde em dia
        </p>
        <Link href="/contato" style={styles.ctaButton}>
          Entrar em contato
        </Link>
      </section>
    </div>
  )
}

const styles = {
  hero: {
    textAlign: 'center' as const,
    padding: '60px 20px',
    background: 'linear-gradient(135deg, #3b82f6 0%, #2563eb 100%)',
    borderRadius: '15px',
    color: '#fff',
    marginBottom: '50px',
  },
  heroTitle: {
    fontSize: '2.5rem',
    marginBottom: '20px',
    fontWeight: '700',
  },
  heroSubtitle: {
    fontSize: '1.2rem',
    marginBottom: '30px',
    maxWidth: '700px',
    margin: '0 auto 30px',
    lineHeight: '1.6',
  },
  ctaButton: {
    display: 'inline-block',
    background: '#fff',
    color: '#2563eb',
    padding: '15px 40px',
    borderRadius: '30px',
    fontWeight: '600',
    fontSize: '1rem',
    transition: 'transform 0.3s ease',
    cursor: 'pointer',
  } as React.CSSProperties,
  section: {
    marginBottom: '60px',
  },
  sectionTitle: {
    fontSize: '2rem',
    marginBottom: '30px',
    textAlign: 'center' as const,
    color: '#1e293b',
  },
  cardGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
    gap: '25px',
  },
  card: {
    background: '#fff',
    padding: '30px',
    borderRadius: '12px',
    boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
    textAlign: 'center' as const,
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
  },
  icon: {
    fontSize: '3rem',
    marginBottom: '15px',
  },
  cardTitle: {
    fontSize: '1.2rem',
    marginBottom: '10px',
    color: '#1e293b',
  },
  cardText: {
    color: '#64748b',
    lineHeight: '1.6',
  },
  examGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
    gap: '15px',
  },
  examCard: {
    background: '#f8fafc',
    padding: '20px',
    borderRadius: '8px',
    border: '2px solid #e2e8f0',
    fontSize: '1rem',
    fontWeight: '500',
    color: '#334155',
  },
  linkButton: {
    color: '#2563eb',
    fontWeight: '600',
    fontSize: '1.1rem',
  },
  ctaSection: {
    textAlign: 'center' as const,
    padding: '50px 20px',
    background: '#f1f5f9',
    borderRadius: '15px',
  },
  ctaTitle: {
    fontSize: '2rem',
    marginBottom: '15px',
    color: '#1e293b',
  },
  ctaText: {
    fontSize: '1.1rem',
    color: '#64748b',
    marginBottom: '25px',
  },
}