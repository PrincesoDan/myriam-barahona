<script setup lang="ts">
import { ref } from 'vue'

const nombre = ref('')
const unidad = ref('')
const email = ref('')

const sent = ref(false)
const error = ref('')
const loading = ref(false)

// Endpoint del servicio externo (ej. Formspree: https://formspree.io/f/xxxx).
// Si no está configurado en .env, el formulario funciona en modo demo local.
const endpoint = import.meta.env.VITE_FORM_ENDPOINT as string | undefined

async function submit() {
  error.value = ''
  const nombreVal = nombre.value.trim()
  if (!nombreVal) {
    error.value = 'Por favor escribe tu nombre.'
    return
  }

  loading.value = true
  try {
    if (endpoint) {
      const res = await fetch(endpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          nombre: nombreVal,
          unidad: unidad.value.trim(),
          email: email.value.trim(),
        }),
      })
      if (!res.ok) throw new Error('bad status')
    }
    // Sin endpoint configurado: modo demo, se marca como enviado igualmente.
    sent.value = true
  } catch {
    error.value = 'No pudimos registrar tu apoyo. Intenta nuevamente.'
  } finally {
    loading.value = false
  }
}

function share() {
  const txt = encodeURIComponent(
    'La Universidad la hacemos. La Universidad la decidimos. — Myriam Barahona al Senado Universitario de la U. de Chile. Súmate.',
  )
  window.open('https://wa.me/?text=' + txt, '_blank', 'noopener')
}
</script>

<template>
  <section id="sumarse" class="sumarse">
    <div class="sumarse__inner">
      <div class="sumarse__copy">
        <div class="eyebrow">Súmate</div>
        <h2 class="sumarse__title">
          Con experiencia y firmeza, llevemos el trabajo universitario al Senado.
        </h2>
        <p class="sumarse__lead">
          Deja tu apoyo o comparte la campaña con tu unidad. Cada voz suma para
          que las trabajadoras y trabajadores universitarios incidan en el futuro
          de la Chile.
        </p>
        <button type="button" class="wa" @click="share">
          <svg width="19" height="19" viewBox="0 0 24 24" fill="currentColor">
            <path
              d="M.057 24l1.687-6.163a11.867 11.867 0 01-1.587-5.946C.16 5.335 5.495 0 12.05 0a11.82 11.82 0 018.413 3.488 11.82 11.82 0 013.48 8.414c-.003 6.557-5.338 11.892-11.893 11.892a11.9 11.9 0 01-5.688-1.448L.057 24zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884a9.86 9.86 0 001.51 5.26l-.999 3.648 3.978-.607z"
            />
          </svg>
          Compartir por WhatsApp
        </button>
      </div>

      <div class="card">
        <div v-if="sent" class="thanks">
          <div class="thanks__check">
            <svg
              width="28"
              height="28"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#11184a"
              stroke-width="3"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <polyline points="20 6 9 17 4 12" />
            </svg>
          </div>
          <h3 class="thanks__title">¡Gracias por sumarte!</h3>
          <p class="thanks__text">
            Tu apoyo quedó registrado. Comparte la campaña con tu unidad para que
            más voces se sumen.
          </p>
        </div>

        <form v-else class="form" @submit.prevent="submit">
          <h3 class="form__title">Sumar mi apoyo</h3>
          <p class="form__sub">Solo toma un minuto.</p>

          <label class="form__label">Nombre</label>
          <input
            v-model="nombre"
            type="text"
            class="form__input"
            placeholder="Tu nombre y apellido"
          />

          <label class="form__label">
            Unidad o facultad <span>(opcional)</span>
          </label>
          <input
            v-model="unidad"
            type="text"
            class="form__input"
            placeholder="Ej. Biblioteca Central, FCFM, Hospital JJA…"
          />

          <label class="form__label">Correo <span>(opcional)</span></label>
          <input
            v-model="email"
            type="email"
            class="form__input form__input--last"
            placeholder="tucorreo@uchile.cl"
          />

          <div v-if="error" class="form__error">{{ error }}</div>

          <button type="submit" class="form__submit" :disabled="loading">
            {{ loading ? 'Enviando…' : 'Sumar mi apoyo' }}
          </button>
        </form>
      </div>
    </div>
  </section>
</template>

<style scoped>
.sumarse {
  background: var(--cream-2);
  padding: 96px 28px;
}
.sumarse__inner {
  max-width: 1080px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 56px;
  align-items: center;
}
.eyebrow {
  font-family: var(--font-display);
  font-weight: 800;
  font-size: 12.5px;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: var(--red);
  margin-bottom: 18px;
}
.sumarse__title {
  font-family: var(--font-display);
  font-weight: 900;
  font-size: clamp(2rem, 3.6vw, 2.9rem);
  line-height: 1.02;
  letter-spacing: -0.02em;
  color: var(--navy-text);
  margin-bottom: 20px;
}
.sumarse__lead {
  font-size: 16px;
  line-height: 1.6;
  color: #54597d;
  margin-bottom: 26px;
}
.wa {
  display: inline-flex;
  align-items: center;
  gap: 11px;
  background: #1f8a40;
  color: #fff;
  border: none;
  cursor: pointer;
  font-family: var(--font-display);
  font-weight: 800;
  font-size: 15px;
  padding: 15px 26px;
  border-radius: 2px;
}
.card {
  background: #fff;
  border: 1px solid #e3dbc8;
  padding: 38px 34px;
  box-shadow: 0 18px 50px -28px rgba(17, 24, 74, 0.5);
}
.thanks {
  text-align: center;
  padding: 30px 8px;
}
.thanks__check {
  width: 58px;
  height: 58px;
  border-radius: 50%;
  background: var(--accent);
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 20px;
}
.thanks__title {
  font-family: var(--font-display);
  font-weight: 800;
  font-size: 22px;
  color: var(--navy-text);
  margin-bottom: 10px;
}
.thanks__text {
  font-size: 15px;
  line-height: 1.55;
  color: #54597d;
}
.form__title {
  font-family: var(--font-display);
  font-weight: 800;
  font-size: 21px;
  color: var(--navy-text);
  margin-bottom: 6px;
}
.form__sub {
  font-size: 13.5px;
  color: #7d82a3;
  margin-bottom: 24px;
}
.form__label {
  display: block;
  font-size: 12.5px;
  font-weight: 600;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  color: var(--navy-text);
  margin-bottom: 7px;
}
.form__label span {
  color: #aeb0c0;
  font-weight: 400;
  text-transform: none;
  letter-spacing: 0;
}
.form__input {
  width: 100%;
  padding: 13px 15px;
  border: 1px solid #d8d0bd;
  border-radius: 2px;
  font-size: 15px;
  font-family: inherit;
  margin-bottom: 18px;
  background: var(--cream);
  color: #181822;
}
.form__input--last {
  margin-bottom: 8px;
}
.form__input:focus {
  outline: none;
  border-color: var(--navy-text);
  background: #fff;
}
.form__error {
  font-size: 13px;
  color: var(--red);
  font-weight: 600;
  margin-bottom: 8px;
}
.form__submit {
  width: 100%;
  margin-top: 12px;
  background: var(--accent);
  color: var(--navy);
  border: none;
  cursor: pointer;
  font-family: var(--font-display);
  font-weight: 800;
  font-size: 15.5px;
  padding: 15px;
  border-radius: 2px;
}
.form__submit:disabled {
  opacity: 0.6;
  cursor: default;
}
@media (max-width: 880px) {
  .sumarse {
    padding: 64px 24px;
  }
  .sumarse__inner {
    grid-template-columns: 1fr;
    gap: 36px;
  }
}
</style>
