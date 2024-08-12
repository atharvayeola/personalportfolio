import uniqid from 'uniqid';
import { blogposts } from '../../portfolio';
import './Blogpost.css';

const Blogpost = () => {
  if (!blogposts.length) return null;

  return (
    <section id='blogpost' className='section blogpost'>
      <h2 className='section__title'>Blogpost</h2>

      <div className='blogpost__grid'>
        {blogposts.map((post) => (
          <div key={uniqid()} className={`blogpost__item blogpost__item--${post.type}`}>
            <h3 className='blogpost__item-title'>{post.title}</h3>
            <p className='blogpost__item-description'>{post.description}</p>
            <a 
              href={post.link} 
              className='blogpost__item-link' 
              target='_blank' 
              rel='noopener noreferrer'
            >
              Read More
            </a>
            <p className='blogpost__item-date'><small>{post.date}</small></p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Blogpost;
