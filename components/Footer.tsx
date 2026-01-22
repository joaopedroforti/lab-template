export default function Footer() {
  return (
    <footer style={styles.footer}>
      <div style={styles.container}>
        <div style={styles.section}>
          <h3 style={styles.title}>Laboratório Saúde+</h3>
          <p style={styles.text}>
            Exames laboratoriais com precisão, tecnologia e humanização.
          </p>
        </div>

        <div style={styles.section}>
          <h4 style={styles.subtitle}>Contato</h4>
          <p style={styles.text}>📞 (19) 3455-0000</p>
          <p style={styles.text}>📧 contato@labsaudemais.com.br</p>
          <p style={styles.text}>📍 Santa Bárbara d'Oeste - SP</p>
        </div>

        <div style={styles.section}>
          <h4 style={styles.subtitle}>Horário de Atendimento</h4>
          <p style={styles.text}>Segunda a Sexta: 7h às 18h</p>
          <p style={styles.text}>Sábado: 7h às 12h</p>
        </div>
      </div>

      <div style={styles.copyright}>
        <p>© {new Date().getFullYear()} Laboratório Saúde+. Todos os direitos reservados.</p>
      </div>
    </footer>
  )
}

const styles = {
  footer: {
    background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)',
    color: '#fff',
    paddingTop: '40px',
  },
  container: {
    maxWidth: '1100px',
    margin: '0 auto',
    padding: '0 20px',
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
    gap: '30px',
    paddingBottom: '30px',
  },
  section: {
    lineHeight: '1.8',
  },
  title: {
    fontSize: '1.2rem',
    marginBottom: '10px',
    fontWeight: '600',
  },
  subtitle: {
    fontSize: '1rem',
    marginBottom: '10px',
    fontWeight: '600',
    color: '#60a5fa',
  },
  text: {
    fontSize: '0.9rem',
    color: '#cbd5e1',
    marginBottom: '5px',
  },
  copyright: {
    textAlign: 'center' as const,
    padding: '20px',
    borderTop: '1px solid rgba(255,255,255,0.1)',
    fontSize: '0.85rem',
    color: '#94a3b8',
  },
}