export default function AlbumList (props) {

    const imageStyle = {
        width: "60px",
        borderRadius: "50%",
        margin: "20px 10px 0 0"
    };

    const divStyle = {
        display: "flex",
        alignItems: "center"
    }

    const {name, coverImg} = props;

    return (
        <div style={divStyle}>
            <img src={coverImg} style={imageStyle} alt={name}/>
            <span>{name}</span>
        </div>
    );
}