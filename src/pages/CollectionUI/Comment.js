import React, { useState } from "react";
import SingleComment from "./SingleComment";

const Comment = () => {
    const [isName, setName] = useState("");
    const [isComment, setComment] = useState("");
    const [value, setValue] = useState([]);

    const handleSubmit = (e) => {
        e.preventDefault();
        setValue([...value, { name: isName, comment: isComment }]);
    };

    return (
        <div style={{ width: "100%" }}>
            <div>
                <form onSubmit={handleSubmit}>
                    <div className="coment-bottom">
                        <div className="add-comment-section">
                            <input
                                type="text"
                                className="form-control comment__input"
                                placeholder="Your Name"
                                onChange={(e) => setName(e.target.value)}
                            />
                            <input
                                type="text"
                                className="form-control name__input"
                                placeholder="Add comment"
                                onChange={(e) => setComment(e.target.value)}
                            />
                            <button
                                className="btn btn-primary"
                                type="submit"
                                onSubmit={handleSubmit}
                            >
                                Comment
                            </button>
                        </div>
                        {value.length !== 0 ? (
                            value.map((data, i) => (
                                <SingleComment key={i} name={data.name} comment={data.comment} />
                            ))
                        ) : (
                            <h1 style={{ color: "white" }}>No Comments</h1>
                        )}
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Comment;
