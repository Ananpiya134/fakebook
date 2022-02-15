function Spinner() {
    return (
        <div
            className={`d-flex align-items-center justify-content-center offcanvas-backdrop show`}
            style={{ zIndex: 1100 }}
        >
            <div className="spinner-border text-warning" style={{ width: "3rem", height: "3rem" }}></div>
            <span className="text-warning ms-3">Please wait</span>
        </div>)

}

export default Spinner;