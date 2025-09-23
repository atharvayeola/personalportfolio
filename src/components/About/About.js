import { useState } from 'react';
import parse from 'html-react-parser';
import { FaGithub, FaLinkedin, FaMedium } from 'react-icons/fa'
import { about } from '../../portfolio'
import './About.css'

const About = () => {
  const { name, role, description, resumes, social } = about
  const [showResumeOptions, setShowResumeOptions] = useState(false)

  const handleResumeClick = () => {
    setShowResumeOptions(!showResumeOptions)
  }

  const handleResumeSelect = (resumePath) => {
    window.open(resumePath, '_blank')
    setShowResumeOptions(false)
  }

  return (
    <div className='about center'>
      {name && (
        <h1>
          Hi, I am <span className='about__name'>{name}.</span>
        </h1>
      )}

      {role && <h2 className='about__role'> {role}</h2>}
      <ul className='about__desc'>
        {description &&
          description.map((point) => (
            <li key={point}>{parse(point)}</li>
          ))}
      </ul>

      <div className='about__contact center'>
        {resumes && resumes.length > 0 && (
          <div className='resume-container'>
            <button 
              type='button' 
              className='btn btn--outline'
              onClick={handleResumeClick}
            >
              Resume
            </button>
            
            {showResumeOptions && (
              <div className='resume-dropdown'>
                <p className='resume-dropdown__title'>What role are you hiring for?</p>
                {resumes.map((resume) => (
                  <button
                    key={resume.role}
                    type='button'
                    className='resume-dropdown__item'
                    onClick={() => handleResumeSelect(resume.path)}
                  >
                    {resume.role}
                  </button>
                ))}
              </div>
            )}
          </div>
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
            {social.medium && (
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