
function Card(props){
    return (
        <li className="card_list">
            <div className="card_img">
                <img src={props.mimg} alt={props.mtit} />
            </div>
            <div>
                <span className="card_age">{props.mage}</span>
                <h3 className="card_tit">{props.mtit}</h3>
            </div>
            <div>
                <span className="card_rate">메뉴{props.mrate}</span>
                <span className="card_date">요거트{props.mdate}</span>
            </div>
            <div className="card_btn">
                <button>{props.mheart}</button>
                <a href="#">장바구니 담기</a>
            </div>
        </li>
    );
}