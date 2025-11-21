import { FaChevronDown } from 'react-icons/fa'
import { about } from '../../portfolio'
import './HeroSection.css'

const HeroSection = () => {
    const scrollToRoles = () => {
        document.getElementById('role-selector')?.scrollIntoView({ behavior: 'smooth' })
    }

    return (
        <div className='hero-section'>
            <div className='hero-content fade-in'>
                <h1 className='hero-name'>{about.name}</h1>
                <h2 className='hero-role'>{about.role}</h2>
                <p className='hero-description'>{about.description[0]}</p>
                <p className='hero-description'>{about.description[1]}</p>

                <div className='hero-social'>
                    {about.social.linkedin && (
                        <a
                            href={about.social.linkedin}
                            aria-label='LinkedIn'
                            className='link link--icon'
                            target='_blank'
                            rel='noopener noreferrer'
                        >
                            <i className='fab fa-linkedin' aria-hidden='true' />
                        </a>
                    )}
                    {about.social.github && (
                        <a
                            href={about.social.github}
                            aria-label='GitHub'
                            className='link link--icon'
                            target='_blank'
                            rel='noopener noreferrer'
                        >
                            <i className='fab fa-github' aria-hidden='true' />
                        </a>
                    )}
                    {about.social.medium && (
                        <a
                            href={about.social.medium}
                            aria-label='Medium'
                            className='link link--icon'
                            target='_blank'
                            rel='noopener noreferrer'
                        >
                            <i className='fab fa-medium' aria-hidden='true' />
                        </a>
                    )}
                </div>
            </div>

            <button
                type='button'
                className='scroll-indicator'
                onClick={scrollToRoles}
                aria-label='Scroll to role selection'
            >
                <FaChevronDown className='bounce' />
            </button>
        </div>
    )
}

export default HeroSection
