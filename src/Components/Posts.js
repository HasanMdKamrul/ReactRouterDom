import { useParams } from 'react-router-dom';

export default function Posts() {
   const {category,topic} = useParams()
  return (
    <div>This is Posts {category} {topic}</div>
  )
}
