import React from "react";

const SingleComment = ({ name, comment }) => {
    return (
        <div className="commented-section" style={{ fontSize: "larger", marginTop: "30px" }}>
            <div className="commented-user">
                <h5 style={{ fontSize: "25px" }}>{name}</h5>
            </div>
            <div className="comment-text-sm">
                <span>{comment}</span>
            </div>
            <div className="reply-section">
                <div className="voting-icons">
                    <h6>Reply</h6>
                </div>
            </div>
        </div>
    );
};

export default SingleComment;
