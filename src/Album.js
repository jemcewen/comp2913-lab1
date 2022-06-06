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
                            <span style={{fontSize: "22px"}}>{track}</span>
                            <img src={play} style={{width: "16px", marginLeft: "5px"}} alt="play"/>
                        </li>
                    </>
                    
                ))}
            </ol>
        </div>
    );
}