<ul className="row">
  <li className="col-4"></li>
  <li className="col-4">
    <table className="table table-hover">
      <tr>
        <th>rating</th>
        <th>comment</th>
        <th>date</th>
        <th>reviewerName</th>
        <th>reviewerEmail</th>
      </tr>
      <tbody>
        {/* {val.reviews ? (
                  val.reviews.map((review, reviewIndex) => (
                    <tr key={reviewIndex}>
                      <td>{review.rating}</td>
                      <td>{review.comment}</td>
                      <td>{review.date}</td>
                      <td>{review.reviewerName}</td>
                      <td>{review.reviewerEmail}</td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="5">No reviews available</td>
                  </tr>
                )} */}
      </tbody>
    </table>
  </li>
  <li className="col-4"></li>
</ul>;
