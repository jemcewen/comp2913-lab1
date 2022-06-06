export default function AlbumList (props) {

    const style = {
        width: "100px",
        borderRadius: "50%"
    };

    const {name, coverImg} = props;

    return (
        <div>
            <img src={coverImg} style={style} alt={name}/>
            <span>{name}</span>
        </div>
    );
}