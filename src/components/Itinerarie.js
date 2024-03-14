import { Dropdown, DropdownButton, Form } from "react-bootstrap";

const Itinerarie = (props) => {
    return (
        <div>
            <div className="hero-wrap js-fullheight" style={{ height: '465px', backgroundImage: `url('./images/bg_1.jpg')` }}>
                <div className="overlay"></div>
                <div className="container">
                    <div className="row no-gutters slider-text js-fullheight align-items-center justify-content-center" data-scrollax-parent="true"
                        style={{ height: '465px' }}
                    >
                        <div className="col-md-9 text-center ftco-animate" data-scrollax=" properties: { translateY: '70%' }">
                            <p className="breadcrumbs" data-scrollax="properties: { translateY: '30%', opacity: 1.6 }"><span className="mr-2"><a href="index.html">Home</a></span> <span>Itinerarie</span></p>
                            <h1 className="mb-3 bread" data-scrollax="properties: { translateY: '30%', opacity: 1.6 }">Itinerarie</h1>
                        </div>
                    </div>
                </div>
            </div>
            <section className="ftco-section">

                <div className="container">
                    {/* <div className="col-sm-12 hotel-single ftco-animate mb-5 mt-4"> */}
                    <h2 className="mb-5">Lập kế hoạch</h2>
                    {/* </div> */}
                    <div className="table-responsive">
                        <div className="table-wrapper">
                            <div className="table-title">

                                <div className="row">
                                    <div className="col-sm-1">
                                        <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#exampleModal" >Tạo</button>

                                        {/* modal */}
                                        <div className="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                                            <div className="modal-dialog modal-dialog-centered" role="document">
                                                <div className="modal-content">
                                                    <div className="modal-header">
                                                        <h5 className="modal-title" id="exampleModalLongTitle">Lập kế hoạch</h5>
                                                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                                            <span aria-hidden="true">&times;</span>
                                                        </button>
                                                    </div>

                                                    <form>
                                                        <div className="modal-body">
                                                            <div className="mb-3 mt-4">
                                                                <label htmlFor="exampleInputEmail1" className="form-label">Tên kế hoạch</label>

                                                                <input type="text" name="Name" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                                            </div>
                                                            <div className="mb-3">
                                                                <label htmlFor="Number" className="form-label">Ngày bắt đầu:   </label>
                                                                <input type="date" name="date" className="date"  required />
                                                            </div>
                                                            <div className="mb-3 mt-4">
                                                                <label htmlFor="Number" className="form-label">Ngày kết thúc:   </label>
                                                                <input type="date" name="date" className="date"  required />
                                                            </div>
                                                            <div className="mb-3">
                                                                <label htmlFor="exampleInputEmail1" className="form-label">Số lượng người</label>
                                                                <input type="text" name="Name" className="form-control" placeholder="Target" required autocomplete="on" />

                                                            </div>
                                                            <div className="mb-3">
                                                                <label htmlFor="exampleInputEmail1" className="form-label">Ngân sách</label>
                                                                <input type="text" name="Name"  className="form-control" placeholder="Target" required autocomplete="on" />

                                                            </div>

                                                            <div className="mb-3">
                                                                <label htmlFor="exampleFormControlTextarea1"className="form-label">Ghi chú</label>
                                                                <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                                                            </div>
                                                        </div>
                                                        <div className="modal-footer">
                                                            <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                                                            <button type="button" className="btn btn-primary">Save </button>
                                                        </div>
                                                    </form>
                                                </div>
                                            </div>
                                        </div>



                                    </div>
                                    <div className="col-sm-1">
                                        <DropdownButton id="dropdown-basic-button" className="ml-auto" title="Sắp xếp">
                                            <Dropdown.Item href="#/action-1">Mới tới cũ</Dropdown.Item>
                                            <Dropdown.Item href="#/action-2">Cũ tới mới</Dropdown.Item>
                                        </DropdownButton>
                                    </div>
                                    <div className="col-sm-10">
                                        <div className="search-box" >
                                            <input type="text" className="form-control" placeholder="Tìm kiếm" />
                                        </div>
                                    </div>
                                </div>

                            </div>
                            

                            <table className="table table-striped table-hover table-bordered">
                                <thead>
                                    <tr>
                                        <th>#</th>
                                        <th>Tên kế hoạch <i className="fa fa-sort"></i></th>
                                        <th>Ngày bắt đầu</th>
                                        <th>Ngày kết thúc <i className="fa fa-sort"></i></th>
                                        <th>Số lượng người</th>
                                        <th>Ngân sách</th>
                                        <th>Hành động</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>1</td>
                                        <td>Nghỉ hè</td>
                                        <td>1/1/2024</td>
                                        <td>1/2/2024</td>
                                        <td>2</td>
                                        <td>2000000</td>
                                        <td>
                                            <a href="/ItinerarieView" className="view" title="View" data-toggle="tooltip"><i className="material-icons">&#xE417;</i></a>
                                            <a href="#" className="edit" title="Edit" data-toggle="modal" data-target="#exampleModal"><i className="material-icons">&#xE254;</i></a>


                                            <a href="/ItinerarieEdit" className="delete" title="Delete" data-toggle="tooltip"><i className="material-icons">&#xE872;</i></a>
                                        </td>
                                    </tr>

                                </tbody>
                            </table>
                            <div className="clearfix">
                                <div className="hint-text">Showing <b>5</b> out of <b>25</b> entries</div>
                                <ul className="pagination">
                                    <li className="page-item disabled"><a href="#"><i className="fa fa-angle-double-left"></i></a></li>
                                    <li className="page-item"><a href="#" className="page-link">1</a></li>
                                    <li className="page-item"><a href="#" className="page-link">2</a></li>
                                    <li className="page-item active"><a href="#" className="page-link">3</a></li>
                                    <li className="page-item"><a href="#" className="page-link">4</a></li>
                                    <li className="page-item"><a href="#" className="page-link">5</a></li>
                                    <li className="page-item"><a href="#" className="page-link"><i className="fa fa-angle-double-right"></i></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section >



        </div >
    )
}

export default Itinerarie;