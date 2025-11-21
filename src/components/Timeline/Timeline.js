import './Timeline.css'
import { news } from '../../portfolio'

const Timeline = () => {
    return (
        <section className='timeline section'>
            <h2 className='section__title'>Publications &amp; Achievements</h2>
            <p className='timeline__subtitle'>
                Research and contributions featured in major publications
            </p>

            <div className='timeline-container'>
                {news.map((item) => (
                    <div
                        key={`${item.date}-${item.title}`}
                        className='timeline-item glass-card fade-in'
                    >
                        <div className='timeline-item__date'>{item.date}</div>
                        <h3 className='timeline-item__title'>{item.title}</h3>
                        <p className='timeline-item__description'>
                            {item.description.text}
                        </p>
                        {item.description.link && (
                            <a
                                href={item.description.link.url}
                                className='timeline-item__link'
                                target='_blank'
                                rel='noopener noreferrer'
                            >
                                {item.description.link.text} →
                            </a>
                        )}
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Timeline
