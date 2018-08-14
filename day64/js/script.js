// The header component
function Header(props) {
    return(
        <div className="header">
            <h1>{props.title}</h1>
            <p>{props.subheading}</p>
        </div>
    );
};

// card component
function Card(props) {
        return(
            <div className="card">
                <div className="image-container">
                    <img className="imageShowcase" src={props.pathHeader} />
                </div>
                <div className="icon-set">
                    <img src={props.pathIcon} />
                    <p>{props.iconTitle}</p>
                </div>
                <div className="description">
                    <h2>{props.name}</h2>
                    <p>{props.description}</p>
                </div>
                <div className="btn">
                    <a href={props.link} target="_blank">Find out more</a>
                </div>
            </div>
        );
};

// a variable that contains the components
let app = (
    <div className="container">
        <Header title="Women in STEAM" subheading="A page to that holds tribute to the amazing females who contributed to the field of Science | Engineering | Technology | Math"/>

        <Card pathHeader="../img/hypatia.jpg" pathIcon="../img/book.svg" iconTitle="mathematics | astronomy | philosophy" name="Hypatia" description="Hypatia was a prolific polymath in Roman Alexandria. Hypatia spent her days as a Greek mathematician, astronomer, and philosopher in what is then the Byzantine Empire." link="https://en.wikipedia.org/wiki/Hypatia"/>

        <Card pathHeader="../img/madame-curie.jpg" pathIcon="../img/atom.svg" iconTitle="Physics" name="Marie Curie" description="Madam Curie is the only women in history to win two Nobel Prizes. She was awarded both in 1903 and 1911 for her contributions to science. Her work on radioactivity has been of paramount importance to humankind." link="https://en.wikipedia.org/wiki/Marie_Curie"/>

        <Card pathHeader="../img/Rosalind-Franklin.jpg" pathIcon="../img/atom.svg" iconTitle="Physical Chemistry" name="Rosalind Franklin" description="Rosalind is best known for her work on X-Ray diffraction images of DNA. Her infamous Photo 51 led to the discovery of the double helix structure by Watson, Crick, and Wilkins in 1962." link="https://en.wikipedia.org/wiki/Rosalind_Franklin"/>

        <Card pathHeader="../img/Lise-Meitner.jpg" pathIcon="../img/atom.svg" iconTitle="Radioactivity | Nuclear Physics" name="Lise Meitner" description="Lise Meitner was an Austrian-Swedish scientist who worked on the subject of radioactivity and nuclear physics. Meitner and her team first discovered nuclear fission of Uranium when it absorbed an extra neutron. The importance and impact of this discovery cannot be understated." link="https://en.wikipedia.org/wiki/Lise_Meitner"/>

        <Card pathHeader="../img/Gertrude.jpeg" pathIcon="../img/flasks.svg" iconTitle="Biochemistry | Pharmacology" name="Gertrude B. Elion" description="Gertrude shared the 1988 Nobel Prize in Physiology with George Hitchings and Sir James Black. She worked alone as well as with her partners to develop a multitude of new drugs, using innovative techniques. These later led to the development of what is known as AIDS drug, AZT." link="https://en.wikipedia.org/wiki/Gertrude_B._Elion"/>

        <Card pathHeader="../img/ada-lovelance.jpg" pathIcon="../img/book.svg" iconTitle="Math | Writing" name="Ada Lovelace" description="An English mathematician and writer. She is mainly known for her work on Charles Babbage's work on a mechanical, general-purpose computer, the Analytical Engine. Her notes include the first algorithm that was intended for the use of the machine." link="https://en.wikipedia.org/wiki/Ada_Lovelace"/>

        <Card pathHeader="../img/Barbara.jpg" pathIcon="../img/microscope.svg" iconTitle="Cytogenetics" name="Barbara McClintock" description="Barbara was an American scientist and cytogeneticist who won the Nobel Prize in Physiology in 1983. After gaining her Ph.D. in Botany at Cornell University in 1927, she started her career as the leader in the development of maize cytogenetics. An obsession that would dominate the rest of her life." link="https://en.wikipedia.org/wiki/Barbara_McClintock"/>

        <Card pathHeader="../img/wu_h.jpg" pathIcon="../img/atom.svg" iconTitle="Physics" name="Chien-Shiung Wu" description="Wu was an American experimental physicist who made significant contributions to nuclear physics. Wu was a member of the Manhattan project. Her work helped develop the process of separating uranium metal into Uranium-235 and Uranium-238 isotopes by gaseous diffusion." link="https://en.wikipedia.org/wiki/Chien-Shiung_Wu"/>

        <Card pathHeader="../img/Dian-fossey-story.jpg" pathIcon="../img/gorilla.svg" iconTitle="Ethology | Primatology" name="Dian Fossey" description="Dian's contribution to zoology, primatology, and anthropology are second to none. Dian spent 18 years studying mountain gorillas in Rwanda. Sadly she was murdered in 1985, a case that is still open." link="https://en.wikipedia.org/wiki/Dian_Fossey"/>

        <Card pathHeader="../img/carson.png" pathIcon="../img/trees.svg" iconTitle="Ecology | Marine biology" name="Rachel Carson" description="Carson is often credited with starting the grassroots environmental movement. She is also credited with the creation of the EPA. Carson was an American marine biologist and conservationist." link="https://en.wikipedia.org/wiki/Rachel_Carson"/>
    </div>
);

ReactDOM.render(app, document.querySelector('#app'));
