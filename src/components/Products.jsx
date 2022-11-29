const Products = ({id, thumbnail, deleteItem, title, dateAdded, channel, description}) => {

    return (
        <div className="video-container">
            <div className="video-image">
            <img src={thumbnail} alt="Same alt value" />
            </div>
            <div className="video-info">
            <h3>{title}</h3>
            <button onClick={() => deleteItem(id)}>delete video</button>
            <p>Upload date: {dateAdded}</p>
            <h4>Channel's Title: {channel}</h4>
            <p>{description}</p>
            </div>
        </div>
    );
}

export default Products;