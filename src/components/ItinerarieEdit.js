
const ItinerarieEdit = (props) => {
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
                    <div className="row">

                    


                        <div className="col-md-12 hotel-single ftco-animate mb-5 mt-4">
                            <h4 className="mb-5">Make travel plans</h4>
                            <div className="fields">
                                <form id="reservation-form" name="gs" method="submit" role="search" action="#">
                                    <div className="row">
                                        <div className="col-md-12">
                                            <div className="form-group">
                                                <input type="text" name="Name" value="Đi biển" className="form-control" placeholder="Target" required autocomplete="on" />

                                            </div>
                                        </div>




                                        <div className="col-md-6">
                                            <div className="form-group">

                                                <label htmlFor="Number" className="form-label">Check Out Date</label>
                                                <input type="date" name="date" className="date" value="2023-07-01" required />
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <label htmlFor="Number" className="form-label">Check Out Date</label>
                                                <input type="date" name="date" className="date" value="2023-07-22" required />
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <div className="select-wrap one-third">
                                                    <div className="icon"><span className="ion-ios-arrow-down"></span></div>
                                                    <select name="" id="" className="form-control" placeholder="Guest" value="2">
                                                        <option value="0">Guest</option>
                                                        <option value="1">1</option>
                                                        <option value="2">2</option>
                                                        <option value="3">3</option>
                                                        <option value="4">4</option>
                                                    </select>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <div className="select-wrap one-third">
                                                    <div className="icon"><span className="ion-ios-arrow-down"></span></div>
                                                    <select name="" id="" className="form-control" placeholder="Children" value="2">
                                                        <option value="0">Children</option>
                                                        <option value="1">1</option>
                                                        <option value="2">2</option>
                                                        <option value="3">3</option>
                                                        <option value="4">4</option>
                                                    </select>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-12">
                                            <div className="form-group">

                                            <input type="submit" className="btn btn-primary py-3" value="Edit"/>
                                            </div>
                                        </div>
                                      
                                    </div>
                                </form>
                            </div>
                        </div>

                    </div>
                </div >
                
            </section >

          

        </div >
    )
}

export default ItinerarieEdit;