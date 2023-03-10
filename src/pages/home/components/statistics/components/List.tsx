import { ListData } from '../constants/list-data'
import Card from './Card'

export default () => {
  return (
    <div className="statistics__list">
      {ListData.map((e) => (
        <Card key={e.title} {...e} />
      ))}
    </div>
  )
}
