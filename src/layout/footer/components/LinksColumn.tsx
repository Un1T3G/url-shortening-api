import { LinksData } from "../constants/link-data"
import LinkList from "./LinkList"

export default () => {
    return <div className="footer__column links-column">
        {LinksData.map(e => <LinkList key={e.label} {...e}/>)}
    </div>
}