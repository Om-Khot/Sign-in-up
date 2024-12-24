import { useEffect, useState } from "react";
import Button from "../Buttons/ButtonCompo";
import InputFeild from "../Inputs/InputCompo";
import { Link } from "react-router-dom";
import { registerUser } from "../../Helpers/APIFunctions";
import { useNavigate } from "react-router-dom";

function SignUpCard({title}){

    const [pageNo,setPageNo] = useState(0);

    const [formData,setFormData] = useState({
        firstName : "",
        lastName : "",
        email: "",
        password: "",
        confirmPass: ""
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

    const navigate = useNavigate();
    const handleSubmit = async (e) =>{
        // alert("Do you want to submit the form");
        e.preventDefault();
        try {
            const response = await registerUser(formData);
            console.log("Response is :",response.data);
            const msg = "Successfully created an account";
            navigate(`/result/${msg}`);
        } catch (error) {
            console.error('Registration Error:', error.response.data.error);
            const msg = error.response.data.error;
            navigate(`/result/${msg}`);
        }
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
                                    name={"firstName"} 
                                    value={formData.firstName}  
                                    placeholder={"First Name"} 
                                    isReq={true}
                                    onChangeHandler={handleChange}
                                    />
                            </div>
            }
            
            {pageNo == 0 && <div className="mt-5 flex justify-center">
                                <InputFeild type={"text"} 
                                    name={"lastName"} 
                                    value={formData.lastName}  
                                    placeholder={"Last Name"} 
                                    isReq={true}
                                    onChangeHandler={handleChange}
                                    />
                            </div> 
            }
            
            {pageNo == 1 && <div className="mt-10 flex justify-center">
                                <InputFeild 
                                    type={"email"} 
                                    name={"email"} 
                                    value={formData.email} 
                                    placeholder={"Email"} 
                                    isReq={true}
                                    onChangeHandler={handleChange}
                                    />
                            </div>
            }         
            
            {pageNo == 1 && <div className="mt-5 flex justify-center">
                                <InputFeild 
                                    type={"password"} 
                                    name={"password"} 
                                    value={formData.password} 
                                    placeholder={"Password"} 
                                    isReq={true}
                                    onChangeHandler={handleChange}
                                    />                
                            </div>
            }
            
            {pageNo == 1 && <div className="mt-5 flex justify-center">
                                <InputFeild 
                                    type={"password"} 
                                    name={"confirmPass"} 
                                    value={formData.confirmPass} 
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