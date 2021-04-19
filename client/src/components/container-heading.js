import './style.css';

const Container = (props) => {

    return (
        <section className="component-border">
            <h3>{ props.heading }</h3>
            <hr />
            <div>
                { props.children }
            </div>
        </section>
    );
};

export default Container;