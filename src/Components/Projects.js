import { Component } from "react"
import * as React from 'react';
import p1 from '../images/projects/robot.png'
import p2 from '../images/projects/engineering.png'
import p3 from '../images/projects/chip.png'
import man from '../images/projects/man.png'
export default class Projects extends Component{

  
render(){

    
    return(
        <div>

        <div className='Projectdash container '>
        <p className="h3">Top Projects  </p>
            <div className="slidecard card-body">
                <div className="d-flex justify-content-center">
                <img  className="circle img-fluid" src={p1} />
                </div>
                <h5 className="card-title text-center">Email Automation using python</h5>
                <p className="card-text">Sending Email. You may be familiar with sending emails from Outlook or Thunderbird or through a website such as Gmail or Yahoo! Mail. Unfortunately.</p>
                <a type="button" className="btn btn-primary" data-toggle="modal" data-target="#project1">View</a>
            </div>

            <div className="slidecard card-body">
                <div className="d-flex justify-content-center">
                <img  className="circle img-fluid" src={p2} />
                </div>
                <h5 className="card-title text-center">IOT Based Smart Parking System</h5>
                <p className="card-text">The proposed system is used to indicate the user about the vacancy of the parking slots. </p>
                <a type="button" className="btn btn-primary" data-toggle="modal" data-target="#project2">View</a>
            </div>

            <div className="slidecard card-body">
                <div className="d-flex justify-content-center">
                <img  className="circle img-fluid" src={p3} />
                </div>
                <h5 className="card-title text-center">Virtual Assistant Using Python</h5>
                <p className="card-text">Virtual desktop assistant is an awesome thing. If you want your machine to run on your command like Jarvis did for Tony</p>
                <a type="button" className="btn btn-primary" data-toggle="modal" data-target="#project3">View</a>
            </div>
   
        </div>


    
        
        <div className="modal fade" id="project1" tabIndex="-1" aria-labelledby="project1label" aria-hidden="true">
        <div className="modal-dialog">
            <div className="modal-content">
            <div className="d-flex justify-content-center">
                <img  className="circle img-fluid" src={p1} />
                </div>
            <div className="modal-header">
                <h5 className="modal-title" id="project1label">Email Automation using python</h5>
            </div>
            <div className="modal-body">
            In big data scenarios , Email automation is the most important phase after any big data pipeline to send logs, error files, result sets to the business stakeholders for them to analyse the data . It enables you to enhance your email functionality without manually sending out individual emails whenever a task in a big data pipeline runs or fails . Using automated email in your email campaign helps increase engagement and provide a more tailored email experience for your recipients. For example , one can send emails with log files, result sets , validation data to other team members using email functionality in python.
            </div>
            <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                <button type="button" className="btn btn-primary">Buy</button>
            </div>
            </div>
        </div>
        </div>

        <div className="modal fade" id="project2" tabIndex="-1" aria-labelledby="project1label1" aria-hidden="true">
        <div className="modal-dialog">
            <div className="modal-content">
            <div className="d-flex justify-content-center">
                <img  className="circle img-fluid" src={p1} />
                </div>
            <div className="modal-header">
                <h5 className="modal-title" id="project1label1">IOT Based Smart Parking System</h5>
            </div>
            <div className="modal-body">
            The process flow of the smart parking system when users start initialization through mobile application.
            Users are required to key-in important details such as name, vehicle’s plate number and contact number.
            Figure 4 shows the layout of the Android Application for the login page.
            </div>
            <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                <button type="button" className="btn btn-primary">Buy</button>
            </div>
            </div>
        </div>
        </div>

        <div className="modal fade" id="project3" tabIndex="-1" aria-labelledby="project1label2" aria-hidden="true">
        <div className="modal-dialog">
            <div className="modal-content">
            <div className="d-flex justify-content-center">
                <img  className="circle img-fluid" src={p1} />
                </div>
            <div className="modal-header">
                <h5 className="modal-title" id="project1label2">AI Virtual Assistant Using Python </h5>
            </div>
            <div className="modal-body">
            Virtual desktop assistant is an awesome thing. If you want your machine to run on your command like Jarvis did for Tony. Yes it is possible. It is possible using Python. Python offers a good major library so that we can use it for making a virtual assistant. Windows has Sapi5 and Linux has Espeak which can help us in having the voice from our machine. It is a weak A.I.
            </div>
            <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                <button type="button" className="btn btn-primary">Buy</button>
            </div>
            </div>
        </div>
        </div>
       
        <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
        <p className="h3">Top Performer</p>
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <div className="row gx-5">
                        <div className="col">
                            <div className="profile card-body">
                            <div className="d-flex justify-content-center">
                            <img  className="pic img-fluid" src={man} />
                            </div>
                            <h5 className="card-title text-center">Name</h5>
                            <p className="card-text">Hello hi sjdkjdvnmm,asjyhbsdui </p>
                        </div>
                        </div>
                        <div className="col">
                            <div className="profile card-body">
                            <div className="d-flex justify-content-center">
                            <img  className="pic img-fluid" src={man} />
                            </div>
                            <h5 className="card-title text-center">Name</h5>
                            <p className="card-text">Hello hi sjdkjdvnmm,asjyhbsdui </p>
                        </div>
                        </div>
                        <div className="col">
                        <div className="profile card-body">
                            <div className="d-flex justify-content-center">
                            <img  className="pic img-fluid" src={man} />
                            </div>
                            <h5 className="card-title text-center">Name</h5>
                            <p className="card-text">Hello hi sjdkjdvnmm,asjyhbsdui </p>
                        </div>
                        </div>
                    </div>
                
                    
                </div>
                <div className="carousel-item">
                <div className="row gx-5">
                        <div className="col">
                            <div className="profile card-body">
                            <div className="d-flex justify-content-center">
                            <img  className="pic img-fluid" src={man} />
                            </div>
                            <h5 className="card-title text-center">Name</h5>
                            <p className="card-text">Hello hi sjdkjdvnmm,asjyhbsdui </p>
                        </div>
                        </div>
                        <div className="col">
                            <div className="profile card-body">
                            <div className="d-flex justify-content-center">
                            <img  className="pic img-fluid" src={man} />
                            </div>
                            <h5 className="card-title text-center">Name</h5>
                            <p className="card-text">Hello hi sjdkjdvnmm,asjyhbsdui </p>
                        </div>
                        </div>
                        <div className="col">
                        <div className="profile card-body">
                            <div className="d-flex justify-content-center">
                            <img  className="pic img-fluid" src={man} />
                            </div>
                            <h5 className="card-title text-center">Name</h5>
                            <p className="card-text">Hello hi sjdkjdvnmm,asjyhbsdui </p>
                        </div>
                        </div>
                    </div>
                </div>
                <div className="carousel-item">
                <div className="row gx-5">
                        <div className="col">
                            <div className="profile card-body">
                            <div className="d-flex justify-content-center">
                            <img  className="pic img-fluid" src={man} />
                            </div>
                            <h5 className="card-title text-center">Name</h5>
                            <p className="card-text">Hello hi sjdkjdvnmm,asjyhbsdui </p>
                        </div>
                        </div>
                        <div className="col">
                            <div className="profile card-body">
                            <div className="d-flex justify-content-center">
                            <img  className="pic img-fluid" src={man} />
                            </div>
                            <h5 className="card-title text-center">Name</h5>
                            <p className="card-text">Hello hi sjdkjdvnmm,asjyhbsdui </p>
                        </div>
                        </div>
                        <div className  ="col">
                        <div className="profile card-body">
                            <div className="d-flex justify-content-center">
                            <img  className="pic img-fluid" src={man} />
                            </div>
                            <h5 className="card-title text-center">Name</h5>
                            <p className="card-text">Hello hi sjdkjdvnmm,asjyhbsdui </p>
                        </div>
                        </div>
                    </div>
                </div>
                <div className="carousel-item">
                <div className="row gx-5">
                        <div className="col">
                            <div className="profile card-body">
                            <div className="d-flex justify-content-center">
                            <img  className="pic img-fluid" src={man} />
                            </div>
                            <h5 className="card-title text-center">Name</h5>
                            <p className="card-text">Hello hi sjdkjdvnmm,asjyhbsdui </p>
                        </div>
                        </div>
                        <div className="col">
                            <div className="profile card-body">
                            <div className="d-flex justify-content-center">
                            <img  className="pic img-fluid" src={man} />
                            </div>
                            <h5 className="card-title text-center">Name</h5>
                            <p className="card-text">Hello hi sjdkjdvnmm,asjyhbsdui </p>
                        </div>
                        </div>
                        <div className="col">
                        <div className="profile card-body">
                            <div className="d-flex justify-content-center">
                            <img  className="pic img-fluid" src={man} />
                            </div>
                            <h5 className="card-title text-center">Name</h5>
                            <p className="card-text">Hello hi sjdkjdvnmm,asjyhbsdui </p>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
            <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="sr-only">Previous</span>
            </a>
            <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="sr-only">Next</span>
            </a>
        </div>




    </div>




    )
}

}