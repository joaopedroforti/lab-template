export default function Sobre() {
    return (
      <div className="container">
        <section style={styles.header}>
          <h1 style={styles.title}>Sobre o Laboratório Saúde+</h1>
          <p style={styles.subtitle}>
            Compromisso com excelência em diagnósticos laboratoriais desde 2010
          </p>
        </section>
  
        <section style={styles.content}>
          <div style={styles.textBlock}>
            <h2 style={styles.sectionTitle}>Nossa História</h2>
            <p style={styles.paragraph}>
              Fundado com o propósito de oferecer diagnósticos confiáveis e acessíveis,
              o Laboratório Saúde+ atua há mais de 14 anos atendendo pacientes com ética,
              precisão e responsabilidade.
            </p>
            <p style={styles.paragraph}>
              Iniciamos nossas atividades em Santa Bárbara d'Oeste com uma equipe pequena
              mas dedicada. Hoje, contamos com mais de 50 profissionais especializados e
              atendemos milhares de pacientes mensalmente.
            </p>
          </div>
  
          <div style={styles.statsGrid}>
            <div style={styles.statCard}>
              <div style={styles.statNumber}>14+</div>
              <div style={styles.statLabel}>Anos de Experiência</div>
            </div>
            <div style={styles.statCard}>
              <div style={styles.statNumber}>50+</div>
              <div style={styles.statLabel}>Profissionais</div>
            </div>
            <div style={styles.statCard}>
              <div style={styles.statNumber}>200+</div>
              <div style={styles.statLabel}>Tipos de Exames</div>
            </div>
            <div style={styles.statCard}>
              <div style={styles.statNumber}>15mil+</div>
              <div style={styles.statLabel}>Pacientes/Ano</div>
            </div>
          </div>
  
          <div style={styles.textBlock}>
            <h2 style={styles.sectionTitle}>Nossa Missão</h2>
            <p style={styles.paragraph}>
              Proporcionar serviços de análises clínicas com excelência técnica, agilidade
              e atendimento humanizado, contribuindo para a promoção da saúde e qualidade
              de vida da população.
            </p>
          </div>
  
          <div style={styles.textBlock}>
            <h2 style={styles.sectionTitle}>Nossos Valores</h2>
            <div style={styles.valuesList}>
              <div style={styles.valueItem}>
                <strong>🎯 Precisão:</strong> Resultados confiáveis através de rigoroso
                controle de qualidade
              </div>
              <div style={styles.valueItem}>
                <strong>⚡ Agilidade:</strong> Compromisso com prazos e entregas rápidas
              </div>
              <div style={styles.valueItem}>
                <strong>❤️ Humanização:</strong> Atendimento acolhedor e respeitoso
              </div>
              <div style={styles.valueItem}>
                <strong>🔬 Inovação:</strong> Investimento constante em tecnologia e capacitação
              </div>
              <div style={styles.valueItem}>
                <strong>✅ Ética:</strong> Transparência e responsabilidade em todos os processos
              </div>
            </div>
          </div>
  
          <div style={styles.textBlock}>
            <h2 style={styles.sectionTitle}>Infraestrutura</h2>
            <p style={styles.paragraph}>
              Nosso laboratório conta com instalações modernas, equipamentos de última geração
              e seguimos rigorosamente todas as normas da ANVISA e do Ministério da Saúde.
            </p>
            <p style={styles.paragraph}>
              Realizamos controle de qualidade diário e participamos de programas de proficiência
              nacionais e internacionais, garantindo a máxima confiabilidade dos resultados.
            </p>
          </div>
  
          <div style={styles.certifications}>
            <h3 style={styles.certTitle}>Certificações e Acreditações</h3>
            <div style={styles.certList}>
              <div style={styles.certBadge}>✓ Certificado ANVISA</div>
              <div style={styles.certBadge}>✓ Acreditação PALC</div>
              <div style={styles.certBadge}>✓ ISO 9001:2015</div>
              <div style={styles.certBadge}>✓ Vigilância Sanitária</div>
            </div>
          </div>
        </section>
      </div>
    )
  }
  
  const styles = {
    header: {
      textAlign: 'center' as const,
      marginBottom: '50px',
      padding: '40px 20px',
      background: 'linear-gradient(135deg, #3b82f6 0%, #2563eb 100%)',
      borderRadius: '15px',
      color: '#fff',
    },
    title: {
      fontSize: '2.5rem',
      marginBottom: '15px',
      fontWeight: '700',
    },
    subtitle: {
      fontSize: '1.2rem',
      opacity: 0.9,
    },
    content: {
      maxWidth: '900px',
      margin: '0 auto',
    },
    textBlock: {
      marginBottom: '40px',
    },
    sectionTitle: {
      fontSize: '1.8rem',
      marginBottom: '20px',
      color: '#1e293b',
      borderLeft: '4px solid #3b82f6',
      paddingLeft: '15px',
    },
    paragraph: {
      fontSize: '1.05rem',
      lineHeight: '1.8',
      color: '#475569',
      marginBottom: '15px',
    },
    statsGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
      gap: '20px',
      marginBottom: '50px',
    },
    statCard: {
      background: '#fff',
      padding: '30px 20px',
      borderRadius: '12px',
      textAlign: 'center' as const,
      boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
    },
    statNumber: {
      fontSize: '2.5rem',
      fontWeight: '700',
      color: '#3b82f6',
      marginBottom: '10px',
    },
    statLabel: {
      fontSize: '0.95rem',
      color: '#64748b',
      fontWeight: '500',
    },
    valuesList: {
      display: 'flex',
      flexDirection: 'column' as const,
      gap: '15px',
    },
    valueItem: {
      background: '#f8fafc',
      padding: '20px',
      borderRadius: '8px',
      fontSize: '1.05rem',
      lineHeight: '1.6',
      color: '#334155',
      borderLeft: '4px solid #3b82f6',
    },
    certifications: {
      background: '#f1f5f9',
      padding: '40px',
      borderRadius: '12px',
      marginTop: '30px',
    },
    certTitle: {
      fontSize: '1.5rem',
      marginBottom: '20px',
      color: '#1e293b',
      textAlign: 'center' as const,
    },
    certList: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
      gap: '15px',
    },
    certBadge: {
      background: '#fff',
      padding: '15px',
      borderRadius: '8px',
      textAlign: 'center' as const,
      fontWeight: '600',
      color: '#059669',
      border: '2px solid #10b981',
    },
  }