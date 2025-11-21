import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'
import { allProjects, projectsByRole, roles } from '../../portfolio'
import './ProjectShowcase.css'

const ProjectShowcase = ({ roleId }) => {
    const role = roles.find(r => r.id === roleId)
    const projectIds = projectsByRole[roleId] || []
    const projects = projectIds.map(id => allProjects.find(p => p.id === id)).filter(Boolean)

    const handleDownloadResume = () => {
        if (role?.resume) {
            window.open(role.resume, '_blank')
        }
    }

    return (
        <section className='project-showcase section'>
            <div className='project-showcase__header'>
                <button
                    type='button'
                    className='btn btn--back'
                    onClick={() => { window.location.hash = '' }}
                >
                    ← Back to Roles
                </button>

                <div className='project-showcase__role-info fade-in'>
                    <div className='role-badge'>
                        <span className='role-badge__icon'>{role?.icon}</span>
                        <span className='role-badge__title'>{role?.title}</span>
                    </div>
                    <button
                        type='button'
                        className='btn btn--outline btn-resume'
                        onClick={handleDownloadResume}
                    >
                        Download Resume
                    </button>
                    <p className='resume-hint'>
                        💡 Tip: If PDF opens in dark mode, check your browser&apos;s appearance settings
                    </p>
                </div>
            </div>

            <h2 className='section__title'>Relevant Projects</h2>
            <p className='project-showcase__subtitle'>
                {projects.length} projects showcasing expertise for this role
            </p>

            <div className='projects-grid'>
                {projects.map((project, index) => (
                    <div
                        key={project.id}
                        className={`project-card glass-card glass-card-hover ${project.featured ? 'project-card--featured' : ''
                            } fade-in-delay-${(index % 3) + 1}`}
                    >
                        {project.featured && (
                            <div className='project-card__badge'>Featured</div>
                        )}

                        <h3 className='project-card__title'>{project.name}</h3>
                        <p className='project-card__description'>{project.description}</p>

                        <div className='project-card__stack'>
                            {project.stack.map((tech) => (
                                <span key={tech} className='tech-tag'>
                                    {tech}
                                </span>
                            ))}
                        </div>

                        <div className='project-card__links'>
                            {project.sourceCode && (
                                <a
                                    href={project.sourceCode}
                                    aria-label='Source Code'
                                    className='project-link'
                                    target='_blank'
                                    rel='noopener noreferrer'
                                >
                                    <FaGithub /> Code
                                </a>
                            )}
                            {project.livePreview && (
                                <a
                                    href={project.livePreview}
                                    aria-label='Live Preview'
                                    className='project-link'
                                    target='_blank'
                                    rel='noopener noreferrer'
                                >
                                    <FaExternalLinkAlt /> Live
                                </a>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default ProjectShowcase
