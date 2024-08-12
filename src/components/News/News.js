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
            <p 
              className='news__item-description' 
              dangerouslySetInnerHTML={{ __html: item.description }}
            />
            <p className='news__item-date'><small>{item.date}</small></p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default News;
