import React from 'react'
import DataTable from 'react-data-table-component'
import './searchresult.css'

export default function SearchResult({nextPage}) {
    const cnt = 5
    return <div className="searchResult">
        <div className="header">
            <div className="title">{cnt} Search results of </div>
            <div className="keyword">road traffic data</div>
        </div>
        <div className="tableBox" style={{width: '80%', top: '20%', left:'10%', position: 'relative'}}>
            <DataTable
                columns={columns}
                data={data}
                conditionalRowStyles={conditionalRowStyles}
                onRowClicked={(row, e) => onRowClicked(row, e, nextPage)}
                customStyles={customStyles} />
        </div>
    </div>
}

function onRowClicked(row, event, nextPage) {
    console.log(row)
    nextPage()
}

const columns = [
    {
        name: '데이터 공급업체',
        selector: row => row.company,
    },
    {
        name: '가격',
        selector: row => row.price,
    },
];

const data = [
    {
        id: 1,
        company: 'A사',
        price: '$ 1억원~',
    },
    {
        id: 2,
        company: 'P사',
        price: '$ 1000만원~',
    },
    {
        id: 3,
        company: 'P사',
        price: '$ 100만원~',
    },
    {
        id: 4,
        company: 'P사',
        price: '$ 10만원~',
    },
    {
        id: 5,
        company: 'P사',
        price: '$ 0원',
    },
]

const conditionalRowStyles = [
    {
      when: row => row.id % 2 === 0,
      style: {
        backgroundColor: '#eee',
        color: 'black',
        '&:hover': {
          cursor: 'pointer',
        },
      },
    },
    // You can also pass a callback to style for additional customization
    // {
    //   when: row => row.calories < 400,
    //   style: row => ({ backgroundColor: row.isSpecial ? 'pink' : 'inerit' }),
    // },
]

const customStyles = {
    rows: {
        style: {
            minHeight: '72px', // override the row height
            fontSize: '20px',
            padding: '10px',
        },
    },
    headCells: {
        style: {
            minHeight: '72px', // override the row height
            backgroundColor: '#eee',
            fontWeight: 800,
            paddingLeft: '8px', // override the cell padding for head cells
            paddingRight: '8px',
            fontSize: '20px',
            padding: '20px',
        },
    },
    cells: {
        style: {
            paddingLeft: '8px', // override the cell padding for data cells
            paddingRight: '8px',
        },
    },
}
