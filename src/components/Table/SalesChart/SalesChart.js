import React from 'react'
import './SalesChart.css'
import StickyNote2Icon from '@mui/icons-material/StickyNote2';
import ShowChartIcon from '@mui/icons-material/ShowChart';
import ShowChartOutlinedIcon from '@mui/icons-material/ShowChartOutlined';

const SalesChart = () => {
    return (
        <div className = "sales_chart_container">
            <div className = "sales_chart_box"><StickyNote2Icon  fontSize="large" /></div>
            <div className = "sales_chart_box"><ShowChartOutlinedIcon  fontSize="large" /></div>
        </div>
    )
}

export default SalesChart
