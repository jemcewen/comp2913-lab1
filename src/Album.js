import albums from "./data";
import play from './play.svg';


export default function Album () {

    const {coverImg, name, tracks} = albums[0];

    return (
        <div style={{display:"flex"}}>
            <img src={coverImg} alt={name}/>
            <ol>
                { tracks.map( (track) => (
                    <>
                        <li key={track}>
                            <div style={{display:"flex", alignItems:"center"}}>
                                <span style={{fontSize: "20px"}}>{track}</span>
                                <img src={play} style={{width: "20px", marginLeft: "5px"}} alt="play"/>
                            </div>
                        </li>
                    </>
                    
                ))}
            </ol>
        </div>
    );
}