
const ItinerarieEdit = (props) => {
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
                    <div class="row">

                    


                        <div class="col-md-12 hotel-single ftco-animate mb-5 mt-4">
                            <h4 class="mb-5">Make travel plans</h4>
                            <div class="fields">
                                <form id="reservation-form" name="gs" method="submit" role="search" action="#">
                                    <div class="row">
                                        <div class="col-md-12">
                                            <div class="form-group">
                                                <input type="text" name="Name" value="Đi biển" class="form-control" placeholder="Target" required autocomplete="on" />

                                            </div>
                                        </div>




                                        <div class="col-md-6">
                                            <div class="form-group">

                                                <label for="Number" class="form-label">Check Out Date</label>
                                                <input type="date" name="date" class="date" value="2023-07-01" required />
                                            </div>
                                        </div>
                                        <div class="col-md-6">
                                            <div class="form-group">
                                                <label for="Number" class="form-label">Check Out Date</label>
                                                <input type="date" name="date" class="date" value="2023-07-22" required />
                                            </div>
                                        </div>
                                        <div class="col-md-6">
                                            <div class="form-group">
                                                <div class="select-wrap one-third">
                                                    <div class="icon"><span class="ion-ios-arrow-down"></span></div>
                                                    <select name="" id="" class="form-control" placeholder="Guest" value="2">
                                                        <option value="0">Guest</option>
                                                        <option value="1">1</option>
                                                        <option value="2">2</option>
                                                        <option value="3">3</option>
                                                        <option value="4">4</option>
                                                    </select>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-6">
                                            <div class="form-group">
                                                <div class="select-wrap one-third">
                                                    <div class="icon"><span class="ion-ios-arrow-down"></span></div>
                                                    <select name="" id="" class="form-control" placeholder="Children" value="2">
                                                        <option value="0">Children</option>
                                                        <option value="1">1</option>
                                                        <option value="2">2</option>
                                                        <option value="3">3</option>
                                                        <option value="4">4</option>
                                                    </select>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-12">
                                            <div class="form-group">

                                            <input type="submit" class="btn btn-primary py-3" value="Edit"/>
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