import { Link } from "react-router-dom";
import Button from "../Components/Buttons/ButtonCompo";

function HomePage(){
    return (
        <div className="w-[100vw] h-[100vh] flex justify-center items-center">
            <div className="sm:w-[100%] md:w-[60%] h-[100%] md:flex justify-center items-center gap-5">
                <div className="md: text-2xl text-slate-700 w-[17%] sm: px-2 py-10 sm: w-[250px]">  
                    <h1>What do you want to do?</h1>
                </div>
                <div className="w-[20%] sm: mt-10 w-[35%]">
                    <Link to={'/signin'}>
                        <Button
                            text={"Sign in"}
                            type={"submit"}
                            Disabled={false}
                        />
                    </Link> 
                </div>
                       
                <div className="w-[20%] sm: mt-10 w-[35%]">
                    <Link to={'/signup'}>
                        <Button
                            text={"Sign Up"}
                            type={"submit"}
                            Disabled={false}
                        />
                    </Link> 
                </div>
            </div>
            
                       
        </div>
    );
}

export default HomePage;