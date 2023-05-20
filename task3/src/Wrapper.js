import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';


const Wrapper = () => {

  const [input,setInput] = useState({
    name: "",
    email: "",
    website: "",
    imageLink: "",
    gender: "",
    skill: [],
  });


  const handleOptionChange = (option) => {
    if (input.skill.includes(option)) {
      setInput(input.skill.filter((item) => item !== option));
    } else {
      setInput([...input, input.skill.option]);
    }
  };

  return (
    <div>
      <div className="nav-bar d-flex">
        <h2>STUDENT ENROLLMENT FORM</h2>
    </div>

    <div className="students row">

        <div className="enroll-student col-md">

            <form action="" id="userForm" className="main-form form-check needs-validation" novalidate>
                <div className="form-group row">
                    <label for="name" className="col-sm-2 col-form-label">Name</label>
                    <div className="col-sm-10">
                        <input type="text" className="form-control" minLength="4" id="name" name='name' value={input.name} onChange={handleChange} required />
                        <div className="invalid-feedback">*Please Enter Your Name.</div>

                    </div>
                </div>

                <div className="form-group row">
                    <label for="email" className="col-sm-2 col-form-label">Email</label>
                    <div className="col-sm-10">
                        <input type="email" className="form-control" id="email" name='email' value={input.email} onChange={handleChange} required />
                        <div className="invalid-feedback">*Please Enter a Valid Email Address.</div>
                    </div>
                </div>

                <div className="form-group row">
                    <label for="website" className="col-sm-2 col-form-label">Website</label>
                    <div className="col-sm-10">
                        <input type="url" className="form-control" id="website" name='website' value={input.website} onChange={handleChange} required />
                        <div className="invalid-feedback">*Please Enter Valid link for your website.</div>
                    </div>
                </div>

                <div className="form-group row">
                    <label for="image" className="col-sm-2 col-form-label">Image link</label>
                    <div className="col-sm-10">
                        <input type="url" className="form-control" id="image" name='imageLink' value={input.imageLink} onChange={handleChange} required />
                        <div className="invalid-feedback">*Please Enter Valid link for your image.</div>
                    </div>
                </div>

                <fieldset className="form-group row">
                    <legend className="col-form-label col-sm-2 float-sm-left pt-0">
                        Gender
                    </legend>
                    <div className="col-sm-10">
                        <div className="form-check ">
                            <input className="form-check-input" type="radio" name="gender" id="male" value={input.gender === "Male"}
                                required />
                            <label className="form-check-label" for="male">
                                Male
                            </label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="radio" name="gender" id="female" value={input.gender === "Female"} />
                            <label className="form-check-label" for="female">
                                Female
                            </label>
                            &nbsp;
                            <div className="invalid-feedback">
                                *(Please select at least One.)
                            </div>
                        </div>

                    </div>
                </fieldset>



                <fieldset className="form-group row">
                    <legend className="col-form-label col-sm-2 float-sm-left pt-0">
                        Skills
                    </legend>
                    <div className="col-sm-10">
                        <div className="form-check form-check-inline">
                            <input className="form-check-input" type="checkbox" name="skill" id="java" value={input.skill === "Java"}/>
                            <label className="form-check-label" for="java">
                                Java
                            </label>
                            &nbsp;
                            <div className="invalid-feedback">
                                *(Please make sure that this Box is Checked.)
                            </div>
                        </div>

                        <div className="form-check form-check-inline">
                            <input className="form-check-input" type="checkbox" name="skill" id="html" value={input.skill === "HTML"}/>
                            <label className="form-check-label" for="html">
                                HTML
                            </label>
                            &nbsp;
                            <div className="invalid-feedback">
                                *(Please make sure that this Box is Checked.)
                            </div>
                        </div>

                        <div className="form-check form-check-inline">
                            <input className="form-check-input" type="checkbox" name="skill" id="css" value={input.skill === "CSS"}/>
                            <label className="form-check-label" for="css">
                                CSS
                            </label>
                            &nbsp;
                            <div className="invalid-feedback">
                                *(Please make sure that this Box is Checked.)
                            </div>
                        </div>
                    </div>
                </fieldset>

                <button type="submit" className="btn btn-primary">Enroll Student</button> &nbsp; &nbsp; &nbsp;
                <button type="reset" className="btn btn-danger">Cancel</button>
            </form>
        </div>

        <hr className="seperation-border" />

        <div id="enrolled-students" className="col-md col-12">
            <div className="enroll-heading">
                <h2>Enrolled Students</h2>
            </div>
            <span id="span">*Fill the form to Enroll the Students.</span>
        </div>
    </div>
    </div>
  )
}

export default Wrapper
