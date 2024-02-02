import './styles/style.css';
import styles from './styles/style.module.css';
import stylesTwo from './styles/styleTwo.module.css';

export type CardProps = {
  title:string;
  description:string;
};

export function Card({ title, description }: CardProps) {

  return (
    <div>
      <div className="card-container">
      <h2>Demo Heading</h2>
      <p className={styles.myParagraph}>This is just a demo</p>
      <div className="card">
        <h2 className="card-title">{title}</h2>
        <p className="card-description">{description}</p>
      </div>
      <p className={stylesTwo.myParagraph}>End of the Card</p>
      <h2>Demo End</h2>
    </div>
    </div>
  );
}
