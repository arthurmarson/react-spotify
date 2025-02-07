import React, { useState, useEffect } from "react";
import './Main.css';

import Playlist1 from '../../assets/playlist/1.jpeg';
import Playlist2 from '../../assets/playlist/2.png';
import Playlist3 from '../../assets/playlist/3.jpeg';
import Playlist4 from '../../assets/playlist/4.jpeg';
import Playlist5 from '../../assets/playlist/5.jpeg';
import Playlist6 from '../../assets/playlist/6.jpeg';
import Playlist7 from '../../assets/playlist/7.jpeg';
import Playlist8 from '../../assets/playlist/8.jpeg';
import Playlist9 from '../../assets/playlist/9.jpeg';
import Playlist10 from '../../assets/playlist/10.jpeg';
import Playlist11 from '../../assets/playlist/11.jpeg';
import Playlist12 from '../../assets/playlist/12.jpeg';
import Playlist13 from '../../assets/playlist/13.jpeg';
import Playlist14 from '../../assets/playlist/14.jpeg';
import Playlist15 from '../../assets/playlist/15.jpeg';

const playlists = [
    { img: Playlist1, title: "Boas festas" },
    { img: Playlist2, title: "Feitos para você" },
    { img: Playlist3, title: "Lançamentos" },
    { img: Playlist4, title: "Creators" },
    { img: Playlist5, title: "Para treinar" },
    { img: Playlist6, title: "Podcasts" },
    { img: Playlist7, title: "Sertanejo" },
    { img: Playlist8, title: "Samba e pagode" },
    { img: Playlist9, title: "Funk" },
    { img: Playlist10, title: "MPB" },
    { img: Playlist11, title: "Rock" },
    { img: Playlist12, title: "Hip Hop" },
    { img: Playlist13, title: "Indie" },
    { img: Playlist14, title: "Relax" },
    { img: Playlist15, title: "Música Latina" },
];

const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:3001';
const Main = ({ searchTerm }) => {
    const [artists, setArtists] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        if (!searchTerm) {
            setArtists([]); // Se não houver termo, esconde a busca
            return;
        }

        setLoading(true);
        fetch(`${API_URL}/artists?name_like=${searchTerm}`)
            .then((response) => response.json())
            .then((data) => {
                setArtists(data);
                setLoading(false);
            })
            .catch((error) => {
                console.error("Houve um erro ao buscar os artistas", error);
                setLoading(false);
            });
    }, [searchTerm]); // Dispara sempre que `searchTerm` mudar

    return (
        <div className="playlist-container">
            {searchTerm ? (
                <div id="result-artist">
                    {loading ? (
                        <p>Carregando...</p>
                    ) : artists.length > 0 ? (
                        <div className="grid-container">
                            {artists.map((artist) => (
                                <div className="artist-card" key={artist.id}>
                                    <div className="card-img">
                                        <img className="artist-img" src={artist.urlImg} alt={artist.name} />
                                        <div className="play">
                                            <span className="fa fa-solid fa-play"></span>
                                        </div>
                                    </div>
                                    <div className="card-text">
                                        <span className="artist-name">{artist.name}</span>
                                        <span className="artist-categorie">Artista</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    ) : (
                        <p>Nenhum artista encontrado</p>
                    )}
                </div>
            ) : (
                <div id="result-playlists">
                    <div className="greeting">
                        <h1 id="greeting__title">Boas Vindas</h1>
                        <h2 className="greeting__subtitle">Navegar por todas as seções</h2>
                    </div>
                    <div className="offer__scroll-container">
                        <div className="offer__list-item">
                            {playlists.map((playlist, index) => (
                                <a key={index} href="http://localhost:3001" className="cards">
                                    <div className={`cards card${index + 1}`}>
                                        <img src={playlist.img} alt={playlist.title} />
                                        <span>{playlist.title}</span>
                                    </div>
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Main;