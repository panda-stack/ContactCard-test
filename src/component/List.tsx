import Card from "./Card"
interface Props {
  data: any
}

export default function Review(props: Props) {
  const { data } = props;

  return (
    <div>
      {data.map((item: any) => (
        <Card key={item.id} card={item} />
      ))}
    </div>
  )
}