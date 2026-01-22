export default function Servicos() {
    return (
      <div className="container">
        <section style={styles.header}>
          <h1 style={styles.title}>Nossos Serviços</h1>
          <p style={styles.subtitle}>
            Ampla gama de exames laboratoriais para cuidar da sua saúde
          </p>
        </section>
  
        {/* Análises Clínicas */}
        <section style={styles.section}>
          <h2 style={styles.categoryTitle}>
            <span style={styles.categoryIcon}>🔬</span>
            Análises Clínicas
          </h2>
          <div style={styles.serviceGrid}>
            <div style={styles.serviceCard}>Hemograma Completo</div>
            <div style={styles.serviceCard}>Glicemia de Jejum</div>
            <div style={styles.serviceCard}>Hemoglobina Glicada</div>
            <div style={styles.serviceCard}>Ureia e Creatinina</div>
            <div style={styles.serviceCard}>Ácido Úrico</div>
            <div style={styles.serviceCard}>TGO e TGP</div>
          </div>
        </section>
  
        {/* Exames Hormonais */}
        <section style={styles.section}>
          <h2 style={styles.categoryTitle}>
            <span style={styles.categoryIcon}>⚗️</span>
            Exames Hormonais
          </h2>
          <div style={styles.serviceGrid}>
            <div style={styles.serviceCard}>TSH e T4 Livre (Tireoide)</div>
            <div style={styles.serviceCard}>Testosterona Total e Livre</div>
            <div style={styles.serviceCard}>Estradiol</div>
            <div style={styles.serviceCard}>Progesterona</div>
            <div style={styles.serviceCard}>Prolactina</div>
            <div style={styles.serviceCard}>Cortisol</div>
          </div>
        </section>
  
        {/* Perfil Lipídico */}
        <section style={styles.section}>
          <h2 style={styles.categoryTitle}>
            <span style={styles.categoryIcon}>❤️</span>
            Perfil Lipídico (Colesterol)
          </h2>
          <div style={styles.serviceGrid}>
            <div style={styles.serviceCard}>Colesterol Total</div>
            <div style={styles.serviceCard}>HDL (Colesterol Bom)</div>
            <div style={styles.serviceCard}>LDL (Colesterol Ruim)</div>
            <div style={styles.serviceCard}>VLDL</div>
            <div style={styles.serviceCard}>Triglicerídeos</div>
          </div>
        </section>
  
        {/* Marcadores Tumorais */}
        <section style={styles.section}>
          <h2 style={styles.categoryTitle}>
            <span style={styles.categoryIcon}>🎗️</span>
            Marcadores Tumorais
          </h2>
          <div style={styles.serviceGrid}>
            <div style={styles.serviceCard}>PSA Total e Livre (Próstata)</div>
            <div style={styles.serviceCard}>CA 125 (Ovário)</div>
            <div style={styles.serviceCard}>CA 15-3 (Mama)</div>
            <div style={styles.serviceCard}>CEA</div>
            <div style={styles.serviceCard}>CA 19-9</div>
            <div style={styles.serviceCard}>AFP (Alfafetoproteína)</div>
          </div>
        </section>
  
        {/* Vitaminas e Minerais */}
        <section style={styles.section}>
          <h2 style={styles.categoryTitle}>
            <span style={styles.categoryIcon}>💊</span>
            Vitaminas e Minerais
          </h2>
          <div style={styles.serviceGrid}>
            <div style={styles.serviceCard}>Vitamina D</div>
            <div style={styles.serviceCard}>Vitamina B12</div>
            <div style={styles.serviceCard}>Ácido Fólico</div>
            <div style={styles.serviceCard}>Ferro Sérico</div>
            <div style={styles.serviceCard}>Ferritina</div>
            <div style={styles.serviceCard}>Cálcio</div>
            <div style={styles.serviceCard}>Magnésio</div>
            <div style={styles.serviceCard}>Zinco</div>
          </div>
        </section>
  
        {/* Exames Específicos */}
        <section style={styles.section}>
          <h2 style={styles.categoryTitle}>
            <span style={styles.categoryIcon}>🧬</span>
            Exames Específicos
          </h2>
          <div style={styles.serviceGrid}>
            <div style={styles.serviceCard}>PCR (Proteína C Reativa)</div>
            <div style={styles.serviceCard}>VHS (Velocidade de Hemossedimentação)</div>
            <div style={styles.serviceCard}>Eletroforese de Proteínas</div>
            <div style={styles.serviceCard}>Parasitológico de Fezes</div>
            <div style={styles.serviceCard}>Urina Tipo 1</div>
            <div style={styles.serviceCard}>Cultura de Urina</div>
          </div>
        </section>
  
        {/* Check-ups */}
        <section style={styles.checkupSection}>
          <h2 style={styles.checkupTitle}>Pacotes de Check-up</h2>
          <p style={styles.checkupSubtitle}>
            Combinações completas de exames para avaliação geral da sua saúde
          </p>
          
          <div style={styles.checkupGrid}>
            <div style={styles.checkupCard}>
              <h3 style={styles.checkupCardTitle}>Check-up Básico</h3>
              <ul style={styles.checkupList}>
                <li>Hemograma Completo</li>
                <li>Glicemia</li>
                <li>Colesterol Total e Frações</li>
                <li>Ureia e Creatinina</li>
                <li>Urina Tipo 1</li>
              </ul>
            </div>
  
            <div style={styles.checkupCard}>
              <h3 style={styles.checkupCardTitle}>Check-up Completo</h3>
              <ul style={styles.checkupList}>
                <li>Todos os exames do Check-up Básico</li>
                <li>TSH e T4 Livre</li>
                <li>Vitamina D</li>
                <li>Vitamina B12</li>
                <li>TGO e TGP</li>
                <li>PCR</li>
              </ul>
            </div>
  
            <div style={styles.checkupCard}>
              <h3 style={styles.checkupCardTitle}>Check-up Executivo</h3>
              <ul style={styles.checkupList}>
                <li>Todos os exames do Check-up Completo</li>
                <li>PSA (para homens)</li>
                <li>Hormônios Sexuais</li>
                <li>Marcadores Cardíacos</li>
                <li>Perfil Completo de Vitaminas</li>
              </ul>
            </div>
          </div>
        </section>
  
        {/* Informações Importantes */}
        <section style={styles.infoSection}>
          <h2 style={styles.infoTitle}>Informações Importantes</h2>
          <div style={styles.infoGrid}>
            <div style={styles.infoCard}>
              <strong>⏰ Preparo para Exames</strong>
              <p>Consulte nossos orientadores para saber sobre jejum e preparos específicos</p>
            </div>
            <div style={styles.infoCard}>
              <strong>📄 Documentação</strong>
              <p>Traga documento com foto e pedido médico</p>
            </div>
            <div style={styles.infoCard}>
              <strong>⚡ Resultados Online</strong>
              <p>Acesse seus resultados pela internet com total segurança</p>
            </div>
            <div style={styles.infoCard}>
              <strong>🏥 Convênios</strong>
              <p>Atendemos diversos planos de saúde e particular</p>
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
    section: {
      marginBottom: '50px',
    },
    categoryTitle: {
      fontSize: '1.8rem',
      marginBottom: '25px',
      color: '#1e293b',
      display: 'flex',
      alignItems: 'center',
      gap: '10px',
    },
    categoryIcon: {
      fontSize: '2rem',
    },
    serviceGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
      gap: '15px',
    },
    serviceCard: {
      background: '#fff',
      padding: '20px',
      borderRadius: '10px',
      boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
      fontSize: '1rem',
      color: '#334155',
      border: '2px solid #e2e8f0',
      transition: 'all 0.3s ease',
    },
    checkupSection: {
      background: '#f8fafc',
      padding: '40px',
      borderRadius: '15px',
      marginBottom: '50px',
    },
    checkupTitle: {
      fontSize: '2rem',
      textAlign: 'center' as const,
      marginBottom: '10px',
      color: '#1e293b',
    },
    checkupSubtitle: {
      textAlign: 'center' as const,
      color: '#64748b',
      marginBottom: '30px',
      fontSize: '1.1rem',
    },
    checkupGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
      gap: '25px',
    },
    checkupCard: {
      background: '#fff',
      padding: '30px',
      borderRadius: '12px',
      boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
      border: '3px solid #3b82f6',
    },
    checkupCardTitle: {
      fontSize: '1.4rem',
      marginBottom: '20px',
      color: '#2563eb',
      textAlign: 'center' as const,
    },
    checkupList: {
      listStyle: 'none',
      padding: 0,
      lineHeight: '2',
      color: '#475569',
    },
    infoSection: {
      marginTop: '50px',
    },
    infoTitle: {
      fontSize: '2rem',
      marginBottom: '30px',
      textAlign: 'center' as const,
      color: '#1e293b',
    },
    infoGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
      gap: '20px',
    },
    infoCard: {
      background: '#fff',
      padding: '25px',
      borderRadius: '10px',
      boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
      lineHeight: '1.6',
    },
  }