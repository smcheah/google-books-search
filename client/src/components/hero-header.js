import './style.css';

const HeroHeader = ({ children }) => {
    return (
        <div className="hero-header">{ children }</div>
    );
};

export default HeroHeader;