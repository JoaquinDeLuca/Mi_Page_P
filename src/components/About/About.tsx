import style from './About.module.css'

export default function About() {
  return (
    <div className={style.about} id='about'>
      <div className={style.aboutContainer}>
        <h2 className={style.aboutH2}>Sobre Mí</h2>
        <p className={style.aboutP}>
        Como desarrollador web, tengo experiencia en programación tanto backend como frontend. Estoy motivado por mejorar mis habilidades y aprender nuevas tecnologías. Soy flexible y dispuesto a trabajar con cualquier tecnología web.
        </p>
        <p className={style.aboutP}>
          🔭 Mi objetivo es seguir creciendo como profesional y ampliar mis conocimientos en tecnologías como Next.js y TypeScript. Trabajar en equipo es una parte importante para mí, ya que creo que es donde se pueden intercambiar conocimientos y aprender de otros.
        </p>
        <p className={style.aboutP}>
          🔎 Estoy emocionado por unirme al mundo IT y colaborar en la resolución de desafíos mientras crezco profesionalmente. Actualmente, estoy en búsqueda activa de una oportunidad que me permita lograr estos objetivos.
        </p>
      </div>
    </div>
  )
}
