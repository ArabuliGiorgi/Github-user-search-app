import React, { useEffect, useState } from "react";
import { Search } from "../styled-components/DevFinderStyle";
import searchIcon from "/images/icon-search.svg"

const DevFinder: React.FC<{
    darkMode: string
}> = ({darkMode}) => {
    const [isFound, setIsFound] = useState(true);
    const [inputValue, setInputValue] = useState('');
    const [userInfo, setUserInfo] = useState({
        avatar_url: "",
        name: "",
        login: "",
        created_at: "",
        bio: "",
        public_repos: 0,
        followers: 0,
        following: 0,
        location: "",
        blog: "",
        twitter_username: "",
        company: ""
    });
    const [link, setLink] = useState('https://api.github.com/users/octocat');
    const fetchData = async (str: string) => {
        const response = await fetch(str);
        if(!response.ok){
            setIsFound(false);
            return userInfo;
        }
        setIsFound(true);
        const Data = response.json();
        return Data;
    }
    useEffect(() => {
        const obj = fetchData(link);
        obj.then((data) => {
            const date = new Date(data.created_at);
            data.created_at = date.getDate() + ' ' + date.toLocaleString('default', { month: 'short' }) + ' ' + date.getFullYear();
            setUserInfo(data);
        });
    }, [link]);
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setIsFound(true);
        if(e.target.value.endsWith(' '))
            return;
        const letters = 'qwertyuiopasdfghjklzxcvbnm';
        if(e.target.value !== '' && !letters.includes(e.target.value[e.target.value.length - 1].toLowerCase()))
            return;
        setInputValue(e.target.value);
    }
    const handleSubmit = () => {
        fetchData(`https://api.github.com/users/${inputValue}`);
        if(!isFound)
            return;
        setLink(`https://api.github.com/users/${inputValue}`);
    }

    return(
        <Search darkmode={darkMode}>
            <div className="search-bar">
                <div className="flex items-center">
                    <img src={searchIcon} alt="search icon" />
                    <input type="text" placeholder="Search GitHub username…" maxLength={39} value={inputValue} onChange={handleChange}/>
                    <button onClick={handleSubmit}><h1>Search</h1></button>
                </div>
                <h1 id="result-error" className={`${isFound ? 'hidden' : 'block'}`}>No Results</h1>
            </div>
            <div id="search-result">
                <img src={userInfo.avatar_url} alt="avatar" id="avatar" className={`${userInfo.name === '' ? 'hidden' : 'block'}`}/>
                <div className={`${userInfo.name === '' ? 'hidden' : 'block'} w-[100%]`}>
                    <div className="head-info">
                        <h1 id="name">{userInfo.name}</h1>
                        <h1 id="login">@{userInfo.login}</h1>
                        <h1 id="created-at">Joined {userInfo.created_at}</h1>
                    </div>
                    <h1 id="bio">{userInfo.bio === null ? 'This profile has no bio' : userInfo.bio}</h1>
                    <div className="stats">
                        <div className="stats-divs">
                            <h1 className="stats-fonts">Repos</h1>
                            <h1 className="stats-numbers">{userInfo.public_repos}</h1>
                        </div>
                        <div className="stats-divs">
                            <h1 className="stats-fonts">Followers</h1>
                            <h1 className="stats-numbers">{userInfo.followers}</h1>
                        </div>
                        <div className="stats-divs">
                            <h1 className="stats-fonts">Following</h1>
                            <h1 className="stats-numbers">{userInfo.following}</h1>
                        </div>
                    </div>
                    <div className="footer-info">
                        <div className={`footer-info-divs ${userInfo.location === null ? 'opacity-50' : 'opacity-100'}`}>
                            <svg height="20" width="14" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12.797 3.425C11.584 1.33 9.427.05 7.03.002a7.483 7.483 0 00-.308 0C4.325.05 2.17 1.33.955 3.425a6.963 6.963 0 00-.09 6.88l4.959 9.077.007.012c.218.38.609.606 1.045.606.437 0 .828-.226 1.046-.606l.007-.012 4.96-9.077a6.963 6.963 0 00-.092-6.88zm-5.92 5.638c-1.552 0-2.813-1.262-2.813-2.813s1.261-2.812 2.812-2.812S9.69 4.699 9.69 6.25 8.427 9.063 6.876 9.063z" 
                                fill={darkMode === "true" ? '#FFFFFF' : `#4b6a9b`}/>
                            </svg>
                            <h1 className={`ml-[6px] tablet:ml-[3px]`}>{userInfo.location === null ? 'Not Available' : userInfo.location}</h1>
                        </div>
                        <div className={`footer-info-divs ${userInfo.blog === "" ? 'opacity-50' : 'opacity-100'}`} id="blog-div">
                            <svg height="20" width="20" xmlns="http://www.w3.org/2000/svg">
                                <g fill={darkMode === "true" ? '#FFFFFF' : `#4b6a9b`}>
                                    <path d="M7.404 5.012c-2.355 2.437-1.841 6.482.857 8.273.089.06.207.048.283-.027.568-.555 1.049-1.093 1.47-1.776a.213.213 0 00-.084-.3A2.743 2.743 0 018.878 10.1a2.64 2.64 0 01-.223-1.803c.168-.815 1.043-1.573 1.711-2.274l-.004-.002 2.504-2.555a2.568 2.568 0 013.648-.019 2.6 2.6 0 01.037 3.666l-1.517 1.56a.266.266 0 00-.06.273c.35 1.012.435 2.44.201 3.519-.006.03.031.05.053.028l3.228-3.295c2.062-2.105 2.044-5.531-.04-7.615a5.416 5.416 0 00-7.691.04L7.417 4.998l-.013.014z"/>
                                    <path d="M13.439 13.75a.401.401 0 00.006-.003c.659-1.204.788-2.586.48-3.933l-.002.002-.001-.001a5.434 5.434 0 00-2.19-3.124.3.3 0 00-.333.015c-.553.448-1.095 1.021-1.452 1.754a.243.243 0 00.096.317c.415.24.79.593 1.04 1.061h.001c.196.33.388.958.263 1.632-.116.894-1.019 1.714-1.736 2.453-.546.559-1.935 1.974-2.49 2.542a2.6 2.6 0 01-3.666.037 2.6 2.6 0 01-.038-3.666l1.521-1.564A.266.266 0 005 11.004c-.338-1.036-.43-2.432-.217-3.51.006-.03-.031-.049-.053-.027l-3.179 3.245c-2.083 2.126-2.066 5.588.04 7.693 2.125 2.083 5.57 2.048 7.653-.078.723-.81 3.821-3.678 4.195-4.577z"/>
                                </g>
                            </svg>
                            <h1 className={`${userInfo.blog === "" ? '' : 'hover:underline'} tablet:ml-[-3px]`}>{userInfo.blog === "" ? 'Not Available' : 
                                <a href={userInfo.blog} target="_blank">{userInfo.blog}</a>
                            }</h1>
                        </div>
                        <div className={`footer-info-divs ${userInfo.twitter_username === null ? 'opacity-50' : 'opacity-100'}`}>
                            <svg height="18" width="20" xmlns="http://www.w3.org/2000/svg">
                                <path d="M20 2.799a8.549 8.549 0 01-2.363.647 4.077 4.077 0 001.804-2.266 8.194 8.194 0 01-2.6.993A4.099 4.099 0 009.75 4.977c0 .324.027.637.095.934-3.409-.166-6.425-1.8-8.452-4.288a4.128 4.128 0 00-.56 2.072c0 1.42.73 2.679 1.82 3.408A4.05 4.05 0 01.8 6.598v.045a4.119 4.119 0 003.285 4.028 4.092 4.092 0 01-1.075.135c-.263 0-.528-.015-.776-.07.531 1.624 2.038 2.818 3.831 2.857A8.239 8.239 0 01.981 15.34 7.68 7.68 0 010 15.285a11.543 11.543 0 006.29 1.84c7.545 0 11.67-6.25 11.67-11.667 0-.182-.006-.357-.015-.53A8.18 8.18 0 0020 2.798z" 
                                fill={darkMode === "true" ? '#FFFFFF' : `#4b6a9b`}/>
                            </svg>
                            <h1>{userInfo.twitter_username === null ? 'Not Available' : userInfo.twitter_username}</h1>
                        </div>
                        <div className={`footer-info-divs ${userInfo.company === null ? 'opacity-50' : 'opacity-100'}`}>
                            <svg height="20" width="20" xmlns="http://www.w3.org/2000/svg">
                                <g fill={darkMode === "true" ? '#FFFFFF' : `#4b6a9b`}>
                                    <path d="M10.858 1.558L1.7.167A1.477 1.477 0 00.517.492 1.49 1.49 0 000 1.608v17.559c0 .458.375.833.833.833h2.709v-4.375c0-.808.65-1.458 1.458-1.458h2.083c.809 0 1.459.65 1.459 1.458V20h3.541V3a1.46 1.46 0 00-1.225-1.442zM4.583 12.292h-1.25a.625.625 0 010-1.25h1.25a.625.625 0 010 1.25zm0-2.5h-1.25a.625.625 0 010-1.25h1.25a.625.625 0 010 1.25zm0-2.5h-1.25a.625.625 0 010-1.25h1.25a.625.625 0 010 1.25zm0-2.5h-1.25a.625.625 0 010-1.25h1.25a.625.625 0 010 1.25zm4.167 7.5H7.5a.625.625 0 010-1.25h1.25a.625.625 0 010 1.25zm0-2.5H7.5a.625.625 0 010-1.25h1.25a.625.625 0 010 1.25zm0-2.5H7.5a.625.625 0 010-1.25h1.25a.625.625 0 010 1.25zm0-2.5H7.5a.625.625 0 010-1.25h1.25a.625.625 0 010 1.25zM18.85 9.035l-5.933-1.242V20h5.625A1.46 1.46 0 0020 18.542V10.46c0-.688-.47-1.274-1.15-1.425zM16.875 17.5h-1.25a.625.625 0 010-1.25h1.25a.625.625 0 010 1.25zm0-2.5h-1.25a.625.625 0 010-1.25h1.25a.625.625 0 010 1.25zm0-2.5h-1.25a.625.625 0 010-1.25h1.25a.625.625 0 010 1.25z"/>
                                </g>
                            </svg>
                            <h1>{userInfo.company === null ? 'Not Available' : userInfo.company}</h1>
                        </div>
                    </div>
                </div>
            </div>
        </Search>
    )
}

export default DevFinder