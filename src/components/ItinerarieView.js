import { Dropdown, DropdownButton } from "react-bootstrap";
import React, { useState, useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'

const ItinerarieView = (props) => {
    const [name, setName] = useState('');
    const [content, setContent] = useState('');
    const [dateStart, setDateStart] = useState('');
    const [dateEnd, setDateEnd] = useState('');
  
    const [searchParams, setSearchParams] = useSearchParams();
    const itinerarieId = searchParams.get('itinerarie_id');
  
    const [itinerarie, setItinerarie] = useState([]);
  
    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await fetch(`http://127.0.0.1:8080/itineraries/detail/${itinerarieId}`);
          if (response.ok) {
            const itinerarieData = await response.json();
            setItinerarie(itinerarieData);
            setName(itinerarieData.name); // Assign the value to name state variable
            setContent(itinerarieData.content); // Assign the value to content state variable
            setDateStart(itinerarieData.dateStart); // Assign the value to dateStart state variable
            setDateEnd(itinerarieData.dateEnd); // Assign the value to dateEnd state variable
          } else {
            console.log('Failed to fetch itinerary data');
          }
        } catch (error) {
          console.log('Error:', error);
        }
      };
  
      fetchData();
    }, [itinerarieId]);
  
    const handleEdit = async (e) => {
      e.preventDefault();
      
      try {
        const response = await fetch(`http://127.0.0.1:8080/itineraries/edit/${itinerarieId}`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            name: name, // Tên kế hoạch mới
            dateStart: dateStart, // Ngày bắt đầu mới
            dateEnd: dateEnd, // Ngày kết thúc mới
            content: content // Ghi chú mới
          })
        });
  
        if (response.ok) {
          console.log('Update successful');
        } else {
          console.log('Update failed');
        }
      } catch (error) {
        console.log('Error:', error);
      }
    };
  

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


                        <div className="col-lg-3 sidebar order-md-first ftco-animate ">
                            <div className="sidebar-wrap ftco-animate">




                                <form className="container" onSubmit={handleEdit}>
                                    <div className="mb-3 mt-4">
                                        <label htmlFor="exampleInputEmail1" className="form-label">Tên kế hoạch</label>
                                        <input value={name} onChange={e => setName(e.target.value)} className="form-control" placeholder="Tên kế hoạch" />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="dateStart" className="form-label">Ngày bắt đầu:</label>
                                        <input type="date" id="dateStart" className="form-control" value={dateStart} onChange={e => setDateStart(e.target.value)} required />
                                    </div>
                                    <div className="mb-3 mt-4">
                                        <label htmlFor="dateEnd" className="form-label">Ngày kết thúc:</label>
                                        <input type="date" id="dateEnd" className="form-control" value={dateEnd} onChange={e => setDateEnd(e.target.value)} required />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="exampleFormControlTextarea1" className="form-label">Ghi chú</label>
                                        <textarea value={content} onChange={e => setContent(e.target.value)} className="form-control" placeholder="Ghi chú" />
                                    </div>
                                    <div className="modal-footer">
                                        <button type="submit" className="btn btn-primary">Cập nhật</button>
                                    </div>
                                </form>



                            </div>

                        </div>

                        <div className="col-lg-9" >

                            <div className="reservation-form" >
                                {/* <div className="container"> */}
                                <div className="row">
                                    {/* <div className="col-lg-12"> */}

                                    <div id="map">
                                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12469.776493332698!2d-80.14036379941481!3d25.907788681148624!2m3!1f357.26927939317244!2f20.870722720054623!3f0!3m2!1i1024!2i768!4f35!3m3!1m2!1s0x88d9add4b4ac788f%3A0xe77469d09480fcdb!2sSunny%20Isles%20Beach!5e1!3m2!1sen!2sth!4v1642869952544!5m2!1sen!2sth" width="100%" height="450px" frameBorder="0"
                                            allowFullScreen=""
                                        //  style ={{border:0}}
                                        >
                                        </iframe>
                                    </div>
                                    {/* </div> */}

                                </div>
                                {/* </div> */}
                            </div>









                            <div className="row mt-5">
                                <div className="col text-center">
                                    <div className="block-27">
                                        <ul>
                                            <li><a href="#">&lt;</a></li>
                                            <li className="active"><span>1</span></li>
                                            <li><a href="#">2</a></li>
                                            <li><a href="#">3</a></li>
                                            <li><a href="#">4</a></li>
                                            <li><a href="#">5</a></li>
                                            <li><a href="#">&gt;</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div >
            </section >
        </div >
    )
}

export default ItinerarieView;