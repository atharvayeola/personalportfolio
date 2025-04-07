// import GitHubIcon from '@material-ui/icons/GitHub'
// import LinkedInIcon from '@material-ui/icons/LinkedIn'

import { FaGithub, FaLinkedin, FaMedium } from 'react-icons/fa'
import { about } from '../../portfolio'
import './About.css'

const About = () => {
  const { name, role, description, resume, social } = about

  return (
    <div className='about center'>
      {name && (
        <h1>
          Hi, I am <span className='about__name'>{name}.</span>
        </h1>
      )}

      {role && <h2 className='about__role'> {role}</h2>}
      {<ul className='about__desc'>
  {description &&
    description.map((point) => (
      <li key={point} dangerouslySetInnerHTML={{ __html: point }} />
    ))}
</ul>
/* <p className='about__desc'>{description && description}</p> */}

      <div className='about__contact center'>
        {resume && (
          <a href={resume}>
            <span type='button' className='btn btn--outline'>
              Resume
            </span>
          </a>
        )}

        {social && (
          <>
            {social.github && (
              <a
                href={social.github}
                aria-label='github'
                className='link link--icon'
              >
                <FaGithub />
              </a>
            )}

            {social.linkedin && (
              <a
                href={social.linkedin}
                aria-label='linkedin'
                className='link link--icon'
              >
                <FaLinkedin />
              </a>
            )}
            {social.medium && ( // Add Medium icon
              <a
                href={social.medium}
                aria-label='medium'
                className='link link--icon'
              >
                <FaMedium />
              </a>
            )}
          </>
        )}
      </div>
    </div>
  )
}

export default About
