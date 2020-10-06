import React, {useState} from 'react';

let Paginator = ({totalItemsQuantity, pageSize, currentPage, onPageChanged, portionSize = 10}) => {
    let pagesQuantity = Math.ceil(totalItemsQuantity / pageSize);
    let pages = [];
    for (let i=1; i<=pagesQuantity; i++) {
        pages.push(i);
    }
    let portionQuantity = Math.ceil(pagesQuantity / portionSize);
    let [portionNumber, setPortionNumber] = useState(1);
    let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;
    let rightPortionPageNumber = portionNumber + portionSize;

    return <div> 
        {portionNumber > 1 && 
        <button onClick={()=> {setPortionNumber(portionNumber - 1)}}>PREV</button> }

            {pages
                .filter(p => p >= leftPortionPageNumber && p < rightPortionPageNumber)
                .map((p) => {
                    return <span></span>
                })
                }
    </div>

}

