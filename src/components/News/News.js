import uniqid from 'uniqid';
import { news } from '../../portfolio';
import './News.css';

const News = () => {
  if (!news.length) return null;

  return (
    <section id='news' className='section news'>
      <h2 className='section__title'>News</h2>

      <div className='news__grid'>
        {news.map((item) => (
          <div key={uniqid()} className='news__item'>
            <h3 className='news__item-title'>{item.title}</h3>
            <p className='news__item-description'>
              {item.description.text.split(item.description.link.text)[0]}
              <a
                href={item.description.link.url}
                target="_blank"
                rel="noopener noreferrer"
                style={{ textDecoration: 'underline' }}
              >
                {item.description.link.text}
              </a>
              {item.description.text.split(item.description.link.text)[1]}
            </p>
            <p className='news__item-date'><small>{item.date}</small></p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default News;
