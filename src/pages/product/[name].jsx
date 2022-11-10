import { useRouter } from 'next/router'
import Image from 'next/image'

const Post = () => {
	const router = useRouter()
	const { name } = router.query

	return (
		<div className="card mb-3 max-w-md mx-auto">
			<div className="row g-0">
				<div className="col-md-4">
					<Image src="https://placeimg.com/400/300" className='tw-w-full tw-h-full tw-object-cover card-img-top' width="400" height="300" alt="..." />
				</div>
				<div className="col-md-8">
					<div className="card-body">
						<h5 className="card-title">{name}</h5>
						<p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
						<p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Post