import Tag from './Tag'
import data from './data.json'
const Tags = () => {
	const { tags } = data
	return (
		<>
			{tags.map((tagItem, i) => {
				return <Tag key={i} tagItems={tagItem} data={data} />
			})}
		</>
	)
}

export default Tags
