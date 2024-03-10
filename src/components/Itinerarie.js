import { Dropdown, DropdownButton, Form } from "react-bootstrap";

const Itinerarie = (props) => {
    return (
        <div>
            <div class="hero-wrap js-fullheight" style={{ height: '465px', backgroundImage: `url('./images/bg_1.jpg')` }}>
                <div class="overlay"></div>
                <div class="container">
                    <div class="row no-gutters slider-text js-fullheight align-items-center justify-content-center" data-scrollax-parent="true"
                        style={{ height: '465px' }}
                    >
                        <div class="col-md-9 text-center ftco-animate" data-scrollax=" properties: { translateY: '70%' }">
                            <p class="breadcrumbs" data-scrollax="properties: { translateY: '30%', opacity: 1.6 }"><span class="mr-2"><a href="index.html">Home</a></span> <span>Itinerarie</span></p>
                            <h1 class="mb-3 bread" data-scrollax="properties: { translateY: '30%', opacity: 1.6 }">Itinerarie</h1>
                        </div>
                    </div>
                </div>
            </div>
            <section class="ftco-section">

                <div class="container">
                    {/* <div class="col-sm-12 hotel-single ftco-animate mb-5 mt-4"> */}
                    <h2 class="mb-5">Lập kế hoạch</h2>
                    {/* </div> */}
                    <div class="table-responsive">
                        <div class="table-wrapper">
                            <div class="table-title">

                                <div class="row">
                                    <div class="col-sm-1">
                                        <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal" >Tạo</button>

                                        {/* modal */}
                                        <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                                            <div class="modal-dialog modal-dialog-centered" role="document">
                                                <div class="modal-content">
                                                    <div class="modal-header">
                                                        <h5 class="modal-title" id="exampleModalLongTitle">Lập kế hoạch</h5>
                                                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                                            <span aria-hidden="true">&times;</span>
                                                        </button>
                                                    </div>

                                                    <form>
                                                        <div class="modal-body">
                                                            <div class="mb-3 mt-4">
                                                                <label for="exampleInputEmail1" class="form-label">Tên kế hoạch</label>

                                                                <input type="text" name="Name" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                                            </div>
                                                            <div class="mb-3">
                                                                <label for="Number" class="form-label">Ngày bắt đầu:   </label>
                                                                <input type="date" name="date" class="date"  required />
                                                            </div>
                                                            <div class="mb-3 mt-4">
                                                                <label for="Number" class="form-label">Ngày kết thúc:   </label>
                                                                <input type="date" name="date" class="date"  required />
                                                            </div>
                                                            <div class="mb-3">
                                                                <label for="exampleInputEmail1" class="form-label">Số lượng người</label>
                                                                <input type="text" name="Name" class="form-control" placeholder="Target" required autocomplete="on" />

                                                            </div>
                                                            <div class="mb-3">
                                                                <label for="exampleInputEmail1" class="form-label">Ngân sách</label>
                                                                <input type="text" name="Name"  class="form-control" placeholder="Target" required autocomplete="on" />

                                                            </div>

                                                            <div class="mb-3">
                                                                <label for="exampleFormControlTextarea1"class="form-label">Ghi chú</label>
                                                                <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                                                            </div>
                                                        </div>
                                                        <div class="modal-footer">
                                                            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                                                            <button type="button" class="btn btn-primary">Save </button>
                                                        </div>
                                                    </form>
                                                </div>
                                            </div>
                                        </div>



                                    </div>
                                    <div class="col-sm-1">
                                        <DropdownButton id="dropdown-basic-button" className="ml-auto" title="Sắp xếp">
                                            <Dropdown.Item href="#/action-1">Mới tới cũ</Dropdown.Item>
                                            <Dropdown.Item href="#/action-2">Cũ tới mới</Dropdown.Item>
                                        </DropdownButton>
                                    </div>
                                    <div class="col-sm-10">
                                        <div class="search-box" >
                                            <input type="text" class="form-control" placeholder="Tìm kiếm" />
                                        </div>
                                    </div>
                                </div>

                            </div>
                            

                            <table class="table table-striped table-hover table-bordered">
                                <thead>
                                    <tr>
                                        <th>#</th>
                                        <th>Tên kế hoạch <i class="fa fa-sort"></i></th>
                                        <th>Ngày bắt đầu</th>
                                        <th>Ngày kết thúc <i class="fa fa-sort"></i></th>
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
                                            <a href="/ItinerarieView" class="view" title="View" data-toggle="tooltip"><i class="material-icons">&#xE417;</i></a>
                                            <a href="#" class="edit" title="Edit" data-toggle="modal" data-target="#exampleModal"><i class="material-icons">&#xE254;</i></a>


                                            <a href="/ItinerarieEdit" class="delete" title="Delete" data-toggle="tooltip"><i class="material-icons">&#xE872;</i></a>
                                        </td>
                                    </tr>

                                </tbody>
                            </table>
                            <div class="clearfix">
                                <div class="hint-text">Showing <b>5</b> out of <b>25</b> entries</div>
                                <ul class="pagination">
                                    <li class="page-item disabled"><a href="#"><i class="fa fa-angle-double-left"></i></a></li>
                                    <li class="page-item"><a href="#" class="page-link">1</a></li>
                                    <li class="page-item"><a href="#" class="page-link">2</a></li>
                                    <li class="page-item active"><a href="#" class="page-link">3</a></li>
                                    <li class="page-item"><a href="#" class="page-link">4</a></li>
                                    <li class="page-item"><a href="#" class="page-link">5</a></li>
                                    <li class="page-item"><a href="#" class="page-link"><i class="fa fa-angle-double-right"></i></a></li>
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