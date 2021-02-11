import React, { Component } from "react";
import ArtistCard from "./artist-card";

class SearchResult extends Component {
    state={
        artists: [
            {
                name: "Iron Maiden",
                match: "1",
                url:"https://www.last.fm/es/music/Iron+Maiden",
                image: "https://i.pinimg.com/originals/3c/08/9a/3c089a8cf35b6429369e2af5a4b1844b.jpg"
            },
            {
                name: "Pearl Jam",
                match: "0.827789",
                url:"https://www.last.fm/es/music/Pearl+Jam",
                image: "https://styles.redditmedia.com/t5_2s3ww/styles/communityIcon_gfbfx3im86b41.jpg?width=256&format=pjpg&s=83fcc6006af08e2c90b2c1b31d77a6887213d959"
            },
            {
                name: "Bhavi",
                match: "0.811899",
                url:"https://www.last.fm/es/music/Bhavi",
                image: "https://yt3.ggpht.com/Y0WeBddVJrxONL5YDRcW2wHJ7bJhn-LUpokdlZgVm6HvfXFtu8GkbYQsjGR-U-JqPEp3bGiy-A=s900-c-k-c0x00ffffff-no-rj"
            },
            {
                name: "Black Sabbath",
                match: "0.648183",
                url:"https://www.last.fm/es/music/Black+Sabbath",
                image: "https://pbs.twimg.com/profile_images/699985998483189760/osRidfqR_400x400.jpg"
            },
            {
                name: "Black Sabbath",
                match: "0.648183",
                url:"https://www.last.fm/es/music/Black+Sabbath",
                image: "https://pbs.twimg.com/profile_images/699985998483189760/osRidfqR_400x400.jpg"
            },
            {
                name: "Black Sabbath",
                match: "0.648183",
                url:"https://www.last.fm/es/music/Black+Sabbath",
                image: "https://pbs.twimg.com/profile_images/699985998483189760/osRidfqR_400x400.jpg"
            },
        ]
    }
    render() {
        return (
            <div className="container">
                <h1>{this.props.searchResult}</h1>
                <div className="row">
                    {/*generacion automatica de artist cards*/}
                    {/*map: mapea arrays. recorro cada artista en el array artists*/}
                    {this.state.artists.map( (artista, i)=>{
                        return(
                            <ArtistCard img={artista.image} titulo={artista.name} key={i}></ArtistCard>
                        )
                    } )}
                </div>
            </div>
        );
    }
}

export default SearchResult;
