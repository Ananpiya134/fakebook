function PostForm() {

    return (
        <>
            <div className="card mb-3 p-3">

                <div className="position-relative d-flex align-items-center">
                    <img
                        src="https://images.pexels.com/photos/698532/pexels-photo-698532.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                        width="50"
                        height="50"
                        className="rounded-circle me-2"
                        alt="user"
                    />
                    <input
                        type="text"
                        className="form-control rounded-pill d-inline"
                        placeholder="What's on your mind?"
                    />
                    <div
                        className="position-absolute"
                        style={{
                            top: '50%',
                            right: 13,
                            transform: 'translateY(-50%)'
                        }}
                    >
                        <i className="fa fa-camera text-muted"></i>
                    </div>
                </div>
            </div>

            <div className="modal">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">Create Post</h5>
                            <button
                                type="button"
                                className="btn-close"
                                data-bs-dismiss="modal"
                            ></button>
                        </div>
                        <div className="modal-body">
                            <div className="mb-5">
                                <textarea
                                    className="form-control mb-3"
                                    rows="3"
                                    placeholder="What's on your mind?"
                                />

                                <div className="input-group mt-3">
                                    <input type="file" className="form-control" />
                                    <button className="btn btn-outline-danger" type="button">
                                        Remove
                                    </button>
                                </div>
                            </div>
                            <div className="d-grid">
                                <button type="button" className="btn btn-primary">
                                    Post
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>

    );
}

export default PostForm;