import { useEffect, useState } from "react";
import Button from "../Buttons/ButtonCompo";
import InputFeild from "../Inputs/InputCompo";
import { Link } from "react-router-dom";

function SignUpCard({title}){

    const [pageNo,setPageNo] = useState(0);

    const [formData,setFormData] = useState({
        FirstName : "",
        LastName : "",
        Email: "",
        Password: "",
        ConfirmPass: ""
    });

    useEffect(()=>{

    },[pageNo]);

    function changePage(){
        if(pageNo == 0) setPageNo(1);
        else setPageNo(0);
    }

    const handleChange = (e)=>{
        const {name , value} = e.target;
        setFormData({...formData, [name] : value});
    }

    const handleSubmit = async (e) =>{
        alert("Do you want to submit the form")
    }
    return(
        <form>        
        <div className="shadow-md shadow-gray-600 border-slate-400 border-l-2 border-b-2 rounded-2xl sm: w-[80vw] h-[80vh]  md:w-[30vw] h-[70vh]">
            <div className="flex justify-center">
                <h1
                    className="text-2xl w-full h-[10vh] flex justify-center items-center underline underline-offset-[18px]"
                >
                    {title}
                </h1>
            </div>
            
            {pageNo == 0 && <div className="mt-10 flex justify-center">
                                <InputFeild 
                                    type={"text"}
                                    name={"FirstName"} 
                                    value={formData.FirstName}  
                                    placeholder={"First Name"} 
                                    isReq={true}
                                    onChangeHandler={handleChange}
                                    />
                            </div>
            }
            
            {pageNo == 0 && <div className="mt-5 flex justify-center">
                                <InputFeild type={"text"} 
                                    name={"LastName"} 
                                    value={formData.LastName}  
                                    placeholder={"Last Name"} 
                                    isReq={true}
                                    onChangeHandler={handleChange}
                                    />
                            </div> 
            }
            
            {pageNo == 1 && <div className="mt-10 flex justify-center">
                                <InputFeild 
                                    type={"email"} 
                                    name={"Email"} 
                                    value={formData.Email} 
                                    placeholder={"Email"} 
                                    isReq={true}
                                    onChangeHandler={handleChange}
                                    />
                            </div>
            }         
            
            {pageNo == 1 && <div className="mt-5 flex justify-center">
                                <InputFeild 
                                    type={"password"} 
                                    name={"Password"} 
                                    value={formData.Password} 
                                    placeholder={"Password"} 
                                    isReq={true}
                                    onChangeHandler={handleChange}
                                    />                
                            </div>
            }
            
            {pageNo == 1 && <div className="mt-5 flex justify-center">
                                <InputFeild 
                                    type={"password"} 
                                    name={"ConfirmPass"} 
                                    value={formData.ConfirmPass} 
                                    placeholder={"Confirm password"} 
                                    isReq={true}
                                    onChangeHandler={handleChange}
                                    />                
                            </div>
            }            

            <div className="w-[100%] flex justify-center gap-5 mt-10 px-2">
                <div className="w-[40%] mt-2">
                    <Button 
                        text={pageNo == 0 ? "Next" : "Prev"}
                        onClickHandler={changePage}
                    />                
                </div>
                {pageNo == 1 &&  <div className="w-[60%] mt-2">
                    <Button 
                        type={"submit"}
                        Disabled={pageNo == 0}
                        text={"Sign Up"}
                        onClickHandler={handleSubmit}
                    />
                </div> }
                
            </div>

            {pageNo == 0 && <Link to={'/signin'}>
                                <p className="text-sm text-blue-500 mt-2 flex justify-center">
                                    Already have account ? sign in here
                                </p>
                            </Link>
                            
            }               
            
        </div>
        </form>
    )
}

export default SignUpCard;