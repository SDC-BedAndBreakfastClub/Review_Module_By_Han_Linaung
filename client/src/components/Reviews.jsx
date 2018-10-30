var Reviews = ({reviewsData}) => (
	<div>
		{reviewsData.map((review, i) => 
			<div className="review" key={review.id}>{review.body}</div>
		)}
	</div>
)

export default Reviews;