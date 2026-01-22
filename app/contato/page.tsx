'use client'

import { useState } from 'react'

export default function Contato() {
  const [enviado, setEnviado] = useState(false)

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setEnviado(true)
  }

  return (
    <div className="container">
      <h1>Contato</h1>

      <form onSubmit={handleSubmit} style={styles.form}>
        <input placeholder="Nome" required />
        <input type="email" placeholder="E-mail" required />
        <textarea placeholder="Mensagem" required />

        <button type="submit">Enviar</button>

        {enviado && (
          <p style={styles.sucesso}>
            Mensagem enviada com sucesso.
          </p>
        )}
      </form>

      <div style={{ marginTop: 40 }}>
        <iframe
          src="https://www.google.com/maps?q=Santa%20Barbara%20d'Oeste%20Centro&output=embed"
          width="100%"
          height="300"
          loading="lazy"
        />
      </div>
    </div>
  )
}

const styles = {
  form: {
    marginTop: 20,
    display: 'flex',
    flexDirection: 'column' as const,
    gap: '10px',
    maxWidth: '400px',
  },
  sucesso: {
    marginTop: 10,
    color: 'green',
  },
}
