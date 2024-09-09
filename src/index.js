import ReactDOM from 'react-dom/client';
import './index.css';
import { React, useState } from "react";

  
  function Header() {
    return (
        <header>
            <nav>
                <img src="./logo512.png" width="40px" alt="react-logo" />
            </nav>
        </header>
    )
}

function Footer() {
    return (
        <footer>
            <small>© 2024 Alexves development. No rights reserved.</small>
        </footer>
    )
}



function MainContent() {
    return (
        <div>
            <h1 className='myHeader'>Reasons I'm excited to learn React</h1>
            <ol>
                <li>It's a popular library, so I'll be 
                able to fit in with the cool kids!</li>
                <li>I'm more likely to get a job as a developer
                if I know React</li>
            </ol>
        </div>
    )
}

function Page() {
    return (
        <div>
            <Header />
            <MainContent />
            <Form />
            <Footer />
            
        </div>
    )
}


function Form() {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [contact, setContact] = useState("");
    const [gender, setGender] = useState("male");
    const [subjects, setSubjects] = useState({
        english : true,
        maths : false,
        physics : false,
    });
    const [resume,setResume] = useState("");
    const [url, setUrl] = useState();
    const [selectedOption, setSelectedOption] = useState("");
    const [about, setAbout] = useState("");

   const handleReset = () => {
    setFirstName("");
    setLastName("");
    setEmail("");
    setContact("");
    setGender("male");
    setSubjects({
        english : true,
        maths : false,
        physics : false,
    });
    setResume("");
    setUrl("")
    setSelectedOption("");
    setAbout("");
    };

    const handleSubmit = (e) => {
        console.log(
            firstName,
            lastName,
            email,
            contact,
            gender,
            selectedOption,
            subjects,
            resume,
            url,
            about
        );
        // Add your form submission logic here
    };

        const handleSubjectChange = (sub) => {
            setSubjects((prev) => ({
                ...prev,
                [sub]: !prev[sub],
            }));
    }

    return (
        <div className="App">
            <h1>Form in React</h1>
            <fieldset>
                <form action="#" method="get">
                    <label htmlFor="firstname">
                        First Name*
                    </label>
                    <input
                        type="text"
                        name="firstname"
                        id="firstname"
                        value={firstName}
                        onChange={(e) =>
                            setFirstName(e.target.value)
                        }
                        placeholder="Enter First Name"
                        required
                    />
                    <label htmlFor="lastname">Last Name*</label>
                    <input
                        type="text"
                        name="lastname"
                        id="lastname"
                        value={lastName}
                        onChange={(e) =>
                            setLastName(e.target.value)
                        }
                        placeholder="Enter Last Name"
                        required
                    />
                    <label htmlFor="email">Enter Email* </label>
                    <input
                        type="email"
                        name="email"
                        id="email"
                        value={email}
                        onChange={(e) =>
                            setEmail(e.target.value)
                        }
                        placeholder="Enter email"
                        required
                    />
                    <label htmlFor="tel">Contact*</label>
                    <input
                        type="tel"
                        name="contact"
                        id="contact"
                        value={contact}
                        onChange={(e) =>
                            setContact(e.target.value)
                        }
                        placeholder="Enter Mobile number"
                        required
                    />
                    <label htmlFor="gender">Gender*</label>
                    <input
                        type="radio"
                        name="gender"
                        value="male"
                        id="male"
                        checked={gender === "male"}
                        onChange={(e) =>
                            setGender(e.target.value)
                        }
                    />
                    Male
                    <input
                        type="radio"
                        name="gender"
                        value="female"
                        id="female"
                        checked={gender === "female"}
                        onChange={(e) =>
                            setGender(e.target.value)
                        }
                    />
                    Female
                    <input
                        type="radio"
                        name="gender"
                        value="other"
                        id="other"
                        checked={gender === "other"}
                        onChange={(e) =>
                            setGender(e.target.value)
                        }
                    />
                    Other
                    <label htmlFor="lang">
                        Your best Subject
                    </label>
                    <input
                        type="checkbox"
                        name="lang"
                        id="english"
                        checked={subjects.english === true}
                        onChange={(e) =>
                            handleSubjectChange("english")
                        }
                    />
                    English
                    <input
                        type="checkbox"
                        name="lang"
                        id="maths"
                        checked={subjects.maths === true}
                        onChange={(e) =>
                            handleSubjectChange("maths")
                        }
                    />
                    Maths
                    <input
                        type="checkbox"
                        name="lang"
                        id="physics"
                        checked={subjects.physics === true}
                        onChange={(e) =>
                            handleSubjectChange("physics")
                        }
                    />
                    Physics
                    <label htmlFor="file">Upload Resume*</label>
                    <input
                        type="file"
                        name="file"
                        id="file"
                        onChange={(e) =>
                            setResume(e.target.value)
                        }
                        placeholder="Enter Upload File"
                        required
                    />
                    <label htmlFor="url">Enter URL*</label>
                    <input
                        type="url"
                        name="url"
                        id="url"
                        onChange={(e) =>
                           setUrl(e.target.value)
                        }
                        placeholder="Enter url"
                        required
                    />
                    <label>Select your choice</label>
                    <select
                        name="select"
                        id="select"
                        value={selectedOption}
                        onChange={(e) =>
                                setSelectedOption(e.target.value)
                        }
                    >
                        <option
                            value=""
                            disabled
                            selected={selectedOption === ""}
                        >
                            Select your Ans
                        </option>
                        <optgroup label="Beginers">
                            <option value="1">HTML</option>
                            <option value="2">CSS</option>
                            <option value="3">
                                JavaScript
                            </option>
                        </optgroup>
                        <optgroup label="Advance">
                            <option value="4">React</option>
                            <option value="5">Node</option>
                            <option value="6">
                                Express
                            </option>
                            <option value="t">
                                MongoDB
                            </option>
                        </optgroup>
                    </select>
                    <label htmlFor="about">About</label>
                    <textarea
                        name="about"
                        id="about"
                        cols="30"
                        rows="10"
                        onChange={(e) =>
                            setAbout(e.target.value)
                        }
                        placeholder="About your self"
                        required
                    ></textarea>
                    <button
                        type="reset"
                        value="reset"
                        onClick={() =>
                            handleReset()
                         }
                    >
                        Reset
                    </button>
                    <button
                        type="submit"
                        value="Submit"
                        onClick={(e) => 
                            handleSubmit()
                        }
                    >
                        Submit
                    </button>
                </form>
            </fieldset>
        </div>
    );
}

export default Page;

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<Page />);