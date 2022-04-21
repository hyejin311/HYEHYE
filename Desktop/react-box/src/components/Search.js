import { IoIosBody,IoIosUmbrella } from "react-icons/io";


function DropDown(){
    return(
            <ul>
                <li>애기이름</li>
                <li>예약자명</li>
                <li>날짜</li>
            </ul>
    )
}

function Search(){
    return(
        <div id="search">
        <p>
            <IoIosBody />
            <input type="text" placeholder="search" />
            <button type="button">정렬하기
            <IoIosUmbrella />
            </button>
            <DropDown />
        </p>
        </div>
    )
}

export default Search