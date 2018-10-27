var Reviews = ({reviewsData}) => {
	return (
		<div>
			{reviewsData}
		</div>
	)
}

export default Reviews;

			// {reviewsData.map((review, i) => 
			// 	<div key="{review.id}">{review.body}</div>
			// )}