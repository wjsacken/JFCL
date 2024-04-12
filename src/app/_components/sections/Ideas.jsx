import Data from "@data/sections/ideas.json";
import Link from "next/link";

const IdeasSection = () => {
    return (
        <>
            {/* ideas */}
            <section>
                <div className="container mil-p-0-90">
                    <div className="mil-background-grid mil-softened" />

                    <div className="row justify-content-between">
                        <div className="col-lg-5">

                            <div>
                                <span className="mil-suptitle mil-upper mil-up mil-mb-30" dangerouslySetInnerHTML={{__html : Data.subtitle}} />
                                <h2 className="mil-upper mil-up mil-mb-40" dangerouslySetInnerHTML={{__html : Data.title}} />
                            </div>

                        </div>
                        <div className="col-lg-6 mil-mt-suptitle-offset">

                            <p className="mil-up mil-mb-60" dangerouslySetInnerHTML={{__html : Data.description}} />

                            <div className="row">
                                {Data.items.map((item, key) => (
                                <div className="col-sm-6 " key={`ideas-item-${key}`}>
                                        <h6 className="mil-upper mil-up mil-mb-10" dangerouslySetInnerHTML={{__html : item.label}} />
                                </div>
                                ))}
                            </div>

                        </div>
                    </div>
                </div>
            </section>
            {/* ideas end */}
        </>
    );
};
export default IdeasSection;