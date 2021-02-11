import React from "react";
import ArtistCard from "./artist-card";
import "../page-artist.css";
import "../page-home.css";

class SimilarArtist extends React.Component {
    render() {
        return (
            <React.Fragment>
                <div className="row container centrar margenes50">
                    <div className="col-md-12 ">
                        <h5>Similar Artist</h5>
                        <hr />
                    </div>
                </div>

                <div className="row">
                    <ArtistCard
                        img="https://place-hold.it/300x300"
                        titulo="Test"
                    ></ArtistCard>
                    <ArtistCard
                        img="https://place-hold.it/300x300"
                        titulo="Test"
                    ></ArtistCard>
                    <ArtistCard
                        img="https://place-hold.it/300x300"
                        titulo="Test"
                    ></ArtistCard>
                    <ArtistCard
                        img="https://place-hold.it/300x300"
                        titulo="Test"
                    ></ArtistCard>

                    {/* <div className="col-md-3">
                        <ArtistCard
                            img="https://place-hold.it/300x300"
                            titulo="Test"
                        ></ArtistCard>
                    </div>
                    <div className="col-md-3">
                        <ArtistCard
                            img="https://place-hold.it/300x300"
                            titulo="Test"
                        ></ArtistCard>
                    </div>
                    <div className="col-md-3">
                        <ArtistCard
                            img="https://place-hold.it/300x300"
                            titulo="Test"
                        ></ArtistCard>
                    </div>
                    <div className="col-md-3">
                        <ArtistCard
                            img="https://place-hold.it/300x300"
                            titulo="Test"
                        ></ArtistCard>
                    </div> */}
                </div>
            </React.Fragment>
        );
    }
}

export default SimilarArtist;
