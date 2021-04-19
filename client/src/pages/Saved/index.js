import "./style.css";
import HeroHeader from "../../components/hero-header";
import ContainerHeading from "../../components/container-heading";

const SavedPage = () => {
    return (
        <div>
            <HeroHeader>
                <h1>Google Books Search</h1>
                <h2>Search for and save books of interest</h2>
            </HeroHeader>

            <ContainerHeading heading="Saved Books">
                <div id="saved-books">
                    saved books list goes here
                    </div>
            </ContainerHeading>
        </div>
    );
};

export default SavedPage;