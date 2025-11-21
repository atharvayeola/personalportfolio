import './RoleSelector.css'
import { roles } from '../../portfolio'

const RoleSelector = ({ onRoleSelect }) => (
    <section id='role-selector' className='role-selector section'>
        <h2 className='section__title'>Choose Your Path</h2>
        <p className='role-selector__subtitle'>
            Select the role you&apos;re hiring for to see relevant projects and download the matching resume
        </p>

        <div className='role-grid'>
            {roles.map((role, index) => (
                <div
                    key={role.id}
                    className={`role-card glass-card glass-card-hover fade-in-delay-${index + 1}`}
                    onClick={() => onRoleSelect(role.id)}
                    role='button'
                    tabIndex={0}
                    onKeyPress={(e) => {
                        if (e.key === 'Enter' || e.key === ' ') {
                            onRoleSelect(role.id)
                        }
                    }}
                >
                    <div className='role-card__icon'>{role.icon}</div>
                    <h3 className='role-card__title'>{role.title}</h3>
                    <p className='role-card__description'>{role.description}</p>
                    <div className='role-card__cta'>
                        Explore Projects →
                    </div>
                </div>
            ))}
        </div>
    </section>
)

export default RoleSelector
