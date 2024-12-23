import { useState } from "react";
import Button from "../Buttons/ButtonCompo";
import InputFeild from "../Inputs/InputCompo";
import { Link } from "react-router-dom";

function LoginCard({title}){

    const [formData,setFormData] = useState({
        Email : "",
        Password : ""
    });

    const onChangeHandler = (e)=>{
        const {name , value} = e.target
        setFormData({
            ...formData,
            [name] : value
        });
    }

    const onSubmitHandler = async (e) =>{
        alert("Do you wnat to submit the form");
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
            
            <div className="w-[100%] mt-10 flex justify-center">
                <InputFeild 
                    type={"email"} 
                    name={"Email"}
                    value={formData.Email}
                    placeholder={"Enter your email here"} 
                    onChangeHandler={onChangeHandler}
                    isReq={true}/>
            </div>
           
            <div className="mt-10 flex justify-center">
                <InputFeild 
                    type={"password"} 
                    name={"Password"}
                    value={formData.Password}
                    placeholder={"Enter your password here"} 
                    onChangeHandler={onChangeHandler}
                    isReq={true}/>                
            </div>

            <div className="w-[100%] flex justify-center mt-10">
                <div className="w-[60%]">
                    <Button 
                        text={"Login"}
                        type={"submit"}
                        Disabled={false}
                        onClickHandler={onSubmitHandler}
                    />
                </div>
                
            </div>

            <div className="mt-2 flex justify-center">
                <p className="text-sm text-blue-500">Forget password?</p>
            </div>

            <Link to={'/signup'}>
                <div className="flex justify-center">
                    <p className="text-sm text-blue-500">Don't have an account? Create one!</p>                
                </div>
            </Link>
                       
            
        </div>
        </form>
    );
}

export default LoginCard;